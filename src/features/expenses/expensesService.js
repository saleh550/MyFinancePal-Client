import axios from "axios";

const API_URL = "/api/expenses";

//add new income
const addNewExpense = async (Data,token) => {
    const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
  try {
    const response = await axios.post(`${API_URL}/add/expense`, Data,config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const expenseService = {
    addNewExpense,
};
export default expenseService;
