// Author: Sri
// Version 1.0
// Date: 15/03/2023
 
//createSlice used to create a slice which manages a portion of the global state
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cartService from './cartService'
// const cartItem = {'product':{}, 'quantity':{}}
const initialState = {
    cartProducts: [], //product object
    itemCount: 0,
    subTotal: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Add item to cart
export const addItemToCart = createAsyncThunk('cart/create', async (cartData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.addItemToCart(cartData, token)
        
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

//Increase and update item quantity by 1
export const increaseItemQuantity = createAsyncThunk('cart/increase', 
async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.increaseItemQuantity(id, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})

//Decrease and update item quantity by 1
export const decreaseItemQuantity = createAsyncThunk('cart/decrease', 
async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.decreaseItemQuantity(id, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
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
        reset: (state) => initialState,

        updateItemCount: (state) => {

            const count = state.cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
            state.itemCount = count;

            // let count = 0;
            // state.cartProducts.forEach(item => {
            //     count += item.quantity;
            // });

            // state.itemCount = count; 
        }
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(addItemToCart.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addItemToCart.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts.push(action.payload)
            state.itemCount = state.cartProducts.length
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCartItems.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts = action.payload.cartItems
            state.subTotal = action.payload.subTotal
            thunkAPI.dispatch(updateItemCount())
        })
        .addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(increaseItemQuantity.pending, (state) => {
            state.isLoading = true
        })
        .addCase(increaseItemQuantity.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts = action.payload
            thunkAPI.dispatch(updateItemCount())
        })
        .addCase(increaseItemQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(decreaseItemQuantity.pending, (state) => {
            state.isLoading = true
        })
        .addCase(decreaseItemQuantity.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts = action.payload
            thunkAPI.dispatch(updateItemCount())
        })
        .addCase(decreaseItemQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(deleteCartItem.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteCartItem.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true 
            state.cartProducts = action.payload
            thunkAPI.dispatch(updateItemCount())
        })
        .addCase(deleteCartItem.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }
})

export const {reset, updateItemCount} = cartSlice.actions
export default cartSlice.reducer