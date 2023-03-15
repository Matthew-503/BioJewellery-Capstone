import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import gstService from './gstService'

const initialState = {
    gst:5,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//Get gst value
export const getGst = createAsyncThunk('gst/get', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await gstService.getGst(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Update gst value
export const updateGst = createAsyncThunk('gst/put', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await gstService.updateGst(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const gstSlice = createSlice({
    name: 'gst',
    initialState,
    reducers: {
        reset: (state) => initialState            
    },
    extraReducers: (builder) => {
        builder
        .addCase(getGst.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getGst.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.shippingAddress = action.payload
        })
        .addCase(getGst.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(updateGst.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateGst.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.shippingAddress = action.payload
        })
        .addCase(updateGst.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }

})

export const {reset} = gstSlice.actions
export default gstSlice.reducer