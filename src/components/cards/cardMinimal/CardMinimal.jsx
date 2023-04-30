import React from 'react';
import './CardMinimal.scss';

const CardMinimal = () => {
  return (
<div className="cardMinimal">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="cardMinimal__content">
  </div>
</div>
  )
}

export default CardMinimal;
