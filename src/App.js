import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
      <a target="_black" class="Link" href="https://wa.me/9003592434">
        <img
          src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png"
          alt="Logo"
        />
      </a>
    </div>
  );
}

export default App;
