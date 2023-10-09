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
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
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
                {/* <button onClick={() => handleEdit(index, task)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button> */}
                &nbsp;&nbsp;
                <button
                  className="btn btn-warning mr-2 mr-2 mr-2"
                  onClick={() => handleEdit(index, task)}
                >
                  Edit
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

// import React, { useState, useEffect } from "react";

// const TaskList = ({ tasks, onEdit, onDelete }) => {
//   const [editedTask, setEditedTask] = useState(null);

//   // Load tasks from localStorage on component mount
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (storedTasks) {
//       tasks = storedTasks;
//     }
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleEdit = (index, task) => {
//     setEditedTask(task);
//   };

//   const handleSave = () => {
//     // Update the task in the tasks array
//     const updatedTasks = [...tasks];
//     updatedTasks[editedTask.index] = editedTask;
//     onEdit(updatedTasks);

//     // Clear the edited task state
//     setEditedTask(null);
//   };

//   return (
//     <ul className="list-group">
//       {tasks.map((task, index) => (
//         <li
//           key={index}
//           className="list-group-item d-flex justify-content-between align-items-center"
//         >
//           {editedTask && editedTask.index === index ? (
//             <div>
//               <input
//                 type="text"
//                 value={editedTask.name}
//                 onChange={(e) =>
//                   setEditedTask({ ...editedTask, name: e.target.value })
//                 }
//               />
//               <input
//                 type="date"
//                 value={editedTask.dueDate}
//                 onChange={(e) =>
//                   setEditedTask({ ...editedTask, dueDate: e.target.value })
//                 }
//               />
//               <button className="btn btn-primary mr-2" onClick={handleSave}>
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div>
//               {task.name} (Due: {task.dueDate}) -
//               <button
//                 className="btn btn-warning mr-2"
//                 onClick={() => handleEdit(index, { ...task, index })}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => onDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;
