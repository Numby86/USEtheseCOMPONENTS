import React from 'react';
import styles from './CheckboxCyber.module.scss';

const CheckboxCyber = () => {
  return (
<label className={styles.cyberpunkCheckboxLabel}>
<input className={styles.cyberpunkCheckbox} type="checkbox" />
Check me</label>
  )
}

export default CheckboxCyber;