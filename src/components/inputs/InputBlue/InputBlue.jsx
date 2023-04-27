import React from 'react';
import styles from './InputBlue.module.scss';

const InputBlue = () => {
  return (
<input type="text" name="text" className={styles.input} placeholder="Write a message" />
  )
}

export default InputBlue