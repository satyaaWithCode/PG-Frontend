

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../api/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import houseImg from "../assets/house.jpg"; // Make sure path is correct

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_USER",
  });

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(loginData);
      const token = res.data?.data?.token || res.data?.token;
      const role = res.data?.data?.role || res.data?.role;

      if (!token) return toast.error("❌ Token missing!");

      localStorage.setItem("token", token);
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate(role === "ROLE_ADMIN" ? "/admin/users" : "/StudentRegistration");
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Login Failed!");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(registerData);
      toast.success("Registration Successful!");
      setIsLogin(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Registration Failed!");
    }
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${houseImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <ToastContainer position="top-center" />

      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 shadow-2xl p-8 rounded-3xl w-[90%] max-w-md text-white relative z-10 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center mb-6 drop-shadow-md tracking-tight">
          {isLogin ? "Welcome To PG" : "Join the PG-Finder"}
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8 space-x-2">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded-l-full font-semibold ${
              isLogin
                ? "bg-white text-indigo-700 shadow"
                : "bg-white/20 hover:bg-white/30"
            } transition-all duration-300`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded-r-full font-semibold ${
              !isLogin
                ? "bg-white text-indigo-700 shadow"
                : "bg-white/20 hover:bg-white/30"
            } transition-all duration-300`}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-600 focus:outline-none"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-600 focus:outline-none"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-3 text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-600 focus:outline-none"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-600 focus:outline-none"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-600 focus:outline-none"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-3 text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <select
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 focus:outline-none"
              value={registerData.role}
              onChange={(e) =>
                setRegisterData({ ...registerData, role: e.target.value })
              }
            >
              <option value="ROLE_USER">User</option>
            </select>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
