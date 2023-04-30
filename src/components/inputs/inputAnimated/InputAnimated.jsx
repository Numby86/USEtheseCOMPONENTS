import React from 'react';
import './InputAnimated.scss';

const InputAnimated = () => {
  return (
<div className="htmlForm__group field">
    <input type="input" className="htmlForm__field" placeholder="Name" required="" />
    <label htmlFor="name" className="htmlForm__label">Name</label>
</div>
  )
}

export default InputAnimated;
