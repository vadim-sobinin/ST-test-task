import React from 'react';

import iconSearch from '../assets/images/icons/search.svg';
import iconPaginationNext from '../assets/images/icons/pagination-next.svg';
import iconPaginationPrev from '../assets/images/icons/pagination-prev.svg';
import iconEdit from '../assets/images/icons/table-edit.svg';
import iconDelete from '../assets/images/icons/table-delete.svg';
import iconArrowTop from '../assets/images/icons/arrow-top.svg';
import iconArrowDown from '../assets/images/icons/arrow-down.svg';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <div className="wrapper__table">
          <div className="section-table">
            <div className="section-table__header">
              <div className="section-table__header-top">
                <div className="section-table__search">
                  <div className="section-table__search-icon">
                    <img width="16" height="16" src={iconSearch} alt={'search icon'} />
                  </div>
                  <input className="section-table__search-input" type="text" />
                </div>
                <div className="section-table__sorting">
                  <span>Выподить по:</span>
                  <select>
                    <option selected value="10">
                      10
                    </option>
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
              {/* @ts-ignore */}
              <table className="table" width="100%" cellspacing={0}>
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
                  <tr>
                    <td>Ivan</td>
                    <td>568</td>
                    <td>
                      <div className="table__actions">
                        <button className="table__edit" title="Изменить">
                          <img width="16" height="16" src={iconDelete} alt="delete item button" />
                        </button>
                        <button className="table__delete" title="Удалить">
                          <img width="16" height="16" src={iconEdit} alt="edit item button" />
                        </button>
                        <button className="table__down">
                          <img width="12" height="16" src={iconArrowDown} alt="move item down" />
                        </button>
                        <button className="table__top">
                          <img width="12" height="16" src={iconArrowTop} alt="move item top" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="wrapper__forms">
          <div className="wrapper__forms-inner">
            <form className="form" action="#">
              <div className="form__item">
                <label className="form__label" htmlFor="form-name">
                  Name
                </label>
                <input className="form__input" type="text" id="form-name" />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="form-value">
                  Value
                </label>
                <input className="form__input" type="text" id="form-value" />
              </div>
              <div className="form__box">
                <button className="form__button" type="submit">
                  Сохранить
                </button>
              </div>
            </form>
            <form className="form-add" action="#">
              <textarea className="form-add__textarea" rows={6}></textarea>
              <div className="form-add__box">
                <button className="form-add__download">Загрузить</button>
                <button className="form-add__send">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
