"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch(`/api/product/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  if (loading) return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "var(--font-hand)", fontSize: "2rem", color: "var(--lime)", animation: "pulse 1.5s infinite" }}>
        scanning the cosmic drip... 🛸
      </div>
    </div>
  );

  if (!product || product.error) return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ fontSize: "5rem" }}>🛸💨</div>
      <h1 style={{ fontFamily: "var(--font-wack)", color: "var(--text)" }}>PRODUCT VANISHED</h1>
      <p style={{ color: "var(--muted)", fontFamily: "var(--font-hand)" }}>an alien might have stolen it</p>
    </div>
  );

  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem 4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem" }}>
          
          {/* Gallery */}
          <div>
            <div style={{ 
              background: "var(--bg2)", borderRadius: "30px", overflow: "hidden", 
              border: "1px solid var(--border)", position: "relative",
              aspectRatio: "1/1"
            }}>
              {product.badge && (
                <span style={{
                  position: "absolute", top: "20px", right: "20px", zIndex: 5,
                  fontFamily: "var(--font-hand)", fontSize: "1.2rem", fontWeight: 700,
                  padding: "0.4rem 1.2rem", borderRadius: "999px",
                  background: "var(--orange)", color: "white", transform: "rotate(5deg)"
                }}>
                  {product.badge.text}
                </span>
              )}
              <img 
                src={product.images?.[selectedImg] || product.image} 
                alt={product.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            
            {product.images?.length > 1 && (
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", overflowX: "auto", padding: "0.5rem 0" }}>
                {product.images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    style={{
                      width: "80px", height: "80px", borderRadius: "15px", overflow: "hidden",
                      border: `2px solid ${selectedImg === i ? "var(--lime)" : "var(--border)"}`,
                      background: "none", padding: 0, cursor: "pointer", transition: "all 0.2s"
                    }}
                  >
                    <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <span style={{ fontFamily: "var(--font-fun)", color: "var(--sky)", fontSize: "0.9rem", textTransform: "uppercase" }}>{product.type}</span>
              <h1 style={{ fontFamily: "var(--font-wack)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)", lineHeight: 1, marginTop: "0.5rem" }}>
                {product.name}
              </h1>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontFamily: "var(--font-wack)", fontSize: "2.5rem", color: "var(--lime)" }}>{product.price}</span>
              {product.was && (
                <span style={{ fontFamily: "var(--font-fun)", fontSize: "1.2rem", color: "var(--muted)", textDecoration: "line-through" }}>{product.was}</span>
              )}
              {product.saved && (
                <span style={{ background: "rgba(168,212,0,0.1)", color: "var(--lime)", padding: "0.3rem 0.8rem", borderRadius: "999px", fontFamily: "var(--font-hand)", fontWeight: 700 }}>
                  {product.saved}
                </span>
              )}
            </div>

            <div 
              style={{ color: "var(--muted)", lineHeight: 1.6, fontFamily: "var(--font-fun)" }}
              dangerouslySetInnerHTML={{ __html: product.short_description }} 
            />

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button 
                onClick={() => addToCart(product)}
                style={{
                  flex: 1, padding: "1.2rem", borderRadius: "999px", background: "var(--lime)",
                  color: "#000", border: "none", fontFamily: "var(--font-wack)", fontSize: "1.2rem",
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02) rotate(-1deg)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                ADD TO CART 🛒
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                style={{
                  width: "60px", borderRadius: "999px", border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.03)", color: isWishlisted ? "var(--pink)" : "white",
                  fontSize: "1.5rem", cursor: "pointer", transition: "all 0.2s"
                }}
              >
                {isWishlisted ? "❤️" : "🤍"}
              </button>
            </div>

            <div style={{ marginTop: "2rem", borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
               <h4 style={{ fontFamily: "var(--font-wack)", color: "var(--sky)", marginBottom: "1rem" }}>COSMIC DETAILS ✦</h4>
               <div 
                style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: product.description }} 
               />
            </div>
          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </main>
  );
}
