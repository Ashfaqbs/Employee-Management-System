import axios from "axois";

const BACKEND_Rest_API_BASE_URL = "http://localhost:8080/api/v1/employees";

import React from "react";

export const listEmployees = () => axios.get(BACKEND_Rest_API_BASE_URL);

