import React, { useEffect } from 'react';
import './homam.css';
import homam from '../../source/homam.json'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Homam() {

    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <div className="homam-top-parent">

        <div className="homam-heading">
            <h1 data-aos="fade-up">Homam</h1>
        </div>

        <div className="homam-listing-top-parent">

        {
            homam.map((val,index)=>{

        return(

        <div className="homam-listing" key={index} data-aos="fade-up" data-aos-duration='1000'>

            <div className="homam-listing-image">
                <img src={val.img} alt={val.title}  />
            </div>

            <div className="homam-listing-details" data-aos="fade-up" data-aos-duration='1000'>
                <h3>{val.title}</h3>
                <p>{val.content}</p>
            </div>
        </div>
            )

            })
        }

        </div>

    </div>
  )
}

export default Homam