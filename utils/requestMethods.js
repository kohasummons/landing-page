import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XmlHttpRequest",
  },
  withCredentials: true,
});

export default request;
