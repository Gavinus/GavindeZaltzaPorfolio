import React from "react";
import "./App.scss";
import Recept from "./components/Recept";

function App() {
  return (
    <div className="app">
      <Recept Recept={Recept} />
    </div>
  );
}

export default App;
