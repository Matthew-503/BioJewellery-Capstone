// Author: Sri
// Version 1.0
// Date: 15/03/2023
 
//createSlice used to create a slice which manages a portion of the global state
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cartService from './cartService'

const initialState = {
    cartProducts: [{'product':{}, 'quantity':{}}],
    itemCount:0,
    subTotal: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//func to update item count value
const updateItemCount = (cartProducts) => {
    let count = 0;
    cartProducts.forEach(product => {
        count += product.qty;
    });
    return count;
}

//Create cart
export const createCart = createAsyncThunk('cart/create', async (cartData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.createCart(cartData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Get cart items
export const getCartItems = createAsyncThunk('cart/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.getCartItems(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Delete cart Item
export const deleteCartItem = createAsyncThunk('cart/delete', 
async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.deleteCartItem(id, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})

//Slice creation to manage cart state
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createCart.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts.push(action.payload)
            state.itemCount = updateItemCount(state.cartProducts)
        })
        .addCase(createCart.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts = action.payload.cartItems
            state.subTotal = action.payload.subTotal
            state.itemCount = updateItemCount(state.cartProducts)
        })
        .addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(deleteCartItem.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteCartItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true 
            state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id)
            state.itemCount = updateItemCount(state.cartProducts)
        })
        .addCase(deleteCartItem.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }

})

export const {reset} = cartSlice.actions
export default cartSlice.reducer