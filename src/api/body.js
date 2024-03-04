import { api } from "./api";

export const getBodyZone = async () => {
  const res = await api.get("body-zones").then((res) => res.data);
  return res;
};
