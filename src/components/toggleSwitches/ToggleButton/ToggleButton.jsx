import React from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton = () => {
  return (
<label className={styles.switch}>
    <div className={styles.round}><input className={styles.ipt} name="onoff" id="onoff" type="checkbox" />
        <div className={styles.back}><label for="onoff" className={styles.but}><span className={styles.on}>0</span><span className={styles.off}>I</span></label></div>
    </div>
</label>
  )
}

export default ToggleButton