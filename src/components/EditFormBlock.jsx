import React from 'react';
import { Context } from '../App';

const EditFormBlock = () => {
  const {
    items,
    setItems,
    setEditingItem,
    editingItem,
    editingMode,
    setEditingMode,
    inputName,
    setInputName,
    inputValue,
    setInputValue,
  } = React.useContext(Context);

  const nameInputRef = React.useRef();
  const valueInputRef = React.useRef();

  const addNewItem = (name, value) => {
    setItems([...items, { name, value, order: items.length }]);
  };

  const onClickAddOrEdit = () => {
    if (!inputName) {
      return;
    }
    if (!inputValue) {
      return;
    }

    if (!editingMode) {
      addNewItem(inputName, inputValue);
      setInputName('');
      setInputValue('');
    }
    if (editingMode) {
      setItems(
        items.map((item) => {
          if (item.order === editingItem.order) {
            item.name = inputName;
            item.value = inputValue;
          }
          return item;
        }),
      );
      setInputName('');
      setInputValue('');
      setEditingItem('');
      setEditingMode(false);
    }
  };

  React.useEffect(() => {
    if (editingMode) {
      setInputName(editingItem.name);
      setInputValue(editingItem.value);
    }
  }, [editingItem]);

  return (
    <form className="form" action="#">
      <div className="form__item">
        <label className="form__label" htmlFor="form-name">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          id="form-name"
          ref={nameInputRef}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="form-value">
          Value
        </label>
        <input
          className="form__input"
          type="text"
          id="form-value"
          ref={valueInputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="form__box">
        <button
          className={editingMode ? 'form__button editing' : 'form__button'}
          type="button"
          onClick={() => onClickAddOrEdit()}>
          {editingMode ? 'Изменить элемент' : 'Добавить элемент'}
        </button>
      </div>
    </form>
  );
};

export default EditFormBlock;
