import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트를 다루는 기술',
      checked: true,
    },
    {
      id: 2,
      text: '자바스크립트 Deep Dive',
      checked: false,
    },
    {
      id: 3,
      text: 'Project',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  useEffect(() => {
    console.log('Mount');
  }, []);

  const addTodo = useCallback(
    (inputText) => {
      const todo = {
        id: nextId,
        text: inputText,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  return (
    <>
      <TodoTemplate>
        <TodoInsert addTodo={addTodo} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
}

export default App;
