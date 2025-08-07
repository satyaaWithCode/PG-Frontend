
// src/Component/SuccessPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <CheckCircle2 size={64} className="text-green-600 animate-pulse" />
        </div>
        <h2 className="text-3xl font-extrabold text-green-700 mb-2 drop-shadow">
          Registration Successful!
        </h2>
        <p className="text-gray-700 mb-6">
          🎉 Your form has been submitted successfully. Thank you!
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
