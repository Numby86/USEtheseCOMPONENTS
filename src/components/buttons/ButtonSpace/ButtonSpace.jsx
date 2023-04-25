import React from 'react';
import './ButtonSpace.scss';

const ButtonSpace = () => {
  return (
<button className="btnSpace" type="button">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circleSpace"></div>
    <div className="circleSpace"></div>
  </div>
</button>

  )
}

export default ButtonSpace