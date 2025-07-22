
import React from 'react';

const Nav = ({ showMenu, onClose }) => {

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return showMenu ? (
    <nav id="menu-nav-wrap">
      <a href="#0" className="close-button" title="close" onClick={handleClose}><span>Close</span></a>
      <h3>V & M</h3>
      <ul className="nav-list">
        <li className="current"><a className="smoothscroll" href="#home" title="">Home</a></li>
        <li><a className="smoothscroll" href="#about" title="">About</a></li>
        <li><a className="smoothscroll" href="#services" title="">Services</a></li>
        <li><a className="smoothscroll" href="#testimonials" title="">Team</a></li>
        <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
      </ul>
      <p className="sponsor-text"></p>
      <ul className="header-social-list">
        <li><a href="https://www.linkedin.com/company/vision-and-magic-consulting/"><i className="fa fa-linkedin-square"></i></a></li>
      </ul>
    </nav>
  ) : null;
};

export default Nav;
