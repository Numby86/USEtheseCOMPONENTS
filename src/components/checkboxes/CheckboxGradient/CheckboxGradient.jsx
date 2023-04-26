import React from 'react';
import styles from './CheckboxGradient.module.scss';

const CheckboxGradient = () => {
  return (
<label className={styles.container}>
  <input className={styles.ipt} type="checkbox" />
  <div className={styles.checkmark}></div>
</label>
  )
}

export default CheckboxGradient