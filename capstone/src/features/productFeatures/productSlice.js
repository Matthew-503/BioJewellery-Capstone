import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from './productService';


const initialState = {
    products: [],
    selectedProduct: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
export const getProducts = createAsyncThunk('products/getall', async (_, thunkAPI) => {
    try {
        return await productService.getAllProducts();
    } catch (error) {
        const message = (
            error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message)

    }
});

export const getProductByName = createAsyncThunk('products/get', async (name, thunkAPI) => {
    try {
       
        return await productService.getProductByName(name);
    } catch (error) {
        const message = (
            error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message)

    }
});


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => initialState,
    }, extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getProductByName.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getProductByName.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.selectedProduct = action.payload[0]
           
        })
        .addCase(getProductByName.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
    }

})

export const { reset } = productSlice.actions
export default productSlice.reducer