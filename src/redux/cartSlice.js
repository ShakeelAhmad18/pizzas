import { createSlice } from "@reduxjs/toolkit"

const initialState={
   cart:[],
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItems(state,action){
            //cart === newItem
            state.cart.push(action.payload);
        },
        deleteItem(state,action){
            //delete the cart item by pizzaId
            state.cart=state.cart.filter((item)=>item.pizzaId !== action.payload)
        },
        increasedItemQuantity(state,action){
            //payload=pizzzId
            const item=state.cart.find((item)=>item.pizzaId === action.payload)
            item.quantity++;
            item.totalPrice=item.quantity * item.price;
        },
        decreaseItemQuantity(state,action){
            //payload == pizzaId
            const item=state.cart.find(item=>item.pizzaId === action.payload)
            item.quantity--;
            item.totalPrice=item.quantity * item.price;
            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state,action);
        },
        clearCart(state){
            state.cart=[]
        }
    }
})


export const {addItems,deleteItem,increasedItemQuantity,decreaseItemQuantity,clearCart}= cartSlice.actions;
export default cartSlice.reducer;

export const deleteCartQuantityById=(id)=>(state)=>state.cart.cart.find((item)=>item.pizzaId === id)?.quantity ?? 0
export const getCart=(state)=>state.cart.cart;
export const getTotalQuantity=(state)=>state.cart.cart.reduce((sum,item)=>sum + item.quantity,0)
export const getTotalPrice=(state)=>state.cart.cart.reduce((sum,item)=>sum + item.totalPrice,0)
