import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("accessToken")) ||
      Cookies.get("accessToken")
    }`,
    "Content-Type": "application/json",
  },
});

export const apiLogin = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});
