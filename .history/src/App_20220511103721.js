import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';
import TodoInsert from './components/TodoInsert/TodoInsert';

function App() {
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
      </TodoTemplate>
    </>
  );
}

export default App;
