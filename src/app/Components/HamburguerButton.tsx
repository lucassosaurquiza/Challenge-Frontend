// HamburgerButton.js
import React from 'react';
import '../global.css';

const HamburgerButton = () => {
  return (
    <>
      <button className="hamburger-desktop hidden sm:flex">
        <span className="bar-short"></span>
        <span className="bar-long"></span>
        <span className="bar-short"></span>
      </button>
       <button className="hamburger-movil sm:hidden ">
        <span className="bar-short"></span>
        <span className="bar-long"></span>
        <span className="bar-short"></span>
      </button>
    </>
  );
};

export default HamburgerButton;