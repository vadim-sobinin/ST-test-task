import React from 'react';
import { Context } from '../../App';

const PaginationNumber = ({ number, isCurrent }) => {
  const { setCurrentPage } = React.useContext(Context);

  const paginate = () => {
    setCurrentPage(number);
  };

  return (
    <li
      onClick={paginate}
      className={`section-table__pagination-item ${isCurrent ? 'current' : ''}`}>
      <span className="section-table__pagination-link">{number}</span>
    </li>
  );
};

export default PaginationNumber;
