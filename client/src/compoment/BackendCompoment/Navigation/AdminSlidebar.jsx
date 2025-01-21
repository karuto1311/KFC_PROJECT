import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { Link } from "react-router-dom";


function AdminSlidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full">
      <div className="p-4">
        <h1 className="text-xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr className="border-gray-600" />
      <ul className="mt-4 font-bold">
        {/* Admin */}
        <li className="text-white hover:bg-blue-500 py-2 px-3 rounded cursor-pointer">
          <Link to ='/'  className="flex items-center space-x-2">
              <RiAdminFill className="text-2xl" />
              <span>Admin</span>
          </Link>
        </li>
        {/* Category */}
        <li className="text-white hover:bg-blue-500 py-2 px-3 rounded cursor-pointer">
          <Link to= '/category' className="flex items-center space-x-2">
              <MdCategory className="text-2xl" />
              <span>Category</span>
          </Link>
        </li>
        {/* Product */}
        <li className="text-white hover:bg-blue-500 py-2 px-3 rounded cursor-pointer">
          <Link to='/product' className="flex items-center space-x-2">
            <GiChickenOven className="text-2xl" />
            <span>Product</span>
          </Link>
        </li>
        {/* User  */}
        <li className="text-white hover:bg-blue-500 py-2 px-3 rounded cursor-pointer">
          <Link to='/user' className="flex items-center space-x-2">
            <FaUserAlt className="text-2xl" />
            <span>User</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSlidebar;
