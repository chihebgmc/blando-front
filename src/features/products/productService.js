import axios from 'axios';

const API_URL = '/api/products/';

// Get all products service
const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const productService = {
  getAllProducts,
};

export default productService;
