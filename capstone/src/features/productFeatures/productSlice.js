import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from './productService';


const initialState = {
    products: [],
    selectedProduct: {
        name:'',
        description: '',
        price: '',
        quantity: '',
        imageUrl: ''
    },
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

export const setProduct = createAsyncThunk('products/post', async (productData, thunkAPI) => {
    try {
        
        return await productService.setProduct(productData);

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
            state.selectedProduct.name = action.payload.product[0].name
            state.selectedProduct.description = action.payload.product[0].description
            state.selectedProduct.price = action.payload.product[0].price
            state.selectedProduct.quantity = action.payload.product[0].quantity
            state.selectedProduct.imageUrl = action.payload.product[0].imageUrl        
        })
        .addCase(getProductByName.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(setProduct.pending, (state) => {
            state.isLoading = true
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
    }

})

export const { reset } = productSlice.actions
export default productSlice.reducer