

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Home,
  CheckCircle,
  Shield,
  Wallet,
  Star,
} from "lucide-react";
import houseImg from "../assets/house.jpg";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white text-indigo-700 shadow-md fixed top-0 w-full z-50">
        <div
          className="text-2xl font-bold flex items-center cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <Home className="w-7 h-7 mr-2" />
          <span className="tracking-wide">PG-Finder</span>
        </div>
        <button
          onClick={() => navigate("/auth")}
          className="bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow hover:bg-indigo-800 hover:shadow-lg hover:scale-105"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-28 px-6 md:px-16 bg-gradient-to-r from-indigo-100 to-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          {/* Left: Image */}
          <div className="md:w-1/2">
          <div className="flex justify-center items-center p-4">
  <img
    src={houseImg}
    alt="PG House"
    className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto 
               transition duration-500 ease-in-out transform hover:scale-105 
               border-4 border-white dark:border-gray-800 
               bg-gradient-to-tr from-blue-100 to-white"
  />
</div>

          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-indigo-800 mb-4 leading-tight">
              Find Your <span className="text-indigo-600">Perfect PG</span> Home
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Explore verified, budget-friendly PGs tailored to students and professionals across India.
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="bg-indigo-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-800 hover:shadow-lg hover:scale-105 transition-all duration-300 mx-auto md:mx-0"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-700">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Verified Listings",
              desc: "Every PG is verified by our team to ensure safety and reliability.",
              icon: <Shield className="w-8 h-8 text-indigo-700 mb-4" />,
            },
            {
              title: "Easy Booking",
              desc: "Book your next home with just a few clicks, no hidden charges.",
              icon: <CheckCircle className="w-8 h-8 text-indigo-700 mb-4" />,
            },
            {
              title: "Affordable Prices",
              desc: "Best deals and pricing to fit your budget and comfort needs.",
              icon: <Wallet className="w-8 h-8 text-indigo-700 mb-4" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-3 text-indigo-600">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-700">What Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {["Satyabrata", "Aparna", "Rahul"].map((name, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <Star className="text-yellow-400 mb-2" />
              <p className="italic text-gray-700">
                "PG-Finder made it easy to find a verified and affordable PG near my college. Loved it!"
              </p>
              <p className="mt-4 font-semibold text-indigo-600">- {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to find your next PG?</h2>
        <p className="mb-8">Start your journey with us and find your perfect space now.</p>
        <button
          onClick={() => navigate("/auth")}
          className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-full hover:bg-indigo-100 transition-all shadow-lg"
        >
          Register
        </button>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          PG-Finder is dedicated to helping students and professionals find the best PGs across India.
          We ensure verified listings, budget-friendly pricing, and a smooth booking experience.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} PG-Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
