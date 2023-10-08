import React, { useState } from "react";
import TaskList from "./componenets/TaskList";
import TaskForm from "./componenets/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>My Task List App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
