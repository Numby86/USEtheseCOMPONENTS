import React from 'react';
import './InputTransition.scss';

const InputTransition = () => {
  return (
<div className="form">
  <input className="input" placeholder="Type your text" required="" type="text" />
  <span className="input-border"></span>
</div>
  )
}

export default InputTransition;
