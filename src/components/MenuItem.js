import React from 'react'
import {deleteCartQuantityById} from '../redux/cartSlice'
import {useDispatch,useSelector} from 'react-redux'
import { addItems,deleteItem } from '../redux/cartSlice';

const MenuItem = ({pizza}) => {
    const dispatch=useDispatch()
    
    const {_id:id,name,image,price,ingredients,soldOut}=pizza;
    const currentQunatity=useSelector(deleteCartQuantityById(id));
    const isInCart=currentQunatity > 0


    const handleAddItem=async ()=>{

           const newItem={
            pizzaId:id,
            name,
            ingredients,
            image,
            price,
            quantity:1,
            totalPrice:price * 1
           }
           dispatch(addItems(newItem))
    }


    const handleRemoveFromCart=async ()=>{
       dispatch(deleteItem(id))
    }

    
   
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img src={image.filePath} alt={name} className="w-full h-64 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-400 my-4">{ingredients}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          {!soldOut && (
            !isInCart ? (
              <button className="bg-yellow-500 text-gray-900 px-3 py-2 rounded hover:bg-yellow-600" onClick={handleAddItem}>
                Add to Cart
              </button>
            ) : (
              <button className="bg-yellow-500 text-gray-900 px-3 py-2 rounded hover:bg-yellow-600" onClick={handleRemoveFromCart}>
                Remove from Cart
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
