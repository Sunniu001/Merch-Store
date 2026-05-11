"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrders() {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        if (Array.isArray(data)) {
          setOrders(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getOrders();
  }, []);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "8rem 2rem 4rem" }}>
        <h1 style={{ fontFamily: "var(--font-wack)", fontSize: "3rem", color: "var(--lime)", marginBottom: "2rem" }}>MY ORDERS 🛸</h1>
        
        {loading ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)", fontFamily: "var(--font-hand)", fontSize: "1.5rem" }}>
            scouring the galaxy for your haul... 🌌
          </div>
        ) : orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)", border: "1px dashed var(--border)", borderRadius: "20px" }}>
             <span style={{ fontSize: "3rem" }}>🏜️</span>
             <p style={{ fontFamily: "var(--font-fun)", marginTop: "1rem" }}>no orders found yet, bestie</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {orders.map(order => (
              <div key={order.id} style={{ 
                background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", 
                borderRadius: "20px", padding: "1.5rem", display: "flex", flexWrap: "wrap",
                justifyContent: "space-between", gap: "1rem", alignItems: "center"
              }}>
                <div>
                  <div style={{ fontFamily: "var(--font-wack)", fontSize: "1.2rem", color: "var(--sky)" }}>
                    ORDER #{order.id}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.2rem" }}>
                    {new Date(order.date_created).toLocaleDateString()}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>STATUS</div>
                    <div style={{ 
                      color: order.status === "completed" ? "var(--lime)" : "var(--orange)",
                      fontFamily: "var(--font-hand)", fontSize: "1.1rem", fontWeight: 700
                    }}>
                      {order.status.toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>TOTAL</div>
                    <div style={{ fontFamily: "var(--font-wack)", fontSize: "1.1rem", color: "var(--text)" }}>
                      ₹{order.total}
                    </div>
                  </div>
                </div>

                <div style={{ width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem", marginTop: "0.5rem" }}>
                  <div style={{ fontSize: "0.85rem", color: "var(--muted)", fontFamily: "var(--font-fun)" }}>
                    ITEMS: {order.line_items.map(item => `${item.name} (${item.quantity})`).join(", ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
