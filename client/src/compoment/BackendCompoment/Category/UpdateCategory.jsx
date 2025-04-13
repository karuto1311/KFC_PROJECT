import React from 'react'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'
import { Link, useNavigate ,useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function UpdateCategory() {

//  const [CategoryID, SetCategoryID] = useState(""); 
const { IDCategory } = useParams();
 const [CategoryName, SetCategoryName] = useState("");
 const [CategoryImage, SetcategoryImage] = useState('');
 const navigate = useNavigate();
 const [error, setError] = useState("");
 

  function handleSubmit (event){
    event.preventDefault();

     // Kiểm tra rỗng
     if (!CategoryName.trim()) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Nếu hợp lệ, xóa lỗi cũ
    setError("");


    const formData = new FormData();
    // formData.append('IDCategory', CategoryID);
    formData.append('Name_Category', CategoryName);
    formData.append('Image_Category', CategoryImage); // gửi file
    formData.append('folder', 'categories');  // Gửi thông tin về loại thư mục (danh mục)


    axios
      .put(`http://localhost:1311/updateCategory/${IDCategory}?folder=categories`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }

      })
      .then((res) => {
        console.log(res);
        alert("Cập nhật danh mục thành công!");
        navigate("/category");
      })
      .catch((err) => console.log(err));


  }

  function handleImage(e) {
        console.log(e.target.files)
        SetcategoryImage(e.target.files[0])
  }


  return (
    <div>
      <AdminNavigationbar />
      <AdminSlidebar />
      <div className='createCategory'>
        <div className='p-6 bg-white  ml-64 pt-[100px]'>
          <div className='w-50 bg-white rounded"'>
              <form className='' onSubmit={handleSubmit} >
              <h2 className="text-xl font-semibold mb-4 text-center">
                    Cập nhật danh mục {IDCategory}
              </h2>
              {/* <div className="mb-4">
                <label
                  htmlFor="categoryId"
                  className="block text-gray-700 font-medium mb-1"
                >
                  ID
                </label>
                <input
                  id="categoryId"
                  type="text"
                  placeholder="Enter ID"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => SetCategoryID(e.target.value)}
                />
              </div> */}
              <div className="mb-4">
                <label
                  htmlFor="categoryName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Tên danh mục
                </label>
                <input
                  id="categoryName"
                  type="text"
                  placeholder="Enter category"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => SetCategoryName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="categoryimg"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Hình ảnh
                </label>
                <input
                  id="categoryimg"
                  type="file"
                  name='file'
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none
                             hover:border-red-400 hover:ring-1 hover:ring-red-400 transition duration-150"
                  onChange={handleImage}
                />
              </div>

              {error && (
                <div className="text-red-500 font-medium mb-4">{error}</div>
              )}


              <div className=" flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
                  Submit
                </button>
                <Link to="/category">
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

export default UpdateCategory