import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expenseService from "./expensesService";

const initialState = {
  expenses: null,
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
  export const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
      expensesReset: (state) => {
        state.isExpensesLoading = false;
        state.isExpensesError = false;
        state.isExpensesSuccess = false;
        state.expensesMessage = "";
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
        })
        
    },
  });


export const { expensesReset } = expensesSlice.actions;
export default expensesSlice.reducer;