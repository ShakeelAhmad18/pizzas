import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, deleteItem, deleteCartQuantityById } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  
  const { _id: id, name, image, price, ingredients, soldOut } = pizza;
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
    <div className="bg-gray-800 rounded-lg shadow-lg mb-8 flex flex-col justify-between">
      <img src={image.filePath} alt={name} className="w-full h-64 object-cover" />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-400 my-4">{ingredients}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">${price}</span>
          {!soldOut && (
            !isInCart ? (
              <button 
                className="bg-yellow-500 text-gray-900 px-3 py-2 rounded hover:bg-yellow-600 flex items-center space-x-2" 
                onClick={handleAddItem}
              >
                <MdOutlineShoppingBag className="w-5 h-5" />
                <span>Add to cart</span>
              </button>
            ) : (
              <button 
                className="bg-yellow-500 text-gray-900 px-3 py-2 rounded hover:bg-yellow-600 flex items-center space-x-2" 
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
