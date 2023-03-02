import React from 'react';
import { Context } from '../App';

const InputJSON = () => {
  const { setItems } = React.useContext(Context);
  const [inputJSON, setInputJSON] = React.useState('');
  const inputRef = React.useRef();

  const onClickLoad = () => {
    setInputJSON(
      JSON.stringify(
        JSON.parse(localStorage.getItem('data')).map((item) => {
          delete item.order;
          return item;
        }),
      ),
    );
  };

  const onClickSend = () => {
    try {
      setItems(
        JSON.parse(inputJSON).map((item, index) => {
          item.order = index;
          return item;
        }),
      );
    } catch (error) {
      console.log('Error');
      inputRef.current.style.border = '3px solid red';
      console.dir(inputRef.current.style);
    }
  };

  return (
    <form className="form-add" action="#">
      <textarea
        className="form-add__textarea"
        rows={6}
        ref={inputRef}
        value={inputJSON}
        onChange={(e) => setInputJSON(e.target.value)}
        onFocus={() => (inputRef.current.style.border = '1px solid #ddd')}></textarea>

      <div className="form-add__box">
        <button className="form-add__download" onClick={onClickLoad}>
          Загрузить
        </button>
        <button className="form-add__send" onClick={onClickSend}>
          Отправить
        </button>
      </div>
    </form>
  );
};

export default InputJSON;
