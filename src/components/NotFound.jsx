// import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found not-found__wrapper">
      <div className="not-found__block">
        <h1>
          <span>😕</span>
          <br />
          Совпадение не найдено :(
        </h1>
        <span className="not-found__description">Извините, искомого значения нет в таблице</span>
      </div>
    </div>
  );
};

export default NotFound;
