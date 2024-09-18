import React from 'react';
import {useContext,useState,useEffect} from 'react'
import {UserContext} from '../context/UserContext'
import {format} from 'date-fns'
import {useSelector} from 'react-redux'
import { getorder } from '../redux/orderSlice';
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'

/*const order=[
  {
    "orderNo": "ORD-049127-R3YR",
    "_id": "66e29ad69499342104a03d94",
    "userId": "66c59fba6853d2d845ae307e",
    "items": [
      {
        "itemId": {
          "_id": "66c83940b8df0a42cd967101",
          "image": {
            "filePath": "https://res.cloudinary.com/dqf992hcs/image/upload/v1724397888/Menu%20Pizza/rerfkz1hhykxf1fg9voo.png"
          },
          "name": "Pepperoni Pizza"
        },
        "quantity": 3,
        "itemtotalprice": 300,
        "_id": "66e29ad69499342104a03d95"
      }
    ],
    "phone": "7647738",
    "address": "sailkot",
    "totalPrice": 400,
    "createdAt": "2024-09-12T07:40:06.707Z",
    "updatedAt": "2024-09-12T07:40:06.707Z",
    "__v": 0
  }
]*/

const Order = () => {
  
 const [orders,setOrder]=useState([])
 const order=useSelector(getorder)
 
 const {authUser}= useContext(UserContext)

 useEffect(()=>{

    if(order.length > 0){
      setOrder(order)
    }

 },[order]) 

 if(orders.length === 0) return <Spinner/> 

 const {totalPrice,phone,address,items,createdAt,orderNo}=orders[0];
 
 
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4 py-16">
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
                <span>{format(new Date(createdAt),'MM-dd-yyyy')}</span>
              </div>
              <div className="flex justify-between">
                <span>Order Number</span>
                <span>{orderNo}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method</span>
                <span>Mastercard</span>
              </div>
            </div>
            <div className="divider"></div>

            <div className="space-y-4">
             { items.map((item)=><div className="flex justify-between items-center" key={item.itemId._id}>
                <img src={item.itemId.image.filePath} alt="All In One Chocolate Combo" className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 mx-2">
                  <p className="font-semibold">{item.itemId.name}</p>
                  <p className="text-sm">Pack: Medium, Qty:{item.quantity}</p>
                </div>
                <p>${item.itemtotalprice}</p> 
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
    </>
  );
};

export default Order;
