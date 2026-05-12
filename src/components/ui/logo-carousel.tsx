import React from "react";

const logos = [
  { name: "N8N", url: "https://n8n.io/favicon.ico", width: 32 },
  { name: "Anthropic", url: "https://www.anthropic.com/favicon.ico", width: 32 },
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png",
    width: 80,
  },
  {
    name: "OpenAI",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png",
    width: 80,
  },
  {
    name: "WhatsApp",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
    width: 32,
  },
  {
    name: "Make",
    url: "https://images.ctfassets.net/qqlj6g4ee76j/4lqFV4VxGiFMIRMbDxE8yY/f53af36f3ce74f13da1f68adbd9ca9e2/make-logo-new.png",
    width: 80,
  },
  {
    name: "Python",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png",
    width: 32,
  },
  {
    name: "React",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    width: 32,
  },
];

const LogoCarousel = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="w-full bg-bg-0 py-16">
      <p
        className="mb-10 text-center uppercase text-text-100"
        style={{
          fontWeight: 400,
          fontSize: "11px",
          opacity: 0.45,
          letterSpacing: "0.12em",
        }}
      >
        Tecnologias que utilizamos
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{
            background:
              "linear-gradient(90deg, var(--color-bg-0, #0a0a0a) 0%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{
            background:
              "linear-gradient(270deg, var(--color-bg-0, #0a0a0a) 0%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex w-max items-center gap-16"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-12 shrink-0 items-center justify-center transition-opacity duration-200"
              style={{ opacity: 0.45 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
            >
              <img
                src={logo.url}
                alt={logo.name}
                style={{ width: logo.width, height: "auto", maxHeight: 40 }}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
