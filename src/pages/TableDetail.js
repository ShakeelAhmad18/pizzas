import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSingleTable from '../customHook/useSingleTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
import useGetTime from '../customHook/useGetTime';
import toast from 'react-hot-toast';
import useCreateReservation from '../customHook/useCreateReservation';

const TableDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSingleTable, singleTable, loading } = useSingleTable();
  const { time, getTime, isLoading: timeLoading } = useGetTime();
  const [bookingDate, setBookingDate] = useState(null);
  const [bookingTime, setBookingTime] = useState('');
  const [phone, setPhone] = useState('');
  const [totalPeople, setTotalPeople] = useState('');
  const [reservationType, setReservationType] = useState('');
  const [message, setSpecialRequest] = useState('');
  const { createReservation, Loading } = useCreateReservation();

  useEffect(() => {
    getSingleTable(id);
  }, [id]);

  

  useEffect(() => {
    if (id && bookingDate) {
      
      setBookingTime('');
      // Loader for fetching fresh times
      getTime({
        tableId: id,
        date: bookingDate.toISOString().split('T')[0], // Format date properly
      });
    }
  }, [id, bookingDate]);


  const timestampPart = Date.now().toString().slice(-4); // Last 6 digits of the timestamp
  const randomPart = Math.random().toString(36).substring(2, 4).toUpperCase();
  const orderNo = `TAB-${timestampPart}-${randomPart}`;

  const handleReservation = () => {
    if (!bookingDate || !bookingTime || !phone || !totalPeople || !reservationType) {
      return toast.error('Please fill all the fields');
    }

    const DateFormat = bookingDate.toISOString().split('T')[0];

    createReservation({
      orderNo,
      tableId: id,
      bookingDate: DateFormat,
      bookingTime,
      phone,
      totalPeople,
      reservationType,
      message,
    });

    setBookingDate(null);
    setPhone('');
    setBookingTime('');
    setTotalPeople('');
    setReservationType('');
    setSpecialRequest('');
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-10 px-4 mt-32">
        {loading ? (
          <p className="text-center text-lg font-semibold">Loading...</p>
        ) : (
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            {/* Flexbox Container for Large Screens */}
            <div className="flex flex-col lg:flex-row">
              {/* Table Image Section */}
              <div className="relative flex-1 lg:w-1/2">
                {/* Arrow Button */}
                <button
                  onClick={() => navigate(-1)}
                  className="absolute top-4 left-4 bg-[#e28743] text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
                >
                  ←
                </button>
                <img
                  src={singleTable.image?.filePath || 'placeholder-image.jpg'}
                  alt={singleTable.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded-lg shadow">
                  <h1 className="text-lg font-semibold text-gray-800">{singleTable.name}</h1>
                </div>
              </div>

              {/* Table Details Section */}
              <div className="flex-1 lg:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Table Details</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="block text-sm text-gray-500">Capacity</span>
                    <p className="text-lg font-semibold">{singleTable.capacity} People</p>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Rating</span>
                    <p className="text-lg font-semibold">
                      {singleTable.rating ? `${singleTable.rating} / 5` : 'Not Rated'}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{singleTable.tableDescription}</p>
              </div>
            </div>

            {/* Reservation Form Section */}
            <div className="p-6 bg-gray-50">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Make a Reservation</h2>
              <form
                className="flex flex-wrap gap-4 items-center justify-between"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleReservation();
                }}
              >
                {/* Date Picker */}
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Select Date</label>
                  <DatePicker
                    selected={bookingDate}
                    onChange={(date) => setBookingDate(date)}
                    minDate={new Date()}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholderText="Choose a date"
                    required
                  />
                </div>

                {/* Time Dropdown */}
                <div className="flex-1 min-w-[200px]">
                     <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                      <select
                             className="w-full border-2 border-gray-300 rounded-md px-3 py-2 text-sm"
                             value={bookingTime}
                             onChange={(e) => setBookingTime(e.target.value)}
                             required
                      >
                     <option value="" disabled className="text-red-500">
                       Select a time
                     </option>
                       {bookingDate && [
                        '12:00 PM',
                        '1:00 PM',
                        '2:00 PM',
                        '3:00 PM',
                        '4:00 PM',
                        '5:00 PM',
                        '6:00 PM',
                        '7:00 PM',
                        '8:00 PM',
                        '9:00 PM',
                        '10:00 PM',
                        '11:00 PM',
                                  ].map((timeOption) => {
                                    const isBooked = time?.bookingTimes?.includes(timeOption);
                                  return (
                                         <option
                                         key={timeOption}
                                         value={timeOption}
                                         className={isBooked ? 'text-red-500' : 'text-green-500'}
                                         disabled={isBooked}
                       >
                                {isBooked ? `${timeOption} (Booked)` : timeOption}
                              </option>
                       );
                        })}
                       </select>
                  </div>

                {/* Phone Number */}
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Total People Dropdown */}
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Total People</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={totalPeople}
                    onChange={(e) => setTotalPeople(e.target.value)}
                    required
                  >
                    <option value="">Select People</option>
                    {Array.from({ length: singleTable.capacity || 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} People
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reservation Type */}
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Reservation Type</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={reservationType}
                    onChange={(e) => setReservationType(e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Business Meeting">Business Meeting</option>
                    <option value="Romantic Dinner">Romantic Dinner</option>
                    <option value="Casual Gathering">Casual Gathering</option>
                  </select>
                </div>

                {/* Special Request */}
                <div className="flex-[2] min-w-[400px]">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Special Request (Optional)
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={message}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="Add any special requests"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TableDetail;
