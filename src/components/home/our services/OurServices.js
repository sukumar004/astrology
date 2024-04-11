import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ourServices.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function OurServices() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="our-services">
         <div className="our-services-online-prediction" data-aos='flip-left' data-aos-duration='1000'> 
         <Link to = '/onlineServices'><h2>Online Nadi Prediction</h2></Link>
        </div>
        <div className="our-services-nadi-astrology" data-aos='flip-left' data-aos-duration='1000'>
            <Link to='/chapters'><h2>Chapters</h2></Link>
        </div>
        <div className="our-services-homam-pooja" data-aos='flip-left' data-aos-duration='1000'>
           <Link to = '/Homam'><h2>Homam Poojai</h2></Link>
        </div>
       
    </div>
  )
}

export default OurServices