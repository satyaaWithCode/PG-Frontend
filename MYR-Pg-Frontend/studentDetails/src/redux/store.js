// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./studentsSlice";
import studentRegistrationReducer from "./studentRegistrationSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    students: studentsReducer,
    studentRegistration: studentRegistrationReducer,
    auth: authReducer
  },
});

export default store;
