import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Nav Links */}
      <nav className="flex flex-col gap-1 p-4">
        <NavLink
          to="feed"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          }
        >
          Feed
        </NavLink>

        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="connections"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          }
        >
          Connections
        </NavLink>

        <NavLink
          to="requests"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          }
        >
          Requests
        </NavLink>
      </nav>
    </aside>
  );
};

export default Navbar;
