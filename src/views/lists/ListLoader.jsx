import './Lists.scss';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';

const ListLoader = ({ listLoaders }) => {

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = listLoaders.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(listLoaders.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % listLoaders.length;
      setItemOffset(newOffset);
    };

return (
    <>
    <div id='list' className="listCard">
      {currentItems.map((el) => (
        <div key={el.id} className="card" >
          <Link to={`/detailLoader/${el.id}`}>
          {el.component}
          </Link>
        </div>
      ))}
    </div>
    <ReactPaginate 
        className='glitch lists'
        //breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        //pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
    />
    </>
);
};

export default ListLoader;

