import React, { useEffect, useState } from "react";
import "../../../assets/css/backendcss/admin.css";
import axios from "axios";
import { data, Link } from "react-router-dom";

function AdminContent() {
  const [admin, setadmin] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1311/`)
      .then((res) => setadmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6  ml-64">
      <div className="w-50 bg-white rounded">
        <Link to="/createAdmin">
          <button className="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
            Thêm nhân viên
          </button>
        </Link>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <table className="table-auto w-full border border-black border-collapse text-center">
          <thead>
            <tr className="bg-red-500">
              <th className="border border-black px-4 py-2">ID</th>
              <th className="border border-black px-4 py-2">Họ</th>
              <th className="border border-black px-4 py-2">Tên</th>
              <th className="border border-black px-4 py-2">Số điện thoại</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="border border-black px-4 py-2">Mật khẩu</th>
              <th className="border border-black px-4 py-2">Giới tính</th>
              <th className="border border-black px-4 py-2">Ngày sinh</th>
              <th className="border border-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admin
              .filter((data) => {
                const rowText = `${data.IDAdmin} ${data.FirstName} ${
                  data.LastName
                } ${data.PhoneNumber} ${data.Email} ${data.Pass} ${
                  data.Gender === 1
                    ? "Nam"
                    : data.Gender === 0
                    ? "Nữ"
                    : "Chưa cập nhật"
                } ${
                  data.Birthday
                    ? new Date(data.Birthday).toLocaleDateString("vi-VN")
                    : ""
                }`.toLowerCase();

                return rowText.includes(searchTerm.toLowerCase());
              })
              .map((data, i) => (
                <tr key={i}>
                  <td className="border border-black px-4 py-2">
                    {data.IDAdmin}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.FirstName}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.LastName}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.PhoneNumber}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.Email}
                  </td>
                  <td className="border border-black px-4 py-2">{data.Pass}</td>
                  <td className="border border-black px-4 py-2">
                    {data.Gender === 1
                      ? "Nam"
                      : data.Gender === 0
                      ? "Nữ"
                      : "Chưa cập nhật"}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.Birthday
                      ? new Date(data.Birthday).toLocaleDateString("vi-VN")
                      : ""}
                  </td>
                  <td className="border border-black px-4 py-2">
                    <div className="flex gap-2 justify-center">
                      <Link to={`updateAdmin/${data.IDAdmin}`}>
                        <button className="bg-yellow-500 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-red-400 rounded shadow">
                          Update
                        </button>
                      </Link>
                      <button className="bg-blue-500 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-red-400 rounded shadow">
                        Details
                      </button>
                      <button className="bg-red-500 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-red-400 rounded shadow">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminContent;
