import React, { Children, useEffect } from "react";
import { useQuery } from "graphql-hooks";

import Header from "./components/HeaderFooter/Header";

import ItemsPanel from "./components/ItemsPanel";
import "./App.css";

const HOMEPAGE_QUERY = `query MyQuery {
  allChecklists {
    id
    item
    children {
      id
      item
      position
    }
    parent {
      id
      item
      _isValid
    }
  }
}
`;

// const { SiteClient } = require("datocms-client");
// const client = new SiteClient("ebd36e5231dd939d83faf233743fbd");

// async function createRecords() {
//   const parent = await client.items.create({
//     itemType: "587921",
//     item: "Parent",
//   });
//   console.log(parent);

//   const child1 = await client.items.create({
//     itemType: "587921",
//     item: "Child 1",
//     parentId: parent.id,
//     position: 1,
//   });
//   console.log(child1);
//   const child2 = await client.items.create({
//     itemType: "587921",
//     name: "Child 2",
//     parentId: parent.id,
//     position: 2,
//   });

//   const child3 = await client.items.create({
//     itemType: "587921",
//     item: "Child 3",
//     parentId: parent.id,
//     position: 3,
//   });

//   const child4 = await client.items.create({
//     itemType: "587921",
//     name: "Child 4",
//     parentId: parent.id,
//     position: 4,
//   });
// }
// console.log(createRecords());

function App() {
  const { loading, error, data, refetch } = useQuery(HOMEPAGE_QUERY);

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <div className="main-container">
      <Header title="" />
      <div>
        <ItemsPanel checklists={data} refetch={refetch} />
      </div>
    </div>
  );
}

export default App;
