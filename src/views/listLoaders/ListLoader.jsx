import React, { useEffect, useRef, useState } from 'react';
import './ListLoaders.scss';
import LoaderAnimated from '../../components/loaders/LoaderAnimated/LoaderAnimated';
import LoaderKinetic from '../../components/loaders/LoaderKinetic/LoaderKinetic';
import LoaderNeon from '../../components/loaders/LoaderNeon/LoaderNeon';
import LoaderPuzzle from '../../components/loaders/LoaderPuzzle/LoaderPuzzle';

const ListLoader = () => {


  const loaders = [
    { id: 1, component: <LoaderAnimated />, name: 'Animated' },
    { id: 2, component: <LoaderKinetic />, name: 'Kinetic' },
    { id: 3, component: <LoaderNeon />, name: 'Neon' },
    { id: 4, component: <LoaderPuzzle />, name: 'Puzzle' },
  ];

return (
  <>
    <h2>LISTA LOADERS</h2>
    <div className="listCard">
      {loaders.map((loader) => (
        <div key={loader.id} className="card">
          {loader.component}
        </div>
      ))}
    </div>
  </>
);
};

export default ListLoader;

