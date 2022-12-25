import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import './layout.css'

export const Layout = () => {
  return (
    <>
    <Header></Header>
    
        <Outlet></Outlet>
    
    <Footer></Footer>
    </>
  )
}
