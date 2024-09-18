import { calMinutesLeft, formatDate, formatCurrency } from '../utils/helpers';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OrderItems from '../pages/OrderItems';
import Spinner from '../components/Spinner';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const TrackOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracking, setTracking] = useState(null);
  const [status, setStatus] = useState('Pending');
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

  //calculate minleft
  useEffect(() => {
    if (tracking?.createdAt) {
      const intervalId = setInterval(() => {
        const minutesLeft = calMinutesLeft(tracking.createdAt);
        const minutesPassed = 30 - minutesLeft; // Minutes since the order was placed
  
        console.log('Minutes Left:', minutesLeft); // Debugging output
        console.log('Minutes Passed:', minutesPassed); // Debugging output
  
        // Check if 30 minutes have passed
        if (minutesPassed >= 30 || minutesLeft <= 0) {
          setStatus('Completed');
          clearInterval(intervalId); // Stop checking once it's completed
        }
      }, 1000 * 60); // Check every minute
  
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [tracking]);
  
  

  if (isLoading) return <Spinner />;

  if (!tracking) return <p>No tracking data found for this order.</p>;

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
              ? `Only ${Math.max(30 - Math.round(calMinutesLeft(tracking?.createdAt)), 0)} minutes left`
              : 'Order has arrived'}
          </p>
          <p className="text-xs text-stone-500">
            (Estimated Delivery: {formatDate(tracking?.createdAt)})
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
    </>
  );
};

export default TrackOrder;
