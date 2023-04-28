import React from 'react';
import styles from './ToggleBasic.module.scss';

const ToogleBasic = () => {
  return (
<label className={styles.switch}>
  <input className={styles.ipt} type="checkbox" />
  <span className={styles.slider}>
   <svg className={styles.sliderIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
  </span>
</label>
  )
}

export default ToogleBasic