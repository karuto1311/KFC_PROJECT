import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, Link } from "react-router-dom";

function ProductContent() {
  const [categories, setCategories] = useState([]); // Đảm bảo categories được khai báo ở đây
  const [product, setproduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


      // Lấy danh sách danh mục
      useEffect(() => {
        axios.get("http://localhost:1311/category")
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:1311/product`)
      .then((res) => setproduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (IDProduct) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
    if (!isConfirmed) return;
  
    try {
      await axios.delete(`http://localhost:1311/deleteProduct/` + IDProduct);
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
        <Link to="/createProduct">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-400 rounded shadow mb-4">
            Thêm sản phẩm
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
              <th className="border border-black px-4 py-2">Tên sản phẩm</th>
              <th className="border border-black px-4 py-2">Loại sản phẩm</th>
              <th className="border border-black px-4 py-2">Hình ảnh</th>
              {/* <th className="border border-black px-4 py-2">Mô tả</th> */}
              <th className="border border-black px-4 py-2">Giá tiền </th>
              <th className="border border-black px-4 py-2">Số lượng </th>


              <th className="border border-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product
              .filter((data) => {
                const category = categories.find(
                  (category) => String(category.IDCategory) === String(data.IDCategory)
                );
                const categoryName = category ? category.Name_Category : "";

                const rowText = `${data.IDProduct} ${data.NamePro} ${data.Price} ${data.Quantity} ${categoryName}`.toLowerCase();

                return rowText.includes(searchTerm.toLowerCase());
              })
              .map((data, i) => (
                <tr key={i} className="text-center">
                  <td className="border border-black px-4 py-2">
                    {data.IDProduct}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.NamePro}
                  </td>
                  <td className="border border-black px-4 py-2">
                  {
                    categories.find((category) => String(category.IDCategory) === String(data.IDCategory))?.Name_Category || "Không rõ"
                  }
                  </td>
                  <td className=" border border-black px-4 py-2  items-center ">
                  <img
                      src={`http://localhost:1311/images/products/${data.ImagePro}`}
                      alt={data.NamePro}
                      className="w-32 h-32 object-cover rounded mx-auto"
                    />
                  </td>
                  {/* <td className="border border-black px-4 py-2">
                    {data.Description}
                  </td> */}
                  <td className="border border-black px-4 py-2">
                    ${data.Price.toFixed(2)}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {data.Quantity}
                  </td>

                  <td className="border border-black px-4 py-2">
                    <div className="flex gap-2 justify-center">
                      <Link to={`updateProduct/${data.IDProduct}`}>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow">
                          Update
                        </button>
                      </Link>
                      <Link to={`detailProduct/${data.IDProduct}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow">
                        Details
                      </button>
                      </Link>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 border border-red-400 rounded shadow" onClick={e => handleDelete(data.IDProduct)}>
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

export default ProductContent;
