import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchOrder from '../components/SearchOrder'

export default function Home() {
  document.title = 'Home';

  return (
    <>
    <Navbar/>
   <div className="bg-cover bg-center h-screen font-serif py-5 bg-green-200">
   <div className="flex flex-col h-full items-center justify-center text-center text-white px-6 py-10">

     <h1 className="text-3xl font-bold mb-4 text-teal-700">WE COOKED YOUR DESIRED PIZZA RECIPE</h1>
     <p className="mb-6 text-sm text-teal-700">
       A small river named Duden flows by their place and supplies it with the necessary regelialia.
     </p>
     <div className='relative mb-6 w-full'>
        <SearchOrder/>
      </div>
     <div className="flex space-x-4">
      <Link to='/menu?category=pizza'> <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:text-white hover:bg-green-600">Order Now</button> </Link>
      {/*<Link to='/menu?category=pizza'> <button className="bg-gray-800 bg-opacity-70 py-2 px-4 rounded text-white  hover:bg-green-600">View Menu</button> </Link>*/}
     </div>
   </div>
 </div>
 </>
  );
}
