import React from 'react';
import styles from './ToggleAnimate.module.scss';

const ToggleAnimate = () => {
  return (
<label className={styles.switch}>
  <input className={styles.ipt} type="checkbox" />
  <span className={styles.slider}></span>
</label>
  )
}

export default ToggleAnimate