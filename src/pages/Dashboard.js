import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import {
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import useSignout from '../customHook/useSignout';
import Footer from '../components/Footer'
import { GrDeliver } from "react-icons/gr";



export default function Sidebar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const [isOpen, setIsOpen] = useState(false);
  const { authUser } = useContext(UserContext);
  const { signout } = useSignout();

  return (
    <>
    <div className="flex h-screen bg-slate-900">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0 w-64" : "w-20"
        } fixed inset-y-0 left-0 z-30 bg-green-500 text-white transition-all duration-300 ease-in-out flex flex-col`}>
        
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center mt-4">
          <Link to="/" className="flex flex-col items-center">
            <img 
              src="/logo.png" 
              alt="logo" 
              className={`rounded-full transition-all duration-300 ${isOpen ? 'w-20 h-20' : 'w-10 h-10'}`} 
            />
            {isOpen && <span className="text-lg font-bold mt-2">Dashboard</span>}
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 p-4 mt-10">
          <li>
            <Link to="/dashboard" className="btn btn-ghost text-left text-xl flex items-center">
              <HomeIcon className='h-5 w-5 text-primary-600' />
              {isOpen && <span className="ml-2">Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders" className="btn btn-ghost text-left text-xl flex items-center">
              <CiDeliveryTruck className='h-5 w-5' />
              {isOpen && <span className="ml-2">Order</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="btn btn-ghost text-left text-xl flex items-center">
              <UserIcon className='h-5 w-5 text-primary-600' />
              {isOpen && <span className="ml-2">Profile</span>}
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="p-4 mt-auto">
          <button className="btn btn-ghost text-left text-xl flex items-center" onClick={signout}>
            <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
            {isOpen && <span className="ml-2">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        {/* Main Content Area */}
        <div>
          {isDashboard && (
            <div className="flex flex-col">
            <h1 className="flex text-2xl font-bold text-white items-start font-serif mt-28 ml-24">
              👏 Welcome! {authUser.name}
            </h1>
            <div className="py-9 px-9 text-white font-bold bg-orange-400 w-40 mt-16 items-center ml-24">
              <span className=" flex items-center justify-center h-12 rounded-xl font-bold bg-orange-300"><GrDeliver/></span>
              Total Orders:{6}
            </div>
            </div>
          )}
          <Outlet />
        </div>
      </div>
     
    </div>
    <Footer/>
    </>
  );
}
