import axios from "axios";
const BACKEND_Rest_API_BASE_URL = "http://localhost:8080/api/v1/employees";
export const listEmployees = () => axios.get(BACKEND_Rest_API_BASE_URL);

export const getListOfAllEmp = axios.get('http://localhost:8080/api/v1/employees')
