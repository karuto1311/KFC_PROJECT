import React from 'react'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'
import { Link, useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


function UpdateProduct() {
const [categories, setCategories] = useState([]); // Đảm bảo categories được khai báo ở đây
const { IDProduct } = useParams();
 const [ProductName, setNamePro] = useState("");
 const [IDCategory, setIDCategory] = useState("");
 const [ProductImage, setImageProduct] = useState(null);
 const [ProductDescription, setDescription] = useState("");
 const [ProductPrice, setPrice] = useState("");
 const [ProductQuantity, setQuantity] = useState("");
 const navigate = useNavigate();
 const [error, setError] = useState("");
 

     // Lấy danh sách danh mục
    useEffect(() => {
        axios.get("http://localhost:1311/category")
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, []);

  function handleSubmit (event){
    event.preventDefault();

     // Kiểm tra rỗng
     if (!ProductName.trim() || !IDCategory.trim()) {
        setError("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Nếu hợp lệ, xóa lỗi cũ
    setError("");


    const formData = new FormData();
    // formData.append('IDCategory', CategoryID);
    formData.append('NamePro', ProductName);
    formData.append('IDCategory', IDCategory);
    formData.append('Description', ProductDescription);
    formData.append('Price', ProductPrice);
    formData.append('Quantity', ProductQuantity);
    formData.append('ImagePro', ProductImage);  // gửi file
    formData.append('folder', 'products');  // Gửi thông tin về loại thư mục (danh mục)


    axios
      .put(`http://localhost:1311/updateProduct/${IDProduct}?folder=products`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }

      })
      .then((res) => {
        console.log(res);
        alert("cập nhật sản phẩm thành công!");
        navigate("/product");
      })
      .catch((err) => console.log(err));


  }

  function handleImage(e) {
        console.log(e.target.files)
        setImageProduct(e.target.files[0])
  }


  return (
    <div>
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className='createProduct'>
        <div className='p-6 bg-white  ml-64 pt-[100px]'>
          <div className='w-50 bg-white rounded"'>
              <form className='' onSubmit={handleSubmit} >
              <h2 className="text-xl font-semibold mb-4 text-center">
                    Cập nhật sản phẩm {IDProduct}
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Tên sản phẩm
                </label>
                <input
                  id="productName"
                  type="text"
                  placeholder="Enter product"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => setNamePro(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productCategory"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Loại sản phẩm
                </label>
                <select
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                    onChange={(e) => setIDCategory(e.target.value)}>
                    <option value="">Chọn danh mục</option>
                    {categories.map(category => (
                        <option key={category.IDCategory} value={category.IDCategory}>
                            {category.Name_Category}
                        </option>
                    ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productimg"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Hình ảnh
                </label>
                <input
                  id="productimg"
                  type="file"
                  name='file'
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none
                             hover:border-red-400 hover:ring-1 hover:ring-red-400 transition duration-150"
                  onChange={handleImage}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productdes"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Mô tả
                </label>
                <textarea
                  id="productdes"
                  type="text"
                  placeholder="Enter product Description"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  rows={4} cols={40}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productPrice"
                  className="block text-gray-700 font-medium mb-1"
                >
                 Giá tiền
                </label>
                <input
                  id="productPrice"
                  type="text"
                  placeholder="Enter product Price"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productQuantity"
                  className="block text-gray-700 font-medium mb-1"
                >
                    Số lượng
                </label>
                <input
                  id="productQuantity"
                  type="text"
                  placeholder="Enter product Quantity"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {error && (
                <div className="text-red-500 font-medium mb-4">{error}</div>
              )}


              <div className=" flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                  Submit
                </button>
                <Link to="/product">
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
  )
}

export default UpdateProduct