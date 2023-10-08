import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedTaskName(tasks[index].name);
  };

  const handleSaveEdit = () => {
    if (editedTaskName.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? { ...task, name: editedTaskName } : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editingIndex ? (
              <div>
                <input
                  type="text"
                  value={editedTaskName}
                  onChange={(e) => setEditedTaskName(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div>
                {task.name}
                <button onClick={() => handleEditClick(index)}>Edit</button>
                {/* <button onClick={() => handleDeleteTask(index)}>Delete</button> */}
                <button onClick={() => handleSaveEdit(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
