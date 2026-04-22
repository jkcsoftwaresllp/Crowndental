import axios from "axios";

// Determine the base URL based on environment
const getBaseURL = () => {
  // If REACT_APP_API_URL is set in .env, use it
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // For production (when running on same domain with Nginx)
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return '/api';
  }
  
  // For local development
  return 'http://localhost:5000/api';
};

const API = axios.create({
  baseURL: getBaseURL(),
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
