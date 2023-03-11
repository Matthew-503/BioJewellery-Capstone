//package to create store
import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/productFeatures/productSlice';
import cartReducer from '../features/cartFeatures/cartSlice';
import orderReducer from '../features/orderFeatures/orderSlice';
import authReducer from '../features/accountFeatures/accountSlice';
export const store = configureStore({
  reducer: {
   products:productReducer,
   cart: cartReducer,
   auth: authReducer,
   order: orderReducer
  },
});
