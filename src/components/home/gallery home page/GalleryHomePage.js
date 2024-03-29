import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./galleryHomePage.css";

function GalleryHomePage() {
  const imgPath = [
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true
  };

  const imgSliderShow = imgPath.map((img, index) => {
    return (
      <div className="galleryHomePage-imgage-slider" key={index}>
        <img src={img} alt="image" />
      </div>
    );
  });

  return (
    <div className="galleryHomePage-parent">

      <div className="gallerrHomePage-title">
      <h1>Gallery</h1>
        <img src="/svg/divider1.svg" alt="divider" id="divider-gallery-id" />
      </div>


      <Slider {...settings} className="Slider">
        {imgSliderShow}
      </Slider>
    </div>
  );
}

export default GalleryHomePage;
