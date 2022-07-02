import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoListItem } from './TodoListItem';

const todos: Todo[] = [
  {
    text: "Get up",
    complete: false
  },
  {
    text: "Take breakfast",
    complete: true
  },
]

function App() {
  return (
      <ul>
        <TodoListItem todo={todos[0]} />
        <TodoListItem todo={todos[1]} />
      </ul>
  );
}

export default App;
