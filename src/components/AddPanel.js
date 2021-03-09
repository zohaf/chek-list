import React, { useState } from "react";
import AddButton from "./AddButton";

const AddPanel = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    onAdd({ input });
    setInput("");
  };

  return (
    <div>
      <form className="item">
        <input
          type="text"
          placeholder="add a checklist"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="item-container"
        />
        <AddButton onClick={onClick} />
      </form>
      ;
    </div>
  );
};

export default AddPanel;
