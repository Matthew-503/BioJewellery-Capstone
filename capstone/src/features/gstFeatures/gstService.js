import axios from 'axios'

const API_URL = '/api/gst'


//Get GST value
const getGst = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}


//Update GST value
const updateGst = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL, config)
    return response.data
}


const gstService = {   
    getGst,
    updateGst
}

export default gstService