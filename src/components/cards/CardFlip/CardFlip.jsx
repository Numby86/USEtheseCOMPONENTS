import React from 'react';
import './CardFlip.scss';

const CardFlip = () => {
  return (
<div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="titleFlip">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="titleFlip">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
  )
}

export default CardFlip;