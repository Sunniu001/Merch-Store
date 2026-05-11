"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CartIcon = ({ count }) => (
  <div style={{ position: "relative", display: "inline-flex" }}>
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
    {count > 0 && (
      <span
        style={{
          position: "absolute",
          top: "-6px",
          right: "-8px",
          background: "var(--pink)",
          color: "white",
          fontSize: "0.6rem",
          fontWeight: 700,
          minWidth: "16px",
          height: "16px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 3px",
          fontFamily: "var(--font-wack)",
        }}
      >
        {count}
      </span>
    )}
  </div>
);

const HamburgerIcon = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="7" x2="21" y2="7" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </>
    )}
  </svg>
);

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    ["/home", "Home"],
    ["/about", "About"],
    ["/faq", "Help"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = {
    textTransform: "capitalize",
    color: "var(--text)",
    textDecoration: "none",
    fontFamily: "var(--font-fun)",
    fontSize: "1rem",
    padding: "0.3rem 0.9rem",
    border: "1px solid var(--border)",
    borderRadius: "999px",
    background: "transparent",
    transition: "all 0.15s",
    display: "block",
    whiteSpace: "nowrap",
  };

  const iconBtnStyle = {
    background: "transparent",
    border: "1px solid var(--border)",
    borderRadius: "999px",
    padding: "0.4rem 0.7rem",
    color: "var(--text)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.15s",
  };

  return (
    <>
      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link:hover {
          border-color: rgba(168,212,0,0.5) !important;
          color: var(--lime) !important;
          background: rgba(168,212,0,0.06) !important;
          transform: rotate(-2deg) scale(1.05) !important;
        }
        .cart-btn:hover { transform: translate(-2px,-2px) !important; }
        .cart-btn:active { transform: translate(1px,1px) !important; }
        .login-btn:hover {
          background: rgba(168,212,0,0.1) !important;
          border-color: rgba(168,212,0,0.5) !important;
          color: var(--lime) !important;
        }
        .hamburger-btn:hover {
          border-color: rgba(168,212,0,0.5) !important;
          color: var(--lime) !important;
        }
        /* Mobile menu link overrides */
        .mobile-nav-link:hover {
          border-color: rgba(168,212,0,0.5) !important;
          color: var(--lime) !important;
          background: rgba(168,212,0,0.06) !important;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: scrolled ? "rgba(0,0,0,0.98)" : "rgba(0,0,0,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1.5px solid rgba(168,212,0,0.4)",
          transition: "background 0.2s",
        }}
      >
        {/* Main bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.65rem 2rem",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-wack)",
              fontSize: "1.6rem",
              color: "var(--lime)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              letterSpacing: "-0.01em",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "inline-block",
                animation: "wobble 1.8s ease-in-out infinite",
              }}
            >
              👽
            </span>
            H.A.C.K
          </Link>

          {/* Desktop Links */}
          <ul
            style={{
              display: "flex",
              gap: "0.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              // Hidden on mobile via inline media — handled with a wrapper trick below
            }}
            className="desktop-links"
          >
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="nav-link" style={linkStyle}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexShrink: 0,
            }}
          >

            {/* Cart icon button */}
            <button
              className="cart-btn"
              style={iconBtnStyle}
              onClick={() => setCartCount((c) => c + 1)}
              aria-label={`Cart, ${cartCount} items`}
            >
              <CartIcon count={cartCount} />
            </button>

            {/* Login — desktop only */}
            <a
              href="/login"
              className="login-btn"
              style={{
                ...linkStyle,
                fontFamily: "var(--font-wack)",
                fontSize: "0.9rem",
                padding: "0.35rem 1rem",
              }}
            >
              Login
            </a>
            {/* Hamburger — only visible on mobile */}
            <button
              className="hamburger-btn"
              style={{
                ...iconBtnStyle,
                display: "none", // shown via CSS below
              }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            style={{
              animation: "slideDown 0.18s ease",
              borderTop: "1px solid rgba(168,212,0,0.2)",
              padding: "1rem 2rem 1.2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
                style={{
                  ...linkStyle,
                  textAlign: "center",
                  padding: "0.55rem 1rem",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="/login"
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
              style={{
                ...linkStyle,
                textAlign: "center",
                padding: "0.55rem 1rem",
                marginTop: "0.25rem",
                borderColor: "rgba(168,212,0,0.35)",
                color: "var(--lime)",
                fontFamily: "var(--font-wack)",
              }}
            >
              Login
            </a>
          </div>
        )}
      </nav>

      {/* Responsive CSS injected as a style tag */}
      <style>{`
        /* Desktop: show nav links + login, hide hamburger */
        @media (min-width: 768px) {
          .desktop-links { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .login-btn { display: block !important; }
        }
        /* Mobile/mid: hide desktop nav links + login, show hamburger */
        @media (max-width: 767px) {
          .desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .login-btn { display: none !important; }
          nav > div { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
      `}</style>
    </>
  );
}
