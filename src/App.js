import React from "react";
import { useQuery } from "graphql-hooks";

import Header from "./components/HeaderFooter/Header";

import ItemsPanel from "./components/ItemsPanel";
import "./App.css";

const HOMEPAGE_QUERY = `query MyQuery {
  allChecklists {
    id
    item
     parent {
        id
        item
      }
    children {
      id
      item
     
    }
  }
}

`;

function App() {
  const { loading, error, data, refetch } = useQuery(HOMEPAGE_QUERY);

  console.log(data);

  if (error) console.log(error);

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <div>
      <Header title="" />
      <div>
        <ItemsPanel checklists={data} refetch={refetch} />
      </div>
    </div>
  );
}

export default App;
