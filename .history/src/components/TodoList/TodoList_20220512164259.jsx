import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, removeTodo, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          id={todo.id}
          removeTodo={removeTodo}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
