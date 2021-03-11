import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Item from "./Item";

import ChildPanel from "./ChildPanel";

const { SiteClient } = require("datocms-client");
const client = new SiteClient("ebd36e5231dd939d83faf233743fbd");

export default function ItemsPanel({ checklists, refetch }) {
  const parentArray = checklists.allChecklists.filter(
    (i) => i.children.length > 0 || i.parent === null
  );

  console.log(parentArray);

  const [input, setInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [childData, setChildData] = useState([]);
  const [parentId, setParentId] = useState("");

  // add record
  const onAdd = async (e) => {
    e.preventDefault();
    await client.items
      .create({
        itemType: "587921", //Model ID
        item: input,
      })
      .then(() => {
        refetch && refetch();
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  //delete record
  const deleteRecord = (id) => {
    client.items
      .destroy(id)
      .then((item) => {
        refetch && refetch();
        setInput("");
        console.log(item);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //show children record
  const showChildData = (parentItem) => {
    setChildData(parentItem.children);
    setParentId(parentItem.id);
    setIsSelected(!isSelected);
  };

  return (
    <div className="panel-container">
      <div className="side-panel-container">
        <div className="side-panel-top-container">
          <form className="item" onSubmit={onAdd}>
            <input
              type="text"
              placeholder="add a checklist"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="input"
            />
            <button type="submit" className="btn btn-secondary">
              ADD
            </button>
          </form>
        </div>

        <div className="side-panel-bottom-container">
          {checklists.length !== 0
            ? parentArray.map((note, index) => (
                <div key={index} className="item-container">
                  <div className="item-message-container">
                    <Item
                      onDelete={deleteRecord}
                      data={note}
                      isSelected={isSelected}
                    />
                  </div>
                  <div className="item-button-controls">
                    <FaArrowRight
                      className="item-icon"
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => showChildData(note)}
                    />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      <ChildPanel
        isSelected={isSelected}
        childData={childData}
        parentId={parentId}
        parentArray={parentArray}
        onDelete={deleteRecord}
      />
    </div>
  );
}
