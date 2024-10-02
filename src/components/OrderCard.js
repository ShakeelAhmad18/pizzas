import React from 'react'; 
import { format } from 'date-fns';
import Spinner from '../components/Spinner';

const OrderCard = ({ orders }) => {
  if (!orders || orders.length === 0) return <Spinner />;

  return (
    <div className="p-4 space-y-4 mb-4 table-container">
      {orders.map((order) => (
        <div key={order._id} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-700 font-bold text-center md:text-left">
              Order No: <span className="text-green-600">{order.orderNo}</span>
            </p>
            <p className="text-gray-600 font-bold font-serif text-center md:text-right">
              To Pay on Delivery: ${order.totalPrice}
            </p>
            <p className="text-gray-600 text-center md:text-right">
              {format(new Date(order.createdAt), 'EEE, MMM dd yyyy, p')}
            </p>
          </div>

          {/* Responsive Table */}
          {order.items && order.items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left table-auto">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="py-2 px-2 md:px-4">Image</th>
                    <th className="py-2 px-2 md:px-4">Name</th>
                    <th className="py-2 px-2 md:px-4">Quantity</th>
                    <th className="py-2 px-2 md:px-4">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item._id} className="border-b hover:bg-gray-100 transition duration-200 ease-in-out">
                      <td className="py-4 px-2 md:px-4">
                        <img
                          className="w-16 h-16 object-cover rounded"
                          src={item.itemId.image.filePath}
                          alt={item.itemId.name}
                        />
                      </td>
                      <td className="py-4 px-2 md:px-4 text-gray-900">{item.itemId?.name}</td>
                      <td className="py-4 px-2 md:px-4 text-gray-700">{item.quantity}</td>
                      <td className="py-4 px-2 md:px-4 text-gray-700">${item.itemtotalprice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-red-500">No items in this order.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
