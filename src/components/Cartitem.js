import React from 'react';
import {useDispatch} from 'react-redux'
import {increasedItemQuantity,decreaseItemQuantity} from '../redux/cartSlice'
import toast from 'react-hot-toast'
import { deleteItem } from '../redux/cartSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';


const Cartitem = ({ item }) => {
  const dispatch=useDispatch()
  const {name,quantity, image, price,ingredients,pizzaId} = item;
  
  const handleRemoveFromCart = async () => {
    dispatch(deleteItem(pizzaId));
    toast.success('Item removed from cart');
  };

  const incresedQunatity=()=>{
     dispatch(increasedItemQuantity(pizzaId))
  }


  const decresedQuantity=()=>{
    dispatch(decreaseItemQuantity(pizzaId))
  }
  
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center border-b py-4">
      <img
        src={image.filePath}
        alt={name}
        className="w-full lg:w-24 h-24 object-cover rounded-lg mb-4 lg:mb-0"
      />

      <div className="flex-1 ml-0 lg:ml-4">
        <h2 className="text-lg lg:text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm lg:text-base">Ingredients: {ingredients}</p>

        <div className="flex items-center mt-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300" onClick={decresedQuantity}
          >
            -
          </button>
          <span className="px-4 py-2 bg-gray-100">{quantity}</span>
          <button
            className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300" onClick={incresedQunatity}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
        <span className="text-lg font-bold">${(price * quantity).toFixed(2)}</span>
       <button onClick={handleRemoveFromCart}>
       <RiDeleteBin6Line  className='w-10 h-8 py-1 px-1  text-red-500 rounded-md hover:text-red-700'/>
       </button>
      </div>
    </div>
  );
};

export default Cartitem;
