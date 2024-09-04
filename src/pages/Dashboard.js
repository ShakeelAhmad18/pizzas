import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import {UserContext} from '../context/UserContext'
import {
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const {authUser}=useContext(UserContext)

  return (
    
    <div className="flex h-screen bg-slate-900 justify-center">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-30 w-64 transform bg-green-500 text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <div className="flex items-center justify-between p-4 md:hidden">
          <Link to="/" className="text-xl font-bold">
            Dashboard
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 mt-10">
          <li>
            <Link to='/'> <div className="flex items-center justify-center mb-4"><img src='/logo.png' alt="logo" className="rounded-full w-20 h-20"/> </div></Link>
          </li>
          <li>
            <Link to="/dashboard" className="btn btn-ghost text-left text-xl">{<HomeIcon className='h-5 w-5 text-primary-600'/>} Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="btn btn-ghost text-left text-xl">{<CiDeliveryTruck/>} Order</Link>
          </li>
          <li>
            <Link to="/profile" className="btn btn-ghost text-left text-xl">{<UserIcon className='h-5 w-5 text-primary-600'/>} Profile</Link>
          </li>
          <li>
            <Link to="/logout" className="btn btn-ghost text-left text-xl">{<ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600'/>} Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Your main content goes here */}
        <div>
          <h1 className="flex text-2xl font-bold text-white items-start font-serif mt-28">👏 WellCome! {authUser.name} </h1>
          {/* Add more dashboard content below */}
        </div>
      </div>
    </div>
  );
}
