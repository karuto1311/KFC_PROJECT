import React from 'react'
import { FaSearch } from 'react-icons/fa'
import chickenlogo from '../../../assets/chickenlogo.png'

function AdminNavigationbar() {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between '>
      <div className='flex items-center text-xl'>
        <img src={chickenlogo} className='text-white me-4 cursor-pointer'/>
        <span className='text-white font-semibold'>KFC-PROJECT</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <button className='text-white'>Login</button>
        <button className='text-white'>Register</button>
      </div>
    </nav>
  )
}

export default AdminNavigationbar