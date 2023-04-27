import React from 'react';
import styles from './InputPurple.module.scss';

const InputPurple = () => {
  return (
<input type="text" name="text" className={styles.input} placeholder="Type something here...." />
  )
}

export default InputPurple;