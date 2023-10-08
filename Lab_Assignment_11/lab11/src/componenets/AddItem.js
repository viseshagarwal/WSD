import React, { useState } from "react";

function AddItem({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
