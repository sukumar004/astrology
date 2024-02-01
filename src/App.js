import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import { Routes,Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import AboutUs from "./components/aboutUs/AboutUs";
import Chapters from "./components/chapters/Chapters";
import OnlineServices from "./components/online/OnlineServices";
import ContactUs from "./components/contactUs/ContactUs";
import Homam from "./components/homam/Homam";
import NadiAstrology from "./components/nadiAstrology/NadiAstrology";
import NadiProcedure from "./components/nadiProcedure/NadiProcedure";


function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 20px
  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="app">
      <>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/aboutUs" element = {<AboutUs />} />
          <Route path="/chapters" element = {<Chapters />} />
          <Route path="/onlineServices" element = {<OnlineServices />} />
          <Route path="/contactUs" element = {<ContactUs />} />
          <Route path="/Homam" element={<Homam />} />
          <Route path="/nadiAstrology" element={<NadiAstrology />} />
          <Route path="/nadiProcedure" element={<NadiProcedure />} />


        </Route>

      </Routes>        
      </>
      <a
        target="_black"
        class={` ${window.pageYOffset < 20 ? "bottom-link" : "Link"} Link`}
        href="https://wa.me/9003592434"
      >
        <img
          src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png"
          alt="Logo"
        />
      </a>
      {window.pageYOffset > 20 && (
        <div className={`scroll-to-top ${isVisible ? "show" : ""}`}>
          <button onClick={scrollToTop}>
            {/* <FaArrowUp /> */}
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
