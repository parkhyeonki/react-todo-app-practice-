import React from 'react';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <checkbox />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <remove />
      </div>
    </div>
  );
};

export default TodoListItem;
