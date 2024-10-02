import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { getCart, getTotalPrice } from '../redux/cartSlice';
import EmptyCart from '../components/EmptyCart';
import Cartitem from '../components/Cartitem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(getCart);

  const totalPrice=useSelector(getTotalPrice);

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Navbar />
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 text-center items-center mt-9">Your Basket</h1>
      <div className="container flex mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            {cart.map((item) => <Cartitem item={item} key={item.pizzaId} />)}
          </div>
          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* Checkout Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-center">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${totalPrice}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Delivery:</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg lg:text-xl font-semibold">Total:</span>
                <span className="text-lg lg:text-xl font-bold">${totalPrice}</span>
              </div>
            <Link to='/createorder'>  <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
                Checkout
              </button> </Link>
            </div>
            {/* Additional Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg lg:text-xl font-semibold mb-4 text-center">Delivery Information</h2>
              <p className="text-gray-600 text-sm lg:text-base">Standard Delivery in 30 min.</p>
              <p className="text-gray-600 text-sm lg:text-base mt-2">
                Need it faster? You can upgrade to Next Day Delivery during Checkout for Next Working Day delivery (Order before 10pm).
              </p>
              <p className="text-gray-600 text-sm lg:text-base mt-2">
                FREE Delivery with in 3km
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
