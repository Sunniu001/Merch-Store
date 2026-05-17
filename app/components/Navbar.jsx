"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const AlienLogo = () => (
  <svg
    width="44"
    height="36"
    viewBox="0 0 100 80"
    fill="currentColor"
    className="text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]"
  >
    {/* Geometric stylized outer wings frame */}
    <path
      d="M15 62 L35 72 L50 42 L65 72 L85 62 L50 12 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {/* Center Alien Head */}
    <path d="M50 22 C42 22 35 29 35 39 C35 49 42 59 50 59 C58 59 65 49 65 39 C65 29 58 22 50 22 Z" />
    {/* Slanted Eyes */}
    <ellipse cx="44" cy="39" rx="3.5" ry="5.5" fill="black" transform="rotate(-15 44 39)" />
    <ellipse cx="56" cy="39" rx="3.5" ry="5.5" fill="black" transform="rotate(15 56 39)" />
    {/* Bottom support bracket */}
    <path
      d="M38 68 L50 76 L62 68"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HamburgerIcon = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
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

// Modular list of category items for the Megamenu
const megamenuData = {
  clothing: {
    trending: {
      title: "TRENDING 🔮",
      color: "var(--sky)",
      items: [
        { name: "Third-Eye Threads", note: "new drop!" },
        { name: "Alien Best Sellers" },
        { name: "Tie-Dye Vortex Pack", note: "limited" },
        { name: "Lotus Lotus Lotus Tees" },
      ],
    },
    categories: {
      title: "BY CATEGORIES 🪐",
      color: "var(--pink)",
      items: [
        { name: "Abduction Sets" },
        { name: "Nebula Jackets" },
        { name: "Cerebral Hoodies" },
        { name: "Quantum T-Shirts" },
        { name: "Chakra Pants" },
        { name: "Lotus Shorts" },
      ],
    },
    brands: {
      title: "POPULAR FACTIONS 👽",
      color: "var(--lime)",
      items: [
        { name: "Hippie Aliens Collective" },
        { name: "Iboga Labs" },
        { name: "Datura Outpost" },
        { name: "Yogi Sector 7" },
        { name: "Quantum Tie-Dye" },
      ],
    },
    featured: [
      {
        title: "TIE-DYE SPACECRAFT SET",
        desc: "only a few left bestie! 👽",
        tag: "RESTOCKED",
        bg: "radial-gradient(circle, #a8d400 0%, #00b8cc 100%)",
        emoji: "🛸",
      },
      {
        title: "NEBULA FLANNEL HOODIE",
        desc: "essential lore wear! 🔥",
        tag: "HOT DROP",
        bg: "radial-gradient(circle, #cc2fa0 0%, #8a5ecc 100%)",
        emoji: "🌈",
      },
    ],
  },
  footwear: {
    trending: {
      title: "TRENDING STEPS 🔮",
      color: "var(--sky)",
      items: [
        { name: "Moon Jumpers", note: "sold out soon!" },
        { name: "Space Slippers" },
        { name: "Chakra Kicks", note: "glows!" },
      ],
    },
    categories: {
      title: "BY CATEGORIES 🪐",
      color: "var(--pink)",
      items: [
        { name: "Gravity Slides" },
        { name: "Astroid Platforms" },
        { name: "Solar Sandals" },
      ],
    },
    brands: {
      title: "POPULAR FACTIONS 👽",
      color: "var(--lime)",
      items: [
        { name: "Iboga Labs Speedsters" },
        { name: "Yogi Sect-7 Slides" },
        { name: "Datura Outpost Boots" },
      ],
    },
    featured: [
      {
        title: "GRAVITY SLIDES 🛸",
        desc: "walk on air fr! 🌌",
        tag: "30% OFF",
        bg: "radial-gradient(circle, #00b8cc 0%, #8a5ecc 100%)",
        emoji: "👣",
      },
      {
        title: "MOON JUMPERS 🌙",
        desc: "anti-gravity tech inside!",
        tag: "COLLECTIBLE",
        bg: "radial-gradient(circle, #ccb800 0%, #d45500 100%)",
        emoji: "👟",
      },
    ],
  },
  accessories: {
    trending: {
      title: "POPULAR 🔮",
      color: "var(--sky)",
      items: [
        { name: "Tie-Dye Bucket Hats", note: "fire!" },
        { name: "Alien Shades", note: "essential" },
        { name: "Third-Eye Patches" },
      ],
    },
    categories: {
      title: "BY CATEGORIES 🪐",
      color: "var(--pink)",
      items: [
        { name: "Sling Bags" },
        { name: "Space Socks" },
        { name: "Cosmic Pins" },
        { name: "Psychedelic Stickers" },
      ],
    },
    brands: {
      title: "POPULAR FACTIONS 👽",
      color: "var(--lime)",
      items: [
        { name: "Lotus Lotus Lotus Gear" },
        { name: "Iboga Faction Patches" },
        { name: "H.A.C.K Stickers" },
      ],
    },
    featured: [
      {
        title: "TIE-DYE BUCKET HAT 🌈",
        desc: "blocks cosmic rays! ☀️",
        tag: "POPULAR",
        bg: "radial-gradient(circle, #cc2fa0 0%, #00cc78 100%)",
        emoji: "👒",
      },
      {
        title: "ALIEN SHADES 😎",
        desc: "spot portals in style! 🌀",
        tag: "MUST-HAVE",
        bg: "radial-gradient(circle, #a8d400 0%, #d45500 100%)",
        emoji: "👓",
      },
    ],
  },
  brands: {
    trending: {
      title: "FACTION CLANS 🔮",
      color: "var(--sky)",
      items: [
        { name: "Hippie Aliens H.A.C.K", note: "core" },
        { name: "Yogi Sect-7", note: "chill" },
      ],
    },
    categories: {
      title: "LABS & OUTPOSTS 🪐",
      color: "var(--pink)",
      items: [
        { name: "Iboga Bio-Labs" },
        { name: "Datura Tactical Outpost" },
      ],
    },
    brands: {
      title: "EXPLORE LORE 👽",
      color: "var(--lime)",
      items: [
        { name: "Alliance Treaties" },
        { name: "Nebula Juice Brewing" },
      ],
    },
    featured: [
      {
        title: "IBOGA FACTION CAP 🧬",
        desc: "increase psychic defense!",
        tag: "SPECIAL EDITION",
        bg: "radial-gradient(circle, #8a5ecc 0%, #00cc78 100%)",
        emoji: "🧢",
      },
      {
        title: "DATURA LORE SCARF 🧣",
        desc: "designed for desert maps.",
        tag: "FACTION ONLY",
        bg: "radial-gradient(circle, #d45500 0%, #cc2fa0 100%)",
        emoji: "🥋",
      },
    ],
  },
};

export default function Navbar() {
  const { cart, setIsCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegamenu, setActiveMegamenu] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    ["/", "HOME"],
    ["/#products", "SHOP"],
    ["/#about", "LEARN"],
    ["/about", "ABOUT US"],
  ];

  const categoryLinks = [
    { id: "sets", label: "MATCHING SETS", hasDropdown: false },
    { id: "clothing", label: "CLOTHING", hasDropdown: true },
    { id: "footwear", label: "FOOTWEAR", hasDropdown: true },
    { id: "accessories", label: "ACCESSORIES", hasDropdown: true },
    { id: "giftcards", label: "GIFT CARDS", hasDropdown: false },
    { id: "sale", label: "SALE", hasDropdown: false },
  ];

  const linkStyle = {
    color: "var(--text)",
    textDecoration: "none",
    fontFamily: "var(--font-fun)",
    fontSize: "1.05rem",
    fontWeight: 700,
    letterSpacing: "0.04em",
    transition: "color 0.2s ease",
  };

  return (
    <>
      <style>{`
        .nav-link-item:hover {
          color: var(--lime) !important;
        }
        .nav-action-btn:hover {
          color: var(--lime) !important;
        }
        .category-tab-link:hover {
          color: var(--lime) !important;
        }
        .megamenu-item-link:hover {
          color: var(--lime) !important;
          transform: translateX(6px) !important;
        }
        .megamenu-featured-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }
        .megamenu-featured-card:hover {
          transform: translateY(-4px) rotate(-1deg) !important;
          border-color: var(--lime) !important;
          box-shadow: 0 12px 24px rgba(168,212,0,0.12) !important;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center;
            justify-content: start;
          }
          .mobile-actions {
            display: flex !important;
            align-items: center;
            justify-content: end;
          }
          .nav-inner-container {
            padding: 0.75rem 1.5rem !important;
          }
        }
      `}</style>

      {/* Global Fixed Navigation Header Wrapper */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
        onMouseLeave={() => setActiveMegamenu(null)}
      >
        {/* Neon Lime Announcement Bar */}
        <div
          style={{
            background: "var(--lime)",
            color: "#000000",
            fontFamily: "var(--font-fun)",
            fontSize: "0.85rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "0.55rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
          }}
        >
          MOTHER DAY SALE: Up To 40% (auto-applied)
        </div>

        {/* Main Navbar Row */}
        <nav
          style={{
            background: scrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            width: "100%",
            transition: "background 0.3s ease",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 3rem",
              maxWidth: "1440px",
              margin: "0 auto",
            }}
            className="nav-inner-container"
          >
            {/* Column 1: Left Links (Desktop) or Hamburger Toggle (Mobile) */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Desktop links */}
              <div
                className="desktop-links"
                style={{ display: "flex", gap: "2rem", alignItems: "center" }}
              >
                {links.map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    style={linkStyle}
                    className="nav-link-item"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Mobile toggle button */}
              <div className="mobile-toggle" style={{ display: "none" }}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text)",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                  aria-label="Toggle Navigation Menu"
                >
                  <HamburgerIcon open={menuOpen} />
                </button>
              </div>
            </div>

            {/* Column 2: Sleek Vector Logo (Perfectly Centered) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <AlienLogo />
              </Link>
            </div>

            {/* Column 3: Right Actions (Desktop & Mobile overrides) */}
            <div style={{ display: "flex", alignItems: "center", justifySelf: "end" }}>
              
              {/* Desktop actions */}
              <div
                className="desktop-links"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2.2rem",
                }}
              >
                {/* Theme Toggler Button */}
                <button
                  onClick={toggleTheme}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                    transition: "transform 0.25s ease"
                  }}
                  className="theme-toggle-nav-btn"
                  title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                >
                  {theme === "dark" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" fill="currentColor"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
                    </svg>
                  )}
                </button>

                <Link href="/login" style={linkStyle} className="nav-link-item">
                  LOG IN
                </Link>

                {/* Cart link containing the rectangular filled number block */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text)",
                    fontFamily: "var(--font-fun)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                    letterSpacing: "0.04em",
                  }}
                  className="nav-action-btn"
                >
                  CART
                  <span
                    style={{
                      background: "#ffffff",
                      color: "#000000",
                      fontFamily: "var(--font-wack)",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                      padding: "2px 6px",
                      borderRadius: "3px",
                      marginLeft: "8px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "20px",
                      border: "1px solid #000000",
                    }}
                  >
                    {cart.length}
                  </span>
                </button>

                {/* Search toggle */}
                <button
                  onClick={() => {}}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                  className="nav-action-btn"
                  aria-label="Search Catalog"
                >
                  <SearchIcon />
                </button>
              </div>

              {/* Mobile action overrides */}
              <div className="mobile-actions" style={{ display: "none" }}>
                <button
                  onClick={() => setIsCartOpen(true)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text)",
                    fontFamily: "var(--font-fun)",
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  CART
                  <span
                    style={{
                      background: "#ffffff",
                      color: "#000000",
                      fontFamily: "var(--font-wack)",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                      padding: "2px 6px",
                      borderRadius: "3px",
                      marginLeft: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "18px",
                    }}
                  >
                    {cart.length}
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* Mobile hamburger menu links */}
          {menuOpen && (
            <div
              style={{
                animation: "slideDown 0.18s ease",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(0, 0, 0, 0.98)",
                padding: "1rem 2rem 1.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {links.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    ...linkStyle,
                    textAlign: "center",
                    padding: "0.5rem 0",
                    display: "block",
                  }}
                  className="nav-link-item"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                style={{
                  ...linkStyle,
                  textAlign: "center",
                  padding: "0.5rem 0",
                  display: "block",
                  color: "var(--lime)",
                }}
                className="nav-link-item"
              >
                LOG IN
              </Link>
            </div>
          )}
        </nav>

        {/* Category Navigation Bar - Desktop only */}
        <div
          className="desktop-links"
          style={{
            background: scrolled ? "rgba(5, 5, 5, 0.94)" : "rgba(0, 0, 0, 0.5)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.2rem",
            padding: "0.55rem 1rem",
            transition: "all 0.3s ease",
          }}
        >
          {categoryLinks.map((cat) => (
            <div
              key={cat.id}
              style={{ position: "relative" }}
              onMouseEnter={() => {
                if (cat.hasDropdown) setActiveMegamenu(cat.id);
                else setActiveMegamenu(null);
              }}
            >
              <Link
                href={cat.hasDropdown ? "#" : `/#products`}
                style={{
                  color: activeMegamenu === cat.id ? "var(--lime)" : "var(--text)",
                  fontFamily: "var(--font-fun)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  transition: "color 0.2s",
                }}
                className="category-tab-link"
              >
                {cat.label}
                {cat.hasDropdown && (
                  <span style={{ fontSize: "0.55rem", opacity: 0.8, verticalAlign: "middle" }}>
                    ▼
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Cyber-Psychedelic Funky Megamenu Dropdown Container */}
        {activeMegamenu && megamenuData[activeMegamenu] && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#06060a",
              borderBottom: "3.5px solid var(--lime)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.85), 0 0 35px rgba(168,212,0,0.06)",
              padding: "2.8rem 4rem 3rem",
              zIndex: 190,
              animation: "slideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
            onMouseEnter={() => {}}
            onMouseLeave={() => setActiveMegamenu(null)}
          >
            {/* Holographic dot matrix grid inside megamenu */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                pointerEvents: "none",
              }}
            />

            {/* Megamenu Grid Content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.3fr 1.3fr 2.2fr",
                gap: "2.8rem",
                maxWidth: "1440px",
                margin: "0 auto",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Column 1: TRENDING (funky) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-wack)",
                    fontSize: "1.25rem",
                    color: megamenuData[activeMegamenu].trending.color,
                    letterSpacing: "0.06em",
                    margin: 0,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    paddingBottom: "0.6rem",
                  }}
                >
                  {megamenuData[activeMegamenu].trending.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {megamenuData[activeMegamenu].trending.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center" }}>
                      <Link
                        href="/#products"
                        style={{
                          fontFamily: "var(--font-fun)",
                          fontSize: "1.02rem",
                          color: "#a6a2c2",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          transition: "all 0.2s ease",
                        }}
                        className="megamenu-item-link"
                      >
                        {item.note && (
                          <span
                            style={{
                              fontFamily: "var(--font-hand)",
                              color: "var(--lime)",
                              fontSize: "0.85rem",
                              transform: "rotate(-4deg)",
                              marginRight: "2px",
                              fontWeight: "bold",
                            }}
                          >
                            {item.note}
                          </span>
                        )}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Tilt Wobble Black & Lime-Green CTA Button */}
                <button
                  onClick={() => {
                    setActiveMegamenu(null);
                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    background: "var(--lime)",
                    color: "#000000",
                    fontFamily: "var(--font-wack)",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    padding: "0.55rem 1rem",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginTop: "0.8rem",
                    width: "fit-content",
                    transform: "rotate(-2deg)",
                    transition: "transform 0.15s, box-shadow 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotate(1deg) scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(168, 212, 0, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotate(-2deg)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  VIEW ALL {activeMegamenu.toUpperCase()} 🛸
                </button>
              </div>

              {/* Column 2: BY CATEGORIES */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-wack)",
                    fontSize: "1.25rem",
                    color: megamenuData[activeMegamenu].categories.color,
                    letterSpacing: "0.06em",
                    margin: 0,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    paddingBottom: "0.6rem",
                  }}
                >
                  {megamenuData[activeMegamenu].categories.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {megamenuData[activeMegamenu].categories.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="/#products"
                        style={{
                          fontFamily: "var(--font-fun)",
                          fontSize: "1.02rem",
                          color: "#a6a2c2",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          transition: "all 0.2s ease",
                        }}
                        className="megamenu-item-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: POPULAR BRANDS / FACTIONS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-wack)",
                    fontSize: "1.25rem",
                    color: megamenuData[activeMegamenu].brands.color,
                    letterSpacing: "0.06em",
                    margin: 0,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    paddingBottom: "0.6rem",
                  }}
                >
                  {megamenuData[activeMegamenu].brands.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {megamenuData[activeMegamenu].brands.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="/#products"
                        style={{
                          fontFamily: "var(--font-fun)",
                          fontSize: "1.02rem",
                          color: "#a6a2c2",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          transition: "all 0.2s ease",
                        }}
                        className="megamenu-item-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: FEATURED DROPS (Ultra Premium cards) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-wack)",
                    fontSize: "1.25rem",
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    margin: 0,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    paddingBottom: "0.6rem",
                  }}
                >
                  FEATURED DROPS 🔥
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                  {megamenuData[activeMegamenu].featured.map((card, i) => (
                    <div
                      key={i}
                      className="megamenu-featured-card"
                      onClick={() => {
                        setActiveMegamenu(null);
                        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {/* Generative Visual Gradient Backdrop */}
                      <div
                        style={{
                          height: "120px",
                          background: card.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        {/* Bouncing Emoji visual */}
                        <span
                          style={{
                            fontSize: "3.5rem",
                            display: "inline-block",
                            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                          }}
                        >
                          {card.emoji}
                        </span>

                        {card.tag && (
                          <span
                            style={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              background: "rgba(0, 0, 0, 0.75)",
                              color: "var(--lime)",
                              fontSize: "0.65rem",
                              fontWeight: "bold",
                              fontFamily: "var(--font-wack)",
                              padding: "2px 8px",
                              borderRadius: "999px",
                              border: "1px solid rgba(168, 212, 0, 0.3)",
                            }}
                          >
                            {card.tag}
                          </span>
                        )}
                      </div>
                      
                      {/* Promo Text & Handwritten Caveat Footnote */}
                      <div style={{ padding: "0.75rem 0.95rem 0.85rem" }}>
                        <h5
                          style={{
                            fontFamily: "var(--font-wack)",
                            fontSize: "1.05rem",
                            color: "var(--text)",
                            margin: "0 0 0.15rem 0",
                            lineHeight: 1.1,
                          }}
                        >
                          {card.title}
                        </h5>
                        <p
                          style={{
                            fontFamily: "var(--font-hand)",
                            fontSize: "0.95rem",
                            color: "var(--lime)",
                            margin: 0,
                            fontWeight: "bold",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Floating Theme HUD Toggle Widget */}
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: theme === "dark" ? "#ffffff" : "#000000",
          color: theme === "dark" ? "#000000" : "#ffffff",
          border: "none",
          boxShadow: theme === "dark" ? "0 8px 30px rgba(255,255,255,0.25)" : "0 8px 30px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)"
        }}
        className="floating-theme-toggle"
        title={`Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`}
      >
        <style>{`
          .floating-theme-toggle:hover {
            transform: scale(1.1) translateY(-3px) rotate(15deg);
          }
          .floating-theme-toggle:active {
            transform: scale(0.95);
          }
        `}</style>
        {theme === "dark" ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </>
  );
}
