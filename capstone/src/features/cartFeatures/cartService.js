import axios from 'axios'

const API_URL = '/api/cart'
const API_URL_PART_2 = '/products/'

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
const deleteCartItem = async (cartId,productId, token)  => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

  
    const response = await axios.put(API_URL + cartId + API_URL_PART_2 + productId, config)
    return response.data
    
}

//Delete cart item
const updateCartItem = async (cartId,productId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + cartId + API_URL_PART_2 + productId, config)
    return response.data
}

const cartService = {
    createCart,
    getCartItems,
    deleteCartItem,
    updateCartItem
}

export default cartService