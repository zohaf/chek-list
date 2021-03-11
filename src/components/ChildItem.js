import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";

const { SiteClient } = require("datocms-client");
const client = new SiteClient("ebd36e5231dd939d83faf233743fbd");

export default function ChildItem({ data, onDelete }) {
  const [input, setInput] = useState("");
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
