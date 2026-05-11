"use client";
import { useState } from "react";

const stats = [
  {
    num: "7K+",
    label: "star systems visited 🌟",
    color: "var(--purple)",
    rotate: "0deg",
  },
  {
    num: "∞",
    label: "cosmic connections 🤝",
    color: "var(--pink)",
    rotate: "-2deg",
  },
  {
    num: "42",
    label: "dimensions explored 🌀",
    color: "var(--orange)",
    rotate: "1.5deg",
  },
  {
    num: "500+",
    label: "pieces sold fr fr 🎽",
    color: "var(--green)",
    rotate: "0deg",
  },
];

function StatCard({ s }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="stat-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? s.color + "66" : "var(--border)"}`,
        borderRadius: "20px",
        padding: "2rem 1rem",
        textAlign: "center",
        transform: hovered
          ? `translateY(-4px) rotate(-1deg)`
          : `rotate(${s.rotate})`,
        transition: "transform 0.2s, border-color 0.2s",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-wack)",
          fontSize: "clamp(2rem, 6vw, 3rem)",
          lineHeight: 1,
          marginBottom: "0.5rem",
          display: "block",
          color: s.color,
        }}
      >
        {s.num}
      </span>
      <span
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "clamp(0.85rem, 2vw, 1rem)",
          color: "var(--muted)",
        }}
      >
        {s.label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        background: "#030303",
        borderTop: "1px solid rgba(138,94,204,0.2)",
        borderBottom: "1px solid rgba(138,94,204,0.2)",
        padding: "4rem 2rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <style>{`
        .stats-badge {
          display: inline-block;
          background: rgba(204,47,160,0.08);
          color: var(--pink);
          border: 1px solid rgba(204,47,160,0.3);
          border-radius: 999px;
          font-family: var(--font-hand);
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          padding: 0.2rem 1.2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Tablet: 2×2 */
        @media (max-width: 767px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .stat-card  { padding: 1.5rem 0.75rem !important; }
        }

        /* Mobile: still 2×2 but tighter */
        @media (max-width: 480px) {
          .stats-grid { gap: 0.75rem; }
        }

        /* Very small: single column */
        @media (max-width: 320px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div className="stats-badge">the numbers go crazy 📊</div>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatCard key={i} s={s} />
        ))}
      </div>
    </section>
  );
}
