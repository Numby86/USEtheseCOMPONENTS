import React from 'react';
import './Card3D.scss';

const Card3D = () => {
  return (
<div className="flip3D">
    <div className="content3D">
        <div className="front3D">
            <h2 className='h23D'>Front</h2>
            <p className='p3D'>Front Description</p>
        </div>
        <div className="back3D">
            <h2 className='h23D'>Back</h2>
            <p className='p3D'>Back Description</p>
        </div>
    </div>
</div>
  )
}

export default Card3D