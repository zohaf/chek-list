import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";

export default function ChildItem({ data, onDelete }) {
  return (
    <div className="item-container">
      <div className="child-message-container">
        <p className="child-message">{data.item}</p>
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
