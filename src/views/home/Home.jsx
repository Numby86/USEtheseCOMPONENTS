import "./Home.scss";
import "../lists/Lists.scss";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";

const Home = ({ all }) => {
  const goCode = "CODE </>";
  const [itemOffset, setItemOffset] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const itemsPerPage = 5;
  const currentItems = all.slice(itemOffset, itemOffset + itemsPerPage);
  const pageCount = Math.ceil(all.length / itemsPerPage);
  const intervalTime = 3000;

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setItemOffset((itemOffset + itemsPerPage) % all.length);
      }, 500);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [itemOffset]);

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div className="myhome">
    <div className="present"><p className="present__p">Esta página esta creada para desarrolladores que no les guste mucho la maquetación, entra en el listado de componentes que necesites, elige el que te guste y con un clic tienes el código copiado, y listo para implementar en tu proyecto.</p></div>
      <div className={`listCard listTrans ${transitioning ? "transitioning" : ""}`} onTransitionEnd={handleTransitionEnd}>
        {currentItems.map((el) => (
          <div key={el.id} className="card">
            {el.component}
            <Link to={`/detail/${el.id}`}>
            <button className='goCode'>{ goCode }</button>
          </Link>
          </div>
        ))}
        <div className="myPagination pagesHome">
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
          //pageRangeDisplayed={1}
          //className='glitch lists'
          //breakLabel="..."
        />
      </div>
      </div>
      </div>
  );
};

export default Home;


// import "./Home.scss";
// import "../lists/Lists.scss";
// import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import React, { useState, useEffect } from "react";

// const Home = ({ all }) => {
//   const goCode = "CODE </>";
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 5;
//   const currentItems = all.slice(itemOffset, itemOffset + itemsPerPage);
//   const pageCount = Math.ceil(all.length / itemsPerPage);
//   const intervalTime = 3000; 

//   const handlePageClick = (event) => {
//     const newOffset = event.selected * itemsPerPage;
//     setItemOffset(newOffset);
//   };

//   // const handlePrevClick = () => {
//   //   setItemOffset(Math.max(itemOffset - itemsPerPage, 0));
//   // };

//   // const handleNextClick = () => {
//   //   setItemOffset(Math.min(itemOffset + itemsPerPage, (pageCount - 1) * itemsPerPage));
//   // };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setItemOffset((itemOffset + itemsPerPage) % all.length);
//     }, intervalTime);
//     return () => clearInterval(interval);
//   }, [itemOffset]);

//   return (
//     <>
//       <div className="present"></div>
//       <div className="listCard listTrans">
//           {currentItems.map((el) => (
//             <div key={el.id} className="card">
//               {el.component}
//             </div>
//           ))}
//         {/* <button className="prevBtn" onClick={handlePrevClick}>
//           &lt;
//         </button>
//         <button className="nextBtn" onClick={handleNextClick}>
//           &gt;
//         </button> */}
//       </div>
//       <div className="myPagination">
//         <ReactPaginate
//           previousLabel="< prev"
//           nextLabel="next >"
//           pageCount={pageCount}
//           onPageChange={handlePageClick}
//           renderOnZeroPageCount={null}
//           containerClassName={"paginationBttns"}
//           previousLinkClassName={"previousBttn"}
//           nextLinkClassName={"nextBttn"}
//           disabledClassName={"paginationDisabled"}
//           activeClassName={"paginationActive"}
//           //pageRangeDisplayed={1}
//           //className='glitch lists'
//           //breakLabel="..."
//         />
//       </div>
//     </>
//   );
// };

// export default Home;

