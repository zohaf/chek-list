import React from "react";

import FolderPanel from "./FolderPanel";
import EditPanel from "./EditPanel";

const Panels = () => {
  return (
    <div className="panel-container">
      <FolderPanel />
      <EditPanel />
    </div>
  );
};

export default Panels;
