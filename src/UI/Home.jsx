import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
