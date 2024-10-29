import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  
    <footer style={{background: 'url(images/footer_bg.jpg)'}}>
    <div className="footer_overlay pt_100 xs_pt_70 pb_100 xs_pb_20">
      <div className="container wow fadeInUp" data-wow-duration="1s">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-4 col-sm-9 col-md-7">
            <div className="footer_content">
            <Link 
            className="w-16 h-16 rounded-full flex items-center justify-center hover:opacity-90 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-110" 
            to="/"
          >
            <img 
              src="/logo.png" 
              alt="Pizza Delicious Logo" 
              className="w-10 h-12 rounded-full"
            />
            <span 
              className="ml-3 pt-1 hidden sm:block font-serif text-3xl text-gray-800 hover:text-green-800 transition duration-300 ease-in-out"
            >
              Delicious
            </span>
          </Link>
              <span>Whether it's a crispy sandwich, hearty rice bowl, or a classic slice of pizza, we craft every bite to make you fall in love with flavor.</span>
              <ul className="social_link d-flex flex-wrap">
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-behance" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-2 col-sm-5 col-md-5">
            <div className="footer_content">
              <h3>Short Link</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/sevices">Our Services</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-2 col-sm-6 col-md-5 order-md-4">
            <div className="footer_content">
              <h3>Help Link</h3>
              <ul>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-9 col-md-7 order-lg-4">
            <div className="footer_content">
              <h3>contact us</h3>
              <p className="info"><i className="fas fa-phone-alt" /> +92 336473885</p>
              <p className="info"><i className="fas fa-envelope" />shakeelsoftwaredev@gmail.com</p>
              <p className="info"><i className="far fa-map-marker-alt" />Boy's Hostel University of Education Lahore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bottom d-flex flex-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer_bottom_text">
              <p>Copyright ©<b> Pizza Delicious</b> {new Date().getFullYear()}. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
   
  )
}

