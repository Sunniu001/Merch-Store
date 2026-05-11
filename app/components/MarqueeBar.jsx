const words = [
  "GRAND THEFT ALIEN 👽", "•",
  "PEACE ON MARS 🪐", "•",
  "COSMIC PULSE ✨", "•",
  "NO CAP DRIP 🧢", "•",
  "SLAY THE GALAXY 💅", "•",
  "TOUCH GRASS NEVER 🌿", "•",
  "GRAND THEFT ALIEN 👽", "•",
  "PEACE ON MARS 🪐", "•",
  "COSMIC PULSE ✨", "•",
  "NO CAP DRIP 🧢", "•",
  "SLAY THE GALAXY 💅", "•",
  "TOUCH GRASS NEVER 🌿", "•",
];

export default function MarqueeBar() {
  return (
    <div aria-hidden="true" style={{
      background: "#050505",
      borderTop: "1.5px solid rgba(168,212,0,0.4)",
      borderBottom: "1.5px solid rgba(168,212,0,0.4)",
      overflow: "hidden", padding: "0.8rem 0",
      transform: "rotate(-1deg) scaleX(1.05)",
      position: "relative", zIndex: 10,
    }}>
      <div style={{
        display: "inline-flex", whiteSpace: "nowrap",
        animation: "marquee 15s linear infinite",
      }}>
        {words.map((w, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-wack)", fontSize: "1.3rem",
            color: w === "•" ? "var(--pink)" : "var(--lime)",
            padding: "0 1.5rem",
          }}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}