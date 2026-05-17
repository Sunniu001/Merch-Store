"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "what's the material? is it comfy? 🤔",
    a: "100% premium combed cotton — super soft, breathable, and built to last. basically like wearing a cloud that also has a sick alien print on it. each tee is quality-checked so you get zero shrinkage (unlike your confidence when you see our prices 😂)",
  },
  {
    q: "how do i know my size? 📏",
    a: "every product page has a detailed size chart. measure your chest, compare, done. if you're between sizes just go bigger for that oversized baddie fit. still confused? dm us, we don't bite (we're aliens, we don't have teeth)",
  },
  {
    q: "returns? exchanges? what's the deal 🔄",
    a: "7 days no-drama returns! if it doesn't fit or you got the wrong one, we'll fix it. just keep it unworn, unwashed, original packaging. hit us up at support@hippiealiens.com 💌",
  },
  {
    q: "how long until my order arrives? 🚚",
    a: "we process in 1-2 days then it ships! delivery is 5-7 business days depending on where you're at on this planet. you'll get a tracking link so you can refresh it obsessively (we don't judge)",
  },
  {
    q: "where are these made? 🌍",
    a: "100% made in India 🇮🇳 — Ranchi, Jharkhand to be specific! skilled craftsmen, local talent, and a lot of good energy. we're here for the glow-up of Indian streetwear, bestie.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "rgba(255,255,255,0.02)",
      border: `1px solid ${open ? "rgba(138,94,204,0.35)" : "var(--border)"}`,
      borderRadius: "16px", overflow: "hidden",
      transition: "border-color 0.2s",
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", background: "none", border: "none",
          padding: "1.1rem 1.3rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          cursor: "pointer",
          fontFamily: "var(--font-wack)", fontSize: "1.05rem",
          color: open ? "var(--purple)" : "var(--text)",
          textAlign: "left", gap: "1rem", transition: "color 0.2s",
        }}
      >
        <span>{q}</span>
        <span style={{
          width: "28px", height: "28px", flexShrink: 0,
          background: open ? "rgba(204,47,160,0.1)" : "rgba(168,212,0,0.08)",
          border: `1px solid ${open ? "rgba(204,47,160,0.4)" : "rgba(168,212,0,0.3)"}`,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1rem", color: open ? "var(--pink)" : "var(--lime)",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "all 0.3s",
        }}>
          ▾
        </span>
      </button>

      <div style={{
        maxHeight: open ? "300px" : "0px",
        overflow: "hidden", transition: "max-height 0.4s ease",
      }}>
        <div style={{
          padding: "0.8rem 1.3rem 1.2rem",
          fontFamily: "sans-serif", fontSize: "0.9rem",
          lineHeight: 1.7, color: "rgba(255,255,255,0.65)",
          borderTop: "1px dashed rgba(255,255,255,0.06)",
        }}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{
      padding: "5rem 2rem", background: "#030303",
      position: "relative", zIndex: 1,
    }}>
      {/* Modern left-aligned geometric header block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", textAlign: "left", marginBottom: "3rem", maxWidth: "760px", margin: "0 auto 3rem" }}>
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
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)",
          color: "rgba(255,255,255,0.65)",
          lineHeight: "1.6",
          margin: 0,
        }}>
          All the answers to your existential queries regarding fabrics, cosmic fits, and interstellar shipping.
        </p>
      </div>
      <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
      </div>
    </section>
  );
}