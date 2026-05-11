"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ThankYouPage() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a8d400", "#cc2fa0", "#00b8cc"]
    });
  }, []);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ 
        maxWidth: "800px", margin: "0 auto", padding: "10rem 2rem 6rem",
        textAlign: "center", display: "flex", flexDirection: "column", gap: "2rem"
      }}>
        <div style={{ fontSize: "6rem", animation: "wobble 2s infinite" }}>👽🤘</div>
        
        <h1 style={{ fontFamily: "var(--font-wack)", fontSize: "clamp(3rem, 8vw, 5rem)", color: "var(--lime)", lineHeight: 1 }}>
          SLAY! ORDER<br />RECEIVED
        </h1>
        
        <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.5rem", color: "var(--muted)" }}>
          our space hamsters are packing your drip right now.
        </p>

        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "30px", padding: "2rem", border: "1px dashed var(--border)" }}>
           <p style={{ fontFamily: "var(--font-fun)", color: "var(--sky)" }}>Check your email for a cosmic confirmation.</p>
        </div>

        <Link 
          href="/"
          style={{
            alignSelf: "center", padding: "1rem 2.5rem", background: "var(--lime)",
            color: "#000", borderRadius: "999px", fontFamily: "var(--font-wack)",
            fontSize: "1.2rem", textDecoration: "none", transition: "all 0.2s"
          }}
        >
          BACK TO EARTH 🌎
        </Link>
      </div>

      <Footer />

      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
      `}</style>
    </main>
  );
}
