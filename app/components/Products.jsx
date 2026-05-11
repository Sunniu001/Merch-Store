"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const products = [
  {
    emoji: "👽", bg: "#080010", badge: { text: "🔥 LIMITED", type: "fire" },
    name: "Grand Theft Alien — Area 51", type: "Unisex 100% Cotton Tee ✓",
    price: "₹549", was: "₹799", saved: "save ₹250",
    hoverBorder: "rgba(168,212,0,0.4)", rotate: "0deg",
  },
  {
    emoji: "💥", bg: "#040a04", badge: { text: "lmao 😭", type: "lol" },
    name: "Big Baong", type: "Premium UV Sticker ✓",
    price: "₹49", was: "₹79", saved: "save ₹30",
    hoverBorder: "rgba(204,47,160,0.4)", rotate: "1deg",
  },
  {
    emoji: "🪐", bg: "#040810", badge: { text: "🔥 LIMITED", type: "fire" },
    name: "Peace on Mars Festival", type: "Unisex 100% Cotton Tee ✓",
    price: "₹549", was: "₹799", saved: "save ₹250",
    hoverBorder: "rgba(0,184,204,0.4)", rotate: "0deg",
  },
  {
    emoji: "🔑", bg: "#0a0800", badge: null,
    name: "Hacker Key Ring", type: "Metal Key Chain ✓",
    price: "₹149", was: "₹199", saved: "save ₹50",
    hoverBorder: "rgba(204,184,0,0.4)", rotate: "-1deg",
  },
  {
    emoji: "🌌", bg: "#080014", badge: { text: "✨ NEW", type: "new" },
    name: "Cosmic Pulse Hoodie", type: "Unisex 100% Cotton Hoodie ✓",
    price: "₹1,499", was: "₹1,599", saved: "save ₹100",
    hoverBorder: "rgba(138,94,204,0.4)", rotate: "0deg",
  },
];

const badgeStyles = {
  fire: { bg: "rgba(212,85,0,0.15)",    color: "var(--orange)", border: "1px solid rgba(212,85,0,0.4)" },
  new:  { bg: "rgba(168,212,0,0.1)",    color: "var(--lime)",   border: "1px solid rgba(168,212,0,0.35)" },
  lol:  { bg: "rgba(138,94,204,0.12)",  color: "var(--purple)", border: "1px solid rgba(138,94,204,0.35)" },
};

const decos = [
  { emoji: "🌈", style: { top: "3%",    left: "2%",   animationDelay: "0s"   } },
  { emoji: "⚡", style: { top: "5%",    right: "3%",  animationDelay: "1s"   } },
  { emoji: "🔮", style: { bottom: "5%", left: "5%",   animationDelay: "0.5s" } },
  { emoji: "🌀", style: { bottom: "8%", right: "2%",  animationDelay: "1.5s" } },
];

function ProductCard({ p }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded]   = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card-bg)",
        border: `1px solid ${hovered ? p.hoverBorder : "var(--border)"}`,
        borderRadius: "20px", overflow: "hidden", cursor: "pointer",
        transform: hovered ? `translate(-4px,-4px) rotate(-1deg)` : `rotate(${p.rotate})`,
        transition: "transform 0.2s, border-color 0.2s",
      }}
    >
      {/* image area */}
      <div style={{
        height: "200px", background: p.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", borderBottom: "1px solid var(--border)",
      }}>
        <span style={{ fontSize: "7rem", lineHeight: 1, animation: "bounce 2s ease-in-out infinite" }}>
          {p.emoji}
        </span>
        {p.badge && (
          <span style={{
            position: "absolute", top: "10px", right: "10px",
            fontFamily: "var(--font-hand)", fontSize: "0.85rem", fontWeight: 700,
            padding: "0.2rem 0.7rem", borderRadius: "999px",
            transform: "rotate(4deg)",
            ...badgeStyles[p.badge.type],
          }}>
            {p.badge.text}
          </span>
        )}
      </div>

      {/* body */}
      <div style={{ padding: "1.2rem" }}>
        <div style={{ fontFamily: "var(--font-wack)", fontSize: "1.15rem", lineHeight: 1.2, marginBottom: "0.3rem", color: "var(--text)" }}>
          {p.name}
        </div>
        <div style={{ fontFamily: "var(--font-fun)", fontSize: "0.82rem", color: "var(--muted)", marginBottom: "0.75rem" }}>
          {p.type}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-wack)", fontSize: "1.4rem", color: "var(--lime)" }}>{p.price}</span>
          <span style={{ fontFamily: "var(--font-fun)", fontSize: "0.85rem", color: "var(--muted)", textDecoration: "line-through" }}>{p.was}</span>
          <span style={{
            background: "rgba(168,212,0,0.08)", color: "var(--lime)",
            fontFamily: "var(--font-hand)", fontSize: "0.75rem", fontWeight: 700,
            padding: "0.1rem 0.5rem", borderRadius: "999px",
            border: "1px solid rgba(168,212,0,0.25)",
          }}>{p.saved}</span>
        </div>

        <button
          onClick={handleAdd}
          style={{
            width: "100%",
            background: added ? "var(--green)" : "rgba(255,255,255,0.04)",
            color: added ? "#000" : "var(--text)",
            border: `1px solid ${added ? "var(--green)" : "var(--border)"}`,
            borderRadius: "999px", padding: "0.65rem",
            fontFamily: "var(--font-wack)", fontSize: "1rem", cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            if (!added) {
              e.currentTarget.style.background = "var(--lime)";
              e.currentTarget.style.borderColor = "var(--lime)";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.transform = "scale(1.03)";
            }
          }}
          onMouseLeave={e => {
            if (!added) {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.transform = "none";
            }
          }}
        >
          {added ? "✓ slay! added 💅" : "+ add to cart 🛒"}
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" style={{
      padding: "5rem 2rem", position: "relative", zIndex: 1, background: "var(--bg)", 
    }}>
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* floating decos */}
      {decos.map((d, i) => (
        <div key={i} style={{
          position: "absolute", pointerEvents: "none", userSelect: "none",
          fontSize: "2rem", opacity: 0.3,
          animation: "floatDeco 5s ease-in-out infinite",
          ...d.style,
        }}>
          {d.emoji}
        </div>
      ))}

      <SectionHeader tag="✦ top picks ✦" tagColor="var(--sky)" title="the" highlight="drip" suffix="hits 🔥" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
        gap: "1.5rem", maxWidth: "1440px", margin: "0 auto",
      }}>
        {products.map((p, i) => <ProductCard key={i} p={p} />)}

        {/* hype card */}
        <div style={{
          background: "rgba(138,94,204,0.05)", borderRadius: "20px",
          border: "1px solid rgba(138,94,204,0.2)",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", padding: "2rem", textAlign: "center",
          gap: "1rem", minHeight: "300px",
        }}>
          <div style={{ fontSize: "3rem", animation: "bounce 1.5s infinite" }}>🚀</div>
          <div style={{ fontFamily: "var(--font-wack)", fontSize: "1.5rem", color: "var(--lime)" }}>
            MORE DROPS<br />INCOMING
          </div>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--muted)", fontSize: "1rem" }}>
            stay tuned bestie
          </div>
          <button style={{
            background: "var(--lime)", color: "#000", borderRadius: "999px",
            padding: "0.5rem 1.5rem", fontFamily: "var(--font-wack)",
            fontSize: "0.85rem", cursor: "pointer", border: "none",
          }}>
            notify me 🔔
          </button>
        </div>
      </div>
    </section>
  );
}