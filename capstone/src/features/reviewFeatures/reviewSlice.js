import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ReviewService from "./reviewServices";

const initialState = {
    reviews: [],
    productId: '',
    loading: false, 
    error: null
}
// Get all reviews
export const getAllReviews = createAsyncThunk(
  "reviews/getAllReviews",
  async (productName) => {
    const response = await ReviewService.getAllReviews(productName);
    return response;
  }
);

// Create a review
export const createReview = createAsyncThunk(
  "reviews/createReview",
  async (review) => {
    const response = await ReviewService.createReview(review);
    return response.data;
  }
);

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews = action.payload;
        console.log(action.payload)

      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = reviewSlice.actions

export default reviewSlice.reducer;
