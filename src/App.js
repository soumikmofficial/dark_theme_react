import "./App.css";
import data from "./data.js";
import React, { useState, useEffect } from "react";
import Article from "./components/Article.jsx";

const getThemePref = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getThemePref());
  const handleClick = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main className="App">
      <nav className="nav">
        <h1>Themed</h1>
        <button className="toggler" onClick={handleClick}>
          {theme === "light-theme" ? "Dark" : "Light"}
        </button>
      </nav>
      <section className="articles">
        <div className="container">
          {data.map((article) => {
            return <Article key={article.id} {...article} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
