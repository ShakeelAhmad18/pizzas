import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, deleteItem, deleteCartQuantityById } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  
  const { _id: id, name, image, price, ingredients, soldOut, discount } = pizza;
  const currentQuantity = useSelector(deleteCartQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddItem = async () => {
    const newItem = {
      pizzaId: id,
      name,
      ingredients,
      image,
      price,
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addItems(newItem));
    toast.success('Item added to cart');
  };

  const handleRemoveFromCart = async () => {
    dispatch(deleteItem(id));
    toast.success('Item removed from cart');
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg mb-8 flex flex-col justify-between menu-item">
      <div className="relative">
        <img src={image.filePath} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
        {soldOut && (
          <span className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-sm font-bold rounded-tr-lg">
            Sold Out
          </span>
        )}
        {discount && (
          <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-sm font-bold rounded-tl-lg">
            {discount}% Off
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-yellow-400">{name}</h2>
          <p className="text-gray-400 my-4">{ingredients}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>  
            {discount ? (
              <>
                <span className="text-lg font-bold text-yellow-300 line-through">${price}</span>
                <span className="text-lg font-bold text-green-300 ml-2">
                  ${Math.round(price - (price * discount) / 100)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-yellow-300">${price}</span>
            )}
          </div>
          {!soldOut && (
            !isInCart ? (
              <button 
                className="bg-yellow-500 text-gray-900 px-3 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 ease-in-out flex items-center space-x-2 shadow-md" 
                onClick={handleAddItem}
              >
                <MdOutlineShoppingBag className="w-5 h-5" />
                <span>Add to cart</span>
              </button>
            ) : (
              <button 
                className="bg-red-500 text-gray-900 px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ease-in-out flex items-center space-x-2 shadow-md" 
                onClick={handleRemoveFromCart}
              >
                <RiDeleteBin6Line className="h-5 w-5" />
                <span>Remove</span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
