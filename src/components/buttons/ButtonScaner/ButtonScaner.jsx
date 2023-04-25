import React from 'react';
import styles from './ButtonScaner.module.scss';

const ButtonScaner = () => {
  return (
<button data-text="Awesome" className={styles.button}>
    <span className={styles.actualText}>&nbsp;uiverse&nbsp;</span>
    <span className={styles.hoverText} aria-hidden="true">&nbsp;uiverse&nbsp;</span>
</button>
  )
}

export default ButtonScaner;