import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
