import React from 'react';
import { MdCheckBox } from 'react-icons/md';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBox />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <remove />
      </div>
    </div>
  );
};

export default TodoListItem;
