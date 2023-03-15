//package to create store
import { configureStore } from '@reduxjs/toolkit';

import authReducer from "../features/accountFeatures/accountSlice";
import productReducer from '../features/productFeatures/productSlice';
import cartReducer from '../features/cartFeatures/cartSlice';
import orderReducer from '../features/orderFeatures/orderSlice';

export const store = configureStore({
  reducer: {
   auth: authReducer,
   products:productReducer,
   cart: cartReducer,
   order: orderReducer
  },
});
