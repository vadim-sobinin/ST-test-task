import React from 'react';

import iconSearch from '../assets/images/icons/search.svg';
import iconPaginationNext from '../assets/images/icons/pagination-next.svg';
import iconPaginationPrev from '../assets/images/icons/pagination-prev.svg';

import TableBlock from '../components/TableBlock';
import Search from '../components/Search';
import EditFormBlock from '../components/EditFormBlock';
import { Context } from '../App';
import InputJSON from '../components/InputJSON';

// export type ItemType = {
//   name: string;
//   value: string;
// };

const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <div className="wrapper__table">
          <div className="section-table">
            <div className="section-table__header">
              <div className="section-table__header-top">
                <Search />
                <div className="section-table__sorting">
                  <span>Выподить по:</span>
                  <select>
                    <option defaultValue={10}>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                </div>
                <ul className="section-table__pagination-list">
                  <li className="section-table__pagination-item prev">
                    <a className="section-table__pagination-link" href="/#">
                      <img width="10" height="16" src={iconPaginationPrev} alt="previous page" />
                    </a>
                  </li>
                  <li className="section-table__pagination-item current">
                    <span className="section-table__pagination-link">1</span>
                  </li>
                  <li className="section-table__pagination-item">
                    <a className="section-table__pagination-link" href="/#">
                      2
                    </a>
                  </li>
                  <li className="section-table__pagination-item">
                    <span className="section-table__pagination-link">...</span>
                  </li>
                  <li className="section-table__pagination-item">
                    <a className="section-table__pagination-link" href="/#">
                      58
                    </a>
                  </li>
                  <li className="section-table__pagination-item next">
                    <a className="section-table__pagination-link" href="/#">
                      <img width="10" height="16" src={iconPaginationNext} alt="next page" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="section-table__header-bottom">
                <div className="section-table__thead">
                  <div className="section-table__thead-item" style={{ width: '40%' }}>
                    Name
                  </div>
                  <div className="section-table__thead-item" style={{ width: '40%' }}>
                    Value
                  </div>
                  <div className="section-table__thead-item" style={{ width: '20%' }}>
                    Actions
                  </div>
                </div>
              </div>
            </div>
            <div className="section-table__inner">
              <TableBlock />
            </div>
          </div>
        </div>
        <div className="wrapper__forms">
          <div className="wrapper__forms-inner">
            <EditFormBlock />
            <InputJSON />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
