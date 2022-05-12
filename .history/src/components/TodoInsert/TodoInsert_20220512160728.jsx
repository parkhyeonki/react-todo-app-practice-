import React, { useState } from 'react';
import './TodoInsert.scss';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoInsert = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  const onClickTodo = () => {};
  const onChangeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <form className="TodoInsert">
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
      />
      <button className="TodoBtn" type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoInsert;
