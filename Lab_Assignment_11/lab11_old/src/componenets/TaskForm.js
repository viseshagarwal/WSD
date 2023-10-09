// src/components/TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({ name: "", dueDate: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim() === "") {
      alert("Task name cannot be empty");
      return;
    }
    onSubmit(task);
    setTask({ name: "", dueDate: "" });
  };

  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form>
        <input
          id="task-name"
          type="text"
          placeholder="Task name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <input
          type="date"
          placeholder="Due date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
