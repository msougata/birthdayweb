import React, { useState, useEffect } from "react";
import "./Puzzle.css";

const cardsData = [
  { id: 1, img: "https://i.ibb.co/DfNVkZ4j/IMG-20250207-WA0070.jpg" },
  { id: 2, img: "https://i.ibb.co/wZbVbm5p/IMG-20250326-WA0005.jpg" },
  { id: 3, img: "https://i.ibb.co/Z1xT9ZvC/IMG-20250214-WA0034-1.jpg" },
  { id: 4, img: "https://i.ibb.co/b54LjypR/Snapchat-757191604.jpg" },
  { id: 5, img: "https://i.ibb.co/1JY6HSCP/IMG-20241122-WA0049-1.jpg" },
  { id: 6, img: "https://i.ibb.co/TMXRDvbS/IMG-20241225-WA0025.jpg" },
  { id: 1, img: "https://i.ibb.co/DfNVkZ4j/IMG-20250207-WA0070.jpg" },
  { id: 2, img: "https://i.ibb.co/wZbVbm5p/IMG-20250326-WA0005.jpg" },
  { id: 3, img: "https://i.ibb.co/Z1xT9ZvC/IMG-20250214-WA0034-1.jpg" },
  { id: 4, img: "https://i.ibb.co/b54LjypR/Snapchat-757191604.jpg" },
  { id: 5, img: "https://i.ibb.co/1JY6HSCP/IMG-20241122-WA0049-1.jpg" },
  { id: 6, img: "https://i.ibb.co/TMXRDvbS/IMG-20241225-WA0025.jpg" },
];

export default function Puzzle() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  useEffect(() => {
    if (matched.length === cardsData.length) {
      setWon(true);
    }
  }, [matched]);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].id === cards[second].id) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="game-container">
      <h2>🎉 Complete The Task 🎉</h2>
      <p>Find all the matching pairs!</p>
      <div className="card-grid">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <div
              key={index}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className="card-front">❓</div>
                <div className="card-back">
                  <img src={card.img} alt="card" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {won && (
        <div className="win-message">
          🎊 You matched all the pairs! Happy Birthday! 🎊  
          <br />
          <button
            className="next-btn"
            onClick={() => (window.location.href = "/Decorate")}
          >
            🎀 click to revel the prize 🎀
          </button>
        </div>
      )}
    </div>
  );
}
