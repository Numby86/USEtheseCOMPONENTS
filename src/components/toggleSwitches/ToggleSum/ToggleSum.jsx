import React from 'react';
import './ToggleSum.scss';

const ToogleSum = () => {
  return (
<label className="switchSum">
  <input className="chkSum" type="checkbox" />
  <span className="sliderSum"></span>
</label>
  )
}

export default ToogleSum