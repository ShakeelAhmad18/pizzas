import React from "react";
import Spinner from '../components/Spinner';
import { format } from 'date-fns';

const OrderCard = ({ orders }) => {

  console.log(orders)


  if (!orders || orders.length === 0) return <Spinner />;
  return (
    <div className="grid grid-cols-1 py-11 px-16 max-h-[450px] overflow-y-auto">
      {orders.map((order) => (
        <div key={order._id} className="mb-8">
          <p className="text-gray-50 font-mono font-bold">
            <span className="text-yellow-600">Order Placed On: </span>
            {format(new Date(order.createdAt), 'EEE, MMM dd yyyy, p')}
          </p>
          <p className="text-green-600 text-xl font-serif">Order No: {order.orderNo}</p>
          {order.items && order.items.length > 0 ? (
            order.items.map((item) => (
              <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure>
                  <img
                    className="w-full lg:w-48 h-auto object-cover"
                    src={item.itemId.image.filePath}
                    alt={item.itemId.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.itemId?.name}</h2>
                  <p>Quantity: {item?.quantity}</p>
                  <p>Price per Item: ${item.itemId?.price}</p>
                  <p>Total: ${item?.itemtotalprice}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500">No items in this order</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
