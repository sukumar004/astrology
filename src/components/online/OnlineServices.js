import React from 'react';
import './onlineServices.css';
import OnlineNadiPrediction from './online nadi prediction/OnlineNadiPrediction.js';
import OnlineNadiProcedure from './online nadi procedure/OnlineNadiProcedure.js';
import BookAppointment from './book appointment/BookAppointment.js';
import Languages from '../languages/Languages.js'

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
            {/* <h1 id='onlineService-heading-id'>Online Nadi Procedure</h1> */}
            <h1 id='onlineService-heading-id'>Online Appointment Procedure</h1>
            <img src="/svg/divider3.svg" alt="divider" id='divider-id-nadi-procedure' />
            <OnlineNadiProcedure  id='online-nadi-procedure-component'/>
        </div>

        <div className="online-services-languages">
          <Languages />
        </div>

        <div className="book-appointment-topic-div">
        <h1 id='onlineService-heading-id'>Book Your Appointment</h1>
        <img src="/svg/divider3.svg" alt="divider" id='divider-id-nadi-procedure' />
        </div>

        

        <div className="book-appointment-top-parent">
          <BookAppointment />
        </div>

        {/* <div className="online-services-languages">
          <Languages />
        </div> */}


    </div>
  )
}

export default OnlineServices