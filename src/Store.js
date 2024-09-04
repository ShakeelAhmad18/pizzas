import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux/cartSlice'

const Store =configureStore({
  reducer:{
    cart:cartReducer
  }
})

export default Store
