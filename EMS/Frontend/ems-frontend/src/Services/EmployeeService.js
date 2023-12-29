import axios from "axios";
const BACKEND_Rest_API_BASE_URL = "http://localhost:8080/api/v1/mployees";

export const listEmployees = () => {
  return axios.get(BACKEND_Rest_API_BASE_URL);
};
