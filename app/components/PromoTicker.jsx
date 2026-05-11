const items = [
  "✅ 30% OFF with code MERATVFF",
  "✦",
  "BUY ANY 3 FOR ₹999 no cap 🤩",
  "✦",
  "FREE SHIPPING on orders ₹599+",
  "✦",
  "MADE IN INDIA 🇮🇳 fr fr",
  "✦",
  "✅ 30% OFF with code MERATVFF",
  "✦",
  "BUY ANY 3 FOR ₹999 no cap 🤩",
  "✦",
  "FREE SHIPPING on orders ₹599+",
  "✦",
  "MADE IN INDIA 🇮🇳 fr fr",
  "✦",
];

export default function PromoTicker() {
  return (
    <div
      style={{
        position: "fixed",
        top: "62px",
        left: 0,
        right: 0,
        zIndex: 199,
        background: "#1a0030",
        borderBottom: "1px solid rgba(138,94,204,0.3)",
        overflow: "hidden",
        padding: "0.3rem 0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          animation: "ticker 20s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-wack)",
              fontSize: "0.9rem",
              color: "#ccc",
              padding: "0 1.5rem",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
