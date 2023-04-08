import axios from 'axios';
const API_URL = '/api/reviews';

export const getAllReviews = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error getting reviews.');
  }
};

export const createReview = async (productId, userId, rating, title, comment) => {
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
