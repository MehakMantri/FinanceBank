import React from 'react';
import { useState } from 'react';
import '../index.css';
import Logo from "../assets/logo.png"
import Star from "../assets/star.png"
import Frame1 from '../assets/F1.png';
import Frame2 from '../assets/F2.png';
import Frame3 from '../assets/F3.png';
import Frame4 from '../assets/F4.png';
import Img2 from '../assets/img2.png';
import { IoIosPlayCircle } from "react-icons/io";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";

const Hero = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="relative">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-links">
        <a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')} home>Home</a>
          <a href="#aboutUs" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About Us</a>
          <a href="#pricing" className={activeLink === 'pricing' ? 'active' : ''} onClick={() => handleLinkClick('pricing')}>Pricing</a>
          <a href="#Features" className={activeLink === 'features' ? 'active' : ''} onClick={() => handleLinkClick('features')}>Features</a>
        </div>
        <div className="navbar-download">
          <a href="#download" className="download-btn">Download</a>
        </div>
        {/* <img src={Star} className="star-image" alt="Star" /> */}
      </nav>
      <div className="image-container">
      {/* <img src={Ellipse1} alt="" className='E2' /> */}
        <div className='text'>
          <div className='text1'>Make The Best <br />Financial Decisions</div>
          <div className='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla optio<br /> molestiae excepturi  beatae et, enim dolore dicta rem. Voluptatum</div>
          <div className=''>
            <button className="start">Get Started</button>
           <div className="watch">
            <IoIosPlayCircle className="icon" /><span className='text3'> Watch Video</span>
         </div>
       </div>
          <div><img src={Img2} alt="" className='img2' /></div>
        </div>
        <img src={Ellipse2} alt="" className='e1'/>
        <img src={Frame1} alt="Frame 1" className="frame1" />
        <img src={Frame2} alt="" className='frame2' />
        <img src={Frame3} alt="" className='frame3'/>
        <img src={Frame4} alt="" className='frame4' />
      </div>
    </div>
  );
};

export default Hero;
