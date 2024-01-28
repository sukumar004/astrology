import React from 'react'
import './onlineNadiPrediction.css'
import datas from '../../../source/nadiPrediction.json'

function OnlineNadiPrediction() {

    const listingContent = datas.map((data,index)=>{
        return(
        <div className="online-nadi-data-list" key={index}>
            <img src="/images/star.png" width='20px' alt="star icon" />
            <h4>{data.content}</h4>
        </div>)
    })

    console.log()
  return (
    <div className="online-nadi-prediction">

        <div className="online-nadi-prediction-heading">
            <h1>Online Nadi Prediction</h1>
            <img src="/svg/divider3.svg" alt="divider" id="divider-id" />
        </div>

        <div className="online-nadi-prediction-listing">

            <div className="online-nadi-prediction-listing-img">
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