import axios from 'axios'

const API_URL = '/api/cart'

//Add item to cart
const addItemToCart = async (cartData, token) => {
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

//Increase and update item quantity by 1 
const increaseItemQuantity = async (productId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.patch(API_URL + productId, config)
    return response.data
}

//Decrease and update item quantity by 1 
const decreaseItemQuantity = async (productId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.patch(API_URL + productId, config)
    return response.data
}


// //Update cart item
// const updateCartItemQuantity = async (productId, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }
//     const response = await axios.patch(API_URL + productId, config)
//     return response.data
// }


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
    addItemToCart,
    getCartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteCartItem
}

export default cartService