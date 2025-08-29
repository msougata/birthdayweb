import React, { useState } from "react";
import "./Memories.css";
import { Link } from "react-router-dom";

export default function Memories() {
  const [showGreeting, setShowGreeting] = useState(true);

  const memories = [
    { date: "Day 1 ❤️", text: "Line mara hocche  💕", src: "https://i.ibb.co/Df9y55Jq/IMG-20241228-WA0002.jpg" },
    { date: "Achievement", text: "Halka kore pote gache!", src: "https://i.ibb.co/GXMsytj/IMG-20250621-WA0142.jpg" },
    { date: "ILU ILU 🤤", text: "Boobie day 🤤😍", src: "https://i.ibb.co/C5qtR4K7/IMG-20241221-WA0005.jpg" },
    { date: "Astomi nki ❤️", text: "sei 2 ghonta wait korabi as usual", src: "https://i.ibb.co/dsVWSqg8/IMG-20250621-WA0179.jpg" },
    { date: "Proposal 😂", text: "lojja poti lotaaa!", src: "https://i.ibb.co/qYx6rVWh/IMG-20250215-WA0051.jpg" },
    { date: "alu 😂", text: "Cutiee pieee 🍑", src: "https://i.ibb.co/wZbVbm5p/IMG-20250326-WA0005.jpg" },
    { date: "College Dayz 🥹", text: "The silly moments I love", src: "https://i.ibb.co/DfNVkZ4j/IMG-20250207-WA0070.jpg" },
    { date: "Love uuu 🌹", text: "Here’s to many more memories", src: "https://i.ibb.co/kvY3Ryq/a3084d82e6f132e9d707f627a3700438.jpg" }
  ];

  return (
    <div className="memories-container">
      {/* Birthday Greeting Overlay */}
      {showGreeting && (
        <div className="greeting-overlay">
          <div className="greeting-box">
            <h1>🎉 Happy Birthday, My Love! ❤️</h1>
            <p>Wishing you a day full of love, joy, and surprises!</p>
            <button onClick={() => setShowGreeting(false)}>Enter</button>
          </div>
        </div>
      )}

      {/* Puzzle Page Button */}
      {!showGreeting && (
        <Link to="/puzzle">
          <button className="play-music-btn" style={{ marginBottom: "30px" }}>
            🧩 Play Mini Puzzle
          </button>
        </Link>
      )}

      <h2 className="memories-title">✨ Our Timeline ✨</h2>
      <p className="memories-subtitle">Progress Report 💕</p>

      {/* Horizontal Scroll Timeline */}
      <div className="timeline-container">
        {memories.map((memory, index) => (
          <div key={index} className="timeline-card">
            <div className="polaroid">
              <img src={memory.src} alt="memory" className="memory-photo" />
              <div className="polaroid-caption">
                <h4>{memory.date}</h4>
                <p>{memory.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
