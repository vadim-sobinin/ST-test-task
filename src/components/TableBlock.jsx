import React from 'react';
import key from 'weak-key';
import { Context } from '../App';
// import { ItemType } from '../layouts/MainLayout';

import TableItem from './TableItem';

// type TableBlockProps = {
//   items: ItemType;
//   setItems: (newItems: ItemType) => void;
// };

const TableBlock = () => {
  const { items } = React.useContext(Context);
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
        {items.map((obj) => (
          <TableItem key={key(obj)} obj={obj} />
        ))}
      </tbody>
    </table>
  );
};

export default TableBlock;
