import React from 'react';
import { useState } from 'react';
import './nadiAstrology.css';
import nadiAstrology from '../../source/nadiAstrology.json'

function NadiAstrology() {

    const [nadiToggle,setNadiToggle] = useState(null);

  return (
    <div className="nadi-astrology-top-parent">

        <div className="nadi-astrology-heading">
            <h1>Nadi Astrology</h1>
        </div>

        <div className="nadi-astrology-listing-parent">

    
        {nadiAstrology.map((val,index)=>{

        return(
        <div className="nadi-astrology-listing" key={index}>
            <img src={val.img} alt={val.question} />
            <h3>{val.question}</h3>
            <p>{val.shortAnswer}</p>
            {
              nadiToggle !== index &&
            <button onClick={()=>(setNadiToggle(nadiToggle === index ? null : index))}>Read More</button>
            }
            {nadiToggle === index &&
            <p>{val.longAnswer}</p>
            }

            {
              nadiToggle === index &&
            <button onClick={()=>(setNadiToggle(nadiToggle === index ? null : index))}>Read More</button>
            }

            

        </div>
        )

        })}

        </div>
    </div>
  )
}

export default NadiAstrology