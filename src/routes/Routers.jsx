import React from 'react'

import {Routes,Route, Navigate} from "react-router-dom"

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Singup from '../pages/Singup'
import ProductDetails from '../pages/ProductDetails'
import ProtectedRoute from './ProtectedRoute'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="Home"/>}/>
      <Route path ='Home' element={<Home/>}/>
      <Route path ='Shop' element={<Shop/>}/>
      <Route path ='Shop/:id' element={<ProductDetails/>}/>
      <Route path ='Cart' element={<Cart/>}/>
      <Route path ='Checkout' element={<ProtectedRoute>
        <Checkout/>
      </ProtectedRoute>}/>
      <Route path ='Login' element={<Login/>}/>
      <Route path ='Singup' element={<Singup/>}/>
    </Routes>
  )
}

export default Routers