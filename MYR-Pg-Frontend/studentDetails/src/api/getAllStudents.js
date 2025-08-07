
import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/pg";

export const getAllStudents = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
