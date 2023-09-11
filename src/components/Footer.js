import React from 'react';
import Img from '../assets/img/github.png';
const Footer = () => {
  return (
    <>
      <a href="https://github.com/Milan52-Coderboy/real-estate" target="_blank" rel="noreferrer">
        <div class="fixed w-12 h-12 animate-bounce flex items-center justify-center bg-white rounded-full bottom-0 right-2">
          <img src={Img} alt="" />
        </div>
      </a>
    </>
  );
};

export default Footer;
