import React, { useEffect, useState } from 'react';
import { FaStar, FaRegBell, FaMapMarkerAlt, FaUtensils, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DatePicker from 'react-datepicker'; // Import date picker library
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles

const Restaurant = () => {
  
  const [people, setPeople] = useState(3);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  const fetchAvailableSlots = async (selectedDate) => {
    try {
      const response = await axios.get('http://localhost:8000/api/restaurant/available-time-slots', {
        params: {
          date: selectedDate,
        },
      });
  
      if (response.status === 200) {
        setAvailableSlots(response.data.timeSlots || []);
        console.log(response.data.timeSlots)
      } else {
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error('Error fetching available time slots:', error);
      setAvailableSlots([]);
    }
  };
  
  
  
  useEffect(() => {
    const formattedDate = date.toISOString().split('T')[0];
    fetchAvailableSlots(formattedDate);
  }, [date]);
  

  
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-80 mt-20 bg-cover bg-center" style={{ backgroundImage: 'url(images/counter_bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center text-center text-white relative">
          <div className="breadcrumb_text">
            <h1 className="text-4xl font-bold">Star Luxurious Restaurant</h1>
            <ul className="flex gap-2 mt-4 justify-center">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/table" className="text-white">Table</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Restaurant Details */}
            <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Star Luxurious Restaurant</h1>
              </div>
              <div className="grid gap-4 mt-3 lg:grid-cols-3 sm:grid-cols-1">
                {/* Star Rating and Reviews */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center text-yellow-500">
                    {Array(4).fill().map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaStar className="text-gray-400" />
                  </div>
                  <p>No Rated</p>
                </div>

                {/* Cuisine and Price Range */}
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaUtensils /> French
                  </span>
                  <span className="flex items-center gap-1">💵 $20 to $30</span>
                </div>
                {/* Address */}
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>123 Main St, Manhattan</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Charming</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Good for special occasions</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Great for fine wines</span>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Renowned chef Alain Ducasse and his teams have been welcoming you to this charming Parisian bistro for over 15 years. Benoit has become one of Manhattan's most iconic French restaurants, owing its success to the perfect balance between...
                <span className="text-red-500 cursor-pointer"> Read more</span>
              </p>
            </div>

            {/* Right Section: Reservation Form */}
            <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg font-serif">
  <h2 className="text-2xl font-bold mb-4 text-left">Make a Reservation</h2>
  <div className="mb-4">
    <label className="block text-black text-sm font-medium mb-2 text-left">Number of people</label>
    <select
      className="w-full border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 p-2"
      value={people}
      onChange={(e) => setPeople(e.target.value)}
    >
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <option key={num} value={num}>{num} people</option>
      ))}
    </select>
  </div>
  <div className="mb-4 flex items-center gap-4">
    <div className="w-1/2">
      <label className="block text-gray-600 text-sm font-medium mb-2 text-left">Date</label>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        className="w-full border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 p-2"
        dateFormat="yyyy-MM-dd"
        minDate={new Date()} // Today's date as the minimum selectable date
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
        showDisabledMonthNavigation
      />
    </div>
    <div className="w-1/2">
      <label className="block text-gray-600 text-sm font-medium mb-2 text-left">Time</label>
      <select
        className="w-full border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 p-2"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableSlots.map((slot) => (
          <option key={slot.time} value={slot.time}>
            {slot.time}
          </option>
        ))}
      </select>
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-gray-600 text-sm font-medium mb-2 text-left">Select Time Slots</label>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 justify-start">
      {(() => {
        const index = availableSlots.findIndex((slot) => slot.time === time);
        const filteredSlots = availableSlots.slice(
          Math.max(0, index - 2),
          Math.min(index + 4, availableSlots.length)
        );

        return filteredSlots.length > 0 ? (
          filteredSlots.map((slot, idx) => (
            <button
              key={idx}
              className={`px-3 py-2 rounded-lg ${
                slot.time === time ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
              } hover:bg-red-400 hover:text-white transition`}
              onClick={() => setTime(slot.time)}
            >
              {slot.time}
            </button>
          ))
        ) : (
          <p className="text-gray-500 text-left">No time slots available.</p>
        );
      })()}
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
