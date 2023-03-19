import axios from 'axios'

const API_URL = '/api/addresses'

//create new address
const createAddress = async (addressData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, addressData, config)
    return response.data
}

//Get address object based on ID
const getAddress = async (addressId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL+ addressId, config)
    return response.data
}


//Get user addresses list and shipping address
const getAddresses = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

//Delete user address
const deleteAddress = async (addressId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + addressId, config)
    return response.data
}

const addressService = {
    createAddress,
    getAddress,
    getAddresses,
    deleteAddress
}

export default addressService