import React from 'react';
import './Fixed.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='title'>
      <h1 className='UseComponents h1'>UseComponents</h1>
    </div>
    
    <div>
      <Link to={'/listLoaders'}>
        <h3>LOADERS</h3>
      </Link>
      <Link to={'/listButtons'}>
        <h3>BUTTONS</h3>
      </Link>
    </div>
    </>

  )
}

export default Header;
