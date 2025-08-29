// src/Home.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="birthday-text">Happy Birthday, My Love ❤️</h1>
      <p className="subtitle">You make my world more beautiful every day</p>

      {/* Button that routes to Memories */}
      <Link to="/memories">
        <button className="btn btn-lg btn-danger mt-4 animate__animated animate__pulse animate__infinite">
          💫 Start Our Journey 💫
        </button>
      </Link>

      {/* Balloons */}
      <div className="balloon balloon1"></div>
      <div className="balloon balloon2"></div>
    </div>
  );
}
