import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBox, FaBlogger, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-1/5 p-6 h-full md:block hidden bg-gradient-to-b from-[#a3541f] to-[#f0c9a5] min-h-screen shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-white pb-2">Admin Menu</h2>
      <ul>
        <li className="mb-4">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-md text-lg flex items-center ${
                isActive
                  ? 'bg-white text-[#a3541f] font-semibold shadow-md'
                  : 'text-white hover:bg-white hover:text-[#a3541f] transition duration-300'
              }`
            }
          >
            <FaBox className="mr-2" />
            Products
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/admin/blogs"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-md text-lg flex items-center ${
                isActive
                  ? 'bg-white text-[#a3541f] font-semibold shadow-md'
                  : 'text-white hover:bg-white hover:text-[#a3541f] transition duration-300'
              }`
            }
          >
            <FaBlogger className="mr-2" />
            Blogs
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-md text-lg flex items-center ${
                isActive
                  ? 'bg-white text-[#a3541f] font-semibold shadow-md'
                  : 'text-white hover:bg-white hover:text-[#a3541f] transition duration-300'
              }`
            }
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
