// // src/components/TaskForm.js
// import React, { useState } from "react";

// const TaskForm = ({ onSubmit }) => {
//   const [task, setTask] = useState({ name: "", dueDate: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.name.trim() === "") {
//       alert("Task name cannot be empty");
//       return;
//     }
//     onSubmit(task);
//     setTask({ name: "", dueDate: "" });
//   };

//   return (
//     <div className="task-form">
//       <h2>Add Task</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           id="task-name"
//           type="text"
//           placeholder="Task name"
//           value={task.name}
//           onChange={(e) => setTask({ ...task, name: e.target.value })}
//         />
//         &nbsp;
//         <input
//           type="date"
//           placeholder="Due date"
//           value={task.dueDate}
//           onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
//         />
//         &nbsp; &nbsp;
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default TaskForm;

import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, dueDate });
    setName("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Task Name</label>
        <textarea
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="dueDate">Due Date: </label>
        &nbsp; &nbsp;
        <input
          className="form-control"
          type="date"
          id="dueDate"
          value={dueDate}
          style={{ width: "200px", margin: "0 auto" }}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
      <br /> <br />
    </form>
  );
};

export default TaskForm;
