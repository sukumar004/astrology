import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="header-top-parent">
        <div className="header-logo">

            <h1>Astro Nadi Service</h1>

        </div>

        <div className="header-nav-menu">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Online</li>
                <li>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header