import React from 'react';
import styles from './ButtonMove.module.scss';

const ButtonMove = () => {
  return (
<button className={styles.btn}>
    <span className={styles.span}>Button</span><i className={styles.i}></i>
</button>
  )
}

export default ButtonMove