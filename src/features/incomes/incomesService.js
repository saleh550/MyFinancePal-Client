import axios from "axios";

const API_URL = "/api/incomes";

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

const incomesService = {
    addNewIncome,
};
export default incomesService;
