import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import incomeReducer from '../features/incomes/incomesSlice';
import expenseReducer from '../features/expenses/expensesSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    incomes:incomeReducer,
    expenses:expenseReducer

  },
});
