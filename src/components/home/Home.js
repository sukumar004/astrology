import React from 'react'
import './home.css'
import NadiAstrology from './nadi astrology/NadiAstrology.js'
import OurServices from './our services/OurServices.js'
import HomeAboutUs from './aboutUs home page/HomeAboutUs.js'
import Languages from '../languages/Languages.js'
import GalleryHomePage from './gallery home page/GalleryHomePage.js'
import HomePageNaadiProcedure from './home page naadi procedure/HomePageNaadiProcedure.js'


function Home() {
  return (
    <div className="home-top-parent">

        <div className="home-header-bottom-section">

            <div className="home-header-bottom-section-img">
                <img src="/images/agastiya.png" alt="Agasthiya Munivar" />
            </div>

            <div className="home-header-bottom-section-title">
                <h1>Sri Agasthiya Mahasiva Brammarishi</h1>
                <h3>Naadi Astrological Center</h3>
                <p><button>Book Appointment</button><button>About us</button></p>
                <p id='tirukkural-id'>ஞாலம் கருதினுங் கைகூடுங் காலம் <br />கருதி இடத்தாற் செயின். <br /> <span>-திருவள்ளுவர்</span></p>
            </div>

        </div>

        <div className="nadi-astrology-home-page-top-parent">
          <h1>Welcome to Sri Agasthiya Mahasiva Brammarishi Naadi Astrological Center</h1>
          <img src="/svg/divider1.svg" alt="divider" id='divider-id'/>
          <div className="nadi-astrology-home-page-bg">
          <h2>Nadi Astrology</h2>
          <NadiAstrology />
          </div>
        </div>

        <div className="home-page-naadi-procedure-top-parent">
          <h1 id='home-page-naadi-top-heading'>Naadi Procedure steps</h1>
          <img src="/svg/divider1.svg" alt="divider" id='divider-id'/>
          <HomePageNaadiProcedure />  
        </div>


        <div className="home-our-service-page-top-parent">
          <h1>Our Services</h1>  
          <img src="/svg/divider3.svg" alt="divider" id='divider-id' />
          <OurServices />
          <img src="/svg/divider3.svg" alt="divider" id='divider-id'/>
        </div>  

        <div className="home-about-us-page-top-parent">
          <div className="home-about-us-famous-heading">
            <img src="/images/badge-1.png" alt="4 generation of naadi heritage" id='famous-badge-id'/>
            <h1>Vaitheeswarankoil Famous Naadi Astrology</h1>
            <img src="/images/manuscript-1.png" alt="Naadi Manuscript" id='famous-manuscript-id' />
          </div>
          <h1>Famous Naadi Astrologer</h1>
          <img src="/svg/divider1.svg" alt="divider" id='divider-id' />

          <div className="home-about-us-bg">
          <h2>Guriji K Muthulingam</h2>
          <HomeAboutUs />
          </div>
        </div>


        <div className="home-languages-parent">
          <Languages />
        </div>

        {/* <div className="home-gallery-parent">
          <GalleryHomePage />
        </div> */}

        <div className="home-page-location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1099.5645926129664!2d78.48392532567756!3d11.650986126825055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1704827991459!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


    </div>
  )
}

export default Home