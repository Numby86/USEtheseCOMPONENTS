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
        <Link to={'/listLoaders'}>
          <li>LOADERS</li>
        </Link>
        <Link to={'/listButtons'}>
          <li>BUTTONS</li>
        </Link>
      </ul>
    </nav>
    </>

  )
}

export default Header;
