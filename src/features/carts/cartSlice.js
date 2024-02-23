import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from './cartService';

const initialState = {
  cartItems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Add to cart
export const addToCart = createAsyncThunk(
  'cart/add',
  async (cartData, thunkAPI) => {
    try {
      return await cartService.addToCart(cartData);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartItems = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
