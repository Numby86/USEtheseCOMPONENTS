import React from 'react';
import { Link } from 'react-router-dom';

const ListInputs = ({ listInputs }) => {
  return (
    <>
    <div className="listCard">
      {listInputs.map((el) => (
        <div key={el.id} className="card" >
          <Link to={`/detailInput/${el.id}`}>
          {el.component}
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListInputs;
