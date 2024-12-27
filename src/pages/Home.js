import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import SearchOrder from '../components/SearchOrder'
import {useEffect,useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { getMenu } from '../services/menuServices';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Spinner'


export default function Home() {
  const [pizzaMenu,setPizzaMenu]=useState([])

  const { data } = useQuery({
    queryKey: ['menu1'],
    queryFn: getMenu,
  });
  
  
  useEffect(()=>{
    if(data){
      setPizzaMenu(data);
    }
  },[data])




  useEffect(()=>{
    window.scrollTo(0,0);
   },[])

  document.title = 'Home';

  const handleTop=()=>{
    window.scrollTo(0,0)
  }


   
  const pizzas=pizzaMenu.filter((item)=>item.category === 'pizza')

  
  return (
    <div>
  <Navbar/>
  <section className="banner">
    <div className="banner_overlay">
      <span className="banner_shape_1">
        <img src="images/tree_5.png" alt="shape" className="img-fluid" />
      </span>
      <span className="banner_shape_2">
        <img src="images/tree_3.png" alt="shape" className="img-fluid" />
      </span>
      <span className="banner_shape_3">
        <img src="images/tree_4.png" alt="shape" className="img-fluid" />
      </span>
      <span className="banner_shape_4">
        <img src="images/tree_6.png" alt="shape" className="img-fluid" />
      </span>
      <span className="banner_shape_5">
        <img src="images/tree_7.png" alt="shape" className="img-fluid" />
      </span>
      <span className="banner_shape_6">
        <img src="images/tree_2.png" alt="shape" className="img-fluid" />
      </span>
      <div className="col-12">
        <div className="banner_slider" style={{background: 'url(images/banner_bg.jpg)'}}>
          <div className="banner_slider_overlay">
            <div className=" container">
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-6 col-md-10 col-lg-6">
                  <div className="banner_text wow fadeInLeft" data-wow-duration="1s">
                    <h3>Satisfy Your Cravings</h3>
                    <h1>Delicious Foods With Wonderful Eating</h1>
                    <p>Don’t Just Take Our Word for It – See Why Customers Love Pizza Delicious!</p>
                   <SearchOrder/>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-sm-10 col-md-9 col-lg-6">
                  <div className="banner_img wow fadeInRight" data-wow-duration="1s">
                    <div className="img">
                      <img src="images/slider_img_1.png" alt="food item" className="img-fluid" />
                      <span>
                        35% off
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="reservation mt-7">
  <div className="container">
    <div className="reservation_bg" style={{background: 'url(images/reservation_bg.jpg)'}}>
      <div className="row">
        <div className="col-xl-6 ms-auto">
          <div className="reservation_form wow fadeInRight" data-wow-duration="1s">
            <h2>book a table</h2>
            <div>
              <div className="row">
                <div style={{
                      textAlign: "center", 
                      padding: "20px", 
                       //backgroundColor: "#f8f9fa", 
                        borderRadius: "10px", 
                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                       maxWidth: "600px", 
                       margin: "30px auto", 
                       fontFamily: "'Poppins', sans-serif"
                  }}>
                  <h1 style={{
      color: "#0A0400", 
      fontSize: "2.5rem", 
      marginBottom: "15px"
  }}>
    Reserve Your Spot at Our Elegant Dining Tables
  </h1>
  <p style={{
      color: "#ffffff", 
      fontSize: "1.2rem", 
      lineHeight: "1.8", 
      margin: "0 10px"
  }}>
    Experience the perfect blend of comfort and sophistication with our luxurious dining tables, thoughtfully designed to elevate your moments. Whether you're planning an intimate dinner, a joyous celebration, or a casual outing.
  </p>
                </div>
                <div className="col-xl-12">
                 <Link to='/table'> <button type="submit" style={{backgroundColor:'#09052e'}} className="common_btn">Book Luxurious Table</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="menu menu_page mt_100 xs_mt_70 mb_100 xs_mb_70">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
        <div className="section_heading mb_25">
          <h4>food Menu</h4>
          <h2>Popular Delicious Foods</h2>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
      <div className="menu_filter d-flex flex-wrap">
        <Link
          to="/menu?category=pizza"
          className="bg-red-500 text-white font-semibold rounded-full py-2 px-4 inline-flex items-center space-x-2 transition-transform transform hover:scale-105 hover:bg-red-600 shadow-lg"
        >
          <span className='font-serif'>Explore more...</span>
          <span className="arrow-icon transition-transform duration-300 transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
    </div>
    {pizzas.length === 0 && <Loader />}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" data-wow-duration="1s">
      {pizzas.map((item) => (
        <div key={item._id} className="menu_item">
          <div className="menu_item_img">
            <img src={item.image.filePath} alt={item.name} className="img-fluid w-100" />
          </div>
          <div className="menu_item_text">
            <Link className="category" to={`/menu_detail/${item._id}`}>{item.category}</Link>
            <a className="title" href="menu_details.html">{item.name}</a>
            <p className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
              <span>24</span>
            </p>
            <h5 className="price">${item.price}.00 <del>$90.00</del></h5>
            <Link className="add_to_cart" to={`/menu_detail/${item._id}`}>add
              to cart</Link>
            <ul className="d-flex flex-wrap justify-content-end">
              <li><Link to={`/menu_detail/${item._id}`}><i className="far fa-eye" /></Link></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="counter_part text-white" style={{background: 'url(images/counter_bg.jpg)'}}>
  <div className="counter_overlay pt_120 xs_pt_90 pb_100 xs_pb_0">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_counter">
            <div className="text">
              <h2 className="counter">85,000</h2>
              <span><i className="fas fa-user" /></span>
            </div>
            <p className='text-white'>customer serve</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_counter">
            <div className="text">
              <h2 className="counter">120</h2>
              <span><i className="fas fa-hat-chef" /></span>
            </div>
            <p className='text-white'>experience chef</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_counter">
            <div className="text">
              <h2 className="counter">72,000</h2>
              <span><i className="fas fa-users" /></span>
            </div>
            <p className='text-white'>happy customer</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_counter">
            <div className="text">
              <h2 className="counter">30</h2>
              <span><i className="fas fa-trophy" /></span>
            </div>
            <p className='text-white'>winning award</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 <Footer/>
  <div className="scroll_btn" onClick={handleTop}><i className="fas fa-hand-pointer"  /></div>
</div>

  );
}
