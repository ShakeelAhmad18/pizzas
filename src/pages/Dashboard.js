import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import useSignout from '../customHook/useSignout';
import Footer from '../components/Footer';
import { GrDeliver } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { getALLOrder } from '../redux/orderSlice';
import Navbar from '../components/Navbar'


export default function Sidebar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const [isOpen, setIsOpen] = useState(false);
  const { authUser } = useContext(UserContext);
  const { signout } = useSignout();
  const order = useSelector(getALLOrder);
  const totalOrders = order.length;

  return (
    <div>
      <Navbar/>
  <section className="page_breadcrumb" style={{background: 'url(images/counter_bg.jpg)'}}>
    <div className="breadcrumb_overlay">
      <div className="container">
        <div className="breadcrumb_text">
          <h1>user dashboard</h1>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link href="/dashboard">dashboard</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
    BREADCRUMB END
==============================*/}
  {/*=========================
    DASHBOARD START
==========================*/}
  <section className="dashboard mt_100 xs_mt_70 mb_100 xs_mb_70">
    <div className="container">
      <div className="dashboard_area">
        <div className="row">
          <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div className="dashboard_menu">
              <div className="dasboard_header">
                <div className="dasboard_header_img">
                  <img src={authUser.profilePic} alt="user" className="img-fluid w-100" />
                  <label htmlFor="upload"><i className="far fa-camera" /></label>
                  <input type="file" id="upload" hidden />
                </div>
                <h2>{authUser.name}</h2>
              </div>
              <ul>
                <li><Link className={`${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard"><span><i className="fas fa-user" /></span>
                    Parsonal Info</Link></li>
                <li>
                </li>
                <li><Link to="/dashboard/orders" className={`${location.pathname === '/dashboard/orders' ? 'active' : ''}`}><span><i className="fas fa-bags-shopping" /></span>
                    Orders</Link></li>
                <li><Link href=""><span><i className="far fa-heart" /></span>
                    wishlist</Link></li>
                <li><Link href=""><span><i className="fas fa-star" /></span> Reviews</Link>
                </li>
                <li><Link href=""><span><i className="fas fa-user-lock" /></span> Change Password</Link></li>
                <li><Link href=""><span> <i className="fas fa-sign-out-alt" /></span><button onClick={signout}>Logout</button></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 wow fadeInUp" data-wow-duration="1s">
           { isDashboard && <div className="dashboard_content">
              <div className="dashboard_body">
                <h3>Parsonal Information
                  <Link className="dash_add_new_address" href="">edit</Link>
                </h3>
                <div className="dash_personal_info">
                  <div className="personal_info_text">
                    <p><span>Name:</span>{authUser.name}</p>
                    <p><span>Email:</span>{authUser.email}</p>
                    <p><span>Phone:</span> 023 434 54354</p>
                    <p><span>Address:</span> 7232 Broadway Suite 308, Jackson Heights,
                      11372, NY, United States </p>
                  </div>
                </div>
              </div> 
            </div> }
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=========================
    DASHBOARD END 
==========================*/}
<Footer/>
</div>

  );
}
