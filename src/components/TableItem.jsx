import React from 'react';

import iconEdit from '../assets/images/icons/table-edit.svg';
import iconDelete from '../assets/images/icons/table-delete.svg';
import iconArrowTop from '../assets/images/icons/arrow-top.svg';
import iconArrowDown from '../assets/images/icons/arrow-down.svg';
import { Context } from '../App';

// type TableItemProps = {
//   obj: ItemType;
// };

const TableItem = ({ obj }) => {
  const {
    items,
    setItems,
    setEditingItem,
    setEditingMode,
    editingMode,
    editingItem,
    setInputName,
    setInputValue,
  } = React.useContext(Context);

  const onClickDelete = () => {
    setItems(
      items
        .filter((item) => item.order !== obj.order)
        .map((item, index) => {
          item.order = index;
          return item;
        }),
    );
    if ((items.length = 1)) {
      localStorage.setItem('data', '');
    }
  };

  const onClickEdit = () => {
    if (editingMode && editingItem.order === obj.order) {
      setEditingMode(false);
      setEditingItem('');
      setInputName('');
      setInputValue('');
    } else {
      setEditingMode(true);
      setEditingItem(obj);
    }
  };

  const onClickDown = () => {
    const bufferArray = [...items];
    bufferArray[obj.order + 1].order = obj.order;
    bufferArray[obj.order].order = obj.order + 1;
    bufferArray.sort((a, b) => a.order - b.order);
    setItems(bufferArray);
  };

  const onClickUp = () => {
    const bufferArray = [...items];
    bufferArray[obj.order - 1].order = obj.order;
    bufferArray[obj.order].order = obj.order - 1;
    bufferArray.sort((a, b) => a.order - b.order);
    setItems(bufferArray);
  };

  return (
    <tr
      id={obj.order}
      className={editingMode && editingItem.order === obj.order ? 'table__editing-elem' : ''}>
      <td>{obj.name}</td>
      <td>{obj.value}</td>
      <td>
        <div className="table__actions">
          <button className="table__edit" title="Изменить" onClick={onClickEdit}>
            <img width="16" height="16" src={iconEdit} alt="delete item button" />
          </button>
          <button
            className={editingMode ? 'table__delete disabled' : 'table__delete'}
            disabled={editingMode}
            title="Удалить"
            onClick={onClickDelete}>
            <img width="16" height="16" src={iconDelete} alt="edit item button" />
          </button>
          <button
            className={obj.order === items.length - 1 ? 'table__down disabled' : 'table__down'}
            disabled={obj.order === items.length - 1 ? true : false}
            onClick={onClickDown}>
            <img width="12" height="16" src={iconArrowDown} alt="move item down" />
          </button>
          <button
            className={obj.order === 0 ? 'table__top disabled' : 'table__top'}
            disabled={obj.order === 0 ? true : false}
            onClick={onClickUp}>
            <img width="12" height="16" src={iconArrowTop} alt="move item top" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
