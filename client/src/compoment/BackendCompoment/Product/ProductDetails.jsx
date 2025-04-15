import React, { useState, useEffect } from "react";
import AdminNavigationbar from "../Navigation/AdminNavigationbar";
import AdminSlidebar from "../Navigation/AdminSlidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [categories, setCategories] = useState([]); // Đảm bảo categories được khai báo ở đây  
  const { IDProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

 // Lấy danh sách danh mục
 useEffect(() => {
    axios.get("http://localhost:1311/category")
        .then(res => setCategories(res.data))
        .catch(err => console.log(err));
}, []);

  useEffect(() => {
    axios
      .get(`http://localhost:1311/getProduct/${IDProduct}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
        setError("Không thể tải thông tin danh mục.");
      });
  }, [IDProduct]);

  if (error) {
    return <div className="text-red-500 ml-64">{error}</div>;
  }

  if (!product) {
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
              Chi tiết sản phẩm  {IDProduct}
            </h2>

            <div className="mb-4">
              <label className="block font-medium">ID</label>
              <p>{product.IDProduct}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Tên sản phẩm</label>
              <p>{product.NamePro}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Loại sản phẩm</label>
              <p>
              {
                    categories.find((category) => String(category.IDCategory) === String(product.IDCategory))?.Name_Category || "Không rõ"
              }
              </p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Mô tả</label>
              <p>{product.Description}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Giá tiền</label>
              <p>${product.Price.toFixed(2)}</p>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Số lượng</label>
              <p>{product.Quantity}</p>
            </div>
            



            <div className="mb-4">
              <label className="block font-medium">Hình ảnh</label>
              <p>{product.ImagePro}</p>
              <img
                      src={`http://localhost:1311/images/products/${product.ImagePro}`}
                      alt={product.NamePro}
                      className="w-32 h-32 object-cover rounded "
                    />
            </div>

            <Link to="/product">
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

export default ProductDetails;
