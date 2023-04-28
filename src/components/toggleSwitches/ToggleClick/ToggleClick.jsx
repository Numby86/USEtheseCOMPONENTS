import React from 'react';
import styles from './ToggleClick.module.scss';

const ToggleClick = () => {
  return (
<label className={styles.switch}>
  <input className={styles.ipt} type="checkbox" />
  <span className={styles.slider}></span>
</label>
  )
}

export default ToggleClick