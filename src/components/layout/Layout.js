import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <>
    
    {/* <Header /> */}

    <div className="layout">

        <Outlet />

    </div>

    {/* <Footer /> */}
    
    </>
  )
}

export default Layout