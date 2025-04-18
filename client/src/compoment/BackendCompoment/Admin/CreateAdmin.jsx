import React from "react";
import AdminNavigationbar from "../Navigation/AdminNavigationbar";
import AdminSlidebar from "../Navigation/AdminSlidebar";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👁️

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateAdmin() {
  // const [AdminID, SetAdminID] = useState("");
  const [AdminFname, SetAdminFname] = useState("");
  const [AdminLname, SetAdminLname] = useState("");
  const [AdminSDT, SetAdminSDT] = useState("");
  const [AdminEmail, SetAdminEmail] = useState("");
  const [AdminPassword, SetAdminPassword] = useState("");
  const [AdminGender, SetAdminGender] = useState(null);
  const [AdminBirth, SetAdminBirth] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  

  const [error, setError] = useState("");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

  function handleSubmit(event) {
    event.preventDefault();

    // Kiểm tra rỗng
    if (
      // !AdminID.trim() ||
      !AdminFname.trim() ||
      !AdminLname.trim() ||
      !AdminSDT.trim() ||
      !AdminEmail.trim() ||
      !AdminPassword.trim() ||
      AdminGender === null ||
      !AdminBirth
    ) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Kiểm tra định dạng email
    if (!isEmailValid(AdminEmail)) {
      setError("Email không hợp lệ!");
      return;
    }

    // Nếu hợp lệ, xóa lỗi cũ
    setError("");


    axios
      .post(`http://localhost:1311/createAdmin`, {
        // AdminID,
        AdminFname,
        AdminLname,
        AdminSDT,
        AdminEmail,
        AdminPassword,
        AdminGender: AdminGender !== null ? AdminGender : null, // đảm bảo đúng kiểu
        AdminBirth,
      })
      .then((res) => {
        console.log(res);
        alert("Tạo nhân viên thành công!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="">
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className="AdminCreate">
        <div className="p-6 bg-white  ml-64 pt-[100px]">
          <div className="w-50 bg-white rounded">
            <form className="" onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Thêm nhân viên
              </h2>

              {/* <div className="mb-4">
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
                  onChange={(e) => SetAdminID(e.target.value)}
                />
              </div> */}
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
                  onChange={(e) => SetAdminFname(e.target.value)}
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
                  onChange={(e) => SetAdminLname(e.target.value)}
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
                  onChange={(e) => SetAdminSDT(e.target.value)}
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
                  onChange={(e) => SetAdminEmail(e.target.value)}
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => SetAdminPassword(e.target.value)}
                />
                <button type="button" onClick={togglePassword} className="p-2">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
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
                      onChange={(e) => SetAdminGender(Number(e.target.value))}
                      checked={AdminGender === 1}
                    />
                    <span className="ml-2">Nam</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="0"
                      className="form-radio text-red-500"
                      onChange={(e) => SetAdminGender(Number(e.target.value))}
                      checked={AdminGender === 0}
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
                  onChange={(e) => SetAdminBirth(e.target.value)}
                />
              </div>
              {error && (
                <div className="text-red-500 font-medium mb-4">{error}</div>
              )}

              <div className=" flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                  Submit
                </button>
                <Link to="/">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
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
