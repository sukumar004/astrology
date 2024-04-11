import React from 'react';
import { useState,useEffect } from 'react';
import './nadiAstrology.css';
import nadiAstrology from '../../source/nadiAstrology.json'
import Aos from 'aos'
import 'aos/dist/aos.css'

function NadiAstrology() {

  useEffect(()=>{
    Aos.init()
  },[])

    const [nadiToggle,setNadiToggle] = useState(null);

  return (
    <div className="nadi-astrology-top-parent">

        <div className="nadi-astrology-heading">
            <h1 data-aos='fade-up' data-aos-duration='1000'>Nadi Astrology</h1>
        </div>

        <div className="nadi-astrology-listing-parent">

    
        {nadiAstrology.map((val,index)=>{

        return(
        <div className="nadi-astrology-listing" key={index} data-aos="fade-up" data-aos-duration='1000'>
            <img src={val.img} alt={val.question} />
            <h3>{val.question}</h3>
            <p data-aos='zoom-up' data-aos-duration='1500'>{val.shortAnswer}</p>
            {
              nadiToggle !== index &&
            <h6 onClick={()=>(setNadiToggle(nadiToggle === index ? null : index))}>Read More</h6>
            }
            {nadiToggle === index &&
            <p data-aos='fade-up' data-aos-easing='linear' data-aos-duration='500'>v{val.longAnswer}</p>
            }

            {
              nadiToggle === index &&
            <h6 onClick={()=>(setNadiToggle(nadiToggle === index ? null : index))}>Read More</h6>
            }

            

        </div>
        )

        })}

        </div>
    </div>
  )
}

export default NadiAstrology