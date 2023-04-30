import React from 'react';
import styles from './ToggleSmile.module.scss';

const ToggleSmile = () => {
  return (
<div className={styles.checkboxwrapper5}>
  <div className={styles.check}>
    <input className={styles.ipt} type="checkbox" id="check-5" />
    <label className={styles.label} htmlFor="check-5"></label>
  </div>
</div>

  )
}

export default ToggleSmile