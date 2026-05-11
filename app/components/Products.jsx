"use client";

import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { useCart } from "../context/CartContext";
import Link from "next/link";

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
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded]   = useState(false);

  const isWishlisted = wishlist.some(item => item.id === p.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card-bg)",
        border: `1px solid ${hovered ? p.hoverBorder || "var(--lime)" : "var(--border)"}`,
        borderRadius: "20px", overflow: "hidden", cursor: "pointer",
        transform: hovered ? `translate(-4px,-4px) rotate(-1deg)` : `rotate(${p.rotate || "0deg"})`,
        transition: "transform 0.2s, border-color 0.2s",
        position: "relative"
      }}
    >
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(p); }}
        style={{
          position: "absolute", top: "12px", left: "12px", zIndex: 10,
          background: "rgba(0,0,0,0.3)", border: "none", borderRadius: "50%",
          width: "32px", height: "32px", display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)",
          color: isWishlisted ? "var(--pink)" : "white"
        }}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <Link href={`/product/${p.id}`} style={{ textDecoration: "none" }}>
        {/* image area */}
        <div style={{
          height: "200px", background: p.bg || "var(--bg2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", borderBottom: "1px solid var(--border)",
        }}>
          {p.image ? (
             <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ fontSize: "7rem", lineHeight: 1, animation: "bounce 2s ease-in-out infinite" }}>
              {p.emoji || "📦"}
            </span>
          )}
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
            {p.was && (
              <span style={{ fontFamily: "var(--font-fun)", fontSize: "0.85rem", color: "var(--muted)", textDecoration: "line-through" }}>{p.was}</span>
            )}
            {p.saved && (
              <span style={{
                background: "rgba(168,212,0,0.08)", color: "var(--lime)",
                fontFamily: "var(--font-hand)", fontSize: "0.75rem", fontWeight: 700,
                padding: "0.1rem 0.5rem", borderRadius: "999px",
                border: "1px solid rgba(168,212,0,0.25)",
              }}>{p.saved}</span>
            )}
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
      </Link>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

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
        {loading ? (
          <div style={{
            gridColumn: "1 / -1", textAlign: "center", padding: "4rem",
            background: "rgba(255,255,255,0.02)", borderRadius: "20px",
            border: "1px dashed var(--border)", color: "var(--muted)",
            fontFamily: "var(--font-hand)", fontSize: "1.5rem"
          }}>
            fetching the latest drip... 🛸
          </div>
        ) : products.length > 0 ? (
          products.map((p, i) => <ProductCard key={i} p={p} />)
        ) : (
          <div style={{
            gridColumn: "1 / -1", textAlign: "center", padding: "4rem",
            background: "rgba(255,255,255,0.02)", borderRadius: "20px",
            border: "1px dashed var(--border)", color: "var(--muted)",
            fontFamily: "var(--font-hand)", fontSize: "1.5rem"
          }}>
            no drops found right now... 👽
          </div>
        )}

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