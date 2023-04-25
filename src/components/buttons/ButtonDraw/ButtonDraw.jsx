import React from 'react';
import './ButtonDraw.scss';

const ButtonDraw = () => {
  return (
<button className='btnDraw'>
<div className="state" id="moon">Send</div>
<div className="state" id="sun">Send</div>
<span className="lightRotation"></span>
<span className="lightRotation2"></span>
<span className="lightRotation3"></span>
<span className="lightRotation4"></span>
</button>
  )
}

export default ButtonDraw