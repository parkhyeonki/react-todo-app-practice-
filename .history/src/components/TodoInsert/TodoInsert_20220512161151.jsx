import React, { useState, useRef } from 'react';
import './TodoInsert.scss';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoInsert = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  const inputRef = useRef();
  const onClickTodo = () => {
    setInputText(inputRef.current.value);
    addTodo(inputText);
  };
  return (
    <form className="TodoInsert">
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
        onChange={onChangeInput}
        ref={inputRef}
      />
      <button className="TodoBtn" type="submit" onClick={onClickTodo}>
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoInsert;
