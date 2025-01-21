import React from 'react'
import AdminNavigationbar from '../Navigation/AdminNavigationbar'
import AdminSlidebar from '../Navigation/AdminSlidebar'
import ProductContent from './ProductContent'


function Product() {
  return (
    <div>
        <AdminNavigationbar />
        <AdminSlidebar />
        <ProductContent />
    </div>
  )
}

export default Product