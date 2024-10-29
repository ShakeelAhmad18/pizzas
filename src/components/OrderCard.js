import React from 'react'; 
import { format } from 'date-fns';
import Spinner from '../components/Spinner';
import OrderStatus from '../components/OrderStatus'
import {Link} from 'react-router-dom'

const OrderCard = ({ orders }) => {
  if (!orders || orders.length === 0) return <Spinner />;

   
  return (
    <tbody>
      <tr className="t_header">
      <th>Order No.</th>
      <th>Date</th>
      <th>Status</th>
      <th>Amount</th>
      <th>Action</th>
      </tr>
          {orders.map((item)=> ( <tr>
                <td>
                  <h5>{item.orderNo}</h5>
                </td>
                <td>
                  <p>{format(new Date(item.createdAt),'MMM dd yyyy,p')}</p>
                </td>
                 <OrderStatus createdAt={item.createdAt}/>
                <td>
                  <h5>${item.totalPrice}</h5>
                </td>
                <td><Link to={`/dashboard/trackorder/${item.orderNo}`}>View Details</Link></td>
          </tr> ))}
      </tbody>
  );
};

export default OrderCard;
