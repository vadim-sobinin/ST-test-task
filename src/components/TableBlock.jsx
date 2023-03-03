import React from 'react';
import key from 'weak-key';
import { Context } from '../App';
import NotFound from './NotFound';
// import { ItemType } from '../layouts/MainLayout';

import TableItem from './TableItem';

// type TableBlockProps = {
//   items: ItemType;
//   setItems: (newItems: ItemType) => void;
// };

const TableBlock = () => {
  const { items, searchValue } = React.useContext(Context);

  const checkSearch = () => {
    if (!searchValue) {
      return items;
    }
    return items.filter(
      (item) => item.name.includes(searchValue) || item.value.includes(searchValue),
    );
  };

  return (
    <table className="table" width="100%" cellSpacing={0}>
      <thead className="thead">
        <tr>
          <th scope="col" style={{ width: '40%' }}>
            Name
          </th>
          <th scope="col" style={{ width: '40%' }}>
            Value
          </th>
          <th scope="col" style={{ width: '20%' }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {checkSearch().map((obj) => (
          <TableItem key={key(obj)} obj={obj} />
        ))}
      </tbody>
    </table>
  );
};

export default TableBlock;
