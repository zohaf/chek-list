import React, { useState } from "react";
import { useMutation } from "graphql-hooks";
import Item from "./Item";

const { SiteClient } = require("datocms-client");
const client = new SiteClient("ebd36e5231dd939d83faf233743fbd");

export default function ItemsPanel({ checklists, refetch }) {
  const itemArray = checklists.allChecklists;
  const [input, setInput] = useState("");

  const onAdd = async (e) => {
    e.preventDefault();
    const record = await client.items
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

  return (
    <div className="side-panel-container">
      <div className="side-panel-top-container">
        <form className="item" onSubmit={onAdd}>
          <input
            type="text"
            placeholder="add a checklist"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="item-container"
          />
          <button type="submit" className="edit-profile  btn-tertiary">
            New
          </button>
        </form>
      </div>

      <div className="side-panel-bottom-container">
        {checklists.length !== 0
          ? itemArray.map((note, index) => (
              <div key={index} className="item-list-container">
                <Item onDelete={deleteRecord} data={note} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
