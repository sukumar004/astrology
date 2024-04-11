import React,{useEffect} from 'react';
import './languages.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Languages() {

    useEffect(()=>{
        Aos.init()
      },[])

    const languages = [
        {symbol:'த',language:'Tamil'},
        {symbol:'En',language:'English'},
        {symbol:'हे',language:'Hindi'},
        {symbol:'മ',language:'Malayalam'},
        {symbol:'తె',language:'Telugu'},
        {symbol:'ಕ',language:'Kannada'},
    ]
    const languageDiv = languages.map((lan,index)=>{
        return(
            <div className="languages-show-div" key={index} data-aos='flip-left' data-aos-duration='1000'>
                <h2 id='language-sysmbol-id'>{lan.symbol}</h2>
                <h2>{lan.language}</h2>
            </div>
        )
    })

  return (
    <div className="languages-top-parent">
        <h1 data-aos='zoom-up' data-aos-duration='1500'>Available Multiple Languages</h1>
        <img src="/svg/divider3.svg" alt="divider" id='divider-id'/>
        <div className="languages-parent">
        {languageDiv}
        </div>
    </div>
  )
}

export default Languages