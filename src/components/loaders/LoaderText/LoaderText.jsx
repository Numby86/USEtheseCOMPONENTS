import React from 'react';
import styles from './LoaderText.module.scss';

const LoaderText = () => {
  return (

    <div className={styles.loader}>
    <span className={styles.loaderText}>loading</span>
      <span className={styles.load}></span>
  </div>

  )
}

export default LoaderText