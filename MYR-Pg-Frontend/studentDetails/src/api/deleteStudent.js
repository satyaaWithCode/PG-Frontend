// deleteStudent.js
import axios from "axios";

export default function deleteStudent(id) {
  const token = localStorage.getItem("token");

  return axios.delete(`http://localhost:8080/api/pg/students/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
