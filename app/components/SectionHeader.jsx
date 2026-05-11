export default function SectionHeader({ tag, tagColor = "var(--sky)", title, highlight, suffix = "" }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem", position: "relative" }}>
      <div style={{
        display: "inline-block",
        background: `color-mix(in srgb, ${tagColor} 10%, transparent)`,
        color: tagColor,
        border: `1px solid color-mix(in srgb, ${tagColor} 40%, transparent)`,
        borderRadius: "999px",
        fontFamily: "var(--font-hand)", fontSize: "1.1rem",
        padding: "0.2rem 1.2rem", marginBottom: "0.75rem",
        transform: "rotate(2deg)",
      }}>
        {tag}
      </div>

      <h2 style={{
        fontFamily: "var(--font-wack)",
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        lineHeight: 1, color: "var(--text)",
      }}>
        {title}{" "}
        <span style={{ position: "relative", display: "inline-block", color: "var(--lime)" }}>
          {highlight}
          <span style={{
            position: "absolute", bottom: "-5px", left: 0, right: 0,
            height: "4px", background: "var(--pink)",
            borderRadius: "3px", transform: "rotate(-1deg)",
            display: "block",
          }} />
        </span>
        {suffix && <> {suffix}</>}
      </h2>
    </div>
  );
}