import React from 'react';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodo }) => {
  const { text, checked } = todo;

  const onClickItem = () => {
    removeTodo(todo);
  };
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline onClick={onClickItem} />
      </div>
    </div>
  );
};

export default TodoListItem;
