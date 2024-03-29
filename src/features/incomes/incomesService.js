import axios from "axios";

// const API_URL = "/api/incomes";
const API_URL = "https://myfinancepal-server.onrender.com/api/incomes";

//add new income
const addNewIncome = async (Data,token) => {
    const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
  try {
    const response = await axios.post(`${API_URL}/add/income`, Data,config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
//get expense data for the graph
const getIncomesData = async (Data,token) => {
  const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
try {
  const response = await axios.get(`${API_URL}/get/incomes/data`,config);
  return response.data;
} catch (error) {
  throw new Error(error);
}
};

//get incomes by date
const getIncomesByDate = async (Data, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/get/incomes/by/date`, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const incomesService = {
    addNewIncome,
    getIncomesData,
    getIncomesByDate
};
export default incomesService;
