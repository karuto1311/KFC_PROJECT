import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./compoment/BackendCompoment/Admin/Admin";
import Category from "./compoment/BackendCompoment/Category/Category";
import Product from "./compoment/BackendCompoment/Product/Product";
import User from "./compoment/BackendCompoment/User/User";
import CreateAdmin from "./compoment/BackendCompoment/Admin/CreateAdmin";
import UpdateAdmin from "./compoment/BackendCompoment/Admin/UpdateAdmin";
import AdminDetails from "./compoment/BackendCompoment/Admin/AdminDetails";
import CreateCategory from "./compoment/BackendCompoment/Category/CreateCategory";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes className= "admin">
          <Route path="/" element={<Admin />} />
          <Route path="/createAdmin" element={<CreateAdmin />} />
          <Route path="/updateAdmin/:IDAdmin" element={<UpdateAdmin />} />
          <Route path="/detailAdmin/:IDAdmin" element={<AdminDetails />} />


          {/* <Route path="/Admin" element={<Admin />} /> */}
          <Route path="/category" element={<Category />} />
          <Route path="/createCategory" element={<CreateCategory />} />





          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
