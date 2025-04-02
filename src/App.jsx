import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router";
import Red from "./components/Red.jsx";
import Blue from "./components/Blue.jsx";
import Home from "./components/Home.jsx";
import Color from "./components/Color.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/:color" element={<Color />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
