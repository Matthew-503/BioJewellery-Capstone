import axios from 'axios'

const API_URL = '/api/cart/'

//Add item to cart
const addItemToCart = async (cartData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    //cartData has full product json data
    const response = await axios.get(API_URL +'/checkproduct', cartData, config)
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
const increaseItemQuantity = async (item, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const productName = item.productName
    const quantity = item.quantity + 1;
   
    const response = await axios.get(API_URL + productName + "/quantity/" + quantity, config)
    return response.data
}

//Decrease and update item quantity by 1 
const decreaseItemQuantity = async (item, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const productName = item.productName
    const quantity = item.quantity - 1;
    if (quantity <= 0){
        return new Error('Cannot make a negative quantity');
    }
    
    const response = await axios.get(API_URL + quantity + "/name/" + productName, config)
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