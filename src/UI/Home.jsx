import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - full width */}
      <Header />

      {/* Main section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Home;
