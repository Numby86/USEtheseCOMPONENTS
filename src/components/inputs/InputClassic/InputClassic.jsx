import React from 'react';
import styles from './InputClassic.module.scss';

const InputClassic = () => {
  return (
<input type="text" name="text" className={styles.input} placeholder="Type your text" />
  )
}

export default InputClassic;