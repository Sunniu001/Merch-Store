"use client";

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const getDiscountedPrice = (priceStr) => {
  if (!priceStr) return "₹45";
  const num = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  if (isNaN(num)) return "₹45";
  return "₹" + Math.round(num * 0.6).toLocaleString(); // 40% off
};

const getStickerStyle = (badgeText) => {
  const text = (badgeText || "").toUpperCase();
  if (text.includes("CHILL")) {
    return {
      background: "rgba(168,212,0,0.15)",
      color: "var(--lime)",
      border: "1.5px solid var(--lime)",
      boxShadow: "0 0 15px rgba(168,212,0,0.35)",
    };
  }
  if (text.includes("SLEEP")) {
    return {
      background: "rgba(0,180,255,0.15)",
      color: "var(--sky)",
      border: "1.5px solid var(--sky)",
      boxShadow: "0 0 15px rgba(0,180,255,0.35)",
    };
  }
  return {
    background: "rgba(204,47,160,0.15)",
    color: "var(--pink)",
    border: "1.5px solid var(--pink)",
    boxShadow: "0 0 15px rgba(204,47,160,0.35)",
  };
};

const getProductHoverGlow = (p) => {
  const name = (p.name || "").toUpperCase();
  if (name.includes("PLUTO") || name.includes("MUSHROOM")) {
    return {
      bgHover: "rgba(212,85,0,0.03)",
      radialGlow: "radial-gradient(circle, rgba(212,85,0,0.08) 0%, transparent 70%)",
      borderHover: "rgba(212,85,0,0.4)"
    };
  }
  if (name.includes("SLEEP") || name.includes("NEPTUNE")) {
    return {
      bgHover: "rgba(0,180,255,0.03)",
      radialGlow: "radial-gradient(circle, rgba(0,180,255,0.08) 0%, transparent 70%)",
      borderHover: "rgba(0,180,255,0.4)"
    };
  }
  return {
    bgHover: "rgba(168,212,0,0.03)",
    radialGlow: "radial-gradient(circle, rgba(168,212,0,0.08) 0%, transparent 70%)",
    borderHover: "rgba(168,212,0,0.4)"
  };
};

function ProductCard({ p }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const glow = getProductHoverGlow(p);
  const isWishlisted = wishlist.some(item => item.id === p.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...p, name: `${p.name} (Subscription)`, price: getDiscountedPrice(p.price) });
    setSubscribing(true);
    setTimeout(() => setSubscribing(false), 1600);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? glow.bgHover : "#050505",
        borderColor: hovered ? glow.borderHover : "rgba(255,255,255,0.2)",
        transition: "all 0.3s ease"
      }}
    >
      {/* Wishlist Button */}
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(p); }}
        style={{
          position: "absolute", top: "16px", left: "16px", zIndex: 10,
          background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%",
          width: "36px", height: "36px", display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "pointer", backdropFilter: "blur(6px)",
          color: isWishlisted ? "var(--pink)" : "white",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "none"}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <Link href={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Top Compartment: Image Area (60% height) */}
        <div 
          className="product-card-graphic"
          style={{
            background: hovered ? glow.radialGlow : "rgba(255,255,255,0.005)",
            transition: "background 0.3s ease"
          }}
        >
          {p.image ? (
             <img src={p.image} alt={p.name} className="product-card-img" />
          ) : (
            <span style={{ fontSize: "6rem", lineHeight: 1, animation: "bounce 2s ease-in-out infinite" }}>
              {p.emoji || "📦"}
            </span>
          )}

          {/* Glowing Circular Badge */}
          {p.badge && (
            <div style={{
              position: "absolute", top: "16px", right: "16px",
              width: "56px", height: "56px", borderRadius: "50%",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", fontWeight: 700,
              textAlign: "center", lineHeight: "1.1", letterSpacing: "0.02em",
              zIndex: 5,
              ...getStickerStyle(p.badge.text)
            }}>
              <span style={{ fontSize: "0.75rem", marginBottom: "2px" }}>
                {p.badge.text.includes("CHILL") ? "🟢" : p.badge.text.includes("SLEEP") ? "🌙" : "✨"}
              </span>
              {p.badge.text}
            </div>
          )}
        </div>

        {/* Bottom Compartment: Text & CTA Buttons (40% height) */}
        <div className="product-card-text">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", width: "100%" }}>
            {/* Title / Name */}
            <h3 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.06em",
              margin: 0,
              lineHeight: "1.3",
              textTransform: "uppercase"
            }}>
              {p.name}
            </h3>

            {/* Price section */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.95rem", fontWeight: 700, color: "var(--lime)" }}>
                {p.price}
              </span>
              {p.was && (
                <span style={{ fontFamily: "sans-serif", fontSize: "0.8rem", color: "var(--muted)", textDecoration: "line-through" }}>
                  {p.was}
                </span>
              )}
            </div>
          </div>

          {/* Stacking CTA Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%", marginTop: "1rem" }}>
            {/* Button 1: Subscribe & Save */}
            <button
              onClick={handleSubscribe}
              className="sub-btn"
            >
              {subscribing ? "✓ SUBSCRIBED! 🛸" : `Subscribe & Save 40%  ${getDiscountedPrice(p.price)}`}
            </button>

            {/* Button 2: Add to Cart */}
            <button
              onClick={handleAdd}
              className="cart-btn"
            >
              {added ? "✓ ADDED! 🛒" : `Add to Cart  ${p.price}`}
            </button>
          </div>
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
      padding: "6rem 0", position: "relative", zIndex: 1, background: "#000", 
    }}>
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.01);
          overflow: hidden;
          gap: 0;
        }

        .product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 560px;
          border-right: 1px solid rgba(255,255,255,0.2);
          transition: background 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
          background: #050505;
        }

        .product-card:hover {
          background: rgba(255,255,255,0.01);
        }

        .product-card-graphic {
          height: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 2rem;
          position: relative;
          background: rgba(255,255,255,0.005);
        }

        .product-card-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-card-img {
          transform: scale(1.05);
        }

        .product-card-text {
          height: 40%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .sub-btn {
          width: 100%;
          background: var(--lime);
          color: #000;
          border: none;
          border-radius: 4px;
          padding: 0.65rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          text-align: center;
        }

        .sub-btn:hover {
          transform: scale(1.02);
          background: #bbf000;
        }

        .cart-btn {
          width: 100%;
          background: rgba(255,255,255,0.03);
          color: var(--text);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          padding: 0.65rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-align: center;
        }

        .cart-btn:hover {
          background: rgba(255,255,255,0.08);
          transform: scale(1.02);
        }

        /* Responsive Breakpoints */

        /* Desktop columns 4n right border strip */
        @media (min-width: 1200px) {
          .product-card:nth-child(4n) {
            border-right: none;
          }
        }

        /* Laptops & Tablets */
        @media (max-width: 1199px) and (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .product-card {
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }
          .product-card:nth-child(2n) {
            border-right: none;
          }
        }

        /* Mobile phones */
        @media (max-width: 767px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .product-card {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            height: 530px;
          }
          .product-card:last-child {
            border-bottom: none;
          }
          .product-card-graphic {
            height: 55%;
          }
          .product-card-text {
            height: 45%;
          }
        }
      `}</style>

      {/* Modern left-aligned geometric header block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", textAlign: "left", marginBottom: "3rem", maxWidth: "1440px", margin: "0 auto 3.5rem", padding: "0 2rem" }}>
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
          OUR BESTSELLERS
        </h2>
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)",
          color: "rgba(255,255,255,0.65)",
          lineHeight: "1.6",
          margin: 0,
          maxWidth: "800px",
        }}>
          Explore our most wanted streetwear capsules, designed with premium tie-dye techniques and signature cosmic vibrations.
        </p>
      </div>

      <div className="products-grid">
        {loading ? (
          <div style={{
            gridColumn: "1 / -1", textAlign: "center", padding: "4rem",
            background: "rgba(255,255,255,0.02)", borderRadius: "0px",
            border: "none", color: "var(--muted)",
            fontFamily: "sans-serif", fontSize: "1.1rem"
          }}>
            fetching the latest drip... 🛸
          </div>
        ) : products.length > 0 ? (
          products.map((p, i) => <ProductCard key={i} p={p} />)
        ) : (
          <div style={{
            gridColumn: "1 / -1", textAlign: "center", padding: "4rem",
            background: "rgba(255,255,255,0.02)", borderRadius: "0px",
            border: "none", color: "var(--muted)",
            fontFamily: "sans-serif", fontSize: "1.1rem"
          }}>
            no drops found right now... 👽
          </div>
        )}

        {/* hype card */}
        <div className="product-card">
          <div className="product-card-graphic">
            <span style={{ fontSize: "6rem", animation: "bounce 1.5s infinite" }}>🚀</span>
          </div>
          <div className="product-card-text" style={{ justifyContent: "center", alignItems: "center", gap: "0.8rem", height: "40%" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", fontWeight: 700, color: "var(--lime)", textAlign: "center" }}>
              MORE DROPS<br />INCOMING
            </div>
            <div style={{ fontFamily: "sans-serif", color: "var(--muted)", fontSize: "0.82rem", textAlign: "center" }}>
              stay tuned bestie
            </div>
            <button className="sub-btn" style={{ width: "90%" }}>
              notify me 🔔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}