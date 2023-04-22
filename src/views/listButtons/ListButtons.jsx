import React, { useState } from 'react';
import './ListButtons.scss';
import { renderToString } from 'react-dom/server';
import { Link } from 'react-router-dom';

const ListButtons = ({ listButtons }) => {

  return (
    <>
    <h2>LISTA BOTONES</h2>
    <div className="listCard">
      {listButtons.map((button) => (
        <div key={button.id} className="card" >
          <Link to={`/detail/${button.id}`}>
          {button.component}
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListButtons;