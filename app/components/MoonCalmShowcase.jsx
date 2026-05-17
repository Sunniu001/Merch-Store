"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function MoonCalmShowcase() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    const itemToAdd = {
      id: "moon-calm-1",
      name: "MOON CALM GUMMIES (CBD + L-THEANINE)",
      price: "₹1,299",
      image: "/moon-calm.png",
      emoji: "🧘"
    };
    addToCart(itemToAdd);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="moon-showcase" style={{ background: "var(--bg2)", position: "relative", zIndex: 1, borderBottom: "1px solid var(--border)", transition: "background 0.5s ease" }}>
      <style>{`
        .moon-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 750px;
          overflow: hidden;
        }

        .moon-left {
          background-image: url("/moon-calm.png");
          background-size: cover;
          background-position: center;
          position: relative;
          min-height: 500px;
        }

        .moon-right {
          padding: 5rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--bg2);
          transition: background 0.5s ease;
        }

        /* Ambient glowing yellow wash over Lunar landscape in dark mode only */
        [data-theme="dark"] .moon-left::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(230, 200, 0, 0.1) 0%, transparent 80%);
          pointer-events: none;
        }

        .moon-ingredient-badge {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text);
          border: 1.5px solid var(--text);
          padding: 0.45rem 0.9rem;
          margin-right: 0.6rem;
          margin-bottom: 0.6rem;
          background: transparent;
          transition: all 0.25s ease;
        }

        .moon-ingredient-badge:hover {
          background: var(--text);
          color: var(--bg2);
          transform: translateY(-2px);
        }

        .moon-cta-btn {
          align-self: flex-start;
          background: #000000;
          color: #ffffff;
          border: 2px solid #000000;
          font-family: 'Space Mono', monospace;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 1rem 2rem;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          margin-top: 2rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
        }

        [data-theme="dark"] .moon-cta-btn {
          background: #ffffff;
          color: #000000;
          border: 2px solid #ffffff;
        }

        .moon-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(230, 200, 0, 0.22);
        }

        [data-theme="light"] .moon-cta-btn:hover {
          background: #333333;
          border-color: #333333;
          color: #ffffff;
        }

        [data-theme="dark"] .moon-cta-btn:hover {
          background: #eeeeee;
          border-color: #eeeeee;
          color: #000000;
        }

        .moon-featured-card {
          width: 170px;
          border: 1.5px solid #ff00ea; /* Pink/Violet border outline matching screenshot! */
          padding: 0.5rem;
          background: #ffffff;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(255, 0, 234, 0.15);
        }

        .moon-featured-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 0, 234, 0.35);
        }

        .moon-desc {
          font-family: sans-serif;
          font-size: 1rem;
          color: var(--text);
          line-height: 1.7;
          opacity: 0.85;
          margin-bottom: 2rem;
          max-width: 520px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1023px) {
          .moon-grid {
            grid-template-columns: 1fr;
          }
          .moon-left {
            min-height: 480px;
            grid-order: 2; /* Shows image second on mobile to maintain hierarchy */
          }
          .moon-right {
            padding: 4rem 2rem;
            grid-order: 1;
          }
        }
      `}</style>

      <div className="moon-grid">
        {/* Left Side: Massive edge-to-edge Lunar canvas */}
        <div className="moon-left" />

        {/* Right Side: Product Specifications & Details */}
        <div className="moon-right">
          {/* Header */}
          <h2 style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            margin: "0 0 2rem 0",
            lineHeight: "1.2"
          }}>
            <span style={{ display: "inline-block", width: "1.2rem", height: "1.2rem", background: "var(--text)" }} />
            MOON CALM GUMMIES
          </h2>

          {/* Description narrative */}
          <p className="moon-desc">
            Float weightlessly through your day with our Moon Calm formula. These soothing gummies combine 
            relaxing cannabinoids with stress-relieving botanicals to create a balanced, centered state of mind.
          </p>

          {/* DNA Active Ingredients shelf */}
          <h3 style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            margin: "0 0 1.2rem 0"
          }}>
            🧬 Active Ingredients:
          </h3>

          {/* Active Ingredients Outlined Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span className="moon-ingredient-badge">CBD</span>
            <span className="moon-ingredient-badge">CBC</span>
            <span className="moon-ingredient-badge">Terpenes</span>
            <span className="moon-ingredient-badge">L-Theanine</span>
          </div>

          {/* Solid Theme CTA Button */}
          <button className="moon-cta-btn" onClick={handleQuickAdd}>
            {added ? "ADDED TO CARGO! 🛸" : "SHOP MOON CALM GUMMIES"}
          </button>

          {/* Mini Featured Card shelf */}
          <div>
            <h4 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--text)",
              margin: "0 0 1rem 0",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem"
            }}>
              Featured products 🧘
            </h4>

            {/* Glowing Card */}
            <div className="moon-featured-card" onClick={handleQuickAdd}>
              <img 
                src="/moon-calm.png" 
                alt="Moon Calm Gummies Pack" 
                style={{ width: "100%", height: "120px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
