import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-gray-800 text-white h-full flex flex-col transition-all duration-300 md:w-64 sm:w-20`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className={`${isCollapsed ? "hidden" : "text-xl font-bold"}`}>
          Admin Panel
        </h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {isCollapsed ? ">" : "<"}
        </button>
      </div>

      <ul className="flex flex-col mt-4 space-y-2">
        <li>
          <Link
            to="/"
            className={`flex items-center p-2 rounded hover:bg-gray-700 ${
              location.pathname === "/" ? "bg-gray-700" : ""
            }`}
          >
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className={`flex items-center p-2 rounded hover:bg-gray-700 ${
              location.pathname === "/users" ? "bg-gray-700" : ""
            }`}
          >
            {!isCollapsed && <span className="ml-3">User Management</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/roles"
            className={`flex items-center p-2 rounded hover:bg-gray-700 ${
              location.pathname === "/roles" ? "bg-gray-700" : ""
            }`}
          >
            {!isCollapsed && <span className="ml-3">Role Management</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
