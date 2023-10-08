import React, { useState } from "react";
import TaskList from "./TaskList"; // Assuming TaskList component is in the same directory
import TaskForm from "./TaskForm"; // Assuming TaskForm component is in the same directory

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <TaskForm addTask={handleAddTask} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
