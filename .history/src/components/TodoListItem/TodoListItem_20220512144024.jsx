import React from 'react';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdOutlineCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
