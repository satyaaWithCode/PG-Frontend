
import axios from "axios";

const API_URL = "https://pg-backend-87c6.onrender.com/api/pg";

export const getAllStudents = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
