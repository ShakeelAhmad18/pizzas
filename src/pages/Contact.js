import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'

const Contact=()=>{

  useEffect(()=>{
    window.scrollTo(0,0);
   },[])

    const handleContact=(e)=>{

      e.preventDefault();

    }
    return (
        <div>
            <Navbar/>
  <section className="page_breadcrumb" style={{background: 'url(images/counter_bg.jpg)'}}>
    <div className="breadcrumb_overlay">
      <div className="container">
        <div className="breadcrumb_text">
          <h1>contact with us</h1>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
  BREADCRUMB END
    ==============================*/}
  {/*=============================
  CONTACT PAGE START
    ==============================*/}
  <section className="contact mt_100 xs_mt_70 mb_100 xs_mb_70">
    <div className="container">
      <div className="contact_form_area">
        <div className="row">
          <div className="col-xl-5 col-md-6 col-lg-5 wow fadeInUp" data-wow-duration="1s">
            <div className="contact_info_area">
              <div className="contact_info">
                <h3>call</h3>
                <p>+923136900591</p>
                <p>+923016900591</p>
              </div>
              <div className="contact_info">
                <h3>mail</h3>
                <p>shakeelsoftwaredev@gmail.com</p>
                <p>sa1506758@gmail.com</p>
              </div>
              <div className="contact_info border-0 p-0 m-0">
                <h3>location</h3>
                <p>Boy's Hostel University of Education TownShip Lahore,Punjab,Pakistan</p>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-6 col-lg-7 wow fadeInUp" data-wow-duration="1s">
            <form className="contact_form" onSubmit={handleContact}>
              <h3>contact us</h3>
              <div className="row">
                <div className="col-xl-12">
                  <div className="contact_form_input">
                    <span><i className="fas fa-user" /></span>
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact_form_input">
                    <span><i className="fas fa-envelope" /></span>
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact_form_input">
                    <span><i className="fas fa-phone-alt" /></span>
                    <input type="text" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact_form_input">
                    <span><i className="fas fa-book" /></span>
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact_form_input textarea">
                    <span><i className="fas fa-pen" /></span>
                    <textarea rows={5} placeholder="Message" defaultValue={""} />
                  </div>
                  <button className="common_btn" type="submit">send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact_map_area">
        <div className="row mt_100 xs_mt_70">
          <div className="col-12 wow fadeInUp" data-wow-duration="1s">
            <div className="contact_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9909.325630591133!2d74.28057531596438!3d31.453754382304044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190145ae97af17%3A0x6d1f02b5cd2ab9f7!2sUniversity%20of%20Education!5e1!3m2!1sen!2s!4v1730056337687!5m2!1sen!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>

    )
}

export default Contact;