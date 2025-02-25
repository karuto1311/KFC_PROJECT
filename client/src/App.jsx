import React from "react"
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Admin from "./compoment/BackendCompoment/Admin/Admin";
import Category from "./compoment/BackendCompoment/Category/Category";
import Product from "./compoment/BackendCompoment/Product/Product";
import User from "./compoment/BackendCompoment/User/User";
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/category" element={<Category/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/user" element={<User/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
