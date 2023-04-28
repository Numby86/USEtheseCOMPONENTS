import React from 'react';
import styles from './ToggleText.module.scss';

const ToggleText = () => {
  return (
<label className={styles.switch}>
    <input className={styles.ipt} type="checkbox" />
    <span className={styles.slider}>
        <span className={styles.circle}></span>
    </span>
</label>
  )
}

export default ToggleText