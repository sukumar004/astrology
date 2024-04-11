import React from "react";
import "./footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {

  const d = new Date();

  return (

    <div className="footer">
  
    <div className="footer-top-parent">

      <div className="footer-logo-address">

        <div className="footer-logo-parent">

          <div className="footer-logo">  
          <img src="/logo/logoPng.png" alt="Agasthiya Nadi Sastralayam" />
          <h3>Agasthiya Nadi Sastralayam</h3>
          </div>

          <div className="footer-social-media-icons">
            <img src="/socialMedia/facebook.png" alt="facebook" />
            <img src="/socialMedia/instagram.png" alt="instagram" />
            <img src="/socialMedia/youtube.png" alt="youtube" />
          </div>

        </div>

 


        <div className="footer-address">

          <h3>Contact Info</h3>
          {/* <h5><span><IoLocationSharp /></span> Near Muthumalai Murugan Kovil Opposite, <br /> Agathiyar Siddha Hospital, <br /> 15th Ward Puthiragoundampalayam, <br /> Yethappur, Salem - 636 119</h5> */}
          <p><span><IoLocationSharp /></span>Near Muthumalai Murugan Kovil Opposite,Agathiyar Siddha Hospital,15th Ward Puthiragoundampalayam,Yethappur, Salem - 636 119</p>
        </div>

      </div> 

     

      <div className="footer-links-parent">

  

        <div className="footer-services-links">

          <h3>Helpful Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutUs'>About us</Link></li>
            <li><Link to='/contactUs'>Contact us</Link></li>
          </ul>

        </div>

        <div className="footer-services-links">

          <h3>About Nadi Astrology</h3>
          <ul>
          <li><Link to='/nadiAstrology'>Nadi Astrology</Link></li>
          <li><Link to='/nadiProcedure'>Nadi Procedure</Link></li>
          </ul>

        </div>

        <div className="footer-services-links">

          <h3>Our Services</h3>
          <ul>
            <li><Link to='/onlineServices'>Online Services</Link></li>
            <li><Link to='/chapters'>Chapters</Link></li>
            <li><Link to='/Homam'>Homam Poojai</Link></li>
          </ul>

        </div>

      </div>



    </div>

    <h5><span>&copy;</span>{`${d.getFullYear()} Agasthiya Nadi Sastralayam. All rights reserved`}</h5>

  </div>


  );
};

export default Footer;
