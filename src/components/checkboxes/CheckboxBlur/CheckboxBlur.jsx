import React from 'react';
import styles from './CheckboxBlur.module.scss';

const CheckboxBlur = () => {
  return (
<label className={styles.container}>
  <input className={styles.ipt} type="checkbox" />
  <div className={styles.checkmark}></div>
</label>
  )
}

export default CheckboxBlur