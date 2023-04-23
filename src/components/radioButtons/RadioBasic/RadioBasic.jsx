import React from 'react';
import './RadioBasic.scss';

const RadioBasic = () => {
  return (
<div className="customCheckBoxHolder">

<input className="customCheckBoxInput" id="cCB1" type="checkbox" />
<label className="customCheckBoxWrapper" for="cCB1">
    <div className="customCheckBox">
        <div className="inner">Option</div>
    </div>
</label>

<input className="customCheckBoxInput" id="cCB2" type="checkbox" />
<label className="customCheckBoxWrapper" for="cCB2">
    <div className="customCheckBox">
        <div className="inner">Option</div>
    </div>
</label>

<input className="customCheckBoxInput" id="cCB3" type="checkbox" />
<label className="customCheckBoxWrapper" for="cCB3">
    <div className="customCheckBox">
        <div className="inner">Option</div>
    </div>
</label>

</div>
  )
}

export default RadioBasic;
