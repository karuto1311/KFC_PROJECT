import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Admin from "./compoment/BackendCompoment/Admin/Admin";
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
