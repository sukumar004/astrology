import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Header() {

  const [headerNavToggle, setHeaderNavToggle] = useState(0)
  const [mobileNadiAstrologyToggle, setMobileNadiAstrologyToggle] = useState(false)
  const [mobileOnlineServiceToggle, setMobileOnlineServiceToggle] = useState(false)
  const [navState, setNavState] = useState(false)

  const handleNavState = () => {setNavState((pre)=>(pre = !pre))}
  console.log(headerNavToggle)

  
  return (
    <div className="header-top-parent">

        <div className="header-logo">
            
            <div className="header-logo-image">
            <Link to='/'><img src="/logo/logoPng.png" alt="Agasthiya Nadi Sastralayam" /></Link>
            </div>

            <div className="header-logo-title">
              <Link to='/'><h1>Agasthiya Nadi Sastralayam</h1></Link>
            </div>

        </div>

        <div className="header-nav-menu">
          {/* <a href='tel:+1800229933'><h2 className='phone_number'>+91883248347348</h2></a> */}
            <ul>
                <Link to='/'><li>Home</li></Link>

                <div className="dropdown nadi_astrology_dropDown" onMouseOver={()=>setHeaderNavToggle(1)} onMouseLeave={()=>setHeaderNavToggle(0)}>
                <li>Nadi Astrology <span id='header-bottom-arrow'>{headerNavToggle === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></li>

                {(headerNavToggle === 1 && headerNavToggle !== 0) && 

                  <div className='dropdown-content nadi_astrology_dropDown_content '>
                    <ul onClick={()=>setHeaderNavToggle(0)}>
                    <Link to='/nadiAstrology'><li>Nadi Astrology</li></Link>
                    <Link to='/nadiProcedure'><li>Nadi Procedure</li></Link>
                    </ul>
                  </div>

                }
                </div>
                
                <div className="dropdown onlineServices_dropDown" onMouseOver={()=>setHeaderNavToggle(2)} onMouseLeave={()=>setHeaderNavToggle(0)}>
                <li>Services <span id='header-bottom-arrow'>{headerNavToggle === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></li>
                
                {(headerNavToggle === 2 && headerNavToggle !== 0) && 
                 <div className='dropdown-content onlineServices_dropDown_content'>
                  <ul onClick={()=>setHeaderNavToggle(0)}>
                  <Link to='/onlineServices'><li>Online Services</li></Link>
                  <Link to='/chapters'><li>Chapters</li></Link>
                  <Link to='/Homam'><li>Homam Poojai</li></Link>
                  </ul>
                  </div>
                
                }
                </div>
                  
                
                
                {/* <li>Online</li> */}
                <Link to='/aboutUs'><li>About us</li></Link>
                <Link to='/contactUs'><li>Contact us</li></Link>
            </ul>

          
          </div>


          <p id='menu-id' onClick={()=>handleNavState()}><IoMdMenu /></p>
                            {/* {For Mobile Responsiev} */}
          <div className="mobile_menu_nav" style={{transform:navState?'translateX(0%)' : 'translateX(100%)'}}>
          <ul>
            <p id='nav-close-button-id' onClick={()=>{handleNavState(); setMobileNadiAstrologyToggle(false);setMobileOnlineServiceToggle(false)}}><IoMdClose /></p>
            <Link to='/'><li onClick={()=>{handleNavState();setMobileNadiAstrologyToggle(false);setMobileOnlineServiceToggle(false)}}>Home</li></Link>

            <div className="mobile_nadi_astrology_dropdown mobile_dropDown_heading" onClick={()=>{setMobileNadiAstrologyToggle((pre)=>(pre = !pre)); setMobileOnlineServiceToggle(false)}}>
              <li>Nadi Astrology <span id='header-bottom-arrow'>{mobileNadiAstrologyToggle === true  ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></li>

              {(mobileNadiAstrologyToggle === true && mobileOnlineServiceToggle !== true) && 
                <div className='mobile_nadi_astrology_dropdown_content mobile_dropdown'>
                      <ul onClick={()=>{setHeaderNavToggle(0); setMobileNadiAstrologyToggle((pre)=>(pre = !pre)); handleNavState()}}>
                      <Link to='/nadiAstrology'><li onClick={()=>setMobileNadiAstrologyToggle((pre)=>(pre = !pre))}>Nadi Astrology</li></Link>
                      <Link to='/nadiProcedure'><li onClick={()=>setMobileNadiAstrologyToggle((pre)=>(pre = !pre))}>Nadi Procedure</li></Link>
                      </ul>
                </div>
              }
            </div>

            <div className="mobile_online_services_dropdown mobile_dropDown_heading" onClick={()=>{setMobileOnlineServiceToggle((pre)=>(pre = !pre)); setMobileNadiAstrologyToggle(false)}}>
              <li>Services <span id='header-bottom-arrow'>{mobileOnlineServiceToggle === true ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></li>

              {(mobileNadiAstrologyToggle === false && mobileOnlineServiceToggle === true) && 
                <div className='mobile_online_services_dropdown_content mobile_dropdown'>
                    <ul onClick={()=>{setMobileOnlineServiceToggle((pre)=>(pre = !pre)); handleNavState()}}>
                    <Link to='/onlineServices'><li onClick={()=>setMobileOnlineServiceToggle((pre)=>(pre = !pre))}>Online Services</li></Link>
                    <Link to='/chapters'><li onClick={()=>setMobileOnlineServiceToggle((pre)=>(pre = !pre))}>Chapters</li></Link>
                    <Link to='/Homam'><li onClick={()=>setMobileOnlineServiceToggle((pre)=>(pre = !pre))}>Homam Poojai</li></Link>
                    </ul>
                </div>
              }
            </div>
            <Link to='/aboutUs'><li onClick={()=>{handleNavState(); setMobileNadiAstrologyToggle(false);setMobileOnlineServiceToggle(false)}}>About us</li></Link>
            <Link to='/contactUs'><li onClick={()=>{handleNavState(); setMobileNadiAstrologyToggle(false);setMobileOnlineServiceToggle(false)}}>Contact us</li></Link>
          </ul>
        </div>


          
    </div>
  )
}

export default Header