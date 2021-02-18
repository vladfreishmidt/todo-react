import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>Vlad's ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
