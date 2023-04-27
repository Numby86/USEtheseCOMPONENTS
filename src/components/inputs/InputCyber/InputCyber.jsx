import React from 'react';
import './InputCyber.scss';

const InputCyber = () => {
  return (
<form action="" className="containerCyber">
  <div className="input-containerCyber">
      <div className="input-contentCyber">
          <div className="input-distCyber">
              <div className="input-typeCyber">
                  <input placeholder="User" required="" type="text" className="input-isCyber" />  
                  <input placeholder="Password" required="" type="password" className="input-isCyber" />  
              </div>
          </div>
      </div>
  </div>
</form>
  )
}

export default InputCyber