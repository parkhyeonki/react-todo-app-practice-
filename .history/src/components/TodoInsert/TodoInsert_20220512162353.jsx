import React, { useState, useRef, useMemo } from 'react';
import './TodoInsert.scss';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoInsert = ({ addTodo }) => {
  const inputRef = useRef();
  const onClickTodo = useMemo((event) => {
    addTodo(inputRef.current.value);
  }, []);
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
