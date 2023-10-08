// import React, { useState } from "react";

// const TaskForm = ({ addTask }) => {
//   const [taskName, setTaskName] = useState("");

//   const handleTaskNameChange = (e) => {
//     setTaskName(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (taskName.trim() !== "") {
//       addTask({ name: taskName });
//       setTaskName("");
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Task</h2>
//       <input
//         type="text"
//         value={taskName}
//         onChange={handleTaskNameChange}
//         placeholder="Enter task name"
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// };

// export default TaskForm;

import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      addTask({ name: taskName });
      setTaskName("");
    }
  };

  return (
    <div>
      <input type="text" value={taskName} onChange={handleTaskNameChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
