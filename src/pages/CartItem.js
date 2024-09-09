import React from 'react'
import { formatCurrency } from '../utils/helpers';
import UpdateItemQuantity from '../components/UpdateItemQuantity';
import DeleteCart from '../components/DeleteCart';


const CartItem = ({item}) => {
    const {pizzaId, name, quantity, totalPrice}=item;

    
  return (
    <div>
        <li className="sm:flex sm:items-center sm:justify-between space-x-5 py-2 font-semibold ">
            <p className="mb-1 sm:mb-0">{quantity}&times; {name}</p>
            <div className="flex items-center justify-between mb-1 sm:gap-6">
                <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
                <UpdateItemQuantity pizzaId={pizzaId}/>
                <DeleteCart pizzaId={pizzaId}/>
            </div>
        </li>
    </div>
  )
}

export default CartItem