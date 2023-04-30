import React from 'react';
import './Fixed.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a className='footerA' href='https://github.com/tu-usuario-de-GitHub'>
            <span className='fab fa-github'> </span>&nbsp;&nbsp;Numby86</a>
          <a className='footerA' href='https://www.linkedin.com/in/tu-usuario-de-LinkedIn/'>
            <span className='fab fa-linkedin'> </span>&nbsp;&nbsp;Javi Núñez</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
