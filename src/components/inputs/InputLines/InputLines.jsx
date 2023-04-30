import React from 'react';
import styles from './InputLines.module.scss';

const InputLines = () => {
  return (
<div className={styles.inputContainer}>
        <input className={styles.ipt} required="" id="input" type="text" />
        <label className={styles.label} htmlFor="input">Enter Text</label>
        <div className={styles.underline}></div>
        <div className={styles.sideline}></div>
        <div className={styles.upperline}></div>
        <div className={styles.line}></div>
    </div>
  )
}

export default InputLines;