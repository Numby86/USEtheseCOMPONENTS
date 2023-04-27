import React from 'react';
import styles from './InputTriple.module.scss';

const InputTriple = () => {
  return (
<div className={styles.container}>
    <input type="text" name="text" className={styles.input} />
    <input type="text" name="text" className={styles.input} />
    <input type="text" name="text" className={styles.input} />
</div>
  )
}

export default InputTriple