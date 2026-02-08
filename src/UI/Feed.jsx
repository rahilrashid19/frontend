import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMyProfile = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/getMyProfile`, {
    withCredentials: true,
  });
  return res.data;
};

const Feed = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["myProfile"],
    queryFn: getMyProfile,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(data);

  return <div>Feed</div>;
};

export default Feed;
