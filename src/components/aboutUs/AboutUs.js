import React, {useEffect} from 'react'
import './aboutUs.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutUs() {

    useEffect(()=>{
        Aos.init()
      },[])

    const aboutUsData  = [{
        title:'About us',
        img:'./images/photo.png',
        name:'Guruji K Muthulingam',
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam in suscipit exercitationem! Beatae similique ipsum ipsam illo suscipit earum, accusamus saepe odit amet, harum possimus, aut laudantium nulla. Cumque. 

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aut expedita nulla sunt dolor fuga iure aspernatur animi laborum rem delectus, fugiat a repudiandae culpa natus officia vero perferendis doloribus? 
        
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nobis consectetur natus, reprehenderit esse officia in excepturi consequatur mollitia nisi! Eius rerum maiores ex eveniet, eligendi architecto quam ad iste! 
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam in suscipit exercitationem! Beatae similique ipsum ipsam illo suscipit earum, accusamus saepe odit amet, harum possimus, aut laudantium nulla. Cumque. 

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aut expedita nulla sunt dolor fuga iure aspernatur animi laborum rem delectus, fugiat a repudiandae culpa natus officia vero perferendis doloribus? 

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nobis consectetur natus, reprehenderit esse officia in excepturi consequatur mollitia nisi! Eius rerum maiores ex eveniet, eligendi architecto quam ad iste!

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aut expedita nulla sunt dolor fuga iure aspernatur animi laborum rem delectus, fugiat a repudiandae culpa natus officia vero perferendis doloribus? 
        
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nobis consectetur natus, reprehenderit esse officia in excepturi consequatur mollitia nisi! Eius rerum maiores ex eveniet, eligendi architecto quam ad iste! 
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam in suscipit exercitationem! Beatae similique ipsum ipsam illo suscipit earum, accusamus saepe odit amet, harum possimus, aut laudantium nulla. Cumque. 

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aut expedita nulla sunt dolor fuga iure aspernatur animi laborum rem delectus, fugiat a repudiandae culpa natus officia vero perferendis doloribus? 

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nobis consectetur natus, reprehenderit esse officia in excepturi consequatur mollitia nisi! Eius rerum maiores ex eveniet, eligendi architecto quam ad iste!
        `
    }]


  return (
    <div className="about-us-top-parent">
        
     

        {aboutUsData.map((data)=>{
            return(
        <>
            <div className="about-us-heading-bg-image">
                <h1 data-aos='fade-up' data-aos-duration='1000'>{data.title}</h1>
            </div>

            <div className="about-us-main-page-heading">
                <h1 data-aos='zoom-out' data-aos-duration='1000'>Vaitheeswarankoil Famous Nadi Astrology</h1>
                <img src="/svg/divider4.svg" alt="divider" id='divider-id' />

                <h3 data-aos='zoom-up' data-aos-duration='1000'>Four Generations of Nadi Heritage</h3>
            {/* <img src="/svg/divider3.svg" alt="divider" id='divider-id' /> */}
            </div>

            <div className="about-us-details">

                
                <div className="about-us-image" data-aos='fade-up' data-aos-duration='1000'>
                    <img src={data.img} alt={data.name} />
                    <h3>{data.name}</h3>
                </div>

                <div className="about-us-content" data-aos='zoom-up' data-aos-duration='1000'> 
                    <p>{data.content}</p>
                </div>
            </div>
        </>
            )
        })}

        
    </div>
  )
}

export default AboutUs