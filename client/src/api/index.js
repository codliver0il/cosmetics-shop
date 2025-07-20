import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2906/api", 
});

export default api;