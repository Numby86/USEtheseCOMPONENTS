import React from 'react';
import './CheckboxList.scss';

const CheckboxList = () => {
  return (
<div id="checklist">
  <input className='iptList' value="1" name="r" type="checkbox" id="01" />
  <label className='labelList' for="01">Bread</label>
  <input className='iptList' value="2" name="r" type="checkbox" id="02" />
  <label className='labelList' for="02">Cheese</label>
  <input className='iptList' value="3" name="r" type="checkbox" id="03" />
  <label className='labelList' for="03">Coffee</label>
</div>
  )
}

export default CheckboxList