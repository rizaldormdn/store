import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home";
import Register from '../pages/register';
import Login from '../pages/login';
import ProductMan from '../pages/product.man';
import ProductWoman from '../pages/productWoman';
import ProductDetail from '../pages/product-detail';

function Router() {
     return (
          <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/product-man" element={<ProductMan />} />
                    <Route path="/product-woman" element={<ProductWoman />} />
                    <Route path="/product-detail" element={<ProductDetail />} />
          </Routes>
     )
}

export default Router