import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [command, setCommand] = useState('');

  const handleAddTodo = () => {
    if (newTask.trim() !== '') {
      setTodos([...todos, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
      <div className="p-12 max-w-lg w-full">
        <motion.h1 
          className="text-5xl font-bold mb-20 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 100, yoyo: Infinity }}
          style={{ textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00, 0 0 50px #00FF00, 0 0 70px #00FF00, 0 0 80px #00FF00, 0 0 100px #00FF00' }}
        >
          ToDo List
        </motion.h1>
        <ul className="space-y-6">
          <AnimatePresence>
            {todos.map((todo, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-800 to-indigo-1200 rounded-lg hover:shadow-2xl"
              >
                <span className="text-lg font-medium">{todo}</span>
                <button 
                  onClick={() => handleDeleteTodo(index)} 
                  className="text-red-500 hover:text-pink-900 transition-colors"
                >
                  Delete
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <div className="mt-6 flex space-x-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow p-2 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleAddTodo} 
            className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
