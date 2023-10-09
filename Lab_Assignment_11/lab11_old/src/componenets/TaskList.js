// src/components/TaskList.js
import React, { useState } from "react";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  const [editedTask, setEditedTask] = useState({
    index: -1,
    name: "",
    dueDate: "",
  });

  const handleEdit = (index, task) => {
    setEditedTask({ index, ...task });
  };

  const handleSave = () => {
    onEdit(editedTask.index, editedTask);
    setEditedTask({ index: -1, name: "", dueDate: "" });
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editedTask.index ? (
              <div>
                <input
                  type="text"
                  placeholder="Task name"
                  value={editedTask.name}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, name: e.target.value })
                  }
                />
                <input
                  type="date"
                  value={editedTask.dueDate}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, dueDate: e.target.value })
                  }
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                {task.name} (Due: {task.dueDate}) -
                <button onClick={() => handleEdit(index, task)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
