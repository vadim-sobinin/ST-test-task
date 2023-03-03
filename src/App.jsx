import React from 'react';
import MainLayout from './layouts/MainLayout';
import './scss/style.scss';

export const Context = React.createContext({});

const App = () => {
  const [items, setItems] = React.useState([]);
  const [editingItem, setEditingItem] = React.useState([]);
  const [editingMode, setEditingMode] = React.useState(false);

  const [inputName, setInputName] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const [inputSearch, setInputSearch] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(4);
  const [totalPages, setTotalPages] = React.useState(1);

  const checkSearch = (items) => {
    if (!searchValue) {
      return items;
    }
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.value.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };

  React.useEffect(() => {
    localStorage.getItem('data') && setItems(JSON.parse(localStorage.getItem('data')));
  }, []);

  React.useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        editingItem,
        setEditingItem,
        editingMode,
        setEditingMode,
        inputName,
        setInputName,
        inputValue,
        setInputValue,
        inputSearch,
        setInputSearch,
        searchValue,
        setSearchValue,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        checkSearch,
        totalPages,
        setTotalPages,
      }}>
      <MainLayout />;
    </Context.Provider>
  );
};

export default App;
