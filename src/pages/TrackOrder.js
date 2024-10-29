import { calMinutesLeft, formatDate, formatCurrency } from '../utils/helpers';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//import OrderItems from '../pages/OrderItems';
import Spinner from '../components/Spinner';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom'

const TrackOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracking, setTracking] = useState([]);
  const [status, setStatus] = useState('Pending'); // Initial status is 'Pending'
  const { id: orderNo } = useParams();

  useEffect(()=>{
    window.scrollTo(0,0);
   },[])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post('http://localhost:8000/api/order/trackorder', { orderNo });
        const data = res.data;
        setTracking(data);
      } catch (error) {
        toast.error('Failed to load order tracking');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [orderNo]);

  const { createdAt } = tracking;

  // Immediate status check on component load
  useEffect(() => {
    if (createdAt) {
      const minutesLeft = calMinutesLeft(createdAt); // Calculate minutes left immediately

      if (minutesLeft <= 0) {
        setStatus('Completed'); // If 30 minutes have passed, set status to 'Completed' immediately
      } else {
        setStatus('Pending'); // Otherwise, status remains 'Pending'
      }

      // Set an interval to keep updating the status every minute
      const intervalId = setInterval(() => {
        const updatedMinutesLeft = calMinutesLeft(createdAt); // Recalculate minutes left every minute

        // Update status to 'Completed' when time is up
        if (updatedMinutesLeft <= 0) {
          setStatus('Completed');
          clearInterval(intervalId); // Stop the interval once status is 'Completed'
        }
      }, 1000 * 60); // Check every minute

      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [createdAt]); // This will run whenever `createdAt` changes (i.e., when tracking data is loaded)

  if (tracking.length === 0) {
    return <p>Order Not Found</p>;
  }

  if (isLoading) return <Spinner />;

  const minutesLeft = calMinutesLeft(createdAt); // Calculate minutes left for display

  const {items}=tracking


  return (
    <div className="col-xl-9 col-lg-8 wow fadeInUp w-full h-[550px] overflow-y-auto" data-wow-duration="1s">
  <div className="dashboard_content">
    <div className="dashboard_body">
      <h3>invoice</h3>
      <div className="invoice">
        <Link className="go_back" to="/dashboard/orders"><i className="fas fa-long-arrow-alt-left" /> go back</Link>
        <div className="track_order">
          <ul>
            <li className={`${status === 'Pending' ? 'active' : '' || status === 'Completed' ? 'active' : ''}`}>order pending</li>
            <li className={`${status === 'Completed' ? 'active' : ''}`}>order accept</li>
            <li className={`${status === 'Completed' ? 'active' : ''}`}>order process</li>
            <li className={`${status === 'Completed' ? 'active' : ''}`}>on the way</li>
            <li className={`${status === 'Completed' ? 'active' : ''}`}>Completed</li>
          </ul>
        </div>
        <div className="invoice_header">
          <div className="header_address">
            <h4>invoice to</h4>
            <p>{tracking.address}</p>
            <p>{tracking.phone}</p>
          </div>
          <div className="header_address">
            <p><b>Status: </b><span>{status}</span></p>
            <p><b>Order ID:</b> <span>{tracking.orderNo}</span></p>
            <p><b>date:</b> <span>{formatDate(createdAt)}</span></p>
          </div>
        </div>
        <div className="invoice_body">
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr className="border_none">
                  <th className="sl_no">SL</th>
                  <th className="package">item description</th>
                  <th className="price">Price</th>
                  <th className="qnty">Quantity</th>
                  <th className="total">Total</th>
                </tr>
                {items.map((item,index)=>(<tr key={index}>
                  <td className="sl_no">0{index + 1}</td>
                  <td className="package">
                    <p>{item.itemId.name}</p>
                    <span className="size">{item.size}</span>
                    <span className="coca_cola">{item.flavour}</span>
                  </td>
                  <td className="price">
                    <b>${item.itemtotalprice}</b>
                  </td>
                  <td className="qnty">
                    <b>{item.quantity}</b>
                  </td>
                  <td className="total">
                    <b>${item.quantity * item.itemtotalprice}</b>
                  </td>
                </tr>))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="package" colSpan={3}>
                    <b>sub total</b>
                  </td>
                  <td className="qnty">
                    <b>-</b>
                  </td>
                  <td className="total">
                    <b>${tracking.totalPrice}</b>
                  </td>
                </tr>
                <tr>
                  <td className="package coast" colSpan={3}>
                    <b>(+) Shipping Cost</b>
                  </td>
                  <td className="qnty">
                    <b />
                  </td>
                  <td className="total coast">
                    <b>$00.00</b>
                  </td>
                </tr>
                <tr>
                  <td className="package" colSpan={3}>
                    <b>Total Paid</b>
                  </td>
                  <td className="qnty">
                    <b />
                  </td>
                  <td className="total">
                    <b>${tracking.totalPrice}</b>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <a className="print_btn common_btn" href="#"><i className="far fa-print" /> print
          PDF</a>
      </div>
    </div>
  </div>
</div>

  );
};

export default TrackOrder;
