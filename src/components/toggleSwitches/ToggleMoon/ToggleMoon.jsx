import React from 'react';
import styles from './ToggleMoon.module.scss';

const ToggleMoon = () => {
  return (
<label className={styles.switch}>
  <input className={styles.ipt} type="checkbox" />
  <span className={styles.slider}></span>
</label>
  )
}

export default ToggleMoon