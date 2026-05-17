"use client";

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function SelectHouse() {
  const { addToCart } = useCart();
  const [activeHouse, setActiveHouse] = useState("DATURA");
  const [products, setProducts] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to load products for houses:", err);
      }
    }
    fetchProducts();
  }, []);

  // Complete Faction Houses definitions mapping exact details (Expanded to 4 products each)
  const houses = {
    "DATURA": {
      tagline: "FOR THE PHILOSOPHERS OF THE UNIVERSE.",
      desc: "Daturathustars are the philosophers of the universe. Seeking absolute cosmic truth and unlocking deep philosophical frameworks, they formulate high-clarity cognitive enhancers designed for elevated thought, critical logic, and peak mental focus.",
      color: "#00b4ff", // Blue
      gradient: "linear-gradient(135deg, rgba(0, 180, 255, 0.15) 0%, rgba(0, 50, 255, 0.15) 100%)",
      image: "/Datura House.webp",
      fallbackProducts: [
        { id: "datura-1", name: "NEPTUNE SLEEP GUMMIES (CBN + CBD + MELATONIN)", price: "₹1,299", image: null, emoji: "🌙" },
        { id: "datura-2", name: "PHILOSOPHER FOCUS BLEND (L-THEANINE)", price: "₹1,499", image: null, emoji: "🧠" },
        { id: "datura-3", name: "DATURA MIND MATRIX CAPSULES", price: "₹1,699", image: null, emoji: "🧬" },
        { id: "datura-4", name: "COGNITIVE DECRYPT ELIXIR", price: "₹1,599", image: null, emoji: "🧪" }
      ]
    },
    "IBOGA": {
      tagline: "FOR THE DREAMERS OF THE UNIVERSE.",
      desc: "Ibogans are the dreamers of the universe. Navigating the sub-conscious planes and astral mapping the dream state, they formulate advanced calming capsules designed for deep lucid meditation, celestial peace, and tranquil wind-down rituals.",
      color: "#a85ecc", // Purple
      gradient: "linear-gradient(135deg, rgba(168, 94, 204, 0.15) 0%, rgba(100, 30, 200, 0.15) 100%)",
      image: "/Iboga House.webp",
      fallbackProducts: [
        { id: "iboga-1", name: "FULL SPECTRUM UFO MAX GUMMIES", price: "₹1,299", image: null, emoji: "🛸" },
        { id: "iboga-2", name: "DREAMER ASTRAL ELIXIR (5-HTP)", price: "₹1,399", image: null, emoji: "🌌" },
        { id: "iboga-3", name: "IBOGAN LUCID DREAM MATRIX", price: "₹1,499", image: null, emoji: "🔮" },
        { id: "iboga-4", name: "COSMIC SLEEP INDUCTOR", price: "₹1,199", image: null, emoji: "💤" }
      ]
    },
    "PEYOTE": {
      tagline: "FOR THE OPTIMISTS OF THE UNIVERSE.",
      desc: "Peyotics are the Optimists of the universe. Radiating endless cosmic joy and positive solar vibrations, they formulate uplifting adaptogenic blends designed for pure spiritual euphoria, happiness, mental radiance, and warm social connectivity.",
      color: "#ffd700", // Yellow
      gradient: "linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(200, 150, 0, 0.15) 100%)",
      image: "/Peyote House.webp",
      fallbackProducts: [
        { id: "peyote-1", name: "MOON CALM GUMMIES (CBD + CBC)", price: "₹1,199", image: null, emoji: "🧘" },
        { id: "peyote-2", name: "OPTIMIST SOLAR RISE (ASHWAGANDHA)", price: "₹999", image: null, emoji: "☀️" },
        { id: "peyote-3", name: "PEYOTE GOLDEN HOUR GUMMIES", price: "₹1,299", image: null, emoji: "✨" },
        { id: "peyote-4", name: "VIBE ELEVATOR TINCTURE", price: "₹1,099", image: null, emoji: "🍹" }
      ]
    },
    "AYAHUASCA": {
      tagline: "FOR THE STEWARDS OF THE NATURE.",
      desc: "Ayahuascans are the Stewards of the Nature. Intertwined deeply with planetary consciousness and ancient botanical grids, they formulate organic, trace-certified plant capsules designed for absolute spiritual alignment, grounding, and ecological unity.",
      color: "#00ff87", // Green
      gradient: "linear-gradient(135deg, rgba(0, 255, 135, 0.15) 0%, rgba(0, 150, 80, 0.15) 100%)",
      image: "/Ayahuasca House.webp",
      fallbackProducts: [
        { id: "aya-1", name: "FULL SPECTRUM UFO GUMMIES", price: "₹999", image: null, emoji: "👽" },
        { id: "aya-2", name: "STEWARD NATURE SHIELD (SPIRULINA)", price: "₹1,099", image: null, emoji: "🍃" },
        { id: "aya-3", name: "AYAHUASCA FOREST GRID BREW", price: "₹1,299", image: null, emoji: "🌱" },
        { id: "aya-4", name: "ORGANIC PLANETARY ALIGNMENT", price: "₹1,499", image: null, emoji: "🌍" }
      ]
    },
    "KAVA": {
      tagline: "FOR THE ADVENTURERS OF THE UNIVERSE.",
      desc: "Kaivics are the Adventurers of the universe. Fueling physical adrenaline, deep galactic exploration, and raw cosmic survival, they formulate highly active cb-blends designed for boundary-pushing activity and absolute endurance.",
      color: "#ff3333", // Red
      gradient: "linear-gradient(135deg, rgba(255, 51, 51, 0.15) 0%, rgba(180, 20, 20, 0.15) 100%)",
      image: "/Kava House.webp",
      fallbackProducts: [
        { id: "kava-1", name: "MAGIC PLUTO MUSHROOM GUMMIES", price: "₹1,499", image: null, emoji: "🍄" },
        { id: "kava-2", name: "ADVENTURER HYPER DRIVE (CBG + GINSENG)", price: "₹1,599", image: null, emoji: "🚀" },
        { id: "kava-3", name: "KAIVIC FIRE GUMMIES (COQ10)", price: "₹1,299", image: null, emoji: "🔥" },
        { id: "kava-4", name: "GALACTIC FRONTIER ENERGY CAPSULES", price: "₹1,399", image: null, emoji: "🧭" }
      ]
    }
  };

  const currentHouse = houses[activeHouse];
  const houseKeys = Object.keys(houses);

  // Auto-slide presenter mode
  useEffect(() => {
    if (userInteracted) return;

    const interval = setInterval(() => {
      setActiveHouse((prev) => {
        const nextIndex = (houseKeys.indexOf(prev) + 1) % houseKeys.length;
        return houseKeys[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [userInteracted, houseKeys]);

  // Map backend products dynamically to houses by keyword, otherwise fall back to custom catalog
  const getHouseProducts = () => {
    if (!products || products.length === 0) {
      return currentHouse.fallbackProducts;
    }

    const filtered = products.filter(p => {
      const name = (p.name || "").toUpperCase();
      if (activeHouse === "DATURA") {
        return name.includes("SLEEP") || name.includes("NEPTUNE") || name.includes("FOCUS");
      }
      if (activeHouse === "IBOGA") {
        return name.includes("MAX") || name.includes("ASTRAL") || name.includes("DREAM");
      }
      if (activeHouse === "PEYOTE") {
        return name.includes("CALM") || name.includes("MOON") || name.includes("SOLAR");
      }
      if (activeHouse === "AYAHUASCA") {
        return (name.includes("UFO") && !name.includes("MAX")) || name.includes("NATURE") || name.includes("STEWARD");
      }
      if (activeHouse === "KAVA") {
        return name.includes("PLUTO") || name.includes("MUSHROOM") || name.includes("ADVENTURER") || name.includes("ENERGY") || name.includes("MARS");
      }
      return false;
    });

    // If active house doesn't have at least 3 matching items, blend with high-fidelity fallbacks
    if (filtered.length >= 3) {
      return filtered;
    } else {
      // deduplicate by mapping keys
      const fallbackList = currentHouse.fallbackProducts;
      const combined = [...filtered];
      fallbackList.forEach(item => {
        if (!combined.some(c => c.name === item.name)) {
          combined.push(item);
        }
      });
      return combined;
    }
  };

  const handleQuickAdd = (p, e) => {
    e.preventDefault();
    e.stopPropagation();
    setUserInteracted(true);
    
    const itemToAdd = {
      id: p.id,
      name: p.name,
      price: p.price || "₹999",
      image: p.image || null,
      emoji: p.emoji || "👽"
    };

    addToCart(itemToAdd);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleTabClick = (houseName) => {
    setUserInteracted(true);
    setActiveHouse(houseName);
  };

  return (
    <section id="select-house" style={{ background: "#000", position: "relative", zIndex: 1 }}>
      <style>{`
        .house-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          background: #000;
          overflow: hidden;
        }

        .house-visual-panel {
          height: 680px;
          position: relative;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          background-color: #000000;
          border-right: 1px solid rgba(255,255,255,0.2);
          transition: background-image 0.6s ease-in-out;
          overflow: hidden;
        }

        .house-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: flex-end;
          padding: 2.5rem;
        }

        .house-info-panel {
          height: 680px;
          padding: 3.5rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #050505;
        }

        .house-tabs-container {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 1.8rem;
          overflow-x: auto;
          padding-bottom: 0.6rem;
          width: 100%;
        }

        .house-tabs-container::-webkit-scrollbar {
          height: 3px;
        }

        .house-tabs-container::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.01);
        }

        .house-tabs-container::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.12);
          border-radius: 99px;
        }

        .house-tab {
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.6rem 1.4rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.08em;
          white-space: nowrap;
          border-radius: 4px;
        }

        .house-tab:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.3);
        }

        .house-tab.active {
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 15px rgba(255,255,255,0.02);
        }

        .toss-row {
          display: flex;
          gap: 0.8rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          width: 100%;
        }

        .toss-row::-webkit-scrollbar {
          height: 3px;
        }

        .toss-row::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }

        .toss-row::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.15);
          border-radius: 99px;
        }

        .toss-card {
          flex: 0 0 170px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
          height: 180px;
          text-align: center;
          position: relative;
        }

        .toss-toast {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.88);
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          animation: fadeIn 0.15s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive Mappings */
        @media (max-width: 1023px) {
          .house-grid {
            grid-template-columns: 1fr;
          }
          .house-visual-panel {
            height: 280px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }
          .house-info-panel {
            height: auto;
            padding: 3rem 1.5rem;
            gap: 2.5rem;
          }
        }
      `}</style>

      <div className="house-grid">
        {/* Left Side: Dynamic Visual Panel */}
        <div 
          className="house-visual-panel"
          style={{ backgroundImage: `url("${currentHouse.image}")` }}
        >
          <div className="house-visual-overlay">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: currentHouse.color, letterSpacing: "0.1em", transition: "color 0.4s ease" }}>
                RELIGION
              </span>
              <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.8rem", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "0.05em" }}>
                {activeHouse}
              </h3>
            </div>
          </div>
        </div>

        {/* Right Side: Information Selector Panel */}
        <div className="house-info-panel">
          <div>
            {/* Title Block */}
            <h2 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              margin: "0 0 1.5rem 0",
              lineHeight: "1.3"
            }}>
              <span style={{ display: "inline-block", width: "0.9rem", height: "0.9rem", background: currentHouse.color, transition: "background 0.4s ease" }} />
              SHOP BY YOUR ALIEN RELIGION
            </h2>

            {/* 5 Houses Selector Tabs container */}
            <div className="house-tabs-container" style={{ marginTop: "1rem" }}>
              {Object.keys(houses).map((houseName) => {
                const active = activeHouse === houseName;
                const config = houses[houseName];
                return (
                  <button
                    key={houseName}
                    onClick={() => handleTabClick(houseName)}
                    className={`house-tab ${active ? "active" : ""}`}
                    style={{
                      color: active ? config.color : "rgba(255,255,255,0.4)",
                      borderColor: active ? config.color : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {houseName}
                  </button>
                );
              })}
            </div>

            {/* Subtext Tagline */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: currentHouse.color,
              letterSpacing: "0.08em",
              margin: "1.5rem 0 1rem 0",
              textTransform: "uppercase",
              transition: "color 0.4s ease"
            }}>
              {currentHouse.tagline}
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.65",
              margin: 0
            }}>
              {currentHouse.desc}
            </p>
          </div>

          {/* Toss These In dynamic Slider */}
          <div>
            <h4 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.08em",
              margin: "0 0 1rem 0",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              Toss these in <span style={{ fontSize: "1rem" }}>👽</span>
            </h4>

            <div className="toss-row">
              {getHouseProducts().map((p, idx) => (
                <div 
                  key={p.id || idx}
                  className="toss-card"
                  onClick={(e) => handleQuickAdd(p, e)}
                  style={{
                    border: `1px solid rgba(255,255,255,0.1)`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = currentHouse.color;
                    e.currentTarget.style.background = `${currentHouse.color}05`; // Subtle alpha backdrop
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.015)";
                  }}
                >
                  {addedId === p.id && (
                    <div className="toss-toast" style={{ color: currentHouse.color }}>ADDED! 🛒</div>
                  )}

                  {/* Icon or Image */}
                  <div style={{ height: "65px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.5rem", width: "100%" }}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    ) : (
                      <span style={{ fontSize: "2.5rem" }}>{p.emoji || "📦"}</span>
                    )}
                  </div>

                  {/* Name */}
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: "1.3",
                    height: "32px",
                    overflow: "hidden",
                    textTransform: "uppercase"
                  }}>
                    {p.name}
                  </div>

                  {/* Price */}
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", fontWeight: 700, color: currentHouse.color, marginTop: "0.3rem", transition: "color 0.4s ease" }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>

            {/* ENTER HOUSE Dynamic CTA Button */}
            <div style={{ marginTop: "1.8rem", width: "100%" }}>
              <button
                onClick={() => {
                  setUserInteracted(true);
                  localStorage.setItem("userHouse", activeHouse);
                  window.dispatchEvent(new Event("userHouseChanged"));
                  
                  // Create a custom cyber-styled confirm toast instead of default alert!
                  const toast = document.createElement("div");
                  toast.innerHTML = `🛸 WELCOME TO THE ${activeHouse} FACTION! YOUR 10% HOUSE DISCOUNT IS NOW ACTIVE!`;
                  toast.style.cssText = `
                    position: fixed; bottom: 30px; right: 30px; z-index: 9999;
                    background: ${currentHouse.color}; color: #000;
                    font-family: 'Space Mono', monospace; font-size: 0.85rem; font-weight: 700;
                    padding: 1rem 2rem; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    animation: slideUpToast 0.4s ease forwards;
                  `;
                  
                  // Inject keyframes if not present
                  if (!document.getElementById("toast-style")) {
                    const s = document.createElement("style");
                    s.id = "toast-style";
                    s.innerHTML = `
                      @keyframes slideUpToast {
                        from { transform: translateY(100px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                      }
                    `;
                    document.head.appendChild(s);
                  }
                  
                  document.body.appendChild(toast);
                  setTimeout(() => {
                    toast.style.animation = "slideUpToast 0.4s ease reverse forwards";
                    setTimeout(() => toast.remove(), 400);
                  }, 4000);
                }}
                style={{
                  background: currentHouse.color,
                  color: "#000000",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0.8rem 2rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.08em",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  boxShadow: `0 0 15px ${currentHouse.color}35`,
                  textTransform: "uppercase"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 0 25px ${currentHouse.color}65`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = `0 0 15px ${currentHouse.color}35`;
                }}
              >
                ENTER {activeHouse} 🛸
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
