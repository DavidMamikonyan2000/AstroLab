import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("accessToken")) ||
      Cookies.get("accessToken")
    }`,
    "Content-Type": "application/json",
  },
});

const apiLogin = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshToken = async () => {
  const res = await api.post("users/refresh-token", {
    refreshToken: JSON.parse(localStorage.getItem("refreshToken")),
  });
  localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
  localStorage.setItem("refreshToken", JSON.stringify(res.data.refreshToken));
  return res.data;
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Check if the error is due to an expired token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Call your function to refresh the token
      const res = await refreshToken();
      originalRequest.headers.Authorization = `Bearer ${res.accessToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export { api, apiLogin };
