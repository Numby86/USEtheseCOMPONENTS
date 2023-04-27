import React from 'react';
import styles from './InputRed.module.scss';

const InputRed = () => {
  return (
<input placeholder="Type here" className={styles.input} name="text" type="text" />
  )
}

export default InputRed