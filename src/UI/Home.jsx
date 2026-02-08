import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div>
        <h1>Header</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
