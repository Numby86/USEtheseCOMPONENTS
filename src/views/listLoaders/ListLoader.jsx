import React from 'react';
import './ListLoaders.scss';
import LoaderAnimated from '../../components/loaders/LoaderAnimated/LoaderAnimated';
import LoaderKinetic from '../../components/loaders/LoaderKinetic/LoaderKinetic';
import LoaderNeon from '../../components/loaders/LoaderNeon/LoaderNeon';
import LoaderPuzzle from '../../components/loaders/LoaderPuzzle/LoaderPuzzle';

const ListLoader = () => {
  return (
    <>
    <h2>LISTA LOADERS</h2>
    <div class="listCard">
        <div class="card"><LoaderAnimated/><p>ANIMATED</p><button class='more'>+</button></div>
        <div class="card"><LoaderKinetic/></div>
        <div class="card"><LoaderNeon/></div>
        <div class="card"><LoaderPuzzle/></div>
        <div class="card"></div>
    </div>
    </>
  )
}

export default ListLoader;
