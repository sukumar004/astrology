import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./galleryHomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";

function GalleryHomePage() {
  useEffect(() => {
    Aos.init();
  }, []);

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
  var isMobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    dots: true,
  };

  // console.log("screenWidth : ",screenWidth)

  const imgSliderShow = imgPath.map((img, index) => {
    return (
      <div
        className="galleryHomePage-imgage-slider"
        key={index}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img src={img} alt="image" />
      </div>
    );
  });

  return (
    <div className="galleryHomePage-parent">
      <div className="gallerrHomePage-title">
        <h1 data-aos="zoom-up" data-aos-duration="1500">
          Gallery
        </h1>
        <img src="/svg/divider1.svg" alt="divider" id="divider-gallery-id" />
      </div>

      <Slider {...settings} className="Slider">
        {imgSliderShow}
      </Slider>
    </div>
  );
}

export default GalleryHomePage;
