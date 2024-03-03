import { apiLogin } from "./api";

export const userLogin = async (data) => {
  const res = await apiLogin.post("users/login", data).then((res) => res.data);
  return res;
};

export const userRegister = async (data) => {
  const res = await apiLogin.post("users", data).then((res) => res.data);
  return res;
};