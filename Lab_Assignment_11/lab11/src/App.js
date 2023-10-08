// import React, { useState } from "react";
// import TaskList from "../src/componenets/TaskList"; // Assuming TaskList component is in the same directory
// import TaskForm from "../src/componenets/TaskForm"; // Assuming TaskForm component is in the same directory

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   return (
//     <div>
//       <h1>My Task List App</h1>
//       <TaskForm addTask={addTask} />
//       <TaskList tasks={tasks} />
//       {/* Render the list of tasks here */}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
import { items } from "../src/componenets/data";
import AddItem from "../src/componenets/AddItem";
import ItemList from "../src/componenets/ItemList";
import EditItem from "../src/componenets/EditItem";
import DeleteItem from "../src/componenets/DeleteItem";

function App() {
  const [itemList, setItemList] = useState(items);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = (newItem) => {
    setItemList([...itemList, { ...newItem, id: itemList.length + 1 }]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedItems);
    setSelectedItem(null);
  };

  const handleUpdateItem = (itemId, updatedItem) => {
    const updatedItems = itemList.map((item) =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    setItemList(updatedItems);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>CRUD App</h1>
      </header> */}
      <main>
        {selectedItem ? (
          <>
            <EditItem item={selectedItem} onUpdate={handleUpdateItem} />
            <DeleteItem item={selectedItem} onDelete={handleDeleteItem} />
          </>
        ) : (
          <>
            <AddItem onAdd={handleAddItem} />
            <ItemList
              items={itemList}
              onDelete={handleDeleteItem}
              onUpdate={setSelectedItem}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
