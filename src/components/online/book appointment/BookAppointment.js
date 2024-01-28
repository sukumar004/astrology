import React from 'react';
import './bookAppointment.css';
import { FaPhoneVolume } from "react-icons/fa6";


function BookAppointment() {
  return (
    <div className="book-appointment">

      
      <div className="book-appointment-form">

        <h5>Book Appointment</h5>
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="email" name="email" id="email" placeholder='Email' />
        <input type="text" name="whatsappNumber" id="whatsappNumber" maxLength='10' placeholder='Whatsapp Number'/>
        <label htmlFor="mode">Select mode</label>
        <select name="mode" id="mode">
          <option value="online">Online</option>
          <option value="offline">In Office</option>
        </select>
        <label htmlFor="thumbImage">Thumb Image <span>(Male Right Thumb and Female Left Thumb)</span></label>
        <input type="file" id='thumbImage' />
        {/* <textarea name="comment" id="comment" cols="30" rows="10" placeholder='comments'></textarea> */}
        <button>Book Appointment</button>

        <div className="book-appointment-form-note">
          <p>Note:</p>
          {/* <p>Take a clear Picture of your Thumb Impression by Mobile Camera.</p> */}
          <p>For any clarification, doubts please contact us through email <span>astronadiservice@gmail.com</span> or through whatsapp <span>1234567890</span> or through phone call <span>1234567890</span></p>
        </div>

      </div>

      <div className="book-appointment-image-details">

        <div className="book-appointment-phone-details">
          <h1><FaPhoneVolume /></h1>
          <h2>1234567890</h2>
          <h2>1234567890</h2>
        </div>

        <div className="book-appointment-image">
        <img src="/images/ap-4.jpeg" alt="Book Appointment"/>
        </div>


      </div>
      
    </div>
  )
}

export default BookAppointment