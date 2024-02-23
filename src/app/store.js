import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../features/auth/authSlice';
import productSlice from '../features/products/productSlice';
import cartSlice from '../features/carts/cartSlice';
import orderSlice from '../features/orders/orderSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    cart: cartSlice,
    orders: orderSlice,
  },
});
