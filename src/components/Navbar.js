import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from '../redux/cartSlice';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'

export default function Navbar() {
  const getcart = useSelector(getCart);

  const [isScrolled, setIsScrolled] = useState(false);

  const Active=useLocation();
  let isActive=Active.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={`topbar ${isScrolled ? 'hidden' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-6 col-md-8">
              <ul className="topbar_info d-flex flex-wrap d-none d-sm-flex">
                <li><a href="mailto:example@gmail.com"><i className="fas fa-envelope" /> shakeelsoftwaredev@gmail.com</a></li>
                <li className="d-none d-md-block"><a href="callto:123456789"><i className="fas fa-phone-alt" /> +923136900591</a></li>
              </ul>
            </div>
            <div className="col-xl-6 col-sm-6 col-md-4">
              <ul className="topbar_icon d-flex flex-wrap">
                <li><a href="/"><i className="fab fa-facebook-f" /></a> </li>
                <li><a href="/"><i className="fab fa-twitter" /></a> </li>
                <li><a href="/"><i className="fab fa-linkedin-in" /></a> </li>
                <li><a href="/"><i className="fab fa-behance" /></a> </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav className={`navbar navbar-expand-lg main_menu ${isScrolled ? 'navbar-scrolled-up' : ''}`}>
        <div className="container">
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
    className="ml-3 pt-1 hidden md:block font-serif text-3xl text-gray-800 hover:text-green-800 transition duration-300 ease-in-out"
  >
    Delicious
  </span>
</Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="far fa-bars menu_icon_bar" />
            <i className="far fa-times close_icon_close" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === '/menu' ? 'active' : ''}`} to="/menu?category=pizza">Menu</Link>
              </li>
      
              <li className="nav-item">
                <Link className={`nav-link ${isActive === '/table' ? 'active' : ''}`} to="/table">Book Table</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === '/dashboard' ? 'active' : '' || isActive === '/dashboard/orders' ? 'active' : '' || isActive === '/dashboard/trackorder' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === '/services' ? 'active' : ''}`} to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className="menu_icon d-flex flex-wrap">
              <li>
                <Link className="cart_icon" to="/cart"><i className="fas fa-shopping-basket" />
                  <span>{getcart.length}</span></Link>
              </li>
              <li>
                <Link to="/dashboard"><i className="fas fa-user" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
