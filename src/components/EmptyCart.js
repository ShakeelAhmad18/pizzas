import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const EmptyCart = () => {
  return (
    <div className='h-screen bg-slate-900'>
      <Navbar/>
    <Link to='/menu' className='text-white py-6'>&larr; back to menu</Link>
    <p className='font-semibold mt-7 bg-stone-200 text-red-400'>Your Cart is Still Empty! Start adding some pizzas 😛</p>
</div>
  )
}

export default EmptyCart
