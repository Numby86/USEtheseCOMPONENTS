import React from 'react';
import './CheckboxCustom.scss';

const CheckboxCustom = () => {
  return (
<div className="customCheckBoxHolder">

<input type="checkbox" id="cCB1" className="customCheckBoxInput" />
<label htmlFor="cCB1" className="customCheckBoxWrapper">
    <div className="customCheckBox">
        <div className="inner">Toggle Me</div>
    </div>
</label>

</div>
  )
}

export default CheckboxCustom