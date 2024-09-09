import React from 'react';
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import {useSelector} from 'react-redux'
import { getorder } from '../redux/orderSlice';

const Order = () => {

 const order=useSelector(getorder)
 const {authUser}= useContext(UserContext)

 const {address,phone,totalPrice}=order;
 console.log(address,phone,totalPrice)

  console.log(order)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Thank you for your purchase!</h1>
        <p className="text-center mb-6">We will notify you by email once your order has been shipped.</p>

        <div className="md:flex justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Billing address</h2>
            <p><strong>Name:</strong>{authUser.name}</p>
            <p><strong>Address:</strong>{address}</p>
            <p><strong>Phone:</strong>{phone}</p>
            <p><strong>Email:</strong>{authUser.email}</p>
            <button className="btn btn-primary mt-4">Track Your Order</button>
          </div>

          <div className="bg-base-100 shadow rounded-lg p-4 md:w-2/5">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Date</span>
                <span>02 May 2023</span>
              </div>
              <div className="flex justify-between">
                <span>Order Number</span>
                <span>024-125478956</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method</span>
                <span>Mastercard</span>
              </div>
            </div>
            <div className="divider"></div>

            <div className="space-y-4">
             { order.map((item)=><div className="flex justify-between items-center">
                <img src="chocolate.png" alt="All In One Chocolate Combo" className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 mx-2">
                  <p className="font-semibold">All In One Chocolate Combo</p>
                  <p className="text-sm">Pack: Medium, Qty: 1</p>
                </div>
                <p>$50.00</p> 
              </div>) }

            </div>

            <div className="divider"></div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Order Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
