import React from 'react';
import styles from './CheckboxEye.module.scss';

const CheckboxEye = () => {
  return (
<label className={styles.container}>
  <input className={styles.ipt} type="checkbox" />
  <div className={styles.checkmark}></div>
</label>
  )
}

export default CheckboxEye