import React from 'react';
import styles from './CheckboxAgree.module.scss';

const CheckboxAgree = () => {
  return (
<label className={styles.checkbox}>
  <input className={styles.ipt} type="checkbox" />
  <span className={styles.checkmark}></span>
  <span className={styles.text}>Agree</span>
</label>

  )
}

export default CheckboxAgree