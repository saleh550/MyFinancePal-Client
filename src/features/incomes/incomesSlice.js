import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import incomesService from "./incomesService";

const initialState = {
  newIncome:null,
  incomes: null,
  incomesData:null,
  isIncomesLoading: false,
  isIncomesSuccess: false,
  isIncomesError: false,
  incomesMessage: "",
};

//add new income 
export const addNewIncome = createAsyncThunk(
    "new/income",
    async (data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await incomesService.addNewIncome(data,token);
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

    //add new income 
export const getIncomesData = createAsyncThunk(
  "get/incomes/data",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await incomesService.getIncomesData(data,token);
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


  export const incomesSlice = createSlice({
    name: "incomes",
    initialState,
    reducers: {
      incomesReset: (state) => {
        state.isIncomesLoading = false;
        state.isIncomesError = false;
        state.isIncomesSuccess = false;
        state.incomesMessage = "";
        state.newIncome=null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(addNewIncome.pending, (state) => {
          state.isIncomesLoading = true;
        })
        .addCase(addNewIncome.rejected, (state, action) => {
          state.isIncomesLoading = false;
          state.isIncomesError = true;
          state.incomesMessage = action.payload;
        })
        .addCase(addNewIncome.fulfilled, (state, action) => {
          state.isIncomesLoading = false;
          state.isIncomesSuccess = true;
          state.newIncome=action.payload;
        })
        .addCase(getIncomesData.pending, (state) => {
          state.isIncomesLoading = true;
        })
        .addCase(getIncomesData.rejected, (state, action) => {
          state.isIncomesLoading = false;
          state.isIncomesError = true;
          state.incomesMessage = action.payload;
        })
        .addCase(getIncomesData.fulfilled, (state, action) => {
          state.isIncomesLoading = false;
          state.isIncomesSuccess = true;
          state.incomesData=action.payload
        })
        
    },
  });


export const { incomesReset } = incomesSlice.actions;
export default incomesSlice.reducer;