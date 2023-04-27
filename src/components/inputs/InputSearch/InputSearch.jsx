import React from 'react';
import styles from './InputSearch.module.scss';

const InputSearch = () => {
  return (
<div className={styles.input__container}>
  <label className={styles.input__label}>Username</label>
  <input placeholder="Enter your username" className={styles.input} name="text" type="text" />
  <p className={styles.input__description}>What do you want to call yourself?</p>
</div>
  )
}

export default InputSearch