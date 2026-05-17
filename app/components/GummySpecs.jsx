"use client";

export default function GummySpecs() {
  const specs = [
    {
      title: "ALL-NATURAL FLAVOR",
      desc: "Pure botanical taste profiles with no artificial additives",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="9" r="2.5" />
          <circle cx="9.5" cy="13" r="2.5" />
          <circle cx="14.5" cy="13" r="2.5" />
          <circle cx="12" cy="17" r="2.5" />
          <path d="M12 6.5V4c0-.5.5-1 1-1h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )
    },
    {
      title: "VEGAN-FRIENDLY",
      desc: "Plant-based ingredients for cosmic consciousness explorers",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/>
          <path d="M19 2L9.8 11.2"/>
        </svg>
      )
    },
    {
      title: "CALIBRATED POTENCY",
      desc: "Meticulously calculated ratios for optimal experiences",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12M14 3v5l6 9v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2l6-9V3"/>
          <path d="M8.5 13h7M10 16h4"/>
        </svg>
      )
    },
    {
      title: "PREMIUM INGREDIENTS",
      desc: "Only the highest quality compounds enter our orbit",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(120 12 12)"/>
        </svg>
      )
    },
    {
      title: "LONG SHELF-LIFE",
      desc: "Stable potency for extended interstellar journeys",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 2h14M5 22h14M19 2v4a7 7 0 0 1-7 7 7 7 0 0 1-7-7V2M5 22v-4a7 7 0 0 1 7-7 7 7 0 0 1 7 7v4"/>
        </svg>
      )
    }
  ];

  return (
    <section id="gummy-specs" style={{ background: "#ffffff", padding: "6.5rem 4rem", position: "relative", zIndex: 1 }}>
      <style>{`
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2.5rem;
          width: 100%;
        }

        .spec-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
        }

        .spec-icon-circle {
          width: 72px;
          height: 72px;
          border: 2.2px solid #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          margin-bottom: 1.6rem;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          background: transparent;
        }

        .spec-col:hover .spec-icon-circle {
          background: #000000;
          color: #ffffff;
          transform: translateY(-5px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
        }

        .spec-title {
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          color: #000000;
          margin: 0 0 0.8rem 0;
          letter-spacing: 0.08em;
          line-height: 1.3;
        }

        .spec-desc {
          font-family: sans-serif;
          font-size: 0.88rem;
          color: #444444;
          line-height: 1.6;
          max-width: 230px;
          margin: 0;
        }

        /* Responsive Grid Scaling */
        @media (max-width: 1023px) {
          .specs-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem 2rem;
          }
        }

        @media (max-width: 767px) {
          #gummy-specs {
            padding: 4.5rem 1.8rem !important;
          }
          .specs-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .spec-desc {
            max-width: 280px;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Stark Black Lead Heading */}
        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
          fontWeight: 700,
          color: "#000000",
          letterSpacing: "0.06em",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          margin: "0 0 4.5rem 0",
          lineHeight: "1.2"
        }}>
          <span style={{ display: "inline-block", width: "1.1rem", height: "1.1rem", background: "#000000" }} />
          HIPPIE ALIEN GUMMY SPECS
        </h2>

        {/* The 5 Spec Columns Grid */}
        <div className="specs-grid">
          {specs.map((spec, index) => (
            <div key={index} className="spec-col">
              <div className="spec-icon-circle">
                {spec.icon}
              </div>
              <h3 className="spec-title">{spec.title}</h3>
              <p className="spec-desc">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
