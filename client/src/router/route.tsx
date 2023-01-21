import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/home'
import ProductMan from '../pages/product.man'
import ProductWoman from '../pages/productWoman'
import ProductDetail from '../pages/product-detail'
import Cart from '../pages/cart'
import ManageProduct from '../pages/manageProduct'


const Router = () => {
     const navigate = useNavigate()
     useEffect(() => {
          if (!sessionStorage.getItem('access_token')) {
               navigate('/login')
          }
     }, [navigate])

     return (
          <>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/product-man" element={<ProductMan />} />
                    <Route path="/product-woman" element={<ProductWoman />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product-detail" element={<ProductDetail />} />
                    <Route path="/manage-product" element={<ManageProduct />} />
               </Routes>
          </>
     )
}

export default Router