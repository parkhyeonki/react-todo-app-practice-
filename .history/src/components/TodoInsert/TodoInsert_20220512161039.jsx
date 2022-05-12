import React, { useState, useRef } from 'react';
import './TodoInsert.scss';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoInsert = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  const inputRef = useRef();
  const onClickTodo = () => {
    // console.log(inputText);
    console.log(inputRef.current.value);
  };
  const onChangeInput = (e) => {
    setInputText(e.target.value);
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
