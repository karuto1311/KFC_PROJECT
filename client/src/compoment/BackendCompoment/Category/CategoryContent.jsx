import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, Link } from "react-router-dom";

function CategoryContent() {
  const [category, setcategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1311/category`)
      .then((res) => setcategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (IDCategory) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?");
    if (!isConfirmed) return;
  
    try {
      await axios.delete(`http://localhost:1311/deleteCategory/` + IDCategory);
      alert("Xóa thành công!");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Có lỗi xảy ra khi xóa!");
    }
  };
  

  return (
    <div className="p-6  ml-64 pt-[100px]">
      <div className="w-50 bg-white rounded">
        <Link to="/createCategory">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
            Thêm danh mục
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
              <th className="border border-black px-4 py-2">Tên danh mục</th>
              <th className="border border-black px-4 py-2">Hình ảnh</th>

              <th className="border border-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {category
              .filter((data) => {
                const rowText = `${data.IDCategory} ${data.Name_Category}`.toLowerCase();
                return rowText.includes(searchTerm.toLowerCase());
              })
              .map((data, i) => (
                <tr key={i} className="text-center">
                  <td className="border border-black px-4 py-2">
                    {data.IDCategory}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.Name_Category	}
                  </td>
                  <td className=" border border-black px-4 py-2  items-center ">
                  <img
                      src={`http://localhost:1311/images/categories/${data.Image_Category}`}
                      alt={data.Name_Category}
                      className="w-32 h-32 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    <div className="flex gap-2 justify-center">
                      <Link to={`updateCategory/${data.IDCategory}`}>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow">
                          Update
                        </button>
                      </Link>
                      <Link to={`detailCategory/${data.IDCategory}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow">
                        Details
                      </button>
                      </Link>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow" onClick={e => handleDelete(data.IDCategory)}>
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

export default CategoryContent;
