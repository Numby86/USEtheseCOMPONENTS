import React from 'react';
import styles from './CheckboxTurn.module.scss';

const CheckboxTurn = () => {
  return (
<label className={styles.container}>
  <input className={styles.ipt} type="checkbox" />
  <div className={styles.checkmark}></div>
</label>
  )
}

export default CheckboxTurn