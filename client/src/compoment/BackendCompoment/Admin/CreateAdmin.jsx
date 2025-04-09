import React from "react";
import AdminNavigationbar from "../Navigation/AdminNavigationbar";
import AdminSlidebar from "../Navigation/AdminSlidebar";
import { Link } from "react-router-dom";

function CreateAdmin() {
  return (
    <div className="">
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className="AdminCreate">
        <div className="p-6 bg-white shadow rounded ml-64">
          <div className="w-50 bg-white rounded">
            <form className="">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Thêm nhân viên
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="adminId"
                  className="block text-gray-700 font-medium mb-1"
                >
                  ID
                </label>
                <input
                  id="adminId"
                  type="text"
                  placeholder="Enter ID"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="adminFname"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Họ
                </label>
                <input
                  id="adminFname"
                  type="text"
                  placeholder="Enter Fname"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="adminLname"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Tên
                </label>
                <input
                  id="adminLname"
                  type="text"
                  placeholder="Enter Lname"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="adminSDT"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Số điện thoại
                </label>
                <input
                  id="adminSDT"
                  type="text"
                  placeholder="Enter SDT"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="adminEmail"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="adminEmail"
                  type="text"
                  placeholder="Enter Email"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="adminPassword"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Mật khẩu
                </label>
                <input
                  id="adminPassword"
                  type="text"
                  placeholder="Enter Password"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Giới tính
                </label>
                <div className="flex items-center space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="1"
                      className="form-radio text-red-500"
                    />
                    <span className="ml-2">Nam</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="0"
                      className="form-radio text-red-500"
                    />
                    <span className="ml-2">Nữ</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="adminBirth"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Ngày sinh
                </label>
                <input
                  id="adminBirth"
                  type="datetime-local"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className=" flex gap-4">
                <button className="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                  Submit
                </button>
                <Link to="/">
                  <button className="bg-red-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                    Exit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
