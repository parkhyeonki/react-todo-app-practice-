import React, { useState, useRef, useCallback } from 'react';
import './TodoInsert.scss';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoInsert = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  const onClickTodo = useCallback(
    (event) => {
      addTodo(inputText);
    },
    [inputText],
  );
  const inputOnChange = useCallback(
    (e) => {
      setInputText(e.target.value);
    },
    [inputText],
  );
  return (
    <form className="TodoInsert" onSubmit={onClickTodo}>
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
        onChange={inputOnChange}
      />
      <button className="TodoBtn" type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoInsert;
