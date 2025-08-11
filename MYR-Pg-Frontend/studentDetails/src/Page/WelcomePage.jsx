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

const HouseSVG = () => (
  <svg
    width="100%"
    height="384" // same as h-96 (24rem)
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-3xl shadow-lg"
  >
    <defs>
      <linearGradient
        id="roofGradient"
        x1="32"
        y1="8"
        x2="32"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ec4899" />
        <stop offset="1" stopColor="#db2777" />
      </linearGradient>
      <linearGradient
        id="wallGradient"
        x1="32"
        y1="28"
        x2="32"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#a78bfa" />
        <stop offset="1" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient
        id="doorGradient"
        x1="44"
        y1="44"
        x2="44"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f472b6" />
        <stop offset="1" stopColor="#db2777" />
      </linearGradient>
      <linearGradient
        id="windowGradient"
        x1="20"
        y1="40"
        x2="20"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#c4b5fd" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>

    {/* Roof */}
    <path
      d="M12 28 L32 8 L52 28 Z"
      fill="url(#roofGradient)"
      stroke="#a21caf"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Walls */}
    <rect
      x="12"
      y="28"
      width="40"
      height="28"
      fill="url(#wallGradient)"
      stroke="#5b21b6"
      strokeWidth="1.5"
      rx="3"
      ry="3"
    />

    {/* Door */}
    <rect
      x="40"
      y="44"
      width="8"
      height="12"
      fill="url(#doorGradient)"
      stroke="#9d174d"
      strokeWidth="1.5"
      rx="1.5"
      ry="1.5"
    />
    {/* Door knob */}
    <circle cx="46" cy="50" r="0.8" fill="#4b044e" />

    {/* Window */}
    <rect
      x="16"
      y="40"
      width="8"
      height="8"
      fill="url(#windowGradient)"
      stroke="#7c3aed"
      strokeWidth="1.2"
      rx="1"
      ry="1"
    />
    {/* Window panes */}
    <line x1="16" y1="44" x2="24" y2="44" stroke="#6d28d9" strokeWidth="0.8" />
    <line x1="20" y1="40" x2="20" y2="48" stroke="#6d28d9" strokeWidth="0.8" />
  </svg>
);

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
        {/* Left SVG Image */}
        <div
          className="md:w-1/2 relative rounded-3xl shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer group"
          aria-label="House illustration"
          role="img"
          tabIndex={0}
        >
          <HouseSVG />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-700 via-indigo-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
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
