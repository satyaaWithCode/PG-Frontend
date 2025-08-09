// deleteStudent.js
import axios from "axios";

export default function deleteStudent(id) {
  const token = localStorage.getItem("token");

  return axios.delete(`https://pg-backend-87c6.onrender.com/api/pg/students/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
