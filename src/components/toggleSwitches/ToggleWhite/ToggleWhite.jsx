import React from 'react';
import styles from './ToggleWhite.module.scss';

const ToggleWhite = () => {
  return (
<label className={styles.label}>
    <div className={styles.toggle}>
        <input className={styles.toggle_state} type="checkbox" name="check" value="check" />
        <div className={styles.indicator}></div>
    </div>
</label>
  )
}

export default ToggleWhite;