import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productFeatures/productSlice';
import authReducer from '../features/accountFeatures/accountSlice';


export const store = configureStore({
  reducer: {
   products:productReducer,
   auth: authReducer,
  },
});
