import React from 'react';
import './Fixed.scss';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className='title'>
      <Link to={'/'}>
        <h1 className='UseComponents h1'>UseComponents</h1>
      </Link>
    </div>
    
    <nav>
      <ul className='ul'>
        <Link to={'/listButtons'}>
          <li>BUTTONS</li>
        </Link>
        <Link to={'/listCards'}>
          <li>CARDS</li>
        </Link>
        <Link to={'/listCheckboxes'}>
          <li>CHECKBOXES</li>
        </Link>
        <Link to={'/listInputs'}>
          <li>INPUTS</li>
        </Link>
        <Link to={'/listLoaders'}>
          <li>LOADERS</li>
        </Link>
        <Link to={'/listRadios'}>
          <li>RADIO-BTNS</li>
        </Link>
        <Link to={'/listToggles'}>
          <li>TOGGLES</li>
        </Link>
      </ul>
    </nav>
    </>

  )
}

export default Header;
