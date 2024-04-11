import React, { useEffect } from 'react'
import './homeAboutUs.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

function HomeAboutUs() {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div className="home-about-us" data-aos='fade-up' data-aos-duration='1000'>

      <div className="home-about-us-img">
        <img src="/images/photo.png" alt="Guruji K Muthulingam" />
      </div>

      <div className="home-about-us-para">
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam in suscipit exercitationem! Beatae similique ipsum ipsam illo suscipit earum, accusamus saepe odit amet, harum possimus, aut laudantium nulla. Cumque.</span> <br /> <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aut expedita nulla sunt dolor fuga iure aspernatur animi laborum rem delectus, fugiat a repudiandae culpa natus officia vero perferendis doloribus?</span> <br /><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nobis consectetur natus, reprehenderit esse officia in excepturi consequatur mollitia nisi! Eius rerum maiores ex eveniet, eligendi architecto quam ad iste!</span></p>

        <Link to='aboutUs'><p id='home-about-us-read-more-id'>Read more</p></Link>
      </div>

    </div>
  )
}

export default HomeAboutUs