import { ArrowRight } from "lucide-react";

const partnerLogos = [
  { name: "Legacy", src: "/legacy.png" },
  { name: "Gym", src: "/gym.png" },
  { name: "Smile", src: "/smile.png" },
  { name: "Orla", src: "/orla.png" },
  { name: "Meridian", src: "/meridian.png" },
];

interface ResponsiveHeroBannerProps {
  badgeText?: string;
  title: string;
  titleLine2?: string;
  titleAccent?: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
}

export function ResponsiveHeroBanner({
  badgeText,
  title,
  titleAccent = "",
  description,
  primaryCtaText,
}: ResponsiveHeroBannerProps) {
  const stats = [
    { value: "+20", label: "Empresas atendidas" },
    { value: "+42.567", label: "Leads qualificados entregues" },
    { value: "24/7", label: "Sem folga" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-bg-0 text-text-100">
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 40% 42%, rgba(0, 0, 0, 0.62) 0%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-48"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--bg-0) 100%)",
        }}
      />

      {/* Above-the-fold hero container (100vh) */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center"
        style={{
          minHeight: "100vh",
          padding: "100px 24px 60px",
        }}
      >
        {badgeText && (
          <div className="animate-fade-slide-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-200/60 px-4 py-1.5 text-xs font-medium text-text-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {badgeText}
          </div>
        )}

        {/* Headline */}
        <h1
          className="animate-fade-slide-in font-display text-text-100"
          style={{
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.12,
            fontSize: "clamp(38px, 4.2vw, 58px)",
            maxWidth: "760px",
            margin: "0 auto 24px",
            textAlign: "center",
            animationDelay: "0.1s",
            filter:
              "drop-shadow(0 8px 16px rgba(0,0,0,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
          }}
        >
          {title}{" "}
          {titleAccent && (
            <span
              className="italic bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFB07A 0%, #FF5C00 50%, #B33A00 100%)",
              }}
            >
              {titleAccent}
            </span>
          )}
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-slide-in"
          style={{
            animationDelay: "0.2s",
            fontWeight: 300,
            color: "#ffffff",
            opacity: 0.85,
            fontSize: "17px",
            lineHeight: 1.65,
            maxWidth: "500px",
            margin: "0 auto 48px",
            textAlign: "center",
          }}
        >
          {description}
        </p>

        {/* CTA */}
        <div
          className="animate-fade-slide-in flex w-full justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            className="relative overflow-hidden flex items-center justify-between rounded-full transition-all duration-[250ms] ease-out hover:scale-[1.02] hover:brightness-110 w-full sm:w-auto sm:min-w-[320px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 107, 0, 0.75) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow:
                "0 4px 24px rgba(255, 107, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              fontWeight: 500,
              padding: "16px 32px",
              fontSize: "16px",
            }}
          >
            <span
              aria-hidden
              className="animate-shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
              }}
            />
            <span
              className="relative flex-1 text-center text-white"
              style={{ fontWeight: 500, fontSize: "16px" }}
            >
              {primaryCtaText}
            </span>
            <span
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>

        {/* Resultados reais */}
        <div
          className="animate-fade-slide-in"
          style={{
            animationDelay: "0.35s",
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/15" />
            <span
              className="text-xs uppercase text-text-400"
              style={{ fontWeight: 500, letterSpacing: "0.2em" }}
            >
              Resultados reais
            </span>
            <span className="h-px w-8 bg-white/15" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "64px",
              width: "100%",
              maxWidth: "680px",
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display text-text-100"
                  style={{ fontWeight: 700, fontSize: "28px" }}
                >
                  {item.value}
                </div>
                <div
                  className="mt-1 uppercase text-text-100"
                  style={{
                    fontWeight: 400,
                    fontSize: "11px",
                    opacity: 0.45,
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners carousel — below the fold */}
      <div
        className="animate-fade-slide-in relative z-10"
        style={{ width: "100%", padding: "60px 24px", animationDelay: "0.4s" }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          CONFIADO POR GRANDES NOMES
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "680px",
            margin: "0 auto",
            overflow: "hidden",
            padding: "40px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "max-content",
              gap: "64px",
              animation: "marquee 28s linear infinite",
            }}
          >
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                style={{
                  height: "28px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 1,
                  transition: "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
