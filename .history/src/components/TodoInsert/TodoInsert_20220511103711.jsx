import React from 'react';
import './TodoInsert.scss';
import { Myadd } from 'react-icons';
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
      />
      <button className="TodoBtn" type="submit">
        <Myadd />
      </button>
    </form>
  );
};

export default TodoInsert;
