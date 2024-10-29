import {useState,useEffect} from 'react'
import { calMinutesLeft } from '../utils/helpers';

const OrderStatus=({createdAt})=>{

    const [status, setStatus] = useState('Pending');

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
  }, [createdAt]);

   

    return (
       <td>
         <span className={`${status === 'Pending' ? 'active' : '' || status === 'Completed' ? 'complete' : ''} `}>{status}</span>
       </td>
    )
}

export default OrderStatus;