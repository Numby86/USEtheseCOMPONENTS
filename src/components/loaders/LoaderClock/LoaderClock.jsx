import React from 'react';
import './LoaderClock.scss';

const LoaderClock = () => {
  return (
<div className="loaderClock">
  <span className="hour"></span>
  <span className="min"></span>
  <span className="circel"></span>
</div>
  )
}

export default LoaderClock;