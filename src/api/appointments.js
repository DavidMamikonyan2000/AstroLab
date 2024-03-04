import { api } from "./api";

export const createAppointments = async (data) => {
  const res = await api.post("appointments", data).then((res) => res.data);
  return res;
};
