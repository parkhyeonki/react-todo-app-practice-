import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useReducer,
} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';

function createBulkTodo() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodo);

  const nextId = useRef(2501);

  useEffect(() => {
    console.log('Mount');
  }, []);

  const addTodo = useCallback((inputText) => {
    const todo = {
      id: nextId,
      text: inputText,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => id !== todo.id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoInsert addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;
