import React from 'react';
import './ToggleOnOff.scss';

const ToggleOnOff = () => {
  return (
<div className="checkbox-wrapper-8">
  <input type="checkbox" id="cb3-8" className="tgl tgl-skewed" />
  <label htmlFor="cb3-8" data-tg-on="ON" data-tg-off="OFF" className="tgl-btn"></label>
</div>
  )
}

export default ToggleOnOff;
