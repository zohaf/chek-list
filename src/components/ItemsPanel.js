import React, { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import AddPanel from "./AddPanel";
import Items from "./Items";

const ItemsPanel = () => {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: "git", reminder: false },
    { id: 2, text: "react proj setup", reminder: false },
    { id: 3, text: "export ", reminder: false },
  ]);

  //add items
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newItem = { id, text: item.input, reminder: false };
    setItems([...items, newItem]);
    // console.log("new", id);
  };

  //update
  const updateItem = (id, newValue) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //delete items

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    console.log("delete", id);
  };

  return (
    <div className="side-panel-container">
      <div className="side-panel-top-container">
        <AddPanel onAdd={addItem} onClick={addItem} />
      </div>

      <div className="side-panel-bottom-container">
        {items.length > 0 ? (
          <Items items={items} onDelete={deleteItem} onUpdate={updateItem} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ItemsPanel;
