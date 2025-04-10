import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { PiInvoice } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { GiSellCard } from "react-icons/gi";
import { TbShoppingCartShare } from "react-icons/tb";


import { Link } from "react-router-dom";

function AdminSlidebar() {
  return (
    <div className="w-64 bg-red-500 fixed h-full">
      <hr className="border-gray-900" />
      <div className="p-4">
        <h1 className="text-xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr className="border-gray-600" />
      <ul className="mt-4 font-bold flex flex-col h-full">
        {/* Admin */}
        <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/" className="flex items-center space-x-2">
            <RiAdminFill className="text-2xl" />
            <span>Quản lý nhân viên</span>
          </Link>
        </li>
        {/* Category */}
        <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/category" className="flex items-center space-x-2">
            <MdCategory className="text-2xl" />
            <span>Quản lý danh mục</span>
          </Link>
        </li>
        {/* Product */}
        <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/product" className="flex items-center space-x-2">
            <GiChickenOven className="text-2xl" />
            <span>Quản lý sản phẩm</span>
          </Link>
        </li>
        {/* User  */}
        <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/user" className="flex items-center space-x-2">
            <FaUserAlt className="text-2xl" />
            <span>Quản lý khách hàng</span>
          </Link>
        </li>

          {/*đơn hàng */}
          <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/user" className="flex items-center space-x-2">
            <TbShoppingCartShare  className="text-2xl" />
            <span>Quản lý đơn hàng</span>
          </Link>
        </li>
        
        {/* Hóa đơn */}
        <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/user" className="flex items-center space-x-2">
            <PiInvoice className="text-2xl" />
            <span>Quản lý hóa đơn</span>
          </Link>
        </li>
        {/* Báo cáo và thống kê */}
        <li className="text-white hover:bg-red-600  transition-colors duration-200 py-2 px-3 rounded cursor-pointer">
          <Link to="/user" className="flex items-center space-x-2">
            <TbReportAnalytics className="text-2xl" />
            <span>Báo cáo và thông kê</span>
          </Link>
        </li>
        {/* Bán hàng */}
        <li className="text-white hover:bg-blue-600  transition-colors duration-200 py-2  px-3 rounded cursor-pointer">
          <Link to="/user" className="flex items-center space-x-2">
            <GiSellCard className="text-2xl" />
            <span>Bán hàng</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSlidebar;
