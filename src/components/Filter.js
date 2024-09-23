import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

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
    <div className="lg:w-64 w-full bg-gray-800 p-4 text-white font-serif">
      <button
        className="lg:hidden mb-4 bg-yellow-500 px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoIosMenu />
      </button>

      {/* Filter options */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <Button handleFilter={handleFilter} activeFilter={activeFilter} filter="pizza">
          Pizzas
        </Button>
        <Button handleFilter={handleFilter} activeFilter={activeFilter} filter="drink">
          Drinks
        </Button>
        <Button handleFilter={handleFilter} activeFilter={activeFilter} filter="burger">
          Burgers
        </Button>
        <Button handleFilter={handleFilter} activeFilter={activeFilter} filter="burger">
          SandWhichs
        </Button>
        <Button handleFilter={handleFilter} activeFilter={activeFilter} filter="burger">
          Daily Deals
        </Button>
      </div>
    </div>
  );
};

function Button({ handleFilter, children, activeFilter, filter }) {
  return (
    <button
      className={`block w-full text-left px-5 py-2 mt-2 hover:bg-gray-700 ${
        filter === activeFilter ? 'bg-gray-600' : 'bg-gray-800'
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
