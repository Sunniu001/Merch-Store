"use client";
import { useState } from "react";

const aliens = [
  {
    emoji: "👽",
    name: "Zorp the Chill",
    hoverBorder: "rgba(168,212,0,0.3)",
    rotate: "0deg",
  },
  {
    emoji: "🛸",
    name: "Blorp the Goober",
    hoverBorder: "rgba(204,47,160,0.3)",
    rotate: "3deg",
  },
  {
    emoji: "🌿",
    name: "Hippi the Wise",
    hoverBorder: "rgba(0,184,204,0.3)",
    rotate: "-2deg",
  },
  {
    emoji: "✌️",
    name: "Vibes McGee",
    hoverBorder: "rgba(138,94,204,0.3)",
    rotate: "1deg",
  },
];

function AlienCard({ a }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="alien-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? a.hoverBorder : "var(--border)"}`,
        borderRadius: "20px",
        padding: "1.2rem",
        textAlign: "center",
        transform: `rotate(${a.rotate})`,
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "default",
      }}
    >
      <span
        style={{
          fontSize: "3.5rem",
          marginBottom: "0.5rem",
          display: "block",
          animation: "bounce 2.5s ease-in-out infinite",
        }}
      >
        {a.emoji}
      </span>
      <div
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "0.95rem",
          color: "var(--muted)",
          fontWeight: 700,
        }}
      >
        {a.name}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        background: "var(--bg)",
        borderTop: "1px solid rgba(0,184,204,0.1)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1440px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .alien-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* Tablet: keep two columns but tighten gap */
        @media (max-width: 1023px) {
          .about-inner { gap: 2.5rem; }
        }

        /* Mobile: single column, cards grid stays 2-col but smaller */
        @media (max-width: 767px) {
          .about-inner {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
          }
          /* Cards go below text on mobile — order swap */
          .about-text  { order: 1; }
          .about-cards { order: 2; }

          .alien-cards-grid { gap: 0.75rem; }
          .alien-card { padding: 1rem 0.75rem !important; }
        }

        /* Very small: stack cards to single column */
        @media (max-width: 380px) {
          .alien-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(0,184,204,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="about-inner">
        {/* Left — alien cards */}
        <div className="about-cards alien-cards-grid">
          {aliens.map((a, i) => (
            <AlienCard key={i} a={a} />
          ))}
        </div>

        {/* Right — text */}
        <div className="about-text">
          {/* Modern left-aligned geometric header block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", textAlign: "left", marginBottom: "1.8rem" }}>
            <h2 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(1.4rem, 3.2vw, 2.0rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              margin: 0,
            }}>
              <span style={{ display: "inline-block", width: "1rem", height: "1rem", background: "var(--lime)" }} />
              OUR COGNITIVE EXPERIMENT
            </h2>
          </div>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 0.95rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1rem",
            }}
          >
            we've been vibing across the galaxy for millennia, collecting drip
            and spreading good energy. every tee has cosmic energy baked in, no
            cap.
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 0.95rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1rem",
            }}
          >
            our mission? universal consciousness and positive vibes, one
            galaxy-brained fit at a time. touch grass? we touched STARS.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(212,85,0,0.08)",
              color: "var(--orange)",
              border: "1px solid rgba(212,85,0,0.3)",
              borderRadius: "4px",
              padding: "0.4rem 1.2rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
              marginTop: "0.5rem",
            }}
          >
            🇮🇳 proudly made in India
          </div>
        </div>
      </div>
    </section>
  );
}
