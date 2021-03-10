import React, { useEffect } from "react";
import { useQuery } from "graphql-hooks";

import Header from "./components/HeaderFooter/Header";

import ItemsPanel from "./components/ItemsPanel";
import ChildPanel from "./components/ChildPanel";

import "./App.css";

const HOMEPAGE_QUERY = `query {
  allChecklists {
    id
    item
  }
}`;

function App() {
  const { loading, error, data, refetch } = useQuery(HOMEPAGE_QUERY);

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <div className="main-container">
      <Header title="" />
      <div className="panel-container">
        <ItemsPanel checklists={data} refetch={refetch} />
        <ChildPanel />
      </div>
    </div>
  );
}

export default App;
