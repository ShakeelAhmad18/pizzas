import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import {Link} from 'react-router-dom'
import SearchOrder from '../components/SearchOrder'
import {useEffect} from 'react'

export default function Home() {

  useEffect(()=>{
    window.scrollTo(0,0);
   },[])

  document.title = 'Home';

  const handleTop=()=>{
    window.scrollTo(0,0)
  }

 
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
  <section className="reservation mt-7 mb-7">
  <div className="container">
    <div className="reservation_bg" style={{background: 'url(images/reservation_bg.jpg)'}}>
      <div className="row">
        <div className="col-xl-6 ms-auto">
          <div className="reservation_form wow fadeInRight" data-wow-duration="1s">
            <h2>book a table</h2>
            <form>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" placeholder="Name" className='w-full h-10 p-3' />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" placeholder="Email" className='w-full h-10 p-3'/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="phone">phone</label>
                    <input type="text" id="phone" placeholder="Phone" className='w-full h-10 p-3' />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="date">select date</label>
                    <input type="date" id="date" className='w-full h-10 p-3' />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label>select time</label>
                    <select className="w-full h-10 rounded-sm">
                      <option value>select</option>
                      <option value>08.00 am to 09.00 am</option>
                      <option value>10.00 am to 11.00 am</option>
                      <option value>12.00 pm to 01.00 pm</option>
                      <option value>02.00 pm to 03.00 pm</option>
                      <option value>04.00 pm to 05.00 pm</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label>select person</label>
                    <select className="w-full h-10 rounded-sm">
                      <option value>select</option>
                      <option value>1 person</option>
                      <option value>2 person</option>
                      <option value>3 person</option>
                      <option value>4 person</option>
                      <option value>5 person</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-12">
                  <button type="submit" className="common_btn">confirm</button>
                </div>
              </div>
            </form>
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
