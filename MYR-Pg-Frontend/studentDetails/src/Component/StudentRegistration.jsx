

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormData,
  setAadharFile,
  submitStudentForm,
  reset,
} from "../redux/studentRegistrationSlice";

const StudentRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { formData, aadharFile, loading, error } = useSelector(
    (state) => state.studentRegistration
  );

  const [dragging, setDragging] = React.useState(false);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    dispatch(setAadharFile(file));
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
      await dispatch(submitStudentForm({ formData, aadharFile })).unwrap();
      dispatch(reset());
      navigate("/success");
    } catch (err) {
      alert("❌ Registration failed!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-indigo-900 to-pink-900 px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-md border border-purple-300 rounded-3xl shadow-xl p-10 w-full max-w-4xl
          hover:shadow-2xl transition-shadow duration-500"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center text-purple-800 tracking-tight drop-shadow-md">
          📝 MYR PG <span className="text-pink-600">Registration</span> Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "name", placeholder: "Student Name" },
            { name: "address", placeholder: "Permanent Address" },
            { name: "aadharNumber", placeholder: "Aadhar Card Number" },
            { name: "phone", placeholder: "Phone Number" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "currentAddress", placeholder: "Current Address" },
          ].map(({ name, placeholder, type = "text" }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="border border-gray-300 rounded-2xl px-5 py-4 text-lg
                shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400
                focus:border-purple-600 placeholder-gray-400 transition-all duration-300
                hover:scale-[1.02]"
              required
              autoComplete="off"
            />
          ))}
        </div>

        <div
          className={`mt-10 border-4 border-dashed rounded-3xl p-8 text-center cursor-pointer select-none
            ${
              dragging
                ? "border-pink-500 bg-pink-50 shadow-lg scale-105"
                : "border-purple-300 bg-purple-50"
            }
            transition-all duration-400 ease-in-out`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <p className="text-purple-700 font-semibold text-lg mb-3 select-text">
            📎 Drag & drop your Aadhar card here, or click to select a file
          </p>
          <input
            id="fileInput"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => dispatch(setAadharFile(e.target.files[0]))}
            className="hidden"
            required={!aadharFile}
          />
          {aadharFile && (
            <p className="mt-2 text-sm text-green-700 font-medium truncate">
              Selected file: <span className="italic">{aadharFile.name}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-12 w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700
            text-white font-extrabold rounded-3xl shadow-xl hover:from-pink-700 hover:to-purple-800
            hover:shadow-2xl transform hover:scale-105 transition-transform duration-300
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "🚀 Submit Registration"}
        </button>

        {error && (
          <p className="mt-6 text-center text-red-600 font-semibold text-lg">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default StudentRegistration;
