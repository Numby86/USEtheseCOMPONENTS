import React from 'react';
import './TogglePower.scss';

const TogglePower = () => {
  return (
    <>
 <input type="checkbox" id="checkbox" />
    <label for="checkbox" className="switchPower">
        <div className="powersign"></div>
    </label>
    </>
  )
}

export default TogglePower;
