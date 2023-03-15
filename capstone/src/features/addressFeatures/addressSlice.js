import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import addressService from './addressService'

const initialState = {
    addresses: [],
    shippingAddress:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

export const createAddress = createAsyncThunk('addresses/create', async (addressData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.createAddress(addressData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Get address
export const getAddress = createAsyncThunk('addresses/get', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.getAddress(id,token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Get user saved addresses
export const getAddresses = createAsyncThunk('addresses/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.getAddresses(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Delete user address
export const deleteAddress = createAsyncThunk('addresses/delete', 
async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.deleteAddress(id, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})

//we didn't reset the address like this in users because we don't want them to reset like this. we want the user to persist
export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        reset: (state) => initialState            
    },
    extraReducers: (builder) => {
        builder
        .addCase(createAddress.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.addresses.push(action.payload)
        })
        .addCase(createAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(getAddress.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.shippingAddress = action.payload
        })
        .addCase(getAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(getAddresses.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAddresses.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.addresses = action.payload.addresses
            state.shippingAddress = action.payload.shippingAddress
        })
        .addCase(getAddresses.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(deleteAddress.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true 
            state.addresses = state.addresses.filter((address) => address._id !== action.payload.id)
        })
        .addCase(deleteAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }

})

export const {reset} = addressSlice.actions
export default addressSlice.reducer