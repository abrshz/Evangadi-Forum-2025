import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://evangdiforum-backend.onrender.com/api",
});

export default axiosInstance;
