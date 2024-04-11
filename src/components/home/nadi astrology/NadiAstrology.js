import React,{useEffect} from 'react'
import './nadiAstrology.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function AboutUsHomeComponent() {

  useEffect(()=>{
    Aos.init()
},[])

  return (
    <div className="home-nadi-astrology-bio" data-aos='fade-up' data-aos-duration='1000'>

        <div className="home-nadi-astrology-bio-img">
        <img src="/images/agastiya.png" alt="Agasthiya Munivar" />
        </div>

        <div className="home-nadi-astrology-bio-para">
        
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt sint soluta reiciendis, ut ex in rerum eaque animi delectus quidem laudantium harum illum pariatur quos cumque aperiam aliquid nihil.</span><br /><span>
        Esse inventore consequatur quae delectus quas? Assumenda debitis dolorum itaque sint facilis excepturi. Id dolores reiciendis autem illo corrupti repellendus quis possimus numquam.</span><br /><span>Voluptatum temporibus architecto quos molestias eligendi nostrum?
        Illum, earum esse eaque facere sapiente ex fugiat autem dicta cumque consequatur impedit</span> <br />
        </p>
        <Link to='/nadiAstrology'><p id='read-more-id'>Read More</p></Link>

        </div>

    </div>
  )
}

export default AboutUsHomeComponent