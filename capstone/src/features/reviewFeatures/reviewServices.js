import axios from 'axios';
const API_URL = '/api/reviews/';

const getAllReviews = async (productName) => {

    const response = await axios.get(API_URL + productName);

    return response.data;
  
};

const createReview = async (productId, userId, rating, title, comment) => {
  try {
    const response = await axios.post(`${API_URL}`, {
    productId,
      userId,
      rating,
      title,
      comment,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error creating review.');
  }
};

const reviewServices =  {
  getAllReviews,
  createReview,

}

export default reviewServices