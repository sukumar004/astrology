import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './galleryHomePage.css'

function GalleryHomePage() {

    const imgPath = [
        '/images/img-1.jpg','/images/img-2.jpg','/images/img-3.jpg','/images/img-1.jpg','/images/img-2.jpg','/images/img-3.jpg',
        '/images/img-1.jpg','/images/img-2.jpg','/images/img-3.jpg','/images/img-1.jpg','/images/img-2.jpg','/images/img-3.jpg'
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    const imgSliderShow = imgPath.map((img,index)=>{
        return(
            <div className="galleryHomePage-imgage-slider" style={{width:'30rem',height:'25rem'}} key={index}>
                <img src={img} alt="image" />
            </div>
        )
    })

  return (
    <div className="galleryHomePage-top-parent">

    <Slider {...settings}>
        {imgSliderShow}
    </Slider>

    </div>
  )
}

export default GalleryHomePage