import React from "react";
import logo from "./logo.svg";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import FirstTodo from "./pages/FirstTodo";
import SecondTodo from "./pages/SecondTodo";
import Shop from "./pages/Shop";
import Calc from "./pages/Calc";
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Todo 1</Link>
        </li>
        <li>
          <Link to="/todo2">Todo 2</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/calc">Calc</Link>
        </li>
        <li>
          <Link to="/h2o">H2O</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<FirstTodo />} />
        <Route path="/todo2" element={<SecondTodo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </div>
  );
}

export default App;
