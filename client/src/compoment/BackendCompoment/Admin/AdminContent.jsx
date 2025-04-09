import React, { useEffect, useState } from "react";
import "../../../assets/css/backendcss/admin.css";
import axios from "axios";
import { data, Link } from "react-router-dom";

function AdminContent() {
  const [admin, setadmin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1311/")
      .then((res) => setadmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded ml-64">
      <div className="w-50 bg-white rounded">
        <Link to="/CreateAdmin">
          <button className="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
            Thêm nhân viên
          </button>
        </Link>

        <table className="table-auto w-full border-collapse text-center">
          <thead>
            <tr className="bg-red-400">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Họ</th>
              <th className="border px-4 py-2">Tên</th>
              <th className="border px-4 py-2">Số điện thoại</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Mật khẩu</th>
              <th className="border px-4 py-2">Giới tính</th>
              <th className="border px-4 py-2">Ngày sinh</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((data, i) => (
              <tr>
                <td>{data.IDAdmin}</td>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.PhoneNumber}</td>
                <td>{data.Email}</td>
                <td>{data.Pass}</td>
                <td>
                  {data.Gender === 1
                    ? "Nam"
                    : data.Gender === 0
                    ? "Nữ"
                    : "Chưa cập nhật"}
                </td>
                <td>
                  {data.Birthday
                    ? new Date(data.Birthday).toLocaleDateString("vi-VN")
                    : ""}
                </td>
                <td className="flex gap-4 justify-center">
                  <button className="bg-yellow-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                    Update
                  </button>
                  <button className="bg-blue-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                    Details
                  </button>
                  <button className="bg-red-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                    Delete
                  </button>
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
