import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling navigation

const Manunav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">Star Luxurious Restaurant</div>
        <div className="hidden lg:flex gap-6">
          <Link to="overview" smooth={true} duration={500} className="text-gray-800 hover:text-red-500">Overview</Link>
          <Link to="menu" smooth={true} duration={500} className="text-gray-800 hover:text-red-500">Menu</Link>
          <Link to="photos" smooth={true} duration={500} className="text-gray-800 hover:text-red-500">Photos</Link>
          <Link to="dishes" smooth={true} duration={500} className="text-gray-800 hover:text-red-500">Dishes</Link>
          <Link to="reviews" smooth={true} duration={500} className="text-gray-800 hover:text-red-500">Reviews</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button onClick={toggleMenu} className="lg:hidden flex items-center">
          <span className="text-2xl text-gray-800">{menuOpen ? '✖' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-white p-4`}>
        <Link to="overview" smooth={true} duration={500} className="block py-2 text-gray-800 hover:text-red-500">Overview</Link>
        <Link to="menu" smooth={true} duration={500} className="block py-2 text-gray-800 hover:text-red-500">Menu</Link>
        <Link to="photos" smooth={true} duration={500} className="block py-2 text-gray-800 hover:text-red-500">Photos</Link>
        <Link to="dishes" smooth={true} duration={500} className="block py-2 text-gray-800 hover:text-red-500">Dishes</Link>
        <Link to="reviews" smooth={true} duration={500} className="block py-2 text-gray-800 hover:text-red-500">Reviews</Link>
      </div>
    </nav>
  );
};

export default Manunav;
