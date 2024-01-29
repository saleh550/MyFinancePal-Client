import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isExist:null,
  isAuthLoading: false,
  isAuthSuccess: false,
  isAuthError: false,
  authMessage: "",
};

//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
//logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

//check user exist by phone number
export const checkUserExist= createAsyncThunk("auth/checkUserExist", async (phoneNumber, thunkAPI) => {
  try {
    return await authService.checkUserExist(phoneNumber);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isAuthLoading = false;
      state.isAuthError = false;
      state.isAuthSuccess = false;
      state.isExist=null
      state.authMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthError = true;
        state.user = null;
        state.authMessage = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthError = true;
        state.user = null;
        state.authMessage = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthSuccess = true;
        state.user = action.payload;
      })
      .addCase(checkUserExist.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(checkUserExist.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthError = true;
        state.isExist= null;
        state.authMessage = action.payload;
      })
      .addCase(checkUserExist.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthSuccess = true;
        state.isExist = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;