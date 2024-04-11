import React,{useEffect} from 'react';
import './nadiProcedure.css';
import data from '../../source/nadiProcedure.json';
import Aos from 'aos'
import 'aos/dist/aos.css'

function NadiProcedure() {

  useEffect(()=>{
    Aos.init()
  },[])
  
  const contentFunction = (content) => {

    const separateByDots = content.split(".")
    const contentListing = separateByDots.map((val)=>{
      return(
        <p>{val}</p>
      )
    })

    return contentListing
  }


  return (
    <div className="nadi-procedure-top-parent">

        <div className="nadi-procedure-heading">
            <h1 data-aos='fade-up' data-aos-duration='1000'>Nadi Procedure</h1>
        </div>

        <div className="nadi-procedure-listing-parent">

        {data.map((val,index)=>{
              return(
                
            <div className="nadi-procedure-listing" key={index} data-aos="fade-up" data-aos-duration='1000'>

             <div className="nadi-procedure-list-title">
               <h3>{`Step ${val.id}`}</h3>
             <img src="/svg/divider3.svg" alt="Nadi Procedure" id='divider-id' />

             </div>

             <div className="nadi-procedure-image-list">

                <div className="nadi-procedure-image">
                  <img src={val.img} alt={val.title} />
                </div>

                <div className="nadi-procedure-list" data-aos="fade-up" data-aos-duration='1000'>
                  <h4>{val.title}</h4>
                  {contentFunction(val.content)}
                </div>

             </div>
       
            </div>
            )
          })}

        </div>

    </div>
  )
}

export default NadiProcedure