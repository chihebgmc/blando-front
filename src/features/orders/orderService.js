import axios from 'axios';

const API_URL = '/api/orders/';

// Create order service
const createOrder = async orderData => {
  const response = await axios.post(API_URL, orderData);
  return response.data;
};

// Get all orders service
const getAllOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get one order service
const getOrder = async _id => {
  const response = await axios.get(API_URL + _id);
  return response.data;
};

// Update order service
const updateOrder = async _id => {
  const response = await axios.put(API_URL + _id);
  return response.data;
};

const orderService = { createOrder, getAllOrders, getOrder, updateOrder };

export default orderService;
