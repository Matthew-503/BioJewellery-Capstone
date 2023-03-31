import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import addressService from './addressService'

const initialState = {
    shippingAddress:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//Get address
export const getAddress = createAsyncThunk('address/get', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
       
        return await addressService.getAddress(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Update address
export const updateAddress = createAsyncThunk('addresses/put', async (userId, newAddress, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.updateAddress(userId, newAddress, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
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
        .addCase(updateAddress.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(updateAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        }) 
    }
})

export const {reset} = addressSlice.actions
export default addressSlice.reducer