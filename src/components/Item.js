import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Item = ({ item, onDelete, onUpdate }) => {
  return (
    <div className="item-list-container">
      <div className="item-container">
        <div className="item-message-container">
          <p className="item-message">{item.text}</p>
        </div>
        <div className="item-button-controls">
          <FaRegEdit
            className="item-icon"
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => onUpdate(item.id)}
          />
          <FaTimes
            className="item-icon"
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => onDelete(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
