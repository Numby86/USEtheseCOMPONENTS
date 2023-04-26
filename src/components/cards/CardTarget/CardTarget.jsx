import React from 'react';
import './CardTarget.scss';

const CardTarget = () => {
  return (
<div className="cardTarget">
  <label className="avatarTarget"></label>
  <label className="infoTarget">
    <span className="info-1Target"></span>
    <span className="info-2Target"></span>
  </label>
  <div className="content-1Target"></div>
  <div className="content-2Target"></div>
</div>
  )
}

export default CardTarget