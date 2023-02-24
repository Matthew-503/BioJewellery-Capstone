import axios from "axios";
const API_URL = '/api/product/'


const getAllProducts = async() => {
    

    const response = await axios.get(API_URL + 'all')

    console.log(response)
    return response.data
}

const getProduct= async(id) => {
    

    const response = await axios.get(API_URL + id)

    console.log(response)
    return response.data
}
const productService =  {
    getAllProducts,
    getProduct
}

export default productService