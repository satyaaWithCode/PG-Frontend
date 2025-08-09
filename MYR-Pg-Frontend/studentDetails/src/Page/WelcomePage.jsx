

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
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-indigo-900/60 shadow-lg px-10 py-5 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer select-none hover:scale-110 transform transition duration-300"
          aria-label="Navigate Home"
        >
          <Home className="w-8 h-8 text-indigo-400 mr-3 drop-shadow" />
          <span className="text-3xl font-extrabold tracking-wide text-indigo-300 drop-shadow-lg">
            PG-Finder
          </span>
        </div>
        <button
          onClick={() => navigate("/auth")}
          className="bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 transition-colors duration-300 rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl text-white tracking-wider uppercase drop-shadow-md"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Left Image */}
        <div className="md:w-1/2 relative rounded-3xl shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer group">
          <img
            src={houseImg}
            alt="PG House"
            className="w-full h-96 object-cover rounded-3xl filter brightness-90 group-hover:brightness-110 transition-all duration-700"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-700 via-indigo-900 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
          <div className="absolute inset-0 rounded-3xl border-4 border-indigo-400 pointer-events-none animate-pulse" />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left max-w-xl">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Find Your{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Perfect PG
            </span>{" "}
            Home
          </h1>
          <p className="text-xl text-indigo-200 leading-relaxed drop-shadow-md">
            Explore verified, budget-friendly PGs tailored to students and
            professionals across India. Experience comfort, convenience, and
            community all in one place.
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-indigo-900 font-bold rounded-full px-10 py-4 shadow-lg hover:scale-105 transform transition-all duration-300 tracking-wide"
            aria-label="Get Started"
          >
            Get Started <ArrowRight size={26} />
          </button>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto mt-32 grid md:grid-cols-3 gap-12">
        {[
          {
            title: "Verified Listings",
            desc: "Every PG is verified by our expert team to ensure your safety and comfort.",
            icon: (
              <Shield className="w-12 h-12 text-pink-400 mb-5 mx-auto drop-shadow-lg" />
            ),
          },
          {
            title: "Easy Booking",
            desc: "Seamlessly book your next home with just a few clicks, no hassle or hidden charges.",
            icon: (
              <CheckCircle className="w-12 h-12 text-pink-400 mb-5 mx-auto drop-shadow-lg" />
            ),
          },
          {
            title: "Affordable Prices",
            desc: "Get the best deals tailored to fit your budget without compromising quality.",
            icon: (
              <Wallet className="w-12 h-12 text-pink-400 mb-5 mx-auto drop-shadow-lg" />
            ),
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-indigo-800/60 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-3 duration-400 cursor-default"
          >
            {item.icon}
            <h3 className="text-3xl font-bold mb-4 text-pink-300 drop-shadow-lg text-center">
              {item.title}
            </h3>
            <p className="text-indigo-300 text-center leading-relaxed drop-shadow-md">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-indigo-100">
        <h2 className="text-5xl font-extrabold mb-16 text-center drop-shadow-xl tracking-wide">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {["Satyabrata", "Aparna", "Rahul"].map((name, i) => (
            <blockquote
              key={i}
              className="bg-indigo-700/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-1"
            >
              <Star className="text-yellow-400 mb-6 w-10 h-10 mx-auto drop-shadow-lg" />
              <p className="italic text-center text-indigo-200 leading-relaxed text-lg tracking-wide">
                "PG-Finder made it easy to find a verified and affordable PG near
                my college. Loved it!"
              </p>
              <footer className="mt-8 font-semibold text-pink-400 text-center text-xl drop-shadow-md">
                - {name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-600 via-red-600 to-yellow-500 text-indigo-900 py-20 px-6 md:px-20 mt-32 rounded-3xl max-w-7xl mx-auto text-center shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg tracking-wide">
          Ready to find your next PG?
        </h2>
        <p className="mb-14 max-w-xl mx-auto text-lg leading-relaxed drop-shadow-md">
          Start your journey with us and find your perfect space now.
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-colors duration-300 uppercase tracking-wider"
          aria-label="Register"
        >
          Register
        </button>
      </section>

      {/* About Us */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto mt-32 rounded-3xl shadow-lg bg-indigo-800/70 backdrop-blur-md text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-pink-300 drop-shadow-lg tracking-wide">
          About Us
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-indigo-300 tracking-wide drop-shadow-md">
          PG-Finder is dedicated to helping students and professionals find the
          best PGs across India. We ensure verified listings, budget-friendly
          pricing, and a smooth booking experience.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-indigo-400 text-center py-8 mt-20 shadow-inner select-none tracking-wide">
        <p className="text-sm">&copy; {new Date().getFullYear()} PG-Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
