import React from 'react'
import { Link } from 'react-router-dom'
import './ourServices.css'

function OurServices() {
  return (
    <div className="our-services">
         <div className="our-services-online-prediction">
            <h2>Online Nadi Prediction</h2>
        </div>
        <div className="our-services-nadi-astrology">
            <Link to='/chapters'><h2>Chapters</h2></Link>
        </div>
        <div className="our-services-homam-pooja">
           <h2>Homam Pooja</h2>
        </div>
       
    </div>
  )
}

export default OurServices