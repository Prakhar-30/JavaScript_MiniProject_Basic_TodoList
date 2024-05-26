import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [command, setCommand] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTask]);
    setNewTask('');
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleCommandSubmit = () => {
    if (command === 'new') {
      handleAddTodo();
    }
    setCommand('');
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
