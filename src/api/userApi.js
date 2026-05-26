import axios from "axios";

const API = axios.create({
  baseURL: "http://35.178.111.40:8000",
});

export default API;