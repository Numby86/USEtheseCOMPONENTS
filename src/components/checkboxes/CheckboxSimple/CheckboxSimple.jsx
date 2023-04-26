import React from 'react';
import styles from './CheckboxSimple.module.scss';

const CheckboxSimple = () => {
  return (
<label class={styles.container}>
  <input class={styles.ipt} type="checkbox" />
  <div class={styles.checkmark}></div>
</label>
  )
}

export default CheckboxSimple;