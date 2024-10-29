import React from 'react'
import {useDispatch} from 'react-redux'
import {increasedItemQuantity,decreaseItemQuantity} from '../redux/cartSlice'

const UpdateItemQuantity = ({item}) => {
  const dispatch=useDispatch();

  const {pizzaId}=item;

  const incresedQunatity=()=>{
    dispatch(increasedItemQuantity(pizzaId))
 }

 const decresedQuantity=()=>{
  dispatch(decreaseItemQuantity(pizzaId))
}

 

  return (
    <div className="quentity_btn">
      <button className="btn btn-danger" onClick={incresedQunatity}>+</button>
       <input type="text" value={item.quantity} placeholder='1' />
      <button className="btn btn-success" onClick={decresedQuantity}>-</button>
  </div>
  )
}

export default UpdateItemQuantity
