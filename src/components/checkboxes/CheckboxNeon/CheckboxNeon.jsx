import React from 'react';
import './CheckboxNeon.scss';

const CheckboxNeon = () => {
  return (
<div className="checkbox-wrapper-33">
  <label className="checkboxLabel">
    <input type="checkbox" className="checkbox__trigger visuallyhidden" />
    <span className="checkbox__symbol">
      <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 28 28" height="28px" width="28px" className="icon-checkbox" aria-hidden="true">
        <path className='checkboxPath' d="M4 14l8 7L24 7"></path>
      </svg>
    </span>
    <p className="checkbox__textwrapper">Checkbox</p>
  </label>
</div>
  )
}

export default CheckboxNeon