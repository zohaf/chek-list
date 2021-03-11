import React from "react";

import { FaTimes } from "react-icons/fa";

export default function Item({ data, onDelete }) {
  return (
    <div className="item-container">
      <div className="item-message-container">
        <p className="item-message">{data.item}</p>
      </div>
      <div className="item-button-controls">
        <FaTimes
          className="item-icon"
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => onDelete(data.id)}
        />
      </div>
    </div>
  );
}

// on click of Pencil => show child-records with parentId of same data.item
//my question - in your office
