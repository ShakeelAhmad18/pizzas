import { calMinutesLeft, formatDate, formatCurrency } from '../utils/helpers';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OrderItems from '../pages/OrderItems';
import Spinner from '../components/Spinner';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import toast from 'react-hot-toast';

const TrackOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracking, setTracking] = useState([]);
  const [status, setStatus] = useState('Pending'); // Initial status is 'Pending'
  const { id: orderNo } = useParams();

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

  return (
    <>
      <Navbar />
      <div className="space-y-8 px-4 bg-slate-400 h-screen py-20 mb-14">
        <div className="flex items-center justify-between flex-wrap">
          <h2 className="text-xl font-semibold">Order # {orderNo}</h2>
          <div className="space-x-2">
            <span className="text-xs rounded-full bg-green-500 px-3 py-1 font-semibold tracking-wide uppercase text-red-50">
              {status}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 py-6 px-4 bg-stone-300">
          <p className="font-medium">
            {status === 'Pending'
              ? `Only ${minutesLeft > 0 ? minutesLeft : 0} minutes left`
              : 'Order has arrived'}
          </p>
          <p className="text-xs text-stone-500">
            (Estimated Delivery: {formatDate(new Date(new Date(createdAt).getTime() + 30 * 60 * 1000))}) {/* Add 30 minutes to createdAt */}
          </p>
        </div>

        <ul className="divide-y divide-stone-300 border-b border-t">
          {Array.isArray(tracking.items) && tracking.items.length > 0 ? (
            tracking.items.map((item) => <OrderItems item={item} key={item._id} />)
          ) : (
            <li>No items found for this order.</li>
          )}
        </ul>

        <div className="space-y-2 bg-stone-200 px-6 py-5">
          <p className="text-xs text-stone-500">
            Price Pizza: {formatCurrency(tracking?.totalPrice)}
          </p>
          <p className="font-bold">
            To pay on Delivery: {formatCurrency(tracking?.totalPrice)}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrackOrder;
