import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from './productService';
 
 
const initialState = {
    products: [],
    selectedProduct: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: 'Waiting for product :)'
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

export const getProductByName = createAsyncThunk('products/get', async (formData, thunkAPI) => {
    try {
        
        return await productService.getProductByName(formData);
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

export const sortProducts = createAsyncThunk('products/sort', async (sortType, thunkAPI) => {
    try {
        return await productService.sortProducts(sortType);
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

export const setProduct = createAsyncThunk('products/post', async (formData, thunkAPI) => {
    try {
        
        return await productService.setProduct(formData);

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

export const updateProduct = createAsyncThunk('products/put', async (formData, thunkAPI) => {
    try {
        
        return await productService.updateProduct(formData);

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
        reset: (state) => initialState
    }, extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true
            state.message = 'Finding your perfect collection'
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
            state.selectedProduct = action.payload.product[0]        
        })
        .addCase(getProductByName.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(sortProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(sortProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        .addCase(sortProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(setProduct.pending, (state) => {
            state.isLoading = true
            state.message = "Sending product to backend"
        })
        .addCase(setProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload.message
        })
        .addCase(setProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(updateProduct.pending, (state) => {
            state.isLoading = true
            state.message = "Updating product in backend"
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload.message
        })
        .addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        
    }

})

export const { reset } = productSlice.actions
export default productSlice.reducer