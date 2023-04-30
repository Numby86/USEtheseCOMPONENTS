import React from 'react';
import styles from './ToggleSound.module.scss';

const ToggleSound = () => {
  return (
    <>
    <input className={styles.ipt} id="checkbox" type="checkbox" />
    <label className={styles.Switch} htmlFor="checkbox">
    </label>
    </>
  )
}

export default ToggleSound;