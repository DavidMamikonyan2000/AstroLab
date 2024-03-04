import { api } from "./api";

export const getLaserTypes = async () => {
  const res = await api.get("laser-types").then((res) => res.data);
  return res;
};
