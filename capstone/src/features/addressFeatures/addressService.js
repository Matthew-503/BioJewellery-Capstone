import axios from 'axios'

const API_URL = '/api/address'

//Get address
const getAddress = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//Update address 
const updateAddress = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const addressService = {    
    getAddress,
    updateAddress
}

export default addressService