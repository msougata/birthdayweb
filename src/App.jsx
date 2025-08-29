// src/App.jsx
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './home';
import Memories from "./Memories";
import Puzzle from "./Puzzle";
import Decorate from "./Decorate";

export default function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/decorate" element={<Decorate />} />

      </Routes>
      </HashRouter>
    </div>
  );
}
