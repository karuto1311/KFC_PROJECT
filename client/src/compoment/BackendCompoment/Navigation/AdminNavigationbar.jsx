import React from "react";
import { FaSearch } from "react-icons/fa";
import chickenlogo from "../../../assets/chickenlogo.png";

function AdminNavigationbar() {
  return (
    <nav className="bg-red-500 px-4 py-3 flex justify-between fixed top-0 left-0 w-full z-50">
      <div className="flex items-center text-xl">
        <img src={chickenlogo} className="text-white me-4 cursor-pointer" />
        <span className="text-white font-semibold">
          FASTFOOD-MANAGGER-PROJECT
        </span>
      </div>
      {/* <div className='flex items-center gap-x-5'>
        <button className='text-white'>Login</button>
        <button className='text-white'>Register</button>
      </div> */}
    </nav>
  );
}

export default AdminNavigationbar;
