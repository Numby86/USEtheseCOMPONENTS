import React from 'react';
import './CheckboxYeah.scss';

const CheckboxYeah = () => {
  return (
<label className="material-checkboxYeah">
        <input className='iptYeah'  type="checkbox" />
        <span className="checkmarkYeah"></span>
        Checkbox Label
      </label>
  )
}

export default CheckboxYeah