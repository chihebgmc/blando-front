import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ordersList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create Order Slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
