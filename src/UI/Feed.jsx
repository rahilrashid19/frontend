// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const getData = async () => {
//   const res = axios.get(`${import.meta.env.VITE_BASE_URL}/getFeed`, {
//     withCredentials: true,
//   });
//   return res.data;
// };

// const Feed = () => {
//   const { data, isError, isLoading, error } = useQuery({
//     queryKey: ["feed"],
//     queryFn: getData,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error: {error.message}</div>;

//   console.log(data);

//   return <div>Feed</div>;
// };

// export default Feed;

const Feed = () => {
  return <div>Feed</div>;
};

export default Feed;
