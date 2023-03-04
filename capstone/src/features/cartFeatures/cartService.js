import axios from 'axios'

const API_URL = '/api/cart'

//create new cart
const createCart = async (cartData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, cartData, config)
    return response.data
}

//Get user cart items
const getCartItems = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

//Delete cart item
const deleteCartItem = async (cartId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + cartId, config)
    return response.data
}

const cartService = {
    createCart,
    getCartItems,
    deleteCartItem
}

export default cartService