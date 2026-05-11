"use client";

const stars = [
  { top: "18%", left: "8%", delay: "0s" },
  { top: "30%", left: "22%", delay: "0.5s" },
  { top: "70%", left: "15%", delay: "1s" },
  { top: "60%", right: "18%", delay: "0.3s" },
  { top: "20%", right: "10%", delay: "0.8s" },
  { top: "50%", left: "40%", delay: "1.4s" },
];

const sparkles = [
  { top: "5%", left: "10%", delay: "0s", emoji: "✨" },
  { top: "10%", right: "5%", delay: "0.6s", emoji: "⭐" },
  { bottom: "10%", left: "5%", delay: "1s", emoji: "💫" },
  { bottom: "15%", right: "10%", delay: "0.4s", emoji: "✨" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "130px 2rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        background: "black",
      }}
    >
      {/* Responsive styles */}
      <style>{`
        @keyframes floatAlien {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes morph1 {
          0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
          50% { border-radius: 40% 60% 30% 70% / 60% 40% 50% 40%; }
        }
        @keyframes morph2 {
          0%, 100% { border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
          50% { border-radius: 60% 40% 60% 40% / 50% 50% 60% 40%; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
        @keyframes sparklePop {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.3) rotate(15deg); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1440px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .hero-alien-side {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-alien-svg {
          animation: floatAlien 3s ease-in-out infinite;
          filter: drop-shadow(4px 6px 0 rgba(0,0,0,0.7));
          width: 320px;
          height: 360px;
        }

        .hero-btns {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeUp 0.5s 0.3s ease both;
        }

        .hero-btn {
          border-radius: 999px;
          padding: 0.75rem 2rem;
          font-family: var(--font-wack);
          font-size: 1.1rem;
          cursor: pointer;
          border: none;
          transition: transform 0.15s;
          white-space: nowrap;
        }
        .hero-btn:hover { transform: translate(-2px, -3px) scale(1.03); }
        .hero-btn:active { transform: translate(1px, 1px); }

        /* Tablet (641px – 1023px): side-by-side but smaller alien */
        @media (max-width: 1023px) {
          .hero-grid { gap: 2rem; }
          .hero-alien-svg { width: 240px; height: 270px; }
        }

        /* Mobile (≤640px): stack vertically, alien goes below text */
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
            text-align: center;
          }
          .hero-alien-svg { width: 200px; height: 225px; }
          .hero-btns {
            justify-content: center;
          }
          .hero-badge {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Very small phones (≤380px) */
        @media (max-width: 380px) {
          .hero-btn {
            font-size: 0.95rem;
            padding: 0.65rem 1.4rem;
          }
          .hero-alien-svg { width: 170px; height: 192px; }
        }
      `}</style>

      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, rgba(138,94,204,0.1) 0%, transparent 70%)",
          top: "0%",
          left: "-12%",
          pointerEvents: "none",
          animation: "morph1 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "440px",
          height: "440px",
          background:
            "radial-gradient(circle, rgba(0,184,204,0.08) 0%, transparent 70%)",
          bottom: "0%",
          right: "-10%",
          pointerEvents: "none",
          animation: "morph2 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(212,85,0,0.07) 0%, transparent 70%)",
          top: "30%",
          right: "8%",
          pointerEvents: "none",
          animation: "morph1 12s 2s ease-in-out infinite",
        }}
      />

      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            pointerEvents: "none",
            zIndex: 1,
            ...s,
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
              color: "var(--yellow)",
              animation: `twinkle 2s ${s.delay} ease-in-out infinite`,
            }}
          >
            ★
          </span>
        </div>
      ))}

      {/* Inner grid */}
      <div className="hero-grid">
        {/* Text side */}
        <div style={{ animation: "fadeUp 0.5s ease both" }}>
          <div
            className="hero-badge"
            style={{
              display: "inline-block",
              background: "rgba(212,85,0,0.1)",
              color: "var(--orange)",
              border: "1px solid rgba(212,85,0,0.4)",
              borderRadius: "999px",
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
              padding: "0.2rem 1rem",
              marginBottom: "1rem",
              transform: "rotate(-3deg)",
            }}
          >
            ✌️ extraterrestrial drip
          </div>

          <h1
            style={{
              fontFamily: "var(--font-wack)",
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              animation: "fadeUp 0.5s 0.1s ease both",
              margin: 0,
            }}
          >
            HIPPIE
            <br />
            <span style={{ color: "var(--purple)", display: "block" }}>
              ALIENS
            </span>
            <span
              style={{
                color: "var(--lime)",
                background: "rgba(168,212,0,0.08)",
                border: "1px solid rgba(168,212,0,0.3)",
                display: "inline-block",
                padding: "0 0.3em",
                borderRadius: "8px",
                transform: "rotate(1deg)",
              }}
            >
              COLLECTIVE
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "var(--muted)",
              margin: "1.2rem 0 2rem",
              animation: "fadeUp 0.5s 0.2s ease both",
            }}
          >
            cosmic threads for the chronically unserious 🌌
          </p>

          <div className="hero-btns">
            <button
              className="hero-btn"
              onClick={() => scrollTo("products")}
              style={{ background: "#a8d400", color: "#000" }}
            >
              shop the drip 🛍️
            </button>
            <button
              className="hero-btn"
              onClick={() => scrollTo("about")}
              style={{ background: "#cc2fa0", color: "#fff" }}
            >
              our lore 👁️
            </button>
          </div>
        </div>

        {/* Alien side */}
        <div
          className="hero-alien-side"
          style={{ animation: "fadeUp 0.5s 0.2s ease both" }}
        >
          {sparkles.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                fontSize: "1.5rem",
                animation: `sparklePop 2s ${s.delay} ease-in-out infinite`,
                ...s,
              }}
            >
              {s.emoji}
            </div>
          ))}

          <svg
            className="hero-alien-svg"
            viewBox="0 0 320 360"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="160"
              cy="240"
              rx="75"
              ry="100"
              fill="#a8d400"
              stroke="#000"
              strokeWidth="3"
            />
            <ellipse
              cx="160"
              cy="255"
              rx="40"
              ry="50"
              fill="#6a3eb5"
              opacity="0.2"
            />
            <text
              x="160"
              y="248"
              textAnchor="middle"
              fontSize="18"
              fill="#000"
              fontFamily="'Fredoka One',sans-serif"
            >
              PEACE
            </text>
            <text
              x="160"
              y="268"
              textAnchor="middle"
              fontSize="12"
              fill="#000"
              fontFamily="'Fredoka One',sans-serif"
            >
              ✌️
            </text>
            <ellipse
              cx="160"
              cy="140"
              rx="100"
              ry="85"
              fill="#a8d400"
              stroke="#000"
              strokeWidth="3"
            />
            <line
              x1="105"
              y1="65"
              x2="80"
              y2="25"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="79"
              cy="22"
              r="9"
              fill="#cc2fa0"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="79" cy="22" r="4" fill="white" />
            <line
              x1="215"
              y1="65"
              x2="240"
              y2="25"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="241"
              cy="22"
              r="9"
              fill="#00b8cc"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="241" cy="22" r="4" fill="white" />
            <ellipse
              cx="125"
              cy="140"
              rx="28"
              ry="34"
              fill="white"
              stroke="#000"
              strokeWidth="2.5"
            />
            <ellipse cx="125" cy="142" rx="18" ry="22" fill="#8a5ecc" />
            <ellipse cx="125" cy="142" rx="10" ry="14" fill="#000" />
            <ellipse
              cx="120"
              cy="136"
              rx="4"
              ry="5"
              fill="white"
              opacity="0.9"
            />
            <ellipse
              cx="197"
              cy="138"
              rx="30"
              ry="37"
              fill="white"
              stroke="#000"
              strokeWidth="2.5"
            />
            <ellipse cx="200" cy="141" rx="20" ry="25" fill="#cc2fa0" />
            <ellipse cx="200" cy="141" rx="12" ry="16" fill="#000" />
            <ellipse
              cx="194"
              cy="134"
              rx="5"
              ry="6"
              fill="white"
              opacity="0.9"
            />
            <text
              x="119"
              y="147"
              textAnchor="middle"
              fontSize="10"
              fill="#cc2fa0"
            >
              ♥
            </text>
            <text
              x="194"
              y="145"
              textAnchor="middle"
              fontSize="12"
              fill="#00b8cc"
            >
              ♥
            </text>
            <ellipse
              cx="162"
              cy="165"
              rx="5"
              ry="3.5"
              fill="#000"
              opacity="0.3"
            />
            <path
              d="M130 182 Q162 210 194 182"
              stroke="#000"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M136 185 Q162 207 188 185 L188 195 Q162 215 136 195 Z"
              fill="white"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="155"
              y1="188"
              x2="153"
              y2="200"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="169"
              y1="188"
              x2="171"
              y2="200"
              stroke="#000"
              strokeWidth="1.5"
            />
            <ellipse
              cx="100"
              cy="170"
              rx="15"
              ry="10"
              fill="#cc2fa0"
              opacity="0.25"
            />
            <ellipse
              cx="222"
              cy="170"
              rx="15"
              ry="10"
              fill="#cc2fa0"
              opacity="0.25"
            />
            <path
              d="M88 215 Q50 195 40 165"
              stroke="#a8d400"
              strokeWidth="22"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M88 215 Q50 195 40 165"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle
              cx="40"
              cy="162"
              r="18"
              fill="#a8d400"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="40"
              y1="150"
              x2="40"
              y2="175"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="162"
              x2="27"
              y2="155"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="162"
              x2="53"
              y2="155"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M232 215 Q268 195 278 170"
              stroke="#a8d400"
              strokeWidth="22"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M232 215 Q268 195 278 170"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <rect
              x="262"
              y="130"
              width="52"
              height="36"
              rx="6"
              fill="#ccb800"
              stroke="#000"
              strokeWidth="2"
            />
            <text
              x="288"
              y="146"
              textAnchor="middle"
              fontSize="9"
              fill="#000"
              fontFamily="'Fredoka One',sans-serif"
            >
              GOOD
            </text>
            <text
              x="288"
              y="158"
              textAnchor="middle"
              fontSize="9"
              fill="#000"
              fontFamily="'Fredoka One',sans-serif"
            >
              VIBES
            </text>
            <ellipse
              cx="138"
              cy="338"
              rx="22"
              ry="18"
              fill="#a8d400"
              stroke="#000"
              strokeWidth="3"
            />
            <ellipse
              cx="182"
              cy="338"
              rx="22"
              ry="18"
              fill="#a8d400"
              stroke="#000"
              strokeWidth="3"
            />
            <ellipse
              cx="138"
              cy="346"
              rx="26"
              ry="10"
              fill="#8a5ecc"
              stroke="#000"
              strokeWidth="2"
            />
            <ellipse
              cx="182"
              cy="346"
              rx="26"
              ry="10"
              fill="#cc2fa0"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="148" y="295" fontSize="10" fill="#000" opacity="0.3">
              ★
            </text>
            <text x="165" y="305" fontSize="8" fill="#000" opacity="0.2">
              ★
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
