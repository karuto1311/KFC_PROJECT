import React, { useState } from "react";
import '../../../assets/css/backendcss/admin.css'

function AdminContent() {
  const [gender, setGender] = useState(""); // State cho giới tính
  const [dob, setDob] = useState("");       // State cho ngày sinh

  const handleGenderChange = (e) => setGender(e.target.value);
  const handleDobChange = (e) => setDob(e.target.value);

  return (
    <div className="p-6 bg-white shadow rounded ml-64">
      <div className="w-50 bg-white rounded">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
          Thêm nhân viên
        </button>

        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Họ</th>
              <th className="border px-4 py-2">Tên</th>
              <th className="border px-4 py-2">Số điện thoại</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Mật khẩu</th>
              <th className="border px-4 py-2">Giới tính</th>
              <th className="border px-4 py-2">Ngày sinh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><input type="text" className="border rounded px-2 py-1 w-full" /></td>
              <td className="border px-4 py-2"><input type="text" className="border rounded px-2 py-1 w-full" /></td>
              <td className="border px-4 py-2"><input type="tel" className="border rounded px-2 py-1 w-full" /></td>
              <td className="border px-4 py-2"><input type="email" className="border rounded px-2 py-1 w-full" /></td>
              <td className="border px-4 py-2"><input type="password" className="border rounded px-2 py-1 w-full" /></td>
              <td className="border px-4 py-2">
                <select
                  value={gender}
                  onChange={handleGenderChange}
                  className="border rounded px-2 py-1 w-full"
                >
                  <option value="">Chọn</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                <input
                  type="date"
                  value={dob}
                  onChange={handleDobChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminContent;
