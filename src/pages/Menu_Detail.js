import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, deleteCartQuantityById, deleteItem } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Menu_Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const [pizzaDetail, setPizzaDetail] = useState([]);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState('');
  const currentQuantity = useSelector(deleteCartQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleDecreasedQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncreasedQuantity = () => {
    setQuantity(quantity + 1);
  };

  const goToMenu = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getPizza() {
      const data = await axios.get(`http://localhost:8000/api/pizza/getItem/${id}`, { withCredentials: true });
      const datas = data.data;
      setPizzaDetail(datas);
    }
    getPizza();
  }, [id]);

  if (pizzaDetail.length === 0) return <Spinner />;

  const { sizes, flavors, discount, price, name, image, ingredients } = pizzaDetail;
  const discountPrice = Math.round(price - ((price / 100) * discount));

  const handleAddItem = async () => {
    const newItem = {
      pizzaId: id,
      name,
      image,
      totalPrice: discountPrice * quantity,
      quantity,
      price: discountPrice,
      size,
      flavour: options ? options : '-',
      ingredients
    };
    dispatch(addItems(newItem));
    toast.success('Item Added to cart');
  };

  const handleRemoveFromCart = () => {
    dispatch(deleteItem(id));
    toast.success('Item Removed from Cart');
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-36 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-3xl mx-auto relative">
          {/* Back Arrow Button */}
          <button
            onClick={goToMenu}
            className="absolute left-2 top-2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-800 transition"
          >
            ←
          </button>

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full">
              {discount}% OFF
            </div>
          )}

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              className="w-full h-48 object-cover"
              src={pizzaDetail.image.filePath}
              alt={pizzaDetail.image.fileName}
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between h-[400px]">
            {/* Scrollable Main Content */}
            <div className="overflow-y-auto flex-grow mb-4">
              {/* Title and Rating */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                {pizzaDetail.name}
              </h2>
              <div className="flex justify-center items-center mb-4">
                <div className="text-yellow-400 mr-2 flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443C4.065 15.713 4.544 15.473 4.612 15.09L5.179 11.962L2.686 9.665C2.263 9.272 2.463 8.55 3.005 8.55H6.175L7.35 5.222C7.496 4.785 8.004 4.785 8.15 5.222L9.325 8.55H12.495C13.037 8.55 13.237 9.272 12.814 9.665L10.321 11.962L10.888 15.09C10.956 15.473 11.435 15.713 11.888 15.443L8.5 13.654L5.112 15.443Z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">4.5</span>
                <span className="text-gray-500 ml-2">(201)</span>
              </div>

              {/* Price Display with Discount */}
              <div className="flex justify-center items-center mb-4">
                <span className="text-3xl font-bold text-orange-500">
                  ${discountPrice}.00
                </span>
                <span className="ml-4 text-lg line-through text-green-500">
                  ${pizzaDetail.price}.00
                </span>
              </div>

              {/* Size Selection */}
              {sizes.length > 0 && (
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">Select Size</h3>
                  <div className="flex justify-center flex-wrap gap-2">
                    {sizes.map((item) => (
                      <label className="cursor-pointer" key={item._id}>
                        <input
                          type="radio"
                          name="size"
                          className="radio radio-primary"
                          value={item.size}
                          onChange={() => setSize(item.size)}
                        />
                        <span className="ml-2">{item.size}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Flavor Selection */}
              {flavors.length > 0 && (
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">Select Flavors</h3>
                  <div className="grid grid-cols-1 gap-4 h-24">
                    {flavors.map((flav) => (
                      <label className="cursor-pointer" key={flav._id}>
                        <input
                          type="radio"
                          name="flavors"
                          className="radio radio-primary"
                          value={flav.flavor}
                          onChange={() => setOptions(flav.flavor)}
                        />
                        <span className="ml-2">{flav.flavor}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart Button in a Fixed Row */}
            <div className="flex items-center justify-between mt-2 border-t pt-2">
              <button
                className="btn btn-outline btn-primary"
                onClick={handleDecreasedQuantity}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="btn btn-outline btn-primary"
                onClick={handleIncreasedQuantity}
              >
                +
              </button>
              {!isInCart ? (
                <button
                  onClick={handleAddItem}
                  className="btn btn-primary transition-all duration-300 transform hover:scale-105"
                  disabled={!size}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={handleRemoveFromCart}
                  className="btn btn-primary  transition-all duration-300 transform hover:scale-105"
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu_Detail;
