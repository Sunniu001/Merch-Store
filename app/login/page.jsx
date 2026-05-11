"use client";
import { useState } from "react";
import Link from "next/link";

const floatingEmojis = [
  {
    emoji: "👽",
    top: "8%",
    left: "6%",
    delay: "0s",
    duration: "4s",
    size: "2rem",
  },
  {
    emoji: "✨",
    top: "15%",
    right: "8%",
    delay: "0.6s",
    duration: "3.5s",
    size: "1.4rem",
  },
  {
    emoji: "🛸",
    top: "70%",
    left: "4%",
    delay: "1s",
    duration: "5s",
    size: "1.8rem",
  },
  {
    emoji: "💫",
    top: "80%",
    right: "6%",
    delay: "0.3s",
    duration: "4.5s",
    size: "1.5rem",
  },
  {
    emoji: "⭐",
    top: "45%",
    left: "2%",
    delay: "1.5s",
    duration: "3.8s",
    size: "1.2rem",
  },
  {
    emoji: "🌿",
    top: "30%",
    right: "3%",
    delay: "0.9s",
    duration: "4.2s",
    size: "1.6rem",
  },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setLoading(true);
    // Replace with your auth logic
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background:
      focusedField === field
        ? "rgba(168,212,0,0.04)"
        : "rgba(255,255,255,0.02)",
    border: `1.5px solid ${focusedField === field ? "rgba(168,212,0,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: "14px",
    padding: "0.85rem 1.1rem",
    color: "var(--text, #f0f0f0)",
    fontFamily: "var(--font-fun, monospace)",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    boxSizing: "border-box",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes floatDrift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(6deg); }
          66%       { transform: translateY(8px) rotate(-4deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
          50%       { border-radius: 40% 60% 30% 70% / 60% 40% 50% 40%; }
        }

        .login-card {
          animation: fadeUp 0.5s ease both;
        }
        .login-card.shake {
          animation: shake 0.45s ease both;
        }

        .submit-btn {
          width: 100%;
          background: var(--lime, #a8d400);
          color: #000;
          border: none;
          border-radius: 999px;
          padding: 0.9rem 2rem;
          font-family: var(--font-wack, sans-serif);
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          letter-spacing: 0.01em;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translate(-2px, -3px);
          box-shadow: 4px 4px 0 rgba(168,212,0,0.3);
        }
        .submit-btn:active:not(:disabled) {
          transform: translate(1px, 1px);
          box-shadow: none;
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .eye-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.3);
          padding: 0.2rem;
          transition: color 0.15s;
          display: flex;
          align-items: center;
        }
        .eye-btn:hover { color: var(--lime, #a8d400); }

        .divider-text {
          font-family: var(--font-hand, cursive);
          font-size: 0.85rem;
          color: rgba(255,255,255,0.2);
          text-align: center;
          position: relative;
        }
        .divider-text::before,
        .divider-text::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 38%;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }
        .divider-text::before { left: 0; }
        .divider-text::after  { right: 0; }

        .signup-link {
          color: var(--lime, #a8d400);
          text-decoration: none;
          font-family: var(--font-wack, sans-serif);
          font-size: 0.95rem;
          transition: opacity 0.15s;
        }
        .signup-link:hover { opacity: 0.75; }

        .forgot-link {
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          font-family: var(--font-fun, monospace);
          font-size: 0.82rem;
          transition: color 0.15s;
        }
        .forgot-link:hover { color: var(--pink, #cc2fa0); }

        /* Responsive */
        @media (max-width: 480px) {
          .login-card-inner { padding: 2rem 1.4rem !important; }
          .login-logo        { font-size: 1.3rem !important; }
        }
      `}</style>

      {/* Ambient blobs */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(138,94,204,0.08) 0%, transparent 70%)",
          top: "-15%",
          left: "-15%",
          pointerEvents: "none",
          animation: "morph 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(168,212,0,0.06) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-10%",
          pointerEvents: "none",
          animation: "morph 13s 2s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(204,47,160,0.05) 0%, transparent 70%)",
          top: "40%",
          right: "5%",
          pointerEvents: "none",
          animation: "morph 8s 1s ease-in-out infinite",
        }}
      />

      {/* Floating emojis */}
      {floatingEmojis.map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            right: f.right,
            fontSize: f.size,
            pointerEvents: "none",
            animation: `floatDrift ${f.duration} ${f.delay} ease-in-out infinite`,
            opacity: 0.35,
            zIndex: 0,
          }}
        >
          {f.emoji}
        </div>
      ))}

      {/* Card */}
      <div
        className={`login-card ${shake ? "shake" : ""}`}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "420px",
        }}
      >
        {/* Glow ring behind card */}
        <div
          style={{
            position: "absolute",
            inset: "-1px",
            borderRadius: "28px",
            background:
              "linear-gradient(135deg, rgba(168,212,0,0.15), rgba(138,94,204,0.1), rgba(204,47,160,0.1))",
            zIndex: -1,
            filter: "blur(1px)",
          }}
        />

        <div
          className="login-card-inner"
          style={{
            background: "rgba(10,10,10,0.95)",
            border: "1.5px solid rgba(255,255,255,0.06)",
            borderRadius: "26px",
            padding: "2.5rem 2rem",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              className="login-logo"
              style={{
                fontFamily: "var(--font-wack, sans-serif)",
                fontSize: "1.5rem",
                color: "var(--lime, #a8d400)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                marginBottom: "1.8rem",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  animation: "floatDrift 1.8s ease-in-out infinite",
                }}
              >
                👽
              </span>
              H.A.C.K
            </div>
          </Link>

          {/* Heading */}
          <div style={{ marginBottom: "1.8rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(168,212,0,0.07)",
                color: "var(--lime, #a8d400)",
                border: "1px solid rgba(168,212,0,0.25)",
                borderRadius: "999px",
                fontFamily: "var(--font-hand, cursive)",
                fontSize: "0.9rem",
                padding: "0.15rem 0.9rem",
                marginBottom: "0.8rem",
                transform: "rotate(-1.5deg)",
                display: "block",
                width: "fit-content",
              }}
            >
              ✌️ welcome back, earthling
            </div>
            <h1
              style={{
                fontFamily: "var(--font-wack, sans-serif)",
                fontSize: "clamp(1.7rem, 5vw, 2.2rem)",
                color: "var(--text, #f0f0f0)",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              beam me in
              <br />
              <span style={{ color: "var(--purple, #8a5ecc)" }}>
                to the cosmos
              </span>{" "}
              🛸
            </h1>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Email */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <label
                style={{
                  fontFamily: "var(--font-hand, cursive)",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.4)",
                  paddingLeft: "0.2rem",
                }}
              >
                your galactic email 📡
              </label>
              <input
                type="email"
                placeholder="zorp@cosmos.space"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                style={inputStyle("email")}
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: "0.2rem",
                }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-hand, cursive)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  secret cosmic code 🔐
                </label>
                <a href="/forgot-password" className="forgot-link">
                  forgot it? 👀
                </a>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle("password"), paddingRight: "3rem" }}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPass((p) => !p)}
                  style={{
                    position: "absolute",
                    right: "0.9rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
              style={{ marginTop: "0.4rem" }}
            >
              {loading ? (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      animation: "spin 0.8s linear infinite",
                    }}
                  >
                    🛸
                  </span>
                  warping in…
                </>
              ) : (
                <>enter the collective 👾</>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider-text" style={{ margin: "1.4rem 0" }}>
            or
          </div>

          {/* Sign up CTA */}
          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-fun, monospace)",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}
          >
            new to the cosmos?{" "}
            <Link href="/signup" className="signup-link">
              join the collective 🌌
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
