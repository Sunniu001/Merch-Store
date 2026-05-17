"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // Gallery & Configurator states
  const [selectedImg, setSelectedImg] = useState(0);
  const [purchaseModel, setPurchaseModel] = useState("subscribe"); // "subscribe" maps to Join House, default selected!
  const [added, setAdded] = useState(false);

  // House Membership States
  const [userHouse, setUserHouse] = useState(null);

  useEffect(() => {
    // Read user house from local storage
    setUserHouse(localStorage.getItem("userHouse"));

    const handleHouseChange = () => {
      setUserHouse(localStorage.getItem("userHouse"));
    };
    window.addEventListener("userHouseChanged", handleHouseChange);
    return () => window.removeEventListener("userHouseChanged", handleHouseChange);
  }, []);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch(`/api/product/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching WooCommerce product:", err);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  if (loading) return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem", color: "#00f0ff", animation: "pulse 1.5s infinite" }}>
        scanning the cosmic database... 🛸
      </div>
    </div>
  );

  if (!product || product.error) return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
      <div style={{ fontSize: "5rem" }}>🛸💨</div>
      <h1 style={{ fontFamily: "'Space Mono', monospace", color: "var(--text)" }}>PRODUCT VANISHED</h1>
      <p style={{ color: "var(--muted)", fontFamily: "sans-serif" }}>Unable to locate this WooCommerce item.</p>
    </div>
  );

  // 1. Determine Product's Parent House Classification (Datura is Blue!)
  const nameUpper = (product.name || "").toUpperCase();
  const typeUpper = (product.type || "").toUpperCase();
  let productHouse = "DATURA"; 
  let houseColor = "#00f0ff"; // Vibrant electric cyber blue!
  let houseEmoji = "🧘";

  if (nameUpper.includes("IBOGA") || typeUpper.includes("IBOGA")) {
    productHouse = "IBOGA";
    houseColor = "#9b51e0"; // Deep space purple
    houseEmoji = "👁️";
  } else if (nameUpper.includes("PEYOTE") || typeUpper.includes("PEYOTE")) {
    productHouse = "PEYOTE";
    houseColor = "#f2c94c"; // Warm amber gold
    houseEmoji = "🌵";
  } else if (nameUpper.includes("AYAHUASCA") || typeUpper.includes("AYAHUASCA")) {
    productHouse = "AYAHUASCA";
    houseColor = "#27ae60"; // Jungle green
    houseEmoji = "🌿";
  } else if (nameUpper.includes("KAVA") || typeUpper.includes("KAVA")) {
    productHouse = "KAVA";
    houseColor = "#2f80ed"; // Electric blue
    houseEmoji = "🌊";
  } else if (nameUpper.includes("MARS") || nameUpper.includes("ENERGY")) {
    productHouse = "DATURA"; // Make Gummies map to Datura blue
    houseColor = "#00f0ff";
    houseEmoji = "⚡";
  } else if (nameUpper.includes("MOON") || nameUpper.includes("CALM")) {
    productHouse = "DATURA"; // Make Gummies map to Datura blue
    houseColor = "#00f0ff";
    houseEmoji = "🌙";
  }

  // 2. Check Faction Loyalty membership state
  const isHouseHolder = userHouse === productHouse;

  // 3. Price Dynamic Calculation System
  const rawPriceStr = product.price || "₹0";
  const currencySymbol = rawPriceStr.includes("₹") ? "₹" : rawPriceStr.includes("$") ? "$" : "";
  const basePriceRawNumeric = parseFloat(rawPriceStr.replace(/[^\d.]/g, "")) || 0;

  // Price calculations based on instructions:
  // - Join House option: 20% discount today -> base * 0.8
  const joinHousePrice = Math.round(basePriceRawNumeric * 0.8);
  
  // - One-Time option: 10% discount if already a house holder, otherwise full MRP
  const oneTimePrice = isHouseHolder 
    ? Math.round(basePriceRawNumeric * 0.9) 
    : basePriceRawNumeric;

  const activeDisplayPrice = purchaseModel === "subscribe" ? joinHousePrice : oneTimePrice;

  const formatCurrency = (val) => {
    return `${currencySymbol}${val.toLocaleString()}`;
  };

  const handleAddToCart = () => {
    const purchaseLabelText = purchaseModel === "subscribe" 
      ? `Joined ${productHouse} House` 
      : "Continued without House";
    const itemToAdd = {
      id: `${product.id}-${purchaseModel}`,
      name: `${product.name} (${purchaseLabelText})`,
      price: formatCurrency(activeDisplayPrice),
      image: product.images?.[0] || product.image,
      emoji: "🛸"
    };
    addToCart(itemToAdd);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const galleryImages = [
    product.images?.[0] || product.image || "/Ayahuasca House.webp",
    product.images?.[1] || "/ufo-gummy-close.png",
    product.images?.[2] || "/Peyote House.webp",
    product.images?.[3] || "/Iboga House.webp"
  ];

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)", transition: "background 0.5s ease" }}>
      <Navbar />

      <style>{`
        .product-grid-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4.5rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 12rem 4rem 6rem 4rem;
        }

        /* Faction Membership status banners */
        .faction-loyalty-banner {
          background: rgba(0,0,0,0.85);
          border: 1.5px solid ${houseColor};
          border-radius: 6px;
          padding: 1rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px ${houseColor}15;
        }

        .faction-loyalty-banner a {
          color: ${houseColor};
          text-decoration: underline;
          cursor: pointer;
        }

        /* Left Side: Standard Showcase Gallery */
        .gallery-breadcrumbs {
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          color: var(--muted);
          text-transform: uppercase;
        }

        .gallery-breadcrumbs span {
          color: var(--text);
        }

        .standard-gallery-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .primary-showcase-box {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 1/1.05;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .primary-showcase-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnails-row {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding: 0.2rem 0;
        }

        .thumbnail-btn {
          width: 82px;
          height: 82px;
          border-radius: 8px;
          border: 2px solid rgba(255,255,255,0.1);
          background: var(--bg2);
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .thumbnail-btn.active {
          border-color: ${houseColor};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${houseColor}25;
        }

        .thumbnail-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Concentric Rotating Badge */
        .rotating-badge-container {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 76px;
          height: 76px;
          z-index: 10;
        }

        .rotating-badge {
          width: 100%;
          height: 100%;
          background: ${houseColor};
          color: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 0 15px ${houseColor}35;
          animation: spinBadge 12s linear infinite;
        }

        .rotating-badge::after {
          content: "";
          position: absolute;
          width: 82%;
          height: 82%;
          border: 1.5px dashed #000000;
          border-radius: 50%;
        }

        .badge-center-icon {
          position: absolute;
          z-index: 12;
          font-size: 1.5rem;
          animation: keepUpright 12s linear infinite;
        }

        @keyframes spinBadge {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes keepUpright {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* Right Side: Configurator Panel */
        .configurator-panel {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .product-title {
          font-family: 'Space Mono', monospace;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
          margin: 0;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .product-specs {
          font-family: 'Space Mono', monospace;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--muted);
          margin-top: -0.5rem;
        }

        /* Radio Options card boxes */
        .radio-card {
          border: 1.5px solid var(--text);
          border-radius: 6px;
          padding: 1.4rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          background: var(--bg2);
        }

        .radio-card.active {
          border-width: 2.2px;
          border-color: ${houseColor}; /* Dynamic colored active card border */
          box-shadow: 0 6px 20px ${houseColor}10;
        }

        .radio-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2.2px solid var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .radio-card.active .radio-circle {
          border-color: ${houseColor};
        }

        .radio-circle-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${houseColor};
        }

        .badge-lime {
          background: ${houseColor}; 
          color: #000000;
          font-family: sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 2.5px 9px;
          border-radius: 2px;
          margin-left: 0.5rem;
        }

        .bullet-list {
          list-style: none;
          padding: 0;
          margin: 0.8rem 0 0 0;
          font-family: sans-serif;
          font-size: 0.88rem;
          color: var(--text);
          opacity: 0.85;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        /* Cart CTA */
        .add-to-cart-cta {
          background: #000000;
          color: #ffffff;
          border: 2px solid #000000;
          font-family: 'Space Mono', monospace;
          font-size: 1.15rem;
          font-weight: 700;
          padding: 1.2rem;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          text-align: center;
        }

        [data-theme="dark"] .add-to-cart-cta {
          background: #ffffff;
          color: #000000;
          border: 2px solid #ffffff;
        }

        .add-to-cart-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px ${houseColor}20;
        }

        /* Rainbow stars badge */
        .stars-badge-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .rainbow-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00f0ff, #cc2fa0, #2f80ed, #a8d400);
          animation: spinBadge 3s linear infinite;
        }

        /* Responsive */
        @media (max-width: 1023px) {
          .product-grid-container {
            grid-template-columns: 1fr;
            padding: 10rem 2rem 4rem 2rem;
            gap: 3rem;
          }
        }
      `}</style>

      <div className="product-grid-container">
        {/* Left Column: Standard Showcase Gallery */}
        <div>
          {/* Breadcrumbs */}
          <div className="gallery-breadcrumbs">
            PRODUCTS &gt; <span>{product.type || "UFO PRODUCTS"}</span>
          </div>

          {/* Faction Member discount loyalty headers */}
          {isHouseHolder ? (
            <div className="faction-loyalty-banner" style={{ borderColor: houseColor }}>
              <span>🛸 VERIFIED {productHouse} HOUSE MEMBER DETECTED! 10% LOYALTY DISCOUNT APPLIED ON MRP!</span>
              <span style={{ fontSize: "1.1rem" }}>{houseEmoji}</span>
            </div>
          ) : (
            <div className="faction-loyalty-banner" style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.02)" }}>
              <span>👽 NOT A MEMBER OF the {productHouse} HOUSE? JOIN THE FACTION ON HOME PAGE TO SAVE 10%!</span>
              <a onClick={() => {
                window.location.href = "/#select-house";
              }}>JOIN HOUSE &gt;</a>
            </div>
          )}

          <div className="standard-gallery-wrapper">
            {/* Primary Showcase Box */}
            <div className="primary-showcase-box">
              <img src={galleryImages[selectedImg]} alt={product.name} />

              {/* Dynamic Concentric Faction Badge */}
              <div className="rotating-badge-container">
                <div className="rotating-badge">
                  <span className="badge-center-icon">{houseEmoji}</span>
                </div>
              </div>
            </div>

            {/* Clickable Thumbnails Row Slider */}
            <div className="thumbnails-row">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`thumbnail-btn ${selectedImg === idx ? "active" : ""}`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Checkout Configurator Panel */}
        <div className="configurator-panel">
          {/* Title and Specs */}
          <div>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-specs" style={{ marginTop: "0.6rem" }}>
              {product.type === "Gummies" ? "30 GUMMIES • 5 MG THC • 50 MG CBD" : "ORGANIC SPECTRUM • CRYOGENIC LAB REFINED"}
            </p>
          </div>

          {/* Radio Panels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Card A: Join House & Save */}
            <div 
              className={`radio-card ${purchaseModel === "subscribe" ? "active" : ""}`}
              onClick={() => setPurchaseModel("subscribe")}
            >
              <div className="radio-circle">
                {purchaseModel === "subscribe" && <div className="radio-circle-inner" />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "sans-serif", fontSize: "1.02rem", fontWeight: 700, color: "var(--text)" }}>
                    Join {productHouse} House <span className="badge-lime">Save 20% today</span>
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", display: "block" }}>
                      {formatCurrency(joinHousePrice)}
                    </span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", color: "var(--muted)", textDecoration: "line-through" }}>
                      {formatCurrency(basePriceRawNumeric)}
                    </span>
                  </div>
                </div>
                {/* Bullets */}
                <ul className="bullet-list">
                  <li>✦ 10% on all {productHouse} Products from next orders</li>
                  <li>✦ Lowest Price Option</li>
                  <li>✦ Skip, pause or cancel at any time</li>
                </ul>
              </div>
            </div>

            {/* Card B: Continue without House */}
            <div 
              className={`radio-card ${purchaseModel === "onetime" ? "active" : ""}`}
              onClick={() => setPurchaseModel("onetime")}
            >
              <div className="radio-circle">
                {purchaseModel === "onetime" && <div className="radio-circle-inner" />}
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--text)" }}>
                  Continue without House
                </span>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", display: "block" }}>
                    {formatCurrency(oneTimePrice)}
                  </span>
                  {isHouseHolder && (
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", color: "var(--muted)", textDecoration: "line-through" }}>
                      {formatCurrency(basePriceRawNumeric)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Add to Cart */}
          <button className="add-to-cart-cta" onClick={handleAddToCart}>
            {added ? "ADDED TO CARGO! 🛸" : "ADD TO CART"}
          </button>

          {/* Award Stars Footnote */}
          <div className="stars-badge-row">
            <div className="rainbow-circle" />
            <span>PURCHASE NOW AND EARN {Math.round(activeDisplayPrice * 0.1)} STARS!</span>
          </div>

          {/* Separator line */}
          <div style={{ height: "1px", background: "var(--border)", width: "100%", margin: "0.5rem 0" }} />

          {/* Detailed Narrative */}
          <div>
            <h4 style={{ fontFamily: "'Space Mono', monospace", color: "var(--text)", marginBottom: "1rem" }}>PRODUCT DETAILS ✦</h4>
            <div 
              style={{
                fontFamily: "sans-serif",
                fontSize: "0.98rem",
                lineHeight: 1.8,
                color: "var(--text)",
                opacity: 0.85
              }}
              dangerouslySetInnerHTML={{ __html: product.description || product.short_description }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
