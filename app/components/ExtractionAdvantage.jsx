"use client";

export default function ExtractionAdvantage() {
  return (
    <section id="extraction-advantage" style={{ background: "var(--bg2)", padding: "5rem 4rem", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 1, transition: "background 0.5s ease" }}>
      <style>{`
        .extraction-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .extraction-desc-block {
          max-width: 780px;
          margin-bottom: 3.5rem;
        }

        .extraction-para {
          font-family: sans-serif;
          font-size: 1rem;
          color: var(--text);
          line-height: 1.7;
          opacity: 0.85;
          margin-bottom: 1.5rem;
        }

        .extraction-subhead {
          font-family: 'Space Mono', monospace;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text);
          margin-top: 2rem;
        }

        /* 4 Column Outlined Grid */
        .extraction-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--text);
          border-bottom: 1px solid var(--text);
          width: 100%;
        }

        .extraction-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3.5rem 2rem;
          text-align: center;
          border-right: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .extraction-col:last-child {
          border-right: none;
        }

        .extraction-col:hover {
          background: rgba(0,0,0,0.015);
          transform: translateY(-4px);
        }

        [data-theme="dark"] .extraction-col:hover {
          background: rgba(255,255,255,0.01);
        }

        .extraction-icon-wrapper {
          color: var(--text);
          margin-bottom: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .extraction-col:hover .extraction-icon-wrapper {
          transform: scale(1.1) rotate(2deg);
        }

        .extraction-col-title {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .extraction-col-desc {
          font-family: sans-serif;
          font-size: 0.88rem;
          color: var(--text);
          opacity: 0.75;
          line-height: 1.5;
          max-width: 250px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1023px) {
          .extraction-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .extraction-col {
            border-bottom: 1px solid var(--border);
          }
          .extraction-col:nth-child(2) {
            border-right: none;
          }
          .extraction-col:nth-child(3),
          .extraction-col:nth-child(4) {
            border-bottom: none;
          }
        }

        @media (max-width: 639px) {
          .extraction-grid {
            grid-template-columns: 1fr;
          }
          .extraction-col {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .extraction-col:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <div className="extraction-container">
        {/* Section Header */}
        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "0.06em",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          margin: "0 0 2rem 0",
          lineHeight: "1.2"
        }}>
          <span style={{ display: "inline-block", width: "1.2rem", height: "1.2rem", background: "var(--text)" }} />
          THE EXTRACTION ADVANTAGE: WHY QUALITY MATTERS
        </h2>

        {/* Narrative Description Blocks */}
        <div className="extraction-desc-block">
          <p className="extraction-para">
            What happens behind the scenes at Area 52 makes all the difference in your experience. Our 
            specialized extraction laboratory combines advanced scientific methods with artisanal attention to 
            detail that most manufacturers consider too time-consuming.
          </p>
          <p className="extraction-para">
            The extra steps we take aren't industry standard because they're costly and time-intensive. But we 
            believe the difference is immediately noticeable in both potency and experience quality.
          </p>
          <h4 className="extraction-subhead">Why our extracts outperform:</h4>
        </div>

        {/* 4-Column Labs Grid */}
        <div className="extraction-grid">
          {/* Column 1: Temperature-Controlled Processing */}
          <div className="extraction-col">
            <div className="extraction-icon-wrapper">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 L90 85 L10 85 Z" />
                <path d="M50 35 L50 70 M35 52.5 L65 52.5 M39.4 41.9 L60.6 63.1 M39.4 63.1 L60.6 41.9" stroke="var(--bg2)" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="50" cy="52.5" r="4.5" fill="var(--bg2)" />
              </svg>
            </div>
            <h5 className="extraction-col-title">Temperature-Controlled Processing</h5>
            <p className="extraction-col-desc">We preserve volatile compounds that others destroy</p>
          </div>

          {/* Column 2: Multi-Phase Filtration */}
          <div className="extraction-col">
            <div className="extraction-icon-wrapper">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="35" cy="18" r="4.5" />
                <circle cx="45" cy="12" r="5.5" />
                <circle cx="55" cy="20" r="4.5" />
                <circle cx="65" cy="14" r="6" />
                <path d="M20 28 L80 28 L55 60 L55 88 L45 88 L45 60 Z" />
                <line x1="33" y1="42" x2="67" y2="42" stroke="var(--bg2)" strokeWidth="4.5" />
                <line x1="41" y1="53" x2="59" y2="53" stroke="var(--bg2)" strokeWidth="4.5" />
              </svg>
            </div>
            <h5 className="extraction-col-title">Multi-Phase Filtration</h5>
            <p className="extraction-col-desc">Removes unwanted elements while retaining beneficial ones</p>
          </div>

          {/* Column 3: Terpene Preservation */}
          <div className="extraction-col">
            <div className="extraction-icon-wrapper">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="55" width="50" height="30" rx="5" />
                <rect x="35" y="43" width="30" height="12" />
                <path d="M40 33 C38 23, 46 13, 42 3" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M50 36 C48 26, 56 16, 52 6" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M60 33 C58 23, 66 13, 62 3" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </div>
            <h5 className="extraction-col-title">Terpene Preservation Technology</h5>
            <p className="extraction-col-desc">Maintains the full aromatic and effect profile</p>
          </div>

          {/* Column 4: Small-Batch Production */}
          <div className="extraction-col">
            <div className="extraction-icon-wrapper">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="20" width="50" height="65" rx="8" />
                <rect x="20" y="13" width="60" height="8" rx="2" />
                <rect x="40" y="42" width="20" height="20" rx="3" fill="var(--bg2)" />
                <circle cx="50" cy="52" r="4.5" fill="currentColor" />
                <line x1="34" y1="48" x2="40" y2="48" stroke="currentColor" strokeWidth="3" />
                <line x1="34" y1="56" x2="40" y2="56" stroke="currentColor" strokeWidth="3" />
                <line x1="60" y1="48" x2="66" y2="48" stroke="currentColor" strokeWidth="3" />
                <line x1="60" y1="56" x2="66" y2="56" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h5 className="extraction-col-title">Small-Batch Production</h5>
            <p className="extraction-col-desc">Allows for intensive quality monitoring impossible at scale</p>
          </div>
        </div>
      </div>
    </section>
  );
}
