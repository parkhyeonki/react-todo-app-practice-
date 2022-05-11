import React from 'react';
import './TodoInsert.scss';
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input
        type="text"
        className="TodoInput"
        placeholder="Please enter what you need to do"
      />
    </form>
  );
};

export default TodoInsert;
