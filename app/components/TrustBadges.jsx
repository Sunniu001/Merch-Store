"use client";

export default function TrustBadges() {
  return (
    <section id="trust-badges" style={{ background: "var(--bg2)", padding: "5rem 0 0 0", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 1, transition: "background 0.5s ease" }}>
      <style>{`
        .trust-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4rem;
          text-align: center;
          margin-bottom: 4rem;
        }

        .trust-desc {
          font-family: sans-serif;
          font-size: 1.05rem;
          color: var(--text);
          opacity: 0.75;
          line-height: 1.6;
          max-width: 650px;
          margin: 0 auto 3rem auto;
        }

        /* 6 Column Stamps Row */
        .badges-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .badge-stamp-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: var(--text);
        }

        .badge-stamp-wrapper:hover {
          transform: scale(1.1) rotate(6deg);
        }

        /* Infinite Marquee Bar at bottom */
        .trust-marquee {
          background: #000000;
          color: #ffffff;
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          align-items: center;
          height: 52px;
          border-top: 1px solid var(--border);
          margin-top: 5rem;
          width: 100%;
        }

        .trust-marquee-track {
          display: inline-block;
          animation: trustTicker 25s linear infinite;
        }

        .trust-marquee-item {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0 2.5rem;
        }

        @keyframes trustTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 767px) {
          .trust-container {
            padding: 0 2rem;
          }
          .badges-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 479px) {
          .badges-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="trust-container">
        {/* Centered Heading with black lead block */}
        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "0.06em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.8rem",
          margin: "0 0 1.5rem 0",
          lineHeight: "1.2"
        }}>
          <span style={{ display: "inline-block", width: "1.2rem", height: "1.2rem", background: "var(--text)" }} />
          KICK BACK, RELAX OR GET YOUR MONEY BACK
        </h2>

        {/* Centered Description */}
        <p className="trust-desc">
          Life can be stressful at times — it doesn't have to be at Area 52. Vibe with 
          our products risk-free with our 100% money-back guarantee.
        </p>

        {/* 6 Stamps Flex Row */}
        <div className="badges-row">
          {/* Badge 1: MADE IN USA */}
          <div className="badge-stamp-wrapper" title="Made in USA">
            <svg width="82" height="82" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <rect x="34" y="38" width="32" height="20" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="34" y1="43" x2="66" y2="43" stroke="currentColor" strokeWidth="1.5" />
              <line x1="34" y1="48" x2="66" y2="48" stroke="currentColor" strokeWidth="1.5" />
              <line x1="34" y1="53" x2="66" y2="53" stroke="currentColor" strokeWidth="1.5" />
              <rect x="34" y="38" width="13" height="10" fill="currentColor" />
              <text x="50" y="27" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">MADE IN USA</text>
              <text x="50" y="74" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">MADE IN USA</text>
            </svg>
          </div>

          {/* Badge 2: SECURE CHECKOUT */}
          <div className="badge-stamp-wrapper" title="Secure Checkout">
            <svg width="82" height="82" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <rect x="38" y="44" width="24" height="18" rx="2" fill="currentColor" />
              <path d="M43 44 V37 C43 33 46 30 50 30 C54 30 57 33 57 37 V44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="50" cy="52" r="2.5" fill="var(--bg2)" />
              <text x="50" y="27" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">SECURE CHECKOUT</text>
              <text x="50" y="74" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">SECURE CHECKOUT</text>
            </svg>
          </div>

          {/* Badge 3: FAST SHIPPING */}
          <div className="badge-stamp-wrapper" title="Fast Shipping">
            <svg width="82" height="82" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <text x="50" y="48" fontFamily="Space Mono" fontSize="8" fontWeight="900" textAnchor="middle" letterSpacing="0.2">FAST</text>
              <text x="50" y="56" fontFamily="Space Mono" fontSize="6.2" fontWeight="900" textAnchor="middle" letterSpacing="0.1">SHIPPING</text>
              <text x="50" y="27" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">PROCESSED WITHIN</text>
              <text x="50" y="74" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">1 BUSINESS DAY</text>
            </svg>
          </div>

          {/* Badge 4: 100% MONEY BACK */}
          <div className="badge-stamp-wrapper" title="100% Money Back Guarantee">
            <svg width="82" height="82" viewBox="0 0 100 100" fill="currentColor">
              {/* Starburst Gear Outer Border */}
              <path d="M50 8 L54 16 L63 12 L65 21 L74 19 L73 28 L82 28 L79 37 L87 39 L82 47 L89 50 L82 53 L87 61 L79 63 L82 72 L73 72 L74 81 L65 79 L63 88 L54 84 L50 92 L46 84 L37 88 L35 79 L26 81 L27 72 L18 72 L21 63 L13 61 L18 53 L11 50 L18 47 L13 39 L21 37 L18 28 L27 28 L26 19 L35 21 L37 12 L46 16 Z" fill="currentColor" />
              <circle cx="50" cy="50" r="32" fill="var(--bg2)" />
              <text x="50" y="46" fontFamily="Space Mono" fontSize="10" fontWeight="900" fill="currentColor" textAnchor="middle">100%</text>
              <text x="50" y="55" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="0.2">GUARANTEE</text>
              <text x="50" y="36" fontFamily="Space Mono" fontSize="4.2" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="0.2">MONEY BACK</text>
            </svg>
          </div>

          {/* Badge 5: LAB TESTED */}
          <div className="badge-stamp-wrapper" title="Lab Tested">
            <svg width="82" height="82" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M42 58 L46 36 L44 34 V30 H56 V34 L54 36 L58 58 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              <line x1="40" y1="58" x2="60" y2="58" stroke="currentColor" strokeWidth="3" />
              <circle cx="47" cy="46" r="1.5" />
              <circle cx="52" cy="52" r="2" />
              <text x="50" y="27" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">LAB TESTED</text>
              <text x="50" y="74" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">LAB TESTED</text>
            </svg>
          </div>

          {/* Badge 6: 97% RATING */}
          <div className="badge-stamp-wrapper" title="97% Customer Rating">
            <svg width="82" height="82" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <text x="50" y="47" fontFamily="Space Mono" fontSize="9" fontWeight="900" textAnchor="middle">97%</text>
              <text x="50" y="55" fontFamily="Space Mono" fontSize="5.5" fontWeight="900" textAnchor="middle" letterSpacing="0.2">RATING</text>
              <text x="50" y="27" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">CUSTOMER SERVICE</text>
              <text x="50" y="74" fontFamily="Space Mono" fontSize="5.2" fontWeight="900" textAnchor="middle" letterSpacing="0.6">RATING</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Bar */}
      <div className="trust-marquee">
        <div className="trust-marquee-track">
          <span className="trust-marquee-item">A52 FREE PRIORITY SHIPPING OVER 110$</span>
          <span className="trust-marquee-item">■ ALIENIZE YOUR MIND AREA52</span>
          <span className="trust-marquee-item">■ FREE PRIORITY SHIPPING OVER 110$</span>
          <span className="trust-marquee-item">■ ALIENIZE YOUR MIND AREA52</span>
          <span className="trust-marquee-item">■ A52 FREE PRIORITY SHIPPING OVER 110$</span>
          <span className="trust-marquee-item">■ ALIENIZE YOUR MIND AREA52</span>
          {/* Double track to fill viewport and wrap seamlessly */}
          <span className="trust-marquee-item">A52 FREE PRIORITY SHIPPING OVER 110$</span>
          <span className="trust-marquee-item">■ ALIENIZE YOUR MIND AREA52</span>
          <span className="trust-marquee-item">■ FREE PRIORITY SHIPPING OVER 110$</span>
          <span className="trust-marquee-item">■ ALIENIZE YOUR MIND AREA52</span>
          <span className="trust-marquee-item">■ A52 FREE PRIORITY SHIPPING OVER 110$</span>
          <span className="trust-marquee-item">■ ALIENIZE YOUR MIND AREA52</span>
        </div>
      </div>
    </section>
  );
}
