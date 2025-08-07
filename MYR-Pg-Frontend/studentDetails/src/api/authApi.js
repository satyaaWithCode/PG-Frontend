// src/api/authApi.js
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const registerUser = async (userData) => {
  const res = await axios.post(`${BASE_URL}/auth/register`, userData);
  return res.data;
};

export const loginUser = async (loginData) => {
  const res = await axios.post(`${BASE_URL}/auth/login`, loginData);
  return res.data;
};
