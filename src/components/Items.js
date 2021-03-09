import React from "react";
import Item from "./Item";

const Items = ({ items, onDelete, onUpdate }) => {
  return (
    <div className="side-panel-bottom-container">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Items;
