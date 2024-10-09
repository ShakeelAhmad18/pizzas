import Navbar from '../components/Navbar';
import Loader from '../components/Spinner';
import { getMenu } from '../services/menuServices';
import { useQuery } from '@tanstack/react-query';
import MenuItem from '../components/MenuItem';
import Filter from '../components/Filter';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Menu() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('category');
  document.title = 'Menu';

  const { isPending, data: menu } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu,
  });

  if (isPending) return <Loader />;

  let displayItems = menu;
  if (filter) displayItems = menu.filter((menu) => menu.category === filter);

  if (displayItems.length === 0) {
    return <div className="text-center text-white mt-20">No menu items available in this category!</div>;
  }

  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Navbar />
        
        {/* Menu Header */}
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold mt-8 text-yellow-400">
            Discover Our Menu
          </h1>
          <p className="text-gray-400 mt-2 text-sm max-w-2xl mx-auto leading-relaxed">
            Taste the best pizzas, burgers, and more. Every bite is crafted with passion to bring you an unforgettable culinary experience.
          </p>
        </div>

        {/* Filter and Menu Items */}
        <div className="relative flex-1 flex flex-col lg:flex-row gap-4 mt-8 mx-4 lg:mx-8">

          {/* Filter Sidebar */}
          <div className="lg:w-auto w-full h-auto lg:h-[calc(100vh-200px)] lg:overflow-y-auto absolute lg:sticky top-0 bg-gray-800 p-3 rounded-lg shadow-lg filter-sidebar">
            <Filter />
          </div>

          {/* Menu Items */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-[calc(100vh-200px)] pb-4">
            {displayItems.map((item) => (
              <MenuItem pizza={item} key={item._id} filter={filter} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
