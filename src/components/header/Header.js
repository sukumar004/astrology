import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { IoIosArrowDown } from "react-icons/io";

function Header() {

  
  return (
    <div className="header-top-parent">
        <div className="header-logo">

            <h1>Astro Nadi Service</h1>

        </div>

        <div className="header-nav-menu">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/aboutUs'><li>About us</li></Link>
                <li>Services <span id='header-bottom-arrow'><IoIosArrowDown /></span></li>
                
                <li>Online</li>
                <li>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header