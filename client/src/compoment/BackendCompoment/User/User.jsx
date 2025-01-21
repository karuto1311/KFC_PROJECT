import React from 'react'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'
import UserContent from './UserContent'

function User() {
  return (
    <div>
        <AdminNavigationbar />
        <AdminSlidebar />
        <UserContent />
    </div>
  )
}

export default User