import axios from "axios";
const BACKEND_Rest_API_BASE_URL = "http://localhost:8080/api/v1/employees";

export const listEmployees = () => {
  return axios.get(BACKEND_Rest_API_BASE_URL);
};

export const addEmployees = (emp) => {
  return axios.post(BACKEND_Rest_API_BASE_URL, emp);
};

export const deleteEmp = (id) => {
  
  return axios.delete(`${BACKEND_Rest_API_BASE_URL}/${id}`);
};
