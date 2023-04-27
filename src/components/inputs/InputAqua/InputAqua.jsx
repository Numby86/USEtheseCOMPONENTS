import React from 'react';
import styles from './InputAqua.module.scss';

const InputAqua = () => {
  return (
<div className={styles.inputbox}>
    <input className={styles.ipt} required="required" type="text" />
    <span className={styles.span}>Username</span>
    <i className={styles.i}></i>
</div>
  )
}

export default InputAqua