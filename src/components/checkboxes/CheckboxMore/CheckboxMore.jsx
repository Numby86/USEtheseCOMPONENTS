import React from 'react';
import './CheckboxMore.scss';

const CheckboxMore = () => {
  return (
<label className="containerMore">
  <input className='iptMore' type="checkbox" />
  <div className="lineMore"></div>
  <div className="lineMore line-indicatorMore"></div>
</label>
  )
}

export default CheckboxMore