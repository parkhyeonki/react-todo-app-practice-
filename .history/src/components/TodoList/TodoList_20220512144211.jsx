import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
