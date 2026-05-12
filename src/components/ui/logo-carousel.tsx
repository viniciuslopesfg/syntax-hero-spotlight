const logos = [
  { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/ffffff" },
  { name: "Meta", url: "https://cdn.simpleicons.org/meta/ffffff" },
  { name: "WhatsApp", url: "https://cdn.simpleicons.org/whatsapp/ffffff" },
  { name: "N8N", url: "https://cdn.simpleicons.org/n8n/ffffff" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/ffffff" },
  { name: "React", url: "https://cdn.simpleicons.org/react/ffffff" },
  { name: "Anthropic", url: "https://cdn.simpleicons.org/anthropic/ffffff" },
  { name: "Zapier", url: "https://cdn.simpleicons.org/zapier/ffffff" },
];

const LogoCarousel = () => {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="w-full"
      style={{
        padding: "64px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "transparent",
      }}
    >
      <p
        className="mb-10 text-center uppercase"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.16em",
          opacity: 0.3,
        }}
      >
        Tecnologias que utilizamos
      </p>

      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "220px",
            background: "linear-gradient(to right, #000000 40%, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "220px",
            background: "linear-gradient(to left, #000000 40%, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: "80px",
            animation: "marquee 32s linear infinite",
          }}
        >
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.url}
              alt={logo.name}
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                opacity: 0.4,
                transition: "opacity 300ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
