import React, { useEffect } from 'react'
import './onlineNadiPrediction.css'
import datas from '../../../source/nadiPrediction.json'
import Aos from 'aos'
import 'aos/dist/aos.css'

function OnlineNadiPrediction() {

    useEffect(()=>{
        Aos.init()
    },[])

    const listingContent = datas.map((data,index)=>{
        return(
        <div className="online-nadi-data-list" key={index} data-aos='fade-up' data-aos-duration='500'>
            <img src="/images/star.png" width='20px' alt="star icon" />
            <h4>{data.content}</h4>
        </div>)
    })

  return (
    <div className="online-nadi-prediction">

        <div className="online-nadi-prediction-heading">
            <h1 data-aos='zoom-up'>Online Nadi Prediction</h1>
            <img src="/svg/divider3.svg" alt="divider" id="divider-id" />
        </div>

        <div className="online-nadi-prediction-listing">

            <div className="online-nadi-prediction-listing-img" data-aos='zoom-in' data-aos-duration='500'>
                <img src="/onlineNadiPrediction/np-1.jpeg" alt="Heading" />
            </div>

            <div className="online-nadi-prediction-listing-content">
                {listingContent}
            </div>
        </div>
    </div>
  )
}

export default OnlineNadiPrediction