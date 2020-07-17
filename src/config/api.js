import axios from "axios";

const config = {
  timeout: 10000,
  baseURL: "https://api.github.com",
};

const api = axios.create(config);

export default api;
