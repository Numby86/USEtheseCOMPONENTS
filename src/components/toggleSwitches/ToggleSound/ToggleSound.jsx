import React from 'react';
import styles from './ToggleSound.module.scss';

const ToggleIronman = () => {
  return (
    <>
    <input className={styles.ipt} id="checkbox" type="checkbox" />
    <label class={styles.Switch} for="checkbox">
    </label>
    </>
  )
}

export default ToggleIronman