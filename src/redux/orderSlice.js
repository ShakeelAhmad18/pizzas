import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from '../services/getOrders';
import toast from 'react-hot-toast';

const initialState = {
  order: [],
  orders: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ''
};

// Fetch all orders
export const getAllOrders = createAsyncThunk(
  'order/getAll',
  async (_, thunkApi) => {
    try {
      const response = await getOrders();
      return response;
    } catch (error) {
      const message = 
        (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString();
      toast.error(message);
      // Ensure to return the rejection
      return thunkApi.rejectWithValue(message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.order.push(action.payload);  // Add a single order
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload); // Show the error message
      });
  }
});

// Export actions and selectors
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;

// Selectors
export const getALLOrder = (state) => state.order.orders;
export const getorder = (state) => state.order.order;
