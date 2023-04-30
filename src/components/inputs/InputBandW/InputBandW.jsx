import React from 'react';
import './InputBandW.scss';

const InputBandW = () => {
  return (
<div className="input-containerBandW">
<input className="inputBandW" name="text" type="text" />
<label className="labelBandW" htmlFor="input">Enter Your Name</label>
<div className="toplineBandW"></div>
<div className="underlineBandW"></div>
</div>
  )
}

export default InputBandW