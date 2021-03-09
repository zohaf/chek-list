import React from "react";
import Item from "./Item";

const Items = ({ checklists, onDelete, onUpdate }) => {
  const itemsTest = checklists.allChecklists;
  console.log(itemsTest);
  return (
    <div className="side-panel-bottom-container">
      {itemsTest.map((item, index) => (
        <Item key={index} item={item} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default Items;
