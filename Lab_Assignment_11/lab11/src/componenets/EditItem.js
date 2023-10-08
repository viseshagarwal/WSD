import React, { useState, useEffect } from "react";

function EditItem({ item, onUpdate }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(item.id, { name, description });
  };

  return (
    <div>
      <h2>Edit Item</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditItem;
