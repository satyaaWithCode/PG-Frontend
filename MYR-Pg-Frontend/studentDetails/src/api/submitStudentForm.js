// src/api/submitStudentForm.js
import axios from "axios";

const submitStudentForm = async (formData, aadharFile) => {
  try {
    const form = new FormData();
    form.append("studentName", formData.name);
    form.append("permanentAddress", formData.address);
    form.append("aadharCardNumber", formData.aadharNumber);
    form.append("phoneNumber", formData.phone);
    form.append("gmail", formData.email);
    form.append("currentAddress", formData.currentAddress);
    form.append("aadharFile", aadharFile);

    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "multipart/form-data",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await axios.post("http://localhost:8080/api/pg", form, {
      headers,
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    throw error;
  }
};

export default submitStudentForm;
