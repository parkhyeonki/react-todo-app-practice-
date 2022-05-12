import React, { useState, useRef } from 'react';
import './TodoInsert.scss';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoInsert = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  const inputRef = useRef();
  const onClickTodo = (event) => {
    setInputText(inputRef.current.value);
    addTodo(inputText);
    event.preventDefault();
  };
  return (
    <form className="TodoInsert" onSubmit={onClickTodo}>
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
        ref={inputRef}
      />
      <button className="TodoBtn" type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoInsert;
