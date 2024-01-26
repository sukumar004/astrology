import React from 'react';
import './onlineServices.css';
import OnlineNadiPrediction from './online nadi prediction/OnlineNadiPrediction.js';
import OnlineNadiProcedure from './online nadi procedure/OnlineNadiProcedure.js';

function OnlineServices() {

  return (
    <div className="online-services-top-parent">

        <div className="online-services-heading">
            <h1>Online Nadi Service</h1>
        </div>

        <div className="online-nadi-prediction-top-parent">
            <OnlineNadiPrediction />
        </div>

        <div className="online-nadi-procedure-top-parent">
            <h1>Online Nadi Procedure</h1>
            <OnlineNadiProcedure />
        </div>


    </div>
  )
}

export default OnlineServices