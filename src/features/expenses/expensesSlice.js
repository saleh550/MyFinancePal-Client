import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expenseService from "./expensesService";

const initialState = {
  newExpense:null,
  expensesByDate:null,
  expenses: null,
  expensesData:null,
  isExpensesLoading: false,
  isExpensesSuccess: false,
  isExpensesError: false,
  expensesMessage: "",
};

//add new income 
export const addNewExpense = createAsyncThunk(
    "new/expense",
    async (data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await expenseService.addNewExpense(data,token);
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
export const getExpensesData = createAsyncThunk(
  "get/expenses/data",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await expenseService.getExpenseData(data,token);
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
  export const getExpensesByDate = createAsyncThunk(
    "expenses/by/date",
    async (data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await expenseService.getExpensesByDate(data,token);
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


  export const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
      expensesReset: (state) => {
        state.isExpensesLoading = false;
        state.isExpensesError = false;
        state.isExpensesSuccess = false;
        state.expensesMessage = "";
        state.newExpense=null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(addNewExpense.pending, (state) => {
          state.isExpensesLoading = true;
        })
        .addCase(addNewExpense.rejected, (state, action) => {
          state.isExpensesLoading = false;
          state.isExpensesError = true;
          state.expensesMessage = action.payload;
        })
        .addCase(addNewExpense.fulfilled, (state, action) => {
          state.isExpensesLoading = false;
          state.isExpensesSuccess = true;
          state.newExpense=action.payload;
        })
        .addCase(getExpensesData.pending, (state) => {
          state.isExpensesLoading = true;
        })
        .addCase(getExpensesData.rejected, (state, action) => {
          state.isExpensesLoading = false;
          state.isExpensesError = true;
          state.expensesMessage = action.payload;
        })
        .addCase(getExpensesData.fulfilled, (state, action) => {
          state.isExpensesLoading = false;
          state.isExpensesSuccess = true;
          state.expensesData=action.payload;
        })
        .addCase(getExpensesByDate.pending, (state) => {
          state.isExpensesLoading = true;
        })
        .addCase(getExpensesByDate.rejected, (state, action) => {
          state.isExpensesLoading = false;
          state.isExpensesError = true;
          state.expensesMessage = action.payload;
        })
        .addCase(getExpensesByDate.fulfilled, (state, action) => {
          state.isExpensesLoading = false;
          state.isExpensesSuccess = true;
          state.expensesByDate=action.payload;
        })
        
    },
  });


export const { expensesReset } = expensesSlice.actions;
export default expensesSlice.reducer;