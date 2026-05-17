"use client";

import { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/Hero1.jpg",
    "/Hero2.jpg",
    "/Hero3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const sky = document.getElementById("parallax-sky");
    const giantText = document.getElementById("parallax-giant-text");
    const alienCol = document.getElementById("parallax-alien-col");
    const wave = document.getElementById("parallax-wave");

    let active = true;

    const handleScroll = () => {
      if (!active) return;
      const scrolled = window.scrollY;

      // On screens larger than tablet, apply GPU-accelerated parallax offsets
      if (window.innerWidth > 768) {
        window.requestAnimationFrame(() => {
          if (sky) sky.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
          if (giantText) giantText.style.transform = `translate3d(0, ${scrolled * 0.45}px, 0)`;
          if (alienCol) alienCol.style.transform = `translate3d(0, ${scrolled * 0.28}px, 0)`;
          if (wave) wave.style.transform = `translate3d(0, ${scrolled * -0.12}px, 0)`;
        });
      } else {
        // Reset transforms on mobile screens to ensure perfect layout integrity
        window.requestAnimationFrame(() => {
          if (sky) sky.style.transform = "none";
          if (giantText) giantText.style.transform = "none";
          if (alienCol) alienCol.style.transform = "none";
          if (wave) wave.style.transform = "none";
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial alignment check
    handleScroll();

    return () => {
      active = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        background: "black",
        padding: "220px 2rem 60px", // increased top space, snug bottom space for wave
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
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: end;
          max-width: 1440px;
          width: 100%;
          position: relative;
          z-index: 20;
        }

        .hero-alien-side {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-slider-card {
          animation: floatAlien 3.8s ease-in-out infinite;
          width: 100%;
          max-width: 520px;
          aspect-ratio: 16 / 10;
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

        /* Tablet (641px – 1023px): side-by-side but smaller slider */
        @media (max-width: 1023px) {
          .hero-grid { gap: 2rem; }
          .hero-slider-card { max-width: 440px; }
        }

        /* Mobile (≤640px): stack vertically, slider goes below text */
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
            text-align: center;
          }
          .hero-slider-card { max-width: 460px; margin: 0 auto; }
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

      {/* Cinematic Full-Screen Background Auto-Slider (Speed: 0.15) */}
      <div
        id="parallax-sky"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        {heroImages.map((src, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1.025)" : "scale(0.975)",
                transition: "opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1), transform 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: isActive ? 3 : 1,
              }}
            >
              <img
                src={src}
                alt={`Hippie Alien Background Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}

        {/* Dynamic radial gradient vignette overlay to guarantee high-fashion text readability on the left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 25% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(5,5,5,0.95) 100%)",
            zIndex: 4,
          }}
        />
      </div>



      {/* Layer 3: Main Layout & Interactions (Standard Scroll Speed) */}
      <div className="hero-grid">
        {/* Text column */}
        <div style={{ animation: "fadeUp 0.5s ease both", position: "relative", zIndex: 25 }}>
          {/* Main Headline Group */}
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              padding: 0,
            }}
          >
            {/* WEAR THE */}
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: "0.85",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              WEAR THE
            </span>

            {/* FREQUENCY */}
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3.6rem, 7.8vw, 6.2rem)",
                color: "#ffffff",
                lineHeight: "0.85",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              FREQUENCY
            </span>
          </h1>

          {/* Scalable Organic SVG Green Paint Brush Stroke */}
          <div style={{ width: "100%", maxWidth: "340px", margin: "0.5rem 0" }}>
            <svg
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "8px", color: "var(--lime)", display: "block" }}
            >
              <path
                d="M 0,4 Q 15,1 35,5 Q 55,7 75,3 Q 90,2 100,4 Q 85,6 60,4 Q 30,5 0,4"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* POSITIVE VIBES ONLY with Peace Sign */}
          <div
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(1.3rem, 2.8vw, 2.1rem)",
              color: "var(--pink)",
              fontStyle: "italic",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              margin: "0 0 1.2rem",
              transform: "rotate(-1.5deg)",
              width: "fit-content",
              textShadow: "0 0 10px rgba(204, 47, 160, 0.45)",
              letterSpacing: "0.02em",
            }}
          >
            POSITIVE VIBES ONLY
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="12" y1="12" x2="4.9" y2="19.1" />
              <line x1="12" y1="12" x2="19.1" y2="19.1" />
            </svg>
          </div>

          {/* Monospace details text */}
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.85rem, 1.7vw, 1.05rem)",
              lineHeight: "1.5",
              letterSpacing: "0.15em",
              margin: "0 0 1.8rem 0",
              fontWeight: 700,
            }}
          >
            <div style={{ color: "#ffffff" }}>APPAREL. ART. ATTITUDE.</div>
            <div style={{ color: "var(--lime)" }}>FOR THE HIGHER VIBRATIONS.</div>
          </div>

          {/* Action buttons matching the screenshot exactly */}
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <button
              className="hero-btn"
              onClick={() => scrollTo("products")}
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "var(--lime)",
                border: "2px solid var(--lime)",
                borderRadius: "12px",
                padding: "0.7rem 1.8rem",
                fontFamily: "var(--font-fun)",
                fontSize: "1.1rem",
                letterSpacing: "0.06em",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                boxShadow: "0 0 15px rgba(168,212,0,0.2)",
                transition: "all 0.2s ease-in-out",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--lime)";
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(168,212,0,0.6)";
                e.currentTarget.style.transform = "scale(1.03) translate(-2px, -3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,0,0,0.6)";
                e.currentTarget.style.color = "var(--lime)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(168,212,0,0.2)";
                e.currentTarget.style.transform = "none";
              }}
            >
              SHOP NEW DROP
              <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>→</span>
            </button>
          </div>
        </div>

        {/* Empty spacer column to perfectly display the product graphics on the right side of the background images */}
        <div style={{ pointerEvents: "none" }} />
      </div>

      {/* Glowing Navigation Capsule Dots floating elegantly at the absolute bottom of the viewport */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "12px",
          zIndex: 40,
          background: "rgba(0,0,0,0.6)",
          padding: "8px 18px",
          borderRadius: "999px",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 4px 25px rgba(0,0,0,0.6)",
        }}
      >
        {heroImages.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: isActive ? "26px" : "12px",
                height: "12px",
                borderRadius: "999px",
                background: isActive ? "var(--lime)" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isActive ? "0 0 12px var(--lime)" : "none",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
