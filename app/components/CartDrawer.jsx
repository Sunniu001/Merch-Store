"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("₹", "").replace(",", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div 
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        display: "flex", justifyContent: "flex-end"
      }}
    >
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
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
          <h2 style={{ fontFamily: "var(--font-wack)", fontSize: "1.5rem", color: "var(--lime)" }}>YOUR HAUL 🛒</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.5rem", cursor: "pointer" }}
          >✕</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", color: "var(--muted)", marginTop: "3rem" }}>
              <span style={{ fontSize: "3rem" }}>🏜️</span>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.2rem", marginTop: "1rem" }}>your cart is empty, bestie</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{
                  marginTop: "1.5rem", padding: "0.6rem 1.5rem", background: "var(--lime)",
                  color: "#000", border: "none", borderRadius: "999px",
                  fontFamily: "var(--font-wack)", cursor: "pointer"
                }}
              >GO SHOP 👽</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "80px", height: "80px", background: "var(--bg2)", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: "var(--font-wack)", fontSize: "0.9rem", color: "var(--text)" }}>{item.name}</h4>
                    <p style={{ color: "var(--lime)", fontWeight: "bold" }}>{item.price}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginTop: "0.5rem" }}>
                      <button onClick={() => updateQuantity(item.id, -1)} style={{ background: "var(--border)", border: "none", color: "var(--text)", width: "24px", height: "24px", borderRadius: "4px", cursor: "pointer" }}>-</button>
                      <span style={{ color: "var(--text)", fontSize: "0.9rem" }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} style={{ background: "var(--border)", border: "none", color: "var(--text)", width: "24px", height: "24px", borderRadius: "4px", cursor: "pointer" }}>+</button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ background: "none", border: "none", color: "#ff4444", cursor: "pointer", fontSize: "1.2rem" }}
                  >🗑️</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: "1.5rem", borderTop: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span style={{ color: "var(--muted)", fontFamily: "var(--font-fun)" }}>subtotal</span>
              <span style={{ color: "var(--lime)", fontFamily: "var(--font-wack)", fontSize: "1.2rem" }}>₹{total.toLocaleString()}</span>
            </div>
            <Link 
              href="/checkout" 
              onClick={() => setIsCartOpen(false)}
              style={{
                display: "block", textAlign: "center", padding: "1rem",
                background: "var(--lime)", color: "#000", textDecoration: "none",
                borderRadius: "999px", fontFamily: "var(--font-wack)", fontSize: "1.1rem"
              }}
            >
              SECURE CHECKOUT 🔒
            </Link>
          </div>
        )}
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
