import React from "react";

function ItemList({ items, onDelete, onUpdate }) {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button onClick={() => onUpdate(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
