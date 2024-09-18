import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getCart,getTotalPrice} from '../redux/cartSlice'
import useSignout from '../customHook/useSignout'

export default function Navbar() {

 const getcart= useSelector(getCart)
 const totalPrice=useSelector(getTotalPrice)
 const {signout}=useSignout()


  return (
    <div className="navbar bg-green-500 text-white fixed top-0 left-0">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <span><img src="/logo.png" className="w-10 rounded-full h-10" alt="Logo" /></span>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex items-center justify-between gap-3 ml-4">
            <li>
              <Link to="/" className="btn btn-ghost text-xl">Home</Link>
            </li>
            <li>
              <Link to="/menu?category=pizza" className="btn btn-ghost text-xl">Menu</Link>
            </li>
            <li>
              <Link to="/services" className="btn btn-ghost text-xl">Services</Link>
            </li>
            <li>
              <Link to="/dashboard" className="btn btn-ghost text-xl">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">{getcart.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold text-slate-800">{getcart.length} Items</span>
              <span className="text-info">Subtotal: ${totalPrice}</span>
              <div className="card-actions">
               <Link to='/cart'> <button className="btn flex justify-center btn-primary btn-block items-center">View cart</button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/dashboard/profile" className="justify-between text-slate-900">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><button className="text-slate-900 cursor-pointer" onClick={signout}>Logout</button></li>
          </ul>
        </div>
      </div>
      <div className="md:hidden dropdown dropdown-end">
        <div tabIndex={0} className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/" className="text-slate-900">Home</Link></li>
          <li><Link to="/menu" className="text-slate-900">Menu</Link></li>
          <li><Link to="/dashboard" className="text-slate-900">Dashboard</Link></li>
          
        </ul>
      </div>
    </div>
  );
}
