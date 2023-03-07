import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productFeatures/productSlice';


export const store = configureStore({
  reducer: {
   products:productReducer,
  },
});
