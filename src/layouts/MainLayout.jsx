import React from 'react';

import TableBlock from '../components/TableBlock';
import Search from '../components/Search';
import EditFormBlock from '../components/EditFormBlock';
import InputJSON from '../components/InputJSON';
import Pagination from '../components/Pagination/Pagination';

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
                <Pagination />
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
