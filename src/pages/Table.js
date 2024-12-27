import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import useGetTable from '../customHook/useGetTable';
import Footer from '../components/Footer';

const Table = () => {
  const { getTable, table, loading } = useGetTable();

  useEffect(() => {
    getTable();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const validRating = Math.max(0, Math.min(5, Math.floor(rating || 0)));
    const filledStars = Array(validRating).fill(true);
    const emptyStars = Array(5 - validRating).fill(false);

    return [...filledStars, ...emptyStars].map((filled, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill={filled ? 'currentColor' : '#d9a930'}
        stroke={filled ? 'currentColor' : '#a88732'}
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path d="M12 .587l3.668 7.568L24 9.432l-6 5.869L19.336 24 12 20.433 4.664 24l1.336-8.699L0 9.432l8.332-1.277L12 .587z" />
      </svg>
    ));
  };

  return (
    <div>
      <Navbar />
      <section className="page_breadcrumb" style={{ background: 'url(images/counter_bg.jpg)' }}>
        <div className="breadcrumb_overlay">
          <div className="container">
            <div className="breadcrumb_text">
              <h1>Book our Luxurious Table</h1>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/table">Table</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center py-4 px-6 bg-blue-500 text-white rounded-lg shadow-lg">
          Available Tables
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {loading ? (
            <p className="text-center text-xl">Loading...</p>
          ) : (
            table.map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col lg:flex-row border border-gray-200"
              >
                <div className="lg:w-1/2">
                  <img
                    src={item.image.filePath}
                    alt={item.name}
                    className="h-56 w-full object-cover"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between lg:w-1/2">
                  <div className="flex justify-between items-center">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                      {item.discount}% Off
                    </span>
                    <button className="text-gray-500 hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold mt-3">{item.name}</h3>

                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400 space-x-1">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(4.5 reviews)</span>
                  </div>

                  {/* Table Capacity Section */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 font-semibold">
                      <span className="text-blue-500">Capacity:</span> {item.capacity} People
                    </p>
                  </div>

                  <Link to={`/tabledetail/${item._id}`}>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Reserve Now
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Table;
