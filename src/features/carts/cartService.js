import axios from 'axios';

const API_URL = '/api/carts/';

// Add to cart service
const addToCart = async cartData => {
  const response = await axios.post(API_URL, cartData);
  return response.data;
};

// Get cart items service
const getCartItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Update cart item service
const updateOneItem = async cartData => {
  const { _id, quantity } = cartData;
  const response = await axios.put(API_URL + _id, { quantity });
  return response.data;
};

// Delete one item service
const deleteOneItem = async _id => {
  const response = await axios.delete(API_URL + _id);
  return response.data;
};

// Delete all items service
const deleteManyItems = async () => {
  const response = await axios.delete(API_URL);
  return response.data;
};

const cartService = {
  addToCart,
  getCartItems,
  updateOneItem,
  deleteOneItem,
  deleteManyItems,
};

export default cartService;
