import React from 'react';
import styles from './LoaderBars.module.scss';

const LoaderBars = () => {
  return (
<div className={styles.loading}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
  )
}

export default LoaderBars