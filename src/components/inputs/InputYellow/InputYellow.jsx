import React from 'react';
import styles from './InputYellow.module.scss';

const InputYellow = () => {
  return (
<input type="text" placeholder="Write here..." name="text" className={styles.input} />
  )
}

export default InputYellow