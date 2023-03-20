import axios from "axios";
const API_URL = '/api/product/'


const getAllProducts = async() => {
    

    const response = await axios.get(API_URL + 'all')

    console.log(response)
    return response.data
}

const getProductByName= async(name) => {
    

    const response = await axios.get(API_URL + name)

    return response.data
   
}
const productService =  {
    getAllProducts,
    getProductByName
}

export default productService