import axios from "axios";

export const signup = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/signUp`,
    data,
    { withCredentials: true },
  );
  return res;
};
