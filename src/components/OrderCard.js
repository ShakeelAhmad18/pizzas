import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="grid grid-cols-1 py-11 px-16">
      {order.items.map((item) => (
        <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl mt-4">
          <figure>
            <img
              className="w-full lg:w-48 h-auto object-cover"
              src={item.itemId.image.filePath}
              alt={item.itemId.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.itemId.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price per Item: ${item.itemId.price}</p>
            <p>Total: ${item.itemtotalprice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
