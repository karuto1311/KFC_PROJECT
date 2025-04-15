import React from 'react'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateProduct() {
  const [categories, setCategories] = useState([]);
  const { IDProduct } = useParams();
  const [ProductName, setNamePro] = useState("");
  const [IDCategory, setIDCategory] = useState("");
  const [ProductImage, setImageProduct] = useState(null);
  const [ProductDescription, setDescription] = useState("");
  const [ProductPrice, setPrice] = useState("");
  const [ProductQuantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1311/product`)
      .then((res) => {
        const selectedProduct = res.data.find(p => p.IDProduct == IDProduct);
        if (selectedProduct) {
          setNamePro(selectedProduct.NamePro);
          setIDCategory(selectedProduct.IDCategory);
          setDescription(selectedProduct.Description);
          setPrice(selectedProduct.Price);
          setQuantity(selectedProduct.Quantity);
        }
      })
      .catch((err) => console.log(err));
  }, [IDProduct]);

  useEffect(() => {
    axios.get("http://localhost:1311/category")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (!ProductName.trim() || !IDCategory.trim()) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append('NamePro', ProductName);
    formData.append('IDCategory', IDCategory);
    formData.append('Description', ProductDescription);
    formData.append('Price', ProductPrice);
    formData.append('Quantity', ProductQuantity);
    formData.append('ImagePro', ProductImage);
    formData.append('folder', 'products');

    axios
      .put(`http://localhost:1311/updateProduct/${IDProduct}?folder=products`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((res) => {
        alert("Cập nhật sản phẩm thành công!");
        navigate("/product");
      })
      .catch((err) => console.log(err));
  }

  function handleImage(e) {
    setImageProduct(e.target.files[0]);
  }

  return (
    <div>
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className='createProduct'>
        <div className='p-6 bg-white ml-64 pt-[100px]'>
          <div className='w-50 bg-white rounded"'>
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Cập nhật sản phẩm {IDProduct}
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Tên sản phẩm</label>
                <input
                  type="text"
                  value={ProductName}
                  onChange={(e) => setNamePro(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Loại sản phẩm</label>
                <select
                  value={IDCategory}
                  onChange={(e) => setIDCategory(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map(category => (
                    <option key={category.IDCategory} value={category.IDCategory}>
                      {category.Name_Category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Hình ảnh</label>
                <input
                  type="file"
                  onChange={handleImage}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none hover:border-red-400 hover:ring-1 hover:ring-red-400 transition duration-150"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Mô tả</label>
                <textarea
                  value={ProductDescription}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Giá tiền</label>
                <input
                  type="text"
                  value={ProductPrice}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Số lượng</label>
                <input
                  type="text"
                  value={ProductQuantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {error && <div className="text-red-500 font-medium mb-4">{error}</div>}

              <div className="flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                  Submit
                </button>
                <Link to="/product">
                  <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                    Exit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct;
