import React, { useState, useEffect } from "react";
import AdminNavigationbar from "../Navigation/AdminNavigationbar";
import AdminSlidebar from "../Navigation/AdminSlidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CategoryDetails() {
  const { IDCategory } = useParams();
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1311/getCategory/${IDCategory}`)
      .then((res) => setCategory(res.data))
      .catch((err) => {
        console.log(err);
        setError("Không thể tải thông tin danh mục.");
      });
  }, [IDCategory]);

  if (error) {
    return <div className="text-red-500 ml-64">{error}</div>;
  }

  if (!category) {
    return <div className="ml-64 p-6">Đang tải dữ liệu...</div>;
  }

  return (
    <div>
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className="AdminCreate">
        <div className="p-6 bg-white ml-64 pt-[100px]">
          <div className="w-50 bg-white rounded">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Chi tiết danh mục {IDCategory}
            </h2>

            <div className="mb-4">
              <label className="block font-medium">ID</label>
              <p>{category.IDCategory}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Tên danh mục</label>
              <p>{category.Name_Category}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Hình ảnh</label>
              <p>{category.Image_Category	}</p>
              <img
                      src={`http://localhost:1311/images/categories/${category.Image_Category}`}
                      alt={category.Name_Category}
                      className="w-32 h-32 object-cover rounded "
                    />
            </div>

            <Link to="/category">
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

export default CategoryDetails;
