import React from 'react';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodo, onToggle }) => {
  const { id, text, checked } = todo;

  const onClickItem = () => {
    removeTodo(id);
  };

  const onToggleItem = () => {
    onToggle(id);
  };
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={onToggleItem}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline onClick={onClickItem} />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
