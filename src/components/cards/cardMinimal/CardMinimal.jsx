import React from 'react';
import './CardMinimal.scss';

const CardMinimal = () => {
  return (
<div class="cardMinimal">
  <div class="tools">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
    </div>
  </div>
  <div class="cardMinimal__content">
  </div>
</div>
  )
}

export default CardMinimal;
