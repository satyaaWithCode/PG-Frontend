
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register, clearMessages } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import houseImg from "../assets/house.jpg";

export default function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, token, user, successMessage } = useSelector((state) => state.auth);

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_USER",
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessages());
      if (isLogin && token) {
        setTimeout(() => {
          navigate(user === "ROLE_ADMIN" ? "/admin/users" : "/StudentRegistration");
        }, 1000);
      } else if (!isLogin) {
        setIsLogin(true);
      }
    }
  }, [successMessage, token, user, isLogin, navigate, dispatch]);

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${houseImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-900/60 to-indigo-900/90 z-0" />

      <ToastContainer position="top-center" />

      <div className="relative z-10 w-full max-w-md p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg tracking-wide select-none">
          {isLogin ? "Welcome Back to PG-Finder" : "Create Your PG-Finder Account"}
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 bg-white/20 rounded-full shadow-inner overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-grow py-3 font-semibold text-lg transition-colors duration-300 ${
              isLogin
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-white/70 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-grow py-3 font-semibold text-lg transition-colors duration-300 ${
              !isLogin
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-white/70 hover:text-white"
            }`}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-5 py-4 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition pr-12"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-indigo-600 transition"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-indigo-600 rounded-2xl text-white font-extrabold text-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-5 py-4 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition pr-12"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-indigo-600 transition"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
              </button>
            </div>

            <select
              className="w-full px-5 py-4 rounded-2xl bg-white/90 text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              value={registerData.role}
              onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
              required
            >
              <option value="ROLE_USER">User</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-indigo-600 rounded-2xl text-white font-extrabold text-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch(login(loginData));
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    dispatch(register(registerData));
  }
}
