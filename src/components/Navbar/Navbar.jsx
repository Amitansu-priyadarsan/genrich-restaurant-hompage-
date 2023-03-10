import React from 'react';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className= "app__navbar-logo" >
      
    <img src={images.gericht} alt="app__logo" />
    </div>
    <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className=" app__navbar-login">
        <a href="#login" className="p__opensans "> LOGIN/REGISTER</a>
        <div/>
        <a href="/" className="p__opensans"> BOOK A TABLE </a>
      


      </div>
   
   
  </nav>
);

export default Navbar;

