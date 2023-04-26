import React from 'react';
import styles from './CheckboxIphone.module.scss';

const CheckboxIphone = () => {
  return (
<div className={styles.checkboxApple}>
  <input className={styles.yep} id="check-apple" type="checkbox" />
  <label className={styles.labelApple} for="check-apple"></label>
</div>
  )
}

export default CheckboxIphone