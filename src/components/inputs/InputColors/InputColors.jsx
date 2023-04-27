import React from 'react';
import styles from './InputColors.module.scss';

const InputColors = () => {
  return (
<input type="text" autocomplete="off" placeholder="Type your text" name="text" className={styles.inputColors} />
  )
}

export default InputColors;