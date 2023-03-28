import axios from 'axios'

const API_URL = '/api/address'

//Get address object based on ID
const getAddress = async (addressId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const addressService = {    
    getAddress
}

export default addressService