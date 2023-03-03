import React from 'react';
import debounce from 'lodash.debounce';
import iconSearch from '../assets/images/icons/search.svg';
import { Context } from '../App';

function Search() {
  const { inputSearch, setInputSearch, searchValue, setSearchValue } = React.useContext(Context);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    [],
  );
  const onChangeInput = (e) => {
    setInputSearch(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className="section-table__search">
      <div className="section-table__search-icon">
        <img width="16" height="16" src={iconSearch} alt={'search icon'} />
      </div>
      <input
        className="section-table__search-input"
        type="text"
        value={inputSearch}
        onChange={(e) => onChangeInput(e)}
      />
    </div>
  );
}

export default Search;
