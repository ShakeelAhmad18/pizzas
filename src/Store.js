import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux/cartSlice'
import orderReducer from './redux/orderSlice'



const Store =configureStore({
  reducer:{
    cart:cartReducer,
    order:orderReducer
  }
})


export default Store
