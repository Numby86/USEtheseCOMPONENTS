import React from 'react';
import styles from './InputRainbow.module.scss';

const InputRainbow = () => {
  return (
<input placeholder="Enter your text..." className={styles.input} name="text" type="text" />
  )
}

export default InputRainbow