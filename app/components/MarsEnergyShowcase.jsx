"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function MarsEnergyShowcase() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    const itemToAdd = {
      id: "mars-energy-1",
      name: "MARS ENERGY GUMMIES (CAFFEINE + B12)",
      price: "₹1,499",
      image: "/mars-energy.png",
      emoji: "⚡"
    };
    addToCart(itemToAdd);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="mars-showcase" style={{ background: "var(--bg2)", position: "relative", zIndex: 1, borderBottom: "1px solid var(--border)", transition: "background 0.5s ease" }}>
      <style>{`
        .mars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 750px;
          overflow: hidden;
        }

        .mars-left {
          padding: 5rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--bg2);
          transition: background 0.5s ease;
        }

        .mars-right {
          background-image: url("/mars-energy.png");
          background-size: cover;
          background-position: center;
          position: relative;
          min-height: 500px;
        }

        /* Ambient glowing red wash over Martian landscape in dark mode only */
        [data-theme="dark"] .mars-right::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(212, 85, 0, 0.1) 0%, transparent 80%);
          pointer-events: none;
        }

        .ingredient-badge {
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

        .ingredient-badge:hover {
          background: var(--text);
          color: var(--bg2);
          transform: translateY(-2px);
        }

        .mars-cta-btn {
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

        [data-theme="dark"] .mars-cta-btn {
          background: #ffffff;
          color: #000000;
          border: 2px solid #ffffff;
        }

        .mars-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(212, 85, 0, 0.25);
        }

        [data-theme="light"] .mars-cta-btn:hover {
          background: #333333;
          border-color: #333333;
          color: #ffffff;
        }

        [data-theme="dark"] .mars-cta-btn:hover {
          background: #eeeeee;
          border-color: #eeeeee;
          color: #000000;
        }

        .featured-card {
          width: 170px;
          border: 1.5px solid #00fffa; /* Electric cyan border outline matching screenshot! */
          padding: 0.5rem;
          background: #ffffff;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(0, 255, 250, 0.15);
        }

        .featured-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(0, 255, 250, 0.35);
        }

        .mars-desc {
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
          .mars-grid {
            grid-template-columns: 1fr;
          }
          .mars-left {
            padding: 4rem 2rem;
          }
          .mars-right {
            min-height: 480px;
          }
        }
      `}</style>

      <div className="mars-grid">
        {/* Left Side: Product Specifications & Details */}
        <div className="mars-left">
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
            MARS ENERGY GUMMIES
          </h2>

          {/* Description narrative */}
          <p className="mars-desc">
            Harness the energizing power of Mars with our stimulating blend of cannabinoids and terpenes. 
            These vibrant red gummies provide a focused, uplifting experience that promotes productivity 
            and creative flow states without giving you the jitters.
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
            <span className="ingredient-badge">Full-Spectrum Hemp Extract</span>
            <span className="ingredient-badge">Organic Caffeine</span>
            <span className="ingredient-badge">L-Theanine</span>
            <span className="ingredient-badge">Vitamin B12</span>
          </div>

          {/* Solid Theme CTA Button */}
          <button className="mars-cta-btn" onClick={handleQuickAdd}>
            {added ? "ADDED TO CARGO! 🛸" : "SHOP MARS ENERGY GUMMIES"}
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
              Featured products ⚡
            </h4>

            {/* Glowing Card */}
            <div className="featured-card" onClick={handleQuickAdd}>
              <img 
                src="/mars-energy.png" 
                alt="Mars Energy Gummies Pack" 
                style={{ width: "100%", height: "120px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Massive edge-to-edge Martian canvas */}
        <div className="mars-right" />
      </div>
    </section>
  );
}
