import React,{useEffect} from 'react';
import './onlineNadiProcedure.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function OnlineNadiProcedure() {

    useEffect(()=>{
        Aos.init({duration:1000})
      },[])

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
    },
    {
        id:6,
        img:'/onlineNadiProcedure/6.png',
        content:'Once appointment booked we will contact you within 24hrs'
    }

]

    const cardListing = data.map((data,index)=>{
        return(
            <div className="online-nadi-procedure-data-list" key={index} data-aos='fade-up'>
                <h3>{`Step  ${data.id}`}</h3>

                <div className="online-nadi-procedure-data-img-content" >

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