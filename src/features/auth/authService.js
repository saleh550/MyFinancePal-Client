import axios from "axios";

const API_URL = "https://myfinancepal-server.onrender.com/api/users";
// const API_URL = "/api/users";

//register user
const register = async (Data) => {
  const response = await axios.post(`${API_URL}`, Data);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const login = async (Data) => {
  const response = await axios.post(`${API_URL}/login`, Data);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


//check if the user is exist by the phone number 
const checkUserExist = async (Data) => {
  const response = await axios.post(`${API_URL}/check/userExist`, Data);

  return response.data;
};
//Logout user
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  checkUserExist,
  logout
};
export default authService;