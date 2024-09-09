import { createSlice } from "@reduxjs/toolkit";

const initialState={
    order:[],
    orders:[]
}


const orderSlice=createSlice({
    name:'order',
   initialState,
   reducers:{
     addOrder(state,action){
        //get order by Id
        state.order.push(action.payload)
     }
   }
})



export const {addOrder}=orderSlice.actions;
export default orderSlice.reducer;

export const getorder=(state)=>state.order.order;
