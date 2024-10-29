import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const EmptyCart = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-purple-700 to-orange-400 flex flex-col items-center justify-center px-4 mt-10">
        
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-6 shadow-lg">
          {/* Add a more attractive, professional image or illustration here */}
          <img 
            src="/empty.png" // Replace with a professional illustration
            alt="Empty Cart"
            className="w-full h-full object-contain rounded-lg"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 rounded-lg">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-44 text-center drop-shadow-lg">
              Oops! Your Cart is Empty
            </h1>
            
           
            
            {/* Back to Menu Button */}
            <Link 
              to="/menu?category=pizza" 
              className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 md:px-8 md:py-4 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out">
              &larr; Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
