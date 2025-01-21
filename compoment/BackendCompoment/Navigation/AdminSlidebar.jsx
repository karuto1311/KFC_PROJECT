import React from 'react'
import { RiAdminFill } from "react-icons/ri";

function AdminSlidebar() {
  return (
    <div className='w-64 bg-gray-800 fixed h-full'>
      <div>
          <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
        <ul>
          <li>
            <a href='' className='px-3'>
              <RiAdminFill className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'></RiAdminFill>
               Admin
            </a>
          </li>
          <li>Category</li>
          <li>Product</li>
          <li>User</li>
        </ul>
    </div>
  )
}

export default AdminSlidebar