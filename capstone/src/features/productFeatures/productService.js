import axios from "axios";
const API_URL = '/api/product/'


const getAllProducts = async() => {
    const response = await axios.get(API_URL + 'all')
        console.log(response)
    return response.data
}

const getProductByName= async(formData) => {
    
    const response = await axios.get(API_URL, formData)

    return response.data
   
}


const sortProducts = async(sortType) => {
   
    const response = await axios.get(API_URL + 'sort/' + sortType)

    console.log(response)
    return response.data
}

const setProduct= async(formData) => {
    
    const response = await axios.post(API_URL, formData)
    
    return response.data
   
}

const updateProduct= async(formData) => {
    
    const response = await axios.put(API_URL, formData)
    console.log(response);
    return response.data
   
}


const productService =  {
    getAllProducts,
    getProductByName,
    sortProducts,
    setProduct,
    updateProduct
}

export default productService