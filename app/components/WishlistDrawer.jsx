"use client";

import { useCart } from "../context/CartContext";

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, addToCart, toggleWishlist } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div 
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        display: "flex", justifyContent: "flex-end"
      }}
    >
      {/* Backdrop */}
      <div 
        onClick={() => setIsWishlistOpen(false)}
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)" }}
      />

      {/* Panel */}
      <div 
        style={{
          position: "relative", width: "100%", maxWidth: "400px", height: "100%",
          background: "var(--bg)", borderLeft: "1px solid var(--border)",
          display: "flex", flexDirection: "column",
          animation: "slideLeft 0.3s ease-out"
        }}
      >
        <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontFamily: "var(--font-wack)", fontSize: "1.5rem", color: "var(--sky)" }}>WISHLIST 🤍</h2>
          <button 
            onClick={() => setIsWishlistOpen(false)}
            style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.5rem", cursor: "pointer" }}
          >✕</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
          {wishlist.length === 0 ? (
            <div style={{ textAlign: "center", color: "var(--muted)", marginTop: "3rem" }}>
              <span style={{ fontSize: "3rem" }}>🌌</span>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.2rem", marginTop: "1rem" }}>your wishlist is an empty void</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {wishlist.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "80px", height: "80px", background: "var(--bg2)", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: "var(--font-wack)", fontSize: "0.9rem", color: "var(--text)" }}>{item.name}</h4>
                    <p style={{ color: "var(--lime)", fontWeight: "bold" }}>{item.price}</p>
                    <button 
                      onClick={() => { addToCart(item); toggleWishlist(item); }}
                      style={{
                        marginTop: "0.5rem", padding: "0.3rem 0.8rem", background: "var(--lime)",
                        color: "#000", border: "none", borderRadius: "999px",
                        fontFamily: "var(--font-wack)", fontSize: "0.75rem", cursor: "pointer"
                      }}
                    >
                      ADD TO CART 🛒
                    </button>
                  </div>
                  <button 
                    onClick={() => toggleWishlist(item)}
                    style={{ background: "none", border: "none", color: "#ff4444", cursor: "pointer", fontSize: "1.2rem" }}
                  >🗑️</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
