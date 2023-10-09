// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS for styling
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName }]);
  };

  const editTask = (index, updatedTaskName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = updatedTaskName;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
