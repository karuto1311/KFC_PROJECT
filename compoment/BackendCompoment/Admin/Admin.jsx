import React from 'react'
import AdminContent from './AdminContent'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'



function Admin() {
  return (
    <div>
        <AdminNavigationbar />
        <AdminSlidebar />
        <AdminContent />
    </div>
  )
}

export default Admin