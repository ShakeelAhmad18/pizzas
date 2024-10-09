import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchOrder from '../components/SearchOrder';
import Footer from '../components/Footer';

export default function Home() {
  document.title = 'Home';

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen font-serif py-5 bg-gradient-to-br from-green-200 via-green-300 to-teal-500">
        <div className="flex flex-col h-full items-center justify-center text-center text-white px-6 py-10 space-y-6">
          
          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
            WE COOK YOUR DESIRED PIZZA RECIPE
          </h1>
          
          {/* Description */}
          <p className="mb-6 text-lg md:text-xl text-white opacity-90 leading-relaxed">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          
          {/* Search Bar */}
          <div className="relative mb-6 w-full max-w-lg">
            <SearchOrder />
          </div>
          
          {/* Buttons */}
          <div className="flex space-x-4">
            <Link to='/menu?category=pizza'>
              <button className="bg-yellow-500 text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 hover:text-white transition duration-300 transform hover:scale-105">
                Order Now
              </button>
            </Link>
            {/* Uncomment to use the view menu button */}
            {/* <Link to='/menu?category=pizza'>
              <button className="bg-gray-800 bg-opacity-70 py-3 px-6 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
                View Menu
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
