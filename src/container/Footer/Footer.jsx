import React from 'react';
import { FooterOverlay } from '../../components';
import { Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Lagos, Nigeria</p>
        <p className="p__opensans">+2349023589304</p>
        <p className="p__opensans email"><a href="mailto:zobamokoli7@gmail.com" target="_blank">Zobamokoli7@gmail.com</a></p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} className="spoon__img" style={{marginTop: 15}} alt="" />
        <div className="app__footer-links_icons">
          <FiInstagram />
          <FiTwitter />  
        </div>
        
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">09:00am - 10:00pm</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">10:00am - 11:00pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
