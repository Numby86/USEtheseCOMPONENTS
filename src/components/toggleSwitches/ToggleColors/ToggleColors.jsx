import React from 'react';
import styles from './ToggleColors.module.scss';

const ToggleColors = () => {
  return (
<label className={styles.switch}>
  <input type="checkbox" className={styles.input__check}/>
  <span className={styles.slider}></span>
</label>
  )
}

export default ToggleColors