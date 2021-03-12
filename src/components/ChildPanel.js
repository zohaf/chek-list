import React, { useState } from "react";

import ChildItem from "./ChildItem";

const { SiteClient } = require("datocms-client");
const client = new SiteClient("ebd36e5231dd939d83faf233743fbd");

export default function ChildPanel({
  refetch,
  isSelected,
  childData,
  parentArray,
  onDelete,
  parentId,
}) {
  const [input, setInput] = useState("");

  // add child-record

  const onAddChild = async (e) => {
    e.preventDefault();
    client.items
      .create({
        itemType: "587921", //Model ID
        item: input,
        parentId: parentId,
      })
      .then(() => {
        refetch && refetch();
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-panel-container">
      <div className="main-panel-top-container">
        <form className="item" onSubmit={onAddChild}>
          <input
            type="text"
            placeholder="add the steps"
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
        <div className="mains-panel-bottom-container">
          {childData.length !== 0
            ? childData.map((note, index) => (
                <div key={index} className="item-list-container">
                  <ChildItem data={note} onDelete={onDelete} />
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}
