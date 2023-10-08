import React from "react";

function DeleteItem({ item, onDelete }) {
  return (
    <div>
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete "{item.name}"?</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}

export default DeleteItem;
