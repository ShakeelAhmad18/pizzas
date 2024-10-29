import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSign from '../customHook/useSign'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'

const Login = () => {
   const {isLoading,login}=useSign()

  const [input,setInput]=useState({
    email:'',
    password:''
  })

  {/* const loginWithGoogle=(e)=>{
    e.preventDefault()
    window.open('http://localhost:8000/api/auth/callback/google','_self')
  } */}

  console.log(input.password)

  const handleSubmit=async (e)=>{
     e.preventDefault()
     login(input)
     setInput({
      email: '',
      password: ''
    });
  }
  
  
  return (
   
   <div>
  <section className="topbar">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-sm-6 col-md-8">
          <ul className="topbar_info d-flex flex-wrap d-none d-sm-flex">
            <li><a href="mailto:example@gmail.com"><i className="fas fa-envelope" /> shakeelsoftwaredev@gmail.com</a>
            </li>
            <li className="d-none d-md-block"><a href="callto:123456789"><i className="fas fa-phone-alt" />
                +923136900591</a></li>
          </ul>
        </div>
        <div className="col-xl-6 col-sm-6 col-md-4">
          <ul className="topbar_icon d-flex flex-wrap">
            <li><a href="#"><i className="fab fa-facebook-f" /></a> </li>
            <li><a href="#"><i className="fab fa-twitter" /></a> </li>
            <li><a href="#"><i className="fab fa-linkedin-in" /></a> </li>
            <li><a href="#"><i className="fab fa-behance" /></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
    TOPBAR END
==============================*/}
  {/*=============================
    MENU START
==============================*/}
  <nav className="navbar navbar-expand-lg main_menu">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src="images/logo.png" alt="Pizza Delicious" className="img-fluid" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="far fa-bars menu_icon_bar" />
        <i className="far fa-times close_icon_close" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*=============================
    MENU END
==============================*/}
  {/*=============================
    BREADCRUMB START
==============================*/}
  <section className="page_breadcrumb" style={{background: 'url(images/counter_bg.jpg)'}}>
    <div className="breadcrumb_overlay">
      <div className="container">
        <div className="breadcrumb_text">
          <h1>sign in</h1>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/login">sign in</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
    BREADCRUMB END
==============================*/}
  {/*=========================
    SIGNIN START
==========================*/}
  <section className="signin pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
      <div className="row justify-content-center wow fadeInUp" data-wow-duration="1s">
        <div className="col-xl-5 col-sm-10 col-md-8 col-lg-6">
          <div className="login_area">
            <h2>Welcome back!</h2>
            <p>sign in to continue</p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-12">
                  <div className="login_imput">
                    <input type="email" placeholder="Email" required value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} className='w-full h-10 p-4'/>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="login_imput">
                    <input type="password" placeholder="Password" required value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})} className='w-full h-10 p-4'/>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="login_imput login_check_area">
                    <a href="forgot_password.html">Forgot Password</a>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="login_imput">
                    <button type="submit" className="common_btn">login</button>
                  </div>
                </div>
              </div>
            </form>
            <p className="or"><span>or</span></p>
            <ul className="d-flex">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
            </ul>
            <p className="create_account">Dont’t have an aceount ? <Link to="/signup">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=========================
    SIGNIN END
==========================*/}
  {/*=============================
    FOOTER START
==============================*/}
  <footer style={{background: 'url(images/footer_bg.jpg)'}}>
    <div className="footer_overlay pt_100 xs_pt_70 pb_100 xs_pb_20">
      <div className="container wow fadeInUp" data-wow-duration="1s">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-4 col-sm-9 col-md-7">
            <div className="footer_content">
              <a className="footer_logo" href="index.html">
                <img src="images/footer_logo.png" alt="RegFood" className="img-fluid w-100" />
              </a>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui
                placeat inventore consectetur repellendus optio debitis.</span>
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Our Service</a></li>
                <li><a href="#">gallery</a></li>
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
              <p className="info"><i className="fas fa-phone-alt" /> +44 (0) 20 9994 7740</p>
              <p className="info"><i className="fas fa-envelope" /> themefaxbd@gmail.com</p>
              <p className="info"><i className="far fa-map-marker-alt" /> Blackwell Street,Dry Creek,Alaska</p>
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
              <p>Copyright ©<b> RegFood</b> 2023. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*=============================
    FOOTER END
==============================*/}
  {/*=============================
    SCROLL BUTTON START
==============================*/}
  <div className="scroll_btn"><i className="fas fa-hand-pointer" /></div>
</div>


  )
}

export default Login
