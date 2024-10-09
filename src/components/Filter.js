import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs'; // For active state indicator

const Filter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const activeFilter = searchParams.get('category') ?? 'pizza';
  const [isOpen, setIsOpen] = useState(false); 

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', filter);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <div className="lg:w-auto w-full bg-gray-900 p-4 text-white font-serif shadow-lg rounded-md transition-all">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden flex items-center justify-center mb-4 bg-yellow-500 text-black px-4 py-2 rounded-md shadow hover:bg-yellow-600 transition duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Filter Menu"
      >
        <IoIosMenu size={24} />
        <span className="ml-2">Filter by Category</span>
      </button>

      {/* Filter Options */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="pizza">
          Pizzas
        </FilterButton>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="drink">
          Drinks
        </FilterButton>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="burger">
          Burgers
        </FilterButton>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="SandWhichs">
          Sandwiches
        </FilterButton>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="deals">
          Daily Deals
        </FilterButton>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="rice">
          Rice
        </FilterButton>
        <FilterButton handleFilter={handleFilter} activeFilter={activeFilter} filter="coffee">
          Coffee
        </FilterButton>
      </div>
    </div>
  );
};

function FilterButton({ handleFilter, children, activeFilter, filter }) {
  return (
    <button
      className={`block w-full text-left px-5 py-3 mt-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
        filter === activeFilter ? 'bg-gray-700 text-yellow-400' : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-yellow-300'
      }`}
      onClick={() => handleFilter(filter)}
      aria-label={filter}
    >
      <div className="flex items-center justify-between">
        {children}
        {filter === activeFilter && <BsCheckCircle className="text-yellow-400 ml-2" size={16} />}
      </div>
    </button>
  );
}

export default Filter;
