import React from 'react';
import './onlineNadiProcedure.css'

function OnlineNadiProcedure() {

    const data = [
    {
        id:1,
        img:'/onlineNadiProcedure/1.png',
        content:'Place ink on your Thumb'
    },
    {
        id:2,
        img:'/onlineNadiProcedure/2.png',
        content:'Place thumb on paper'
    },
    {
        id:3,
        img:'/onlineNadiProcedure/3.png',
        content:'Scan the paper (Printed thum impression)'
    },
    {
        id:4,
        img:'/onlineNadiProcedure/4.png',
        content:'Transfer file from scanner'
    },
    {
        id:5,
        img:'/onlineNadiProcedure/5.png',
        content:'Fill and submit the below form'
    }

]

    const cardListing = data.map((data,index)=>{
        return(
            <div className="online-nadi-procedure-data-list" key={index}>
                <h3>{`Step  ${data.id}`}</h3>

                <div className="online-nadi-procedure-data-img-content">

                    <img src={data.img} alt={data.content} />
                    <p>{data.content}</p>
                </div>

            </div>
        )
    })
  return (
    <div className="online-nadi-procedure">
{/* 
        <div className="online-nadi-procedure-heading">
            <h1>Online Nadi Procedure</h1>
        </div> */}

        <div className="online-nadi-procedure-steps-listing">
            {cardListing}
        </div>
    </div>
  )
}

export default OnlineNadiProcedure