import React from 'react'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'
import CategoryContent from './CategoryContent'

function Category() {
  return (
    <div>
        <AdminNavigationbar />
        <AdminSlidebar />
        <CategoryContent />
    </div>
  )
}

export default Category