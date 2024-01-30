import React from 'react';
import './homam.css';
import homam from '../../source/homam.json'

function Homam() {
  return (
    <div className="homam-top-parent">

        <div className="homam-heading">
            <h1>Homam</h1>
        </div>

        {
            homam.map((val,index)=>{

        return(

        <div className="homam-listing" key={index}>

            <div className="homam-listing-image">
                <img src={val.img} alt={val.title}  />
            </div>

            <div className="homam-listing-details">
                <h3>{val.title}</h3>
                <p>{val.content}</p>
            </div>
        </div>
            )

            })
        }

    </div>
  )
}

export default Homam