import "./Home.scss";
import "../lists/Lists.scss";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";

const Home = ({ all }) => {
  const goCode = "CODE </>";
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = all.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(all.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % all.length;
    setItemOffset(newOffset);
  };

  return (
    //<div className='homeMain'>
    <>
      <div className="listCard">
        {currentItems.map((el) => (
          <div key={el.id} className="card">
            {el.component}
          </div>
        ))}
      </div>
      <div className="myPagination">
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
          pageRangeDisplayed={1}
          //className='glitch lists'
          breakLabel="..."
        />
      </div>
    </>

    // </div>
  );
};

export default Home;
