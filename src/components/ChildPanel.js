import React, { useState } from "react";

import ChildItem from "./ChildItem";

export default function ChildPanel({ isSelected, childData }) {
  const [input, setInput] = useState("");

  return (
    <div className="main-panel-container">
      <div className="side-panel-top-container">
        <form className="item">
          <input
            type="text"
            placeholder="add a checklist"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-child"
          />
          <button type="submit" className="btn btn-secondary">
            ADD
          </button>
        </form>
      </div>
      {isSelected && (
        <div className="side-panel-bottom-container">
          {childData.length !== 0
            ? childData.map((note, index) => (
                <div key={index} className="item-list-container">
                  <ChildItem data={note} />
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}
