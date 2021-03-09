import React from "react";

import ItemsPanel from "./ItemsPanel";
import EditPanel from "./EditPanel";

const Panels = () => {
  return (
    <div className="panel-container">
      <ItemsPanel />
      <EditPanel />
    </div>
  );
};

export default Panels;
