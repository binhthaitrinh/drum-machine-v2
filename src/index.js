import React from "react";
import ReactDOM from "react-dom";
import DrumPads from "./components/DrumPads";
import Controller from "./components/Controller";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DrumPads />
      <Controller />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
