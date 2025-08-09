// src/redux/studentsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllStudents } from "../api/getAllStudents";
import deleteStudentApi from "../api/deleteStudent";

// Async thunk for fetching students
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllStudents();
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting a student
export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await deleteStudentApi(id);
      // After delete, re-fetch students list
      dispatch(fetchStudents());
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStudent.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default studentsSlice.reducer;
