import { api } from "./api";

export const getPatients = async () => {
  const res = await api.get("users").then((res) => res.data);
  return res;
};

export const getPatinetSingleData = async (id) => {
  const res = await api.get(`patients/${id}`).then((res) => res.data);
  return res;
};

export const addPatient = async (patient) => {
  const res = await api.post("patients", patient).then((res) => res.data);
  return res;
};

export const filterPatient = async (data) => {
  const res = await api.post("patients/filter", data).then((res) => res.data);
  return res;
};

export const updatePatient = async (id) => {
  const res = await api.post(`patients/${id}`).then((res) => res.data);
  return res;
};
