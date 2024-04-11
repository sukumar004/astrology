import React,{useEffect} from 'react'
import './homePageNaadiProcedure.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function HomePageNaadiProcedure() {

  useEffect(()=>{
    Aos.init()
},[])

  return (
    <div className="naadi-procedure-home-page">
        <h1>Nadi Procedure</h1>
        <div className="home-page-naadi-procedure" data-aos='fade-up' data-aos-duration='1000'>
        
          <div className="home-page-naadi-procedure-img">
          <img src="/images/thumb-2.jpeg" alt="Naadi Procedure " />
          </div>

          <div className="home-page-naadi-procedure-para">
          <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.ut ex in rerum eaque animi delectus quidem laudantium harum illum pariatur quos cumque aperiam aliquid nihil.</span><br /><span>
          Esse inventore consequatur quae delectus quas? Assumenda debitis dolorum itaque sint facilis excepturi.</span><br /><span>Voluptatum temporibus architecto quos molestias eligendi nostrum?
          Illum, earum esse eaque facere sapiente ex fugiat autem dicta cumque consequatur impedit</span> <br />
        </p>
          <Link to='/nadiProcedure'><p id='read-more-id-nadi-procedure'>Read More</p></Link>
          </div>
        </div>

    </div>
  )
}

export default HomePageNaadiProcedure