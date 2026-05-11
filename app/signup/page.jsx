"use client";
import { useState } from "react";
import Link from "next/link";

const floatingEmojis = [
  {
    emoji: "🌌",
    top: "6%",
    left: "5%",
    delay: "0s",
    duration: "4.2s",
    size: "2rem",
  },
  {
    emoji: "✨",
    top: "12%",
    right: "7%",
    delay: "0.5s",
    duration: "3.6s",
    size: "1.3rem",
  },
  {
    emoji: "👽",
    top: "75%",
    left: "3%",
    delay: "1.1s",
    duration: "5s",
    size: "1.8rem",
  },
  {
    emoji: "💫",
    top: "82%",
    right: "5%",
    delay: "0.3s",
    duration: "4.8s",
    size: "1.5rem",
  },
  {
    emoji: "🌿",
    top: "42%",
    left: "1%",
    delay: "1.6s",
    duration: "3.9s",
    size: "1.4rem",
  },
  {
    emoji: "⭐",
    top: "25%",
    right: "2%",
    delay: "0.8s",
    duration: "4.4s",
    size: "1.2rem",
  },
  {
    emoji: "🛸",
    top: "58%",
    right: "4%",
    delay: "1.3s",
    duration: "5.2s",
    size: "1.6rem",
  },
];

const steps = ["identity", "credentials", "vibe"];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [vibe, setVibe] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [done, setDone] = useState(false);

  const vibes = [
    { label: "cosmic surfer 🏄", value: "surfer" },
    { label: "galaxy brain 🧠", value: "galaxy" },
    { label: "peace dealer ✌️", value: "peace" },
    { label: "drip lord 👑", value: "drip" },
  ];

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const nextStep = () => {
    if (step === 0 && !username.trim()) return triggerShake();
    if (step === 1) {
      if (!email.trim() || !password || !confirm) return triggerShake();
      if (password !== confirm) return triggerShake();
    }
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!vibe) return triggerShake();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setDone(true);
  };

  const passwordMatch = confirm && password === confirm;
  const passwordMismatch = confirm && password !== confirm;

  const inputStyle = (field) => ({
    width: "100%",
    background:
      focused === field ? "rgba(168,212,0,0.04)" : "rgba(255,255,255,0.02)",
    border: `1.5px solid ${focused === field ? "rgba(168,212,0,0.5)" : "rgba(255,255,255,0.08)"}`,
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
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
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
          50%       { border-radius: 40% 60% 30% 70% / 60% 40% 50% 40%; }
        }
        @keyframes popIn {
          0%   { transform: scale(0.85); opacity: 0; }
          60%  { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes successPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168,212,0,0.4); }
          50%       { box-shadow: 0 0 0 16px rgba(168,212,0,0); }
        }

        .signup-card { animation: fadeUp 0.5s ease both; }
        .signup-card.shake { animation: shake 0.45s ease both; }

        .step-content { animation: fadeIn 0.3s ease both; }

        .next-btn, .submit-btn {
          width: 100%;
          background: var(--lime, #a8d400);
          color: #000;
          border: none;
          border-radius: 999px;
          padding: 0.9rem 2rem;
          font-family: var(--font-wack, sans-serif);
          font-size: 1.05rem;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.4rem;
        }
        .next-btn:hover, .submit-btn:hover:not(:disabled) {
          transform: translate(-2px, -3px);
          box-shadow: 4px 4px 0 rgba(168,212,0,0.3);
        }
        .next-btn:active, .submit-btn:active:not(:disabled) {
          transform: translate(1px, 1px);
          box-shadow: none;
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .back-btn {
          background: none;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 0.5rem 1.2rem;
          color: rgba(255,255,255,0.3);
          font-family: var(--font-fun, monospace);
          font-size: 0.85rem;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .back-btn:hover {
          color: rgba(255,255,255,0.6);
          border-color: rgba(255,255,255,0.2);
        }

        .vibe-btn {
          flex: 1 1 calc(50% - 0.4rem);
          background: rgba(255,255,255,0.02);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 0.8rem 0.6rem;
          color: var(--text, #f0f0f0);
          font-family: var(--font-hand, cursive);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.18s;
          text-align: center;
        }
        .vibe-btn:hover {
          border-color: rgba(168,212,0,0.4);
          background: rgba(168,212,0,0.05);
        }
        .vibe-btn.selected {
          border-color: rgba(168,212,0,0.6);
          background: rgba(168,212,0,0.08);
          color: var(--lime, #a8d400);
          transform: scale(1.03) rotate(-1deg);
        }

        .eye-btn {
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.3); padding: 0.2rem;
          transition: color 0.15s; display: flex; align-items: center;
        }
        .eye-btn:hover { color: var(--lime, #a8d400); }

        .progress-dot {
          width: 8px; height: 8px;
          border-radius: 999px;
          transition: all 0.3s;
        }

        .login-link {
          color: var(--lime, #a8d400);
          text-decoration: none;
          font-family: var(--font-wack, sans-serif);
          font-size: 0.95rem;
          transition: opacity 0.15s;
        }
        .login-link:hover { opacity: 0.75; }

        .success-card {
          animation: popIn 0.5s ease both;
          text-align: center;
        }
        .success-alien {
          font-size: 4rem;
          display: block;
          animation: floatDrift 3s ease-in-out infinite;
          margin-bottom: 1rem;
        }

        @media (max-width: 480px) {
          .signup-card-inner { padding: 2rem 1.4rem !important; }
          .signup-logo        { font-size: 1.3rem !important; }
          .vibe-btn           { flex: 1 1 100%; }
        }
      `}</style>

      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(168,212,0,0.07) 0%, transparent 70%)",
          top: "-15%",
          left: "-15%",
          pointerEvents: "none",
          animation: "morph 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(138,94,204,0.07) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-10%",
          pointerEvents: "none",
          animation: "morph 13s 2s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
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
            opacity: 0.3,
            zIndex: 0,
          }}
        >
          {f.emoji}
        </div>
      ))}

      {/* Card */}
      <div
        className={`signup-card ${shake ? "shake" : ""}`}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "440px",
        }}
      >
        {/* Glow ring */}
        <div
          style={{
            position: "absolute",
            inset: "-1px",
            borderRadius: "28px",
            background:
              "linear-gradient(135deg, rgba(168,212,0,0.12), rgba(204,47,160,0.1), rgba(138,94,204,0.1))",
            zIndex: -1,
            filter: "blur(1px)",
          }}
        />

        <div
          className="signup-card-inner"
          style={{
            background: "rgba(10,10,10,0.95)",
            border: "1.5px solid rgba(255,255,255,0.06)",
            borderRadius: "26px",
            padding: "2.5rem 2rem",
            backdropFilter: "blur(20px)",
          }}
        >
          {done ? (
            /* ── Success state ── */
            <div className="success-card">
              <span className="success-alien">👽</span>
              <h2
                style={{
                  fontFamily: "var(--font-wack, sans-serif)",
                  fontSize: "clamp(1.6rem, 5vw, 2rem)",
                  color: "var(--lime, #a8d400)",
                  marginBottom: "0.6rem",
                }}
              >
                you're in the collective!
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-hand, cursive)",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "2rem",
                  lineHeight: 1.6,
                }}
              >
                welcome to the cosmos, {username} ✌️
                <br />
                your galactic journey begins now 🌌
              </p>
              <Link
                href="/"
                style={{
                  display: "inline-block",
                  background: "var(--lime, #a8d400)",
                  color: "#000",
                  borderRadius: "999px",
                  padding: "0.8rem 2rem",
                  fontFamily: "var(--font-wack, sans-serif)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "transform 0.15s",
                }}
              >
                explore the drip 🛍️
              </Link>
            </div>
          ) : (
            <>
              {/* Logo */}
              <Link href="/" style={{ textDecoration: "none" }}>
                <div
                  className="signup-logo"
                  style={{
                    fontFamily: "var(--font-wack, sans-serif)",
                    fontSize: "1.5rem",
                    color: "var(--lime, #a8d400)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginBottom: "1.6rem",
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

              {/* Progress dots */}
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  marginBottom: "1.6rem",
                  alignItems: "center",
                }}
              >
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="progress-dot"
                    style={{
                      background:
                        i <= step
                          ? "var(--lime, #a8d400)"
                          : "rgba(255,255,255,0.1)",
                      width: i === step ? "24px" : "8px",
                      borderRadius: "999px",
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: "var(--font-hand, cursive)",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.25)",
                    marginLeft: "0.4rem",
                  }}
                >
                  step {step + 1} of {steps.length}
                </span>
              </div>

              {/* ── Step 0: Identity ── */}
              {step === 0 && (
                <div className="step-content" key="step0">
                  <div style={{ marginBottom: "1.6rem" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(204,47,160,0.07)",
                        color: "var(--pink, #cc2fa0)",
                        border: "1px solid rgba(204,47,160,0.25)",
                        borderRadius: "999px",
                        fontFamily: "var(--font-hand, cursive)",
                        fontSize: "0.88rem",
                        padding: "0.15rem 0.9rem",
                        marginBottom: "0.7rem",
                        transform: "rotate(-1deg)",
                      }}
                    >
                      👋 first things first
                    </div>
                    <h1
                      style={{
                        fontFamily: "var(--font-wack, sans-serif)",
                        fontSize: "clamp(1.6rem, 5vw, 2rem)",
                        color: "var(--text, #f0f0f0)",
                        lineHeight: 1.1,
                        margin: 0,
                      }}
                    >
                      what do the
                      <br />
                      <span style={{ color: "var(--purple, #8a5ecc)" }}>
                        aliens call you?
                      </span>{" "}
                      👽
                    </h1>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                      marginBottom: "1.2rem",
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
                      your cosmic handle ✨
                    </label>
                    <input
                      type="text"
                      placeholder="zorp_the_chill"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setFocused("username")}
                      onBlur={() => setFocused(null)}
                      onKeyDown={(e) => e.key === "Enter" && nextStep()}
                      style={inputStyle("username")}
                      autoComplete="username"
                      autoFocus
                    />
                  </div>

                  <button className="next-btn" onClick={nextStep}>
                    looking good 👾 →
                  </button>
                </div>
              )}

              {/* ── Step 1: Credentials ── */}
              {step === 1 && (
                <div className="step-content" key="step1">
                  <div style={{ marginBottom: "1.6rem" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(0,184,204,0.07)",
                        color: "var(--sky, #00b8cc)",
                        border: "1px solid rgba(0,184,204,0.25)",
                        borderRadius: "999px",
                        fontFamily: "var(--font-hand, cursive)",
                        fontSize: "0.88rem",
                        padding: "0.15rem 0.9rem",
                        marginBottom: "0.7rem",
                        transform: "rotate(1.5deg)",
                      }}
                    >
                      🔐 secure the portal
                    </div>
                    <h1
                      style={{
                        fontFamily: "var(--font-wack, sans-serif)",
                        fontSize: "clamp(1.6rem, 5vw, 2rem)",
                        color: "var(--text, #f0f0f0)",
                        lineHeight: 1.1,
                        margin: 0,
                      }}
                    >
                      lock down your
                      <br />
                      <span style={{ color: "var(--sky, #00b8cc)" }}>
                        galactic access
                      </span>{" "}
                      🛸
                    </h1>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
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
                        galactic email 📡
                      </label>
                      <input
                        type="email"
                        placeholder="zorp@cosmos.space"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("email")}
                        autoComplete="email"
                        autoFocus
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
                      <label
                        style={{
                          fontFamily: "var(--font-hand, cursive)",
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.4)",
                          paddingLeft: "0.2rem",
                        }}
                      >
                        secret cosmic code 🔑
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type={showPass ? "text" : "password"}
                          placeholder="min. 8 characters"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setFocused("password")}
                          onBlur={() => setFocused(null)}
                          style={{
                            ...inputStyle("password"),
                            paddingRight: "3rem",
                          }}
                          autoComplete="new-password"
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
                        >
                          <EyeIcon open={showPass} />
                        </button>
                      </div>
                    </div>

                    {/* Confirm */}
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
                        confirm the code 🔁
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type={showConfirm ? "text" : "password"}
                          placeholder="same as above"
                          value={confirm}
                          onChange={(e) => setConfirm(e.target.value)}
                          onFocus={() => setFocused("confirm")}
                          onBlur={() => setFocused(null)}
                          style={{
                            ...inputStyle("confirm"),
                            paddingRight: "3rem",
                            borderColor: passwordMismatch
                              ? "rgba(204,47,160,0.6)"
                              : passwordMatch
                                ? "rgba(168,212,0,0.5)"
                                : focused === "confirm"
                                  ? "rgba(168,212,0,0.5)"
                                  : "rgba(255,255,255,0.08)",
                          }}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          className="eye-btn"
                          onClick={() => setShowConfirm((p) => !p)}
                          style={{
                            position: "absolute",
                            right: "0.9rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <EyeIcon open={showConfirm} />
                        </button>
                      </div>
                      {passwordMismatch && (
                        <span
                          style={{
                            fontFamily: "var(--font-hand, cursive)",
                            fontSize: "0.78rem",
                            color: "var(--pink, #cc2fa0)",
                            paddingLeft: "0.3rem",
                          }}
                        >
                          codes don't match 👀
                        </span>
                      )}
                      {passwordMatch && (
                        <span
                          style={{
                            fontFamily: "var(--font-hand, cursive)",
                            fontSize: "0.78rem",
                            color: "var(--lime, #a8d400)",
                            paddingLeft: "0.3rem",
                          }}
                        >
                          ✓ locked and loaded
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "center",
                    }}
                  >
                    <button className="back-btn" onClick={() => setStep(0)}>
                      ← back
                    </button>
                    <button
                      className="next-btn"
                      onClick={nextStep}
                      style={{ flex: 1, marginTop: 0 }}
                    >
                      almost there 🌌 →
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step 2: Vibe ── */}
              {step === 2 && (
                <div className="step-content" key="step2">
                  <div style={{ marginBottom: "1.6rem" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(168,212,0,0.07)",
                        color: "var(--lime, #a8d400)",
                        border: "1px solid rgba(168,212,0,0.25)",
                        borderRadius: "999px",
                        fontFamily: "var(--font-hand, cursive)",
                        fontSize: "0.88rem",
                        padding: "0.15rem 0.9rem",
                        marginBottom: "0.7rem",
                        transform: "rotate(-2deg)",
                      }}
                    >
                      🌊 final step
                    </div>
                    <h1
                      style={{
                        fontFamily: "var(--font-wack, sans-serif)",
                        fontSize: "clamp(1.6rem, 5vw, 2rem)",
                        color: "var(--text, #f0f0f0)",
                        lineHeight: 1.1,
                        margin: 0,
                      }}
                    >
                      pick your
                      <br />
                      <span style={{ color: "var(--lime, #a8d400)" }}>
                        cosmic vibe
                      </span>{" "}
                      🌟
                    </h1>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                      marginBottom: "1.4rem",
                    }}
                  >
                    {vibes.map((v) => (
                      <button
                        key={v.value}
                        type="button"
                        className={`vibe-btn ${vibe === v.value ? "selected" : ""}`}
                        onClick={() => setVibe(v.value)}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "center",
                      }}
                    >
                      <button
                        type="button"
                        className="back-btn"
                        onClick={() => setStep(1)}
                      >
                        ← back
                      </button>
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                        style={{ flex: 1, marginTop: 0 }}
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
                            </span>{" "}
                            launching…
                          </>
                        ) : (
                          <>join the collective 👾</>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Login link */}
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "var(--font-fun, monospace)",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.28)",
                  margin: "1.4rem 0 0",
                }}
              >
                already one of us?{" "}
                <Link href="/login" className="login-link">
                  beam back in 🚀
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function EyeIcon({ open }) {
  return open ? (
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
  );
}
