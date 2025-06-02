import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage.js";
import "./App.css";

function App() {
  return (
    <>
      <p style={{ background: "yellow", padding: "10px" }}>DEBUG: App loaded</p>
      <Router>
        <div className="App">
          <HomePage />
        </div>
      </Router>
    </>
  );
}

export default App;
