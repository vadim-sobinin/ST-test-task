import React from 'react';
import { Context } from '../../App';

import iconPaginationNext from '../../assets/images/icons/pagination-next.svg';
import iconPaginationPrev from '../../assets/images/icons/pagination-prev.svg';
import PaginationNumber from './PaginationNumber';

function Pagination() {
  const {
    items,
    currentPage,
    setCurrentPage,
    checkSearch,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    setTotalPages,
  } = React.useContext(Context);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(checkSearch(items).length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  setTotalPages(pageNumbers.length);

  const setPrevPage = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage);
  };

  const setNextPage = () => {
    currentPage < totalPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage);
  };

  const paginationHandler = () => {
    if (currentPage >= totalPages - 3) {
      return (
        <>
          <PaginationNumber number={totalPages - 3} isCurrent={totalPages - 3 === currentPage} />
          <PaginationNumber number={totalPages - 2} isCurrent={totalPages - 2 === currentPage} />
          <PaginationNumber number={totalPages - 1} isCurrent={totalPages - 1 === currentPage} />
          <PaginationNumber number={totalPages} isCurrent={totalPages === currentPage} />
        </>
      );
    }

    return (
      <>
        <PaginationNumber number={currentPage} isCurrent={true} />
        <PaginationNumber number={currentPage + 1} />
        <PaginationNumber number={'...'} />
        <PaginationNumber number={totalPages} />
      </>
    );
  };

  const changeItemsPerPage = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="section-table__sorting">
        <span>Выподить по:</span>
        <select value={itemsPerPage} onChange={(e) => changeItemsPerPage(e)}>
          <option value={2}>2</option>
          <option defaultValue={4}>4</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <ul className="section-table__pagination-list">
        <li className="section-table__pagination-item prev" onClick={setPrevPage}>
          <button className="section-table__pagination-link">
            <img width="10" height="16" src={iconPaginationPrev} alt="previous page" />
          </button>
        </li>
        {totalPages <= 4
          ? pageNumbers.map((number) => (
              <PaginationNumber number={number} isCurrent={number === currentPage} />
            ))
          : paginationHandler()}

        <li className="section-table__pagination-item next">
          <button className="section-table__pagination-link" onClick={setNextPage}>
            <img width="10" height="16" src={iconPaginationNext} alt="next page" />
          </button>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
