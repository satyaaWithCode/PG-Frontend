import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import submitStudentFormApi from "../api/submitStudentForm";

export const submitStudentForm = createAsyncThunk(
  "studentRegistration/submitStudentForm",
  async ({ formData, aadharFile }, { rejectWithValue }) => {
    try {
      const result = await submitStudentFormApi(formData, aadharFile);
      return result;
    } catch (err) {
      return  rejectWithValue(
  err.response?.data?.message || err.message || "Failed to submit"
);

    }
  }
);

const initialState = {
  formData: {
    name: "",
    address: "",
    aadharNumber: "",
    phone: "",
    email: "",
    currentAddress: "",
  },
  aadharFile: null,
  loading: false,
  error: null,
  success: false,
};

const studentRegistrationSlice = createSlice({
  name: "studentRegistration",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setAadharFile: (state, action) => {
      state.aadharFile = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitStudentForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitStudentForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.formData = initialState.formData;
        state.aadharFile = null;
      })
      .addCase(submitStudentForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { setFormData, setAadharFile, reset } = studentRegistrationSlice.actions;

export default studentRegistrationSlice.reducer;
