import axios from 'axios';

const API_URL = '/api/users/';

// Register user service
const register = async userData => {
  const response = await axios.post(API_URL + 'register', userData);
  return response.data;
};

// Login user service
const login = async userData => {
  const response = await axios.post(API_URL + 'auth', userData);
  return response.data;
};

const authService = {
  login,
  register,
};

export default authService;
