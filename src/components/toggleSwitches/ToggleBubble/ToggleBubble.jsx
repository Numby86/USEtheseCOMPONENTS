import React from 'react';
import styles from './ToggleBubble.module.scss';

const ToggleBubble = () => {
  return (
<label className={styles.switch}>
  <input type="checkbox" className={styles.chk} />
  <span className={styles.slider}></span>
</label>
  )
}

export default ToggleBubble