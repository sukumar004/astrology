import React from 'react';
import './contactUs.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

function ContactUs() {
  return (
   
    <div className="contact-us-top-parent">

        <div className="contact-us-heading">
            <h1>Contact us</h1>
        </div>
        
        <div className="contact-us-heading-divider">
        <h2 id='contact-us-getInTouch'>Get in touch with us</h2>
        <img src="/svg/divider3.svg" alt="divider" id='divider-id' />
        </div>


        <div className="contact-us-address-parent">

            <div className="contact-us-address">

                <div className="contact-us-phone-number">
                    <h4>Number</h4>
                    <h3><span><FaPhoneVolume /></span> 1234567890 , 1234567890</h3>
                </div>

                <div className="contact-us-email-id">
                    <h4>Email</h4>
                    <h3><span><IoIosMail /></span> astronadiservice@gmail.com</h3>
                </div>

                <div className="contact-us-location">
                    <h4>Address</h4>
                    <h3><span><IoLocationSharp /></span> Near Muthumalai Murugan Kovil Opposite, <br /> Agathiyar Siddha Hospital, <br /> 15th Ward Puthiragoundampalayam, <br /> Yethappur, Salem - 636 119</h3>
                </div>

                <div className="contact-us-social-media">
                    <h4>Also follow on us</h4>

                    <div className="contact-us-social-media-icons">
                    
                    <img src="/socialMedia/facebook.png" alt="facebook" />
                    <img src="/socialMedia/instagram.png" alt="instagram" />
                    <img src="/socialMedia/youtube.png" alt="youtube" />

                    </div>
                </div>


            </div>

            <div className="contact-us-form-parent">

                <h3>Send us a Message</h3>

                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Mobile Number'/>
                <input type="email" placeholder='Email id' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button>Send</button>

            </div>

        </div>

     
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1099.5645926129664!2d78.48392532567756!3d11.650986126825055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1704827991459!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{margin:'5rem 0 0 0'}}
        ></iframe>


    </div>

  )
}

export default ContactUs