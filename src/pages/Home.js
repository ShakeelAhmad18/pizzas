import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import {Link} from 'react-router-dom'
import SearchOrder from '../components/SearchOrder'
import {useEffect,useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import useBookedTable from '../customHook/useBookedTable'


export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [bookedSlot,setBookedSlot]=useState([])
  const formattedDates =startDate.toISOString().split("T")[0]; // "YYYY-MM-DD"


  useEffect(() => {
    setInput((prevInput) => ({
      ...prevInput,
      date: startDate.toISOString().split("T")[0] // Update date in "YYYY-MM-DD" format
    }));
  }, [startDate]);

  const [input,setInput]=useState({
    name:'',
    email:'',
    phone:'',
    Time:'',
    date:formattedDates,
    persons:0
  })

  const {bookedTable}=useBookedTable()

  useEffect(()=>{
    window.scrollTo(0,0);
   },[])

  document.title = 'Home';

  const handleTop=()=>{
    window.scrollTo(0,0)
  }

  useEffect(() => {
    async function Booking() {
      try {
        const formattedDate =startDate.toISOString().split("T")[0]; // "YYYY-MM-DD"
        const response = await axios.post(`http://localhost:8000/api/table/getBookingwithTime`,{formattedDate},{withCredentials:true});
        const booking = response.data;
        setBookedSlot(booking);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }
  
    if (startDate) {
      Booking();
    }
  }, [startDate]);
  

  const timeSlot=[
    "08.00 am to 09.00 am",
    "10.00 am to 11.00 am",
    "12.00 pm to 01.00 pm",
    "02.00 pm to 03.00 pm",
    "04.00 pm to 05.00 pm"
  ]

  const handlePersonsChange = (e) => {
    setInput({ ...input, persons: e.target.value });
  };

  const handleTimeChange = (e) => {
    setInput({ ...input, Time: e.target.value });
  };

  const handleBookedTable=(e)=>{

      e.preventDefault();
      bookedTable(input)
      setInput({
        name:'',
        email:'',
        phone:'',
        Time:'',
        date:'',
        persons:0
      })
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
            <form onSubmit={handleBookedTable}>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" required value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})} placeholder="Name" className='w-full h-10 p-3' />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" required value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} placeholder="Email" className='w-full h-10 p-3'/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="phone">phone</label>
                    <input type="text" id="phone" required value={input.phone} onChange={(e)=>setInput({...input,phone:e.target.value})} placeholder="Phone" className='w-full h-10 p-3' />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label htmlFor="date">select date</label><br/>
                    <DatePicker
                       selected={startDate}
                       filterDate={(date) => {
                       const today = new Date();
                       const maxDate = new Date();
                       maxDate.setDate(today.getDate() + 4);
                         // Only disable the date if all slots are booked
                       const isDateFullyBooked = (selectedDate) =>
                          bookedSlot[selectedDate.toISOString().split("T")[0]]?.length === timeSlot.length;

                          return date >= today && date <= maxDate && !isDateFullyBooked(date);
                         }}
                       onChange={(date) => setStartDate(date)}
                       className="w-full h-10 p-3"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label>select time</label>
                    <select
                            className="w-full h-10 rounded-sm"
                            value={input.Time}
                            onChange={handleTimeChange}
                          >
                            <option>Select</option>
                            {timeSlot.map((slot, index) => (
                              <option key={index} value={slot} disabled={bookedSlot.includes(slot)}>
                                {slot}
                              </option>
                            ))}
                          </select>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="reservation_input_single">
                    <label>select person</label>
                    <select
                            className="w-full h-10 rounded-sm"
                            value={input.persons}
                            onChange={handlePersonsChange}
                          >
                            <option>Select</option>
                            <option value="1">1 person</option>
                            <option value="2">2 persons</option>
                            <option value="3">3 persons</option>
                            <option value="4">4 persons</option>
                            <option value="5">5 persons</option>
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
<section className="counter_part mb-4 text-white" style={{background: 'url(images/counter_bg.jpg)'}}>
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
