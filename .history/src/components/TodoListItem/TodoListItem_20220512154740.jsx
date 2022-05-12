import React from 'react';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdOutlineCheckBoxOutlineBlank />
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
