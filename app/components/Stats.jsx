"use client";

export default function Stats() {
  const cards = [
    {
      title: "UNCOMPROMISING QUALITY",
      desc: "Premium custom fabrics crafted with meticulous precision for ultimate comfort.",
      svg: (
        <svg viewBox="0 0 100 100" style={{ width: "80px", height: "80px", stroke: "var(--lime)", fill: "none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", marginBottom: "1.5rem" }}>
          <path d="M50,15 C32,15 28,32 30,48 C32,58 40,65 50,65 C60,65 68,58 70,48 C72,32 68,15 50,15 Z" />
          <path d="M38,38 C34,42 36,48 42,48 C46,48 48,42 46,38 C44,34 40,34 38,38 Z" fill="var(--lime)" />
          <path d="M62,38 C66,42 64,48 58,48 C54,48 52,42 54,38 C56,34 60,34 62,38 Z" fill="var(--lime)" />
          <path d="M30,55 C20,62 25,75 35,75" />
          <path d="M70,55 C80,62 75,75 65,75" />
          <path d="M50,80 C50,80 38,70 38,62 C38,55 45,52 50,58 C55,52 62,55 62,62 C62,70 50,80 50,80 Z" fill="rgba(204,47,160,0.15)" stroke="var(--pink)" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      title: "ADVANCED FORMULATIONS",
      desc: "Innovative psychedelic tie-dye blends designed for specific consciousness states.",
      svg: (
        <svg viewBox="0 0 100 100" style={{ width: "80px", height: "80px", stroke: "var(--lime)", fill: "none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", marginBottom: "1.5rem" }}>
          <path d="M50,38 C35,38 35,55 50,55 C65,55 65,38 50,38 Z" />
          <circle cx="50" cy="46" r="4" fill="var(--lime)" />
          <ellipse cx="50" cy="58" rx="35" ry="10" />
          <path d="M25,62 C30,72 70,72 75,62" />
          <circle cx="35" cy="58" r="1.5" fill="var(--lime)" />
          <circle cx="50" cy="58" r="1.5" fill="var(--lime)" />
          <circle cx="65" cy="58" r="1.5" fill="var(--lime)" />
          <line x1="42" y1="68" x2="35" y2="85" strokeDasharray="3 3" />
          <line x1="50" y1="68" x2="50" y2="88" strokeDasharray="3 3" />
          <line x1="58" y1="68" x2="65" y2="85" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: "RIGOROUS TESTING",
      desc: "Rigorously double-checked print detailing ensures absolute durability and vibrant colors.",
      svg: (
        <svg viewBox="0 0 100 100" style={{ width: "80px", height: "80px", stroke: "var(--lime)", fill: "none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", marginBottom: "1.5rem" }}>
          <path d="M50,85 L50,68 C50,62 45,60 45,55 L45,45 C45,42 48,40 50,40 C52,40 55,42 55,45 L55,55 C55,60 50,62 50,68" />
          <path d="M40,55 L32,32" />
          <path d="M60,55 L68,32" />
          <circle cx="32" cy="26" r="7" />
          <circle cx="32" cy="26" r="3" fill="var(--lime)" />
          <circle cx="68" cy="26" r="7" />
          <circle cx="68" cy="26" r="3" fill="var(--lime)" />
          <path d="M45,55 C45,50 48,48 50,52 C52,48 55,50 55,55" />
        </svg>
      )
    },
    {
      title: "RADICAL TRANSPARENCY",
      desc: "Fully trace-certified organic yarn materials used for every custom garment drop.",
      svg: (
        <svg viewBox="0 0 100 100" style={{ width: "80px", height: "80px", stroke: "var(--lime)", fill: "none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", marginBottom: "1.5rem" }}>
          <path d="M35,25 L65,25 L65,32 C65,32 75,38 75,55 L75,78 C75,85 68,88 50,88 C32,88 25,85 25,78 L25,55 C25,38 35,32 35,32 Z" />
          <line x1="32" y1="25" x2="68" y2="25" strokeWidth="3" />
          <path d="M50,40 C42,40 40,48 42,56 C43,62 47,65 50,65 C53,62 57,62 58,56 C60,48 58,40 50,40 Z" />
          <path d="M42,58 C35,62 38,70 45,68" />
          <path d="M58,58 C65,62 62,70 55,68" />
          <line x1="45" y1="48" x2="48" y2="50" />
          <line x1="55" y1="48" x2="52" y2="50" />
        </svg>
      )
    },
    {
      title: "CONSCIOUSNESS EXPLORATION",
      desc: "Art and clothing designed to elevate your mental frequency and trigger deep conversations.",
      svg: (
        <svg viewBox="0 0 100 100" style={{ width: "80px", height: "80px", stroke: "var(--lime)", fill: "none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", marginBottom: "1.5rem" }}>
          <path d="M68,26 C68,26 50,30 42,42 C36,50 34,60 30,68 C38,64 48,62 56,56 C68,48 72,30 72,30 Z" />
          <path d="M35,60 C25,62 26,72 32,75 L40,65" />
          <path d="M60,35 C62,25 72,26 75,32 L65,40" />
          <path d="M28,70 Q15,85 24,78 Q20,88 30,72" stroke="var(--pink)" />
          <circle cx="56" cy="40" r="6" />
          <path d="M56,46 C56,52 48,55 45,50" />
        </svg>
      )
    },
    {
      title: "SATISFACTION GUARANTEE",
      desc: "90-day risk-free vibe check trial and free returns on all orders.",
      svg: (
        <svg viewBox="0 0 100 100" style={{ width: "80px", height: "80px", stroke: "var(--lime)", fill: "none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", marginBottom: "1.5rem" }}>
          <path d="M25,35 C25,18 75,18 75,35 Z" fill="rgba(168,212,0,0.06)" />
          <path d="M25,35 Q50,42 75,35" />
          <line x1="25" y1="35" x2="50" y2="65" />
          <line x1="40" y1="38" x2="50" y2="65" />
          <line x1="60" y1="38" x2="50" y2="65" />
          <line x1="75" y1="35" x2="50" y2="65" />
          <circle cx="50" cy="65" r="5" />
          <path d="M48,70 C42,75 58,75 52,70" />
          <line x1="47" y1="74" x2="45" y2="82" />
          <line x1="53" y1="74" x2="55" y2="82" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="why-choose"
      style={{
        background: "#050505",
        padding: "6rem 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.01);
          overflow: hidden;
        }

        .why-card {
          display: flex;
          flex-direction: column;
          height: 400px;
          border-right: 1px solid rgba(255,255,255,0.2);
          transition: background 0.3s ease;
        }

        .why-card:last-child {
          border-right: none;
        }

        .why-card:hover {
          background: rgba(255,255,255,0.02);
        }

        .why-card-graphic {
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 1.5rem;
        }

        .why-card-graphic svg {
          width: 100px !important;
          height: 100px !important;
          margin-bottom: 0 !important;
        }

        .why-card-text {
          height: 30%;
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        /* Large tablets & laptops */
        @media (max-width: 1199px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); }
          .why-card { border-bottom: 1px solid rgba(255,255,255,0.2); }
          .why-card:nth-child(3) { border-right: none; }
          .why-card:nth-child(4), .why-card:nth-child(5), .why-card:nth-child(6) { border-bottom: none; }
        }

        /* Medium tablets */
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .why-card { border-right: 1px solid rgba(255,255,255,0.2); border-bottom: 1px solid rgba(255,255,255,0.2); }
          .why-card:nth-child(2n) { border-right: none; }
          .why-card:nth-child(5), .why-card:nth-child(6) { border-bottom: none; }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; }
          .why-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.2); }
          .why-card:last-child { border-bottom: none; }
        }
      `}</style>

      {/* Modern left-aligned geometric header block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", textAlign: "left", marginBottom: "3rem", maxWidth: "1440px", margin: "0 auto 3.5rem", padding: "0 2rem" }}>
        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "0.08em",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          margin: 0,
        }}>
          <span style={{ display: "inline-block", width: "1.1rem", height: "1.1rem", background: "var(--lime)" }} />
          WHY CHOOSE HIPPIE ALIENS
        </h2>
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
          color: "rgba(255,255,255,0.7)",
          lineHeight: "1.6",
          margin: 0,
          maxWidth: "850px",
        }}>
          We believe visionary garments play an integral role in self-growth and development, serving as gateways to elevated thought, creativity, and critical thinking.
        </p>
      </div>

      {/* Grid container with closed solid border borders */}
      <div className="why-grid">
        {cards.map((c, i) => (
          <div key={i} className="why-card">
            <div className="why-card-graphic">
              {c.svg}
            </div>
            <div className="why-card-text">
              <h3 style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.06em",
                margin: "0 0 0.8rem 0",
                lineHeight: "1.3"
              }}>
                {c.title}
              </h3>
              <p style={{
                fontFamily: "sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.5",
                margin: 0
              }}>
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
