import React from 'react';
import Navbar from '../components/Navbar';
import './Services.css'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Services() {
    document.title = 'Services';

    return (
        <>
            <Navbar />
            <div>
                <section className="page_breadcrumb" style={{background: 'url(images/breadcrumb_bg.jpg)'}}>
                    <div className="breadcrumb_overlay">
                        <div className="container">
                            <div className="breadcrumb_text">
                                <h1>Our Services</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link>Our Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about_us mt_100 xs_mt_70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                                <div className="about_us_img">
                                    <div className="img">
                                        <img src="images/about_chef.png" alt="about us" className="img-fluid w-100" />
                                    </div>
                                    <h3>12+ <span>Years of Experience</span></h3>
                                    <p>Bringing Flavor and Joy with Every Order!</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration="1s">
                                <div className="section_heading mb_25">
                                    <h4>About Company</h4>
                                    <h2>Your One-Stop for Cravings</h2>
                                </div>
                                <div className="about_us_text">
                                    <p>We believe great food should be quick, fresh, and satisfying. Our menu offers everything from sizzling pizzas to refreshing drinks – all prepared with the finest ingredients.</p>
                                    <ul>
                                        <li>
                                            <h4>Trusted Partner in Taste</h4>
                                            <p>With over 85,000 happy customers, we’re committed to bringing you an exceptional dining experience every time!</p>
                                        </li>
                                        <li>
                                            <h4>First Delivery, Every Time</h4>
                                            <p>Order with confidence – our team ensures fast and reliable delivery right to your door!</p>
                                        </li>
                                        <li>
                                            <h4>Secure Payment</h4>
                                            <p>Enjoy a seamless, secure payment process so you can focus on what matters most – delicious food!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about_choose mt_100 xs_mt_70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7 wow fadeInLeft mb-8" data-wow-duration="1s">
                                <div className="section_heading mb_25">
                                    <h4>Why Choose Us?</h4>
                                    <h2>We're the Best for a Reason</h2>
                                </div>
                                <div className="about_choose_text">
                                    <p>Our customers love us for a reason! We combine quality ingredients, skilled chefs, and excellent service to bring you the best meals around.</p>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="about_choose_text_box">
                                                <span><i className="fas fa-burger-soda" /></span>
                                                <h4>Fresh Food</h4>
                                                <p>Enjoy every bite made from the finest, freshest ingredients!</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="about_choose_text_box">
                                                <span><i className="fal fa-truck" /></span>
                                                <h4>Fast Delivery</h4>
                                                <p>Get your order hot and fresh, delivered straight to you in minutes!</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="about_choose_text_box">
                                                <span><i className="fas fa-file-certificate" /></span>
                                                <h4>Quality Maintained</h4>
                                                <p>We never compromise on quality – your satisfaction is our priority!</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="about_choose_text_box">
                                                <span><i className="fas fa-headset" /></span>
                                                <h4>24/7 Service</h4>
                                                <p>Need something? Our team is here for you, anytime, every day!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-5 wow fadeInRight" data-wow-duration="1s">
                                <div className="about_choose_img">
                                    <img src="images/why_choose_img.jpg" alt="about us" className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        </>
    );
}
