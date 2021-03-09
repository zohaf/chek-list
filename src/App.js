import React, { useEffect } from "react";
import { useQuery } from "graphql-hooks";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Panels from "./components/Panels";

import "./App.css";

const HOMEPAGE_QUERY = `query getAllChecklists{
  allChecklists {
    item
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const res = await fetch("");
  //     const data = await res.json();
  //     console.log(data)
  //   };
  // }, []);

  return (
    <div className="main-container">
      <Panels items={data} />

      <NavBar />

      <Header title="" />
    </div>
  );
}

export default App;
