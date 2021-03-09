import React from "react";

import ItemsPanel from "./ItemsPanel";
import EditPanel from "./EditPanel";

const Panels = ({ items }) => {
  return (
    <div className="panel-container">
      <ItemsPanel checklists={items} />
      <EditPanel />
    </div>
  );
};

export default Panels;
