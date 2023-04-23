import React from 'react';
import './InputAnimated.scss';

const InputAnimated = () => {
  return (
<div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" required="" />
    <label for="name" class="form__label">Name</label>
</div>
  )
}

export default InputAnimated;
