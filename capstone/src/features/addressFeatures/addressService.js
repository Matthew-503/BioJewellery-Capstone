import axios from 'axios'

const API_URL = '/api/address/'

//Get address
const getAddress = async (id, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.get(API_URL + id , config)
    return response.data
}

//Update address 
const updateAddress = async (id, newAddress, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + id, newAddress, config)
    return response.data
}

const addressService = {    
    getAddress,
    updateAddress
}

export default addressService