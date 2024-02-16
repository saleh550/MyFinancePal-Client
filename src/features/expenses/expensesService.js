import axios from "axios";

// const API_URL = "/api/expenses";
const API_URL = "https://myfinancepal-server.onrender.com/api/expenses";


//add new income
const addNewExpense = async (Data, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`${API_URL}/add/expense`, Data, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
//get expense data for the graph
const getExpenseData = async (Data, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/get/expenses/data`, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};


//get expense data for the graph
const getExpensesByDate = async (Data, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/get/expenses/by/date`, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};


//get all of expenses and incomes
const getExpensesAndIncomes = async (Data, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/get/expenses/and/incomes`, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const expenseService = {
  addNewExpense,
  getExpenseData,
  getExpensesByDate,
  getExpensesAndIncomes
};
export default expenseService;
