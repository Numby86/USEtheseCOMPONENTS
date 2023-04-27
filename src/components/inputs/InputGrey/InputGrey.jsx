import React from 'react';
import styles from './InputGrey.module.scss';

const InputGrey = () => {
  return (

<input type="text" name="text" className={styles.input} placeholder="Type here..." />
  )
}

export default InputGrey