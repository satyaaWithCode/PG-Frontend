
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import submitStudentForm from "../api/submitStudentForm";

const StudentRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    aadharNumber: "",
    phone: "",
    email: "",
    currentAddress: "",
  });

  const [aadharFile, setAadharFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setAadharFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await submitStudentForm(formData, aadharFile);
      console.log(result);
      setFormData({
        name: "",
        address: "",
        aadharNumber: "",
        phone: "",
        email: "",
        currentAddress: "",
      });
      setAadharFile(null);
      navigate("/success");
    } catch (error) {
      alert("❌ Registration failed!");
      console.error("Error submitting student data:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10 w-full max-w-3xl border border-purple-300"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          📝 MYR PG REGISTRATION FORM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "name", placeholder: "Student Name" },
            { name: "address", placeholder: "Permanent Address" },
            { name: "aadharNumber", placeholder: "Aadhar Card Number" },
            { name: "phone", placeholder: "Phone Number" },
            { name: "email", placeholder: "Gmail", type: "email" },
            { name: "currentAddress", placeholder: "Current Address" },
          ].map(({ name, placeholder, type = "text" }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              required
            />
          ))}
        </div>

        {/* Drag & Drop Upload */}
        <div
          className={`mt-8 border-2 border-dashed ${
            dragging ? "border-purple-500 bg-purple-100/50" : "border-gray-300"
          } p-6 rounded-xl text-center transition-colors duration-300`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <p className="text-gray-600 font-medium">
            📎 Drag & drop Aadhar card file here or click to select
          </p>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setAadharFile(e.target.files[0])}
            className="mt-3"
            required
          />
          {aadharFile && (
            <p className="text-sm text-green-700 mt-2">
              ✅ Selected: {aadharFile.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          🚀 Submit Registration
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
