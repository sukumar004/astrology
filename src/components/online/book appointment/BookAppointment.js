import React,{useEffect} from 'react';
import './bookAppointment.css';
import { FaPhoneVolume } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'


function BookAppointment() {

  useEffect(()=>{
    Aos.init()
},[])


  return (
    <div className="book-appointment" data-aos='zoom-up' data-aos-duration='1500'>

      
      <div className="book-appointment-form" data-aos='fade-left' data-aos-duration='1000'>

        <h5 data-aos='zoom-out' data-aos-duration='500'>Book Appointment</h5>
        <input type="text" name="name" id="name" placeholder='Name' data-aos='zoom-out' data-aos-duration='500' />
        <input type="email" name="email" id="email" placeholder='Email' data-aos='zoom-out' data-aos-duration='500' />
        <input type="text" name="whatsappNumber" id="whatsappNumber" maxLength='10' placeholder='Whatsapp Number' data-aos='zoom-out' data-aos-duration='500'/>
        <label htmlFor="mode" data-aos='zoom-out' data-aos-duration='500'>Select mode</label>
        <select name="mode" id="mode" data-aos='zoom-out' data-aos-duration='500'  >
          <option value="online">Online</option>
          <option value="offline">In Office</option>
        </select>
        <label htmlFor="thumbImage" data-aos='zoom-out' data-aos-duration='500'>Thumb Image <span>(Male Right Thumb and Female Left Thumb)</span></label>
        <input type="file" id='thumbImage' data-aos='zoom-out' data-aos-duration='500' />
        {/* <textarea name="comment" id="comment" cols="30" rows="10" placeholder='comments'></textarea> */}
        <button data-aos='zoom-out' data-aos-duration='500'>Book Appointment</button>

        <div className="book-appointment-form-note" data-aos='fade-up' data-aos-duration='500'>
          <p>Note:</p>
          {/* <p>Take a clear Picture of your Thumb Impression by Mobile Camera.</p> */}
          <p >For any clarification, doubts please contact us through email <span>astronadiservice@gmail.com</span> or through whatsapp <span>1234567890</span> or through phone call <span>1234567890</span></p>
        </div>

      </div>

      <div className="book-appointment-image-details" data-aos='fade-right' data-aos-duration='1000'>

        <div className="book-appointment-phone-details">
          <h1 data-aos='fade-down' data-aos-duration='1000'><FaPhoneVolume /></h1>
          <h2 data-aos='fade-left' data-aos-duration='1000'>1234567890</h2>
          <h2 data-aos='fade-right' data-aos-duration='1000'>1234567890</h2>
        </div>

        <div className="book-appointment-image" data-aos='fade-up' data-aos-duration='1000'>
        <img src="/images/ap-4.jpeg" alt="Book Appointment"/>
        </div>


      </div>
      
    </div>
  )
}

export default BookAppointment