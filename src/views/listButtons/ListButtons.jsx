import React from 'react';
import './ListButtons.scss';

import ButtonGlitch from '../../components/buttons/ButtonGlitch/ButtonGlitch';
import ButtonNeon from '../../components/buttons/ButtonNeon/ButtonNeon'

const ListButtons = () => {
  return (
    <>
    <h2>LISTA BOTONES</h2>
    <div class="listCard">
      <div class="card"><ButtonGlitch/></div>
      <div class="card"><ButtonNeon/></div>
      <div class="card"></div>
    </div>
    </>
  )
}

export default ListButtons;
