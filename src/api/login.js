import axios from "axios";
export const login = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, data, {
    withCredentials: true,
  });
  return res;
};
