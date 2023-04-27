import React from 'react';
import styles from './InputValidate.module.scss';

const InputValidate = () => {
  return (
<div className={styles.containerInput}>
    <input className={styles.ipt} placeholder="Type for validate" type="text" />
</div>
  )
}

export default InputValidate