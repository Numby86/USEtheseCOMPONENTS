import React from 'react';
import styles from './ButtonAniNeon.module.scss';

const ButtonAniNeon = () => {
  return (
        <button className={styles.button}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span> Hover me
        </button>
  )
}

export default ButtonAniNeon;