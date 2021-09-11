import "./App.scss";
import data from "./data.js";
import React from "react";

function App() {
  return (
    <div className="App">
      {data.map((article) => {
        return <h1>{article.snippet}</h1>;
      })}
    </div>
  );
}

export default App;
