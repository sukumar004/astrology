import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Astro Naadi Service Logo</h1>
          <h2>Contact</h2>
          {/* <address>
            5534 Somewhere In. The World 22193-10212
            <br />
            <a
              target="_black"
              className="footer__btn"
              href="mailto:example@gmail.com"
            >
              Email Us
            </a>
            <a
              target="_black"
              class="footer__btn"
              href="https://wa.me/9003592434"
            >
              WhatsApp Us
            </a>
            <a target="_blank" className="footer__btn" href="tel:+919003592434">
              Call Us
            </a>
          </address> */}
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>
            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Hardware Design</a>
              </li>
              <li>
                <a href="#">Software Design</a>
              </li>
              <li>
                <a href="#">Digital Signage</a>
              </li>
              <li>
                <a href="#">Automation</a>
              </li>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">IoT</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>© 2024 Something. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
