import React from 'react';
import './TodoInsert.scss';
import {AiOutlinePlus} from 'react-icons/md'
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
      />
      <button className="TodoBtn" type="submit"></button>
    </form>
  );
};

export default TodoInsert;
