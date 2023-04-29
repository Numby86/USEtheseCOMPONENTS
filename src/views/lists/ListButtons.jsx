import './Lists.scss';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';

const ListButtons = ({ listButtons }) => {

    const goCode = 'CODE </>'
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = listButtons.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(listButtons.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % listButtons.length;
      setItemOffset(newOffset);
    };

  return (
    <>
    <div className="listCard">
      {currentItems.map((el) => (

          <div key={el.id} className="card" >
            {el.component}
            <Link to={`/detailButton/${el.id}`}>
              <button className='goCode'>{ goCode }</button>
            </Link>
          </div>
      ))}
    </div>
        <div className='myPagination'>
      <ReactPaginate 

          previousLabel="< prev"
          nextLabel="next >"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          //pageRangeDisplayed={5}
          //className='glitch lists'
          //breakLabel="..."
      />
    </div>
    </>
  )
}

export default ListButtons;