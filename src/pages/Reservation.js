import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Reservation = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-11 justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
        {/* Card Container */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          {/* Green Circle with White Tick */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
          {/* Thank You Message */}
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Reservation Created Successfully!
          </h1>
          <p className="text-gray-700 mb-6">
            "Thank you for trusting us with your reservation! Your satisfaction
            is our greatest reward."
          </p>
          {/* Manage Reservation Button */}
          <Link to="/dashboard">
            <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300 shadow-md">
              Manage Reservation
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reservation;
