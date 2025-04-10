import React, { useState, useEffect } from "react";
import AdminNavigationbar from "../Navigation/AdminNavigationbar";
import AdminSlidebar from "../Navigation/AdminSlidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function AdminDetails() {
  const { IDAdmin } = useParams();
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1311/getAdmin/${IDAdmin}`)
      .then((res) => setAdmin(res.data))
      .catch((err) => {
        console.log(err);
        setError("Không thể tải thông tin nhân viên.");
      });
  }, [IDAdmin]);

  if (error) {
    return <div className="text-red-500 ml-64">{error}</div>;
  }

  if (!admin) {
    return <div className="ml-64 p-6">Đang tải dữ liệu...</div>;
  }

  return (
    <div>
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className="AdminCreate">
        <div className="p-6 bg-white ml-64">
          <div className="w-50 bg-white rounded">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Chi tiết nhân viên {IDAdmin}
            </h2>

            <div className="mb-4">
              <label className="block font-medium">Họ</label>
              <p>{admin.FirstName}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Tên</label>
              <p>{admin.LastName}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Số điện thoại</label>
              <p>{admin.PhoneNumber}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Email</label>
              <p>{admin.Email}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Mật khẩu</label>
              <p>{admin.Pass}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Giới tính</label>
              <p>{admin.Gender === 1
                      ? "Nam"
                      : admin.Gender === 0
                      ? "Nữ"
                      : "Chưa cập nhật"
                }</p>
            </div>

            <div className="mb-6">
              <label className="block font-medium">Ngày sinh</label>
              <p>{admin.Birthday
                      ? new Date(admin.Birthday).toLocaleDateString("vi-VN")
                      : ""
                
                }</p>
            </div>

            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow">
                Quay lại
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
