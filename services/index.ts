import axios from "axios";

export const API = "http://localhost:3001";

const api = axios.create({
  baseURL: `${API}/api`,
  timeout: 1000000,
});

export default api;
