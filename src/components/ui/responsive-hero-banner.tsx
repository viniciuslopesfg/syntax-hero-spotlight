import { ArrowRight } from "lucide-react";
import microsoftLogo from "@/assets/partners/microsoft.png";
import metaLogo from "@/assets/partners/meta.png";
import openaiLogo from "@/assets/partners/openai.png";
import contaboLogo from "@/assets/partners/contabo.png";
import lgpdLogo from "@/assets/partners/lgpd.png";

const partnerLogos = [
  { name: "Microsoft", src: microsoftLogo },
  { name: "Meta", src: metaLogo },
  { name: "OpenAI", src: openaiLogo },
  { name: "Contabo", src: contaboLogo },
  { name: "LGPD", src: lgpdLogo },
];

interface ResponsiveHeroBannerProps {
  badgeText?: string;
  title: string;
  titleLine2: string;
  titleAccent?: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export function ResponsiveHeroBanner({
  badgeText,
  title,
  titleLine2,
  titleAccent = "",
  description,
  primaryCtaText,
  secondaryCtaText,
}: ResponsiveHeroBannerProps) {
  const stats = [
    { value: "+20", label: "Empresas atendidas" },
    { value: "+42.567", label: "Leads qualificados entregues" },
    { value: "24/7", label: "Sem folga" },
  ];

  return (
    <>
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-0 text-text-100">
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-48"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--bg-0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 text-center sm:px-8" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        {/* Unified badge */}
        {badgeText && (
          <div className="animate-fade-slide-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-200/60 px-4 py-1.5 text-xs font-medium text-text-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {badgeText}
          </div>
        )}

        {/* Headline */}
        <h1
          className="animate-fade-slide-in mt-[60px]"
          style={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "clamp(64px, 4.2vw, 54px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "rgba(255, 255, 255, 0.90)",
            animationDelay: "0.1s",
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.30)) drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
            marginBottom: "28px",
            textAlign: "center",
          }}
        >
          {title}
          <br />
          {titleLine2}{" "}
          {titleAccent && (
            <span
              style={{
                color: "#FF5C00",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {titleAccent}
            </span>
          )}
        </h1>

        {/* Description */}
        <p
          className="animate-fade-slide-in"
          style={{
            animationDelay: "0.2s",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(14px, 1.4vw, 17px)",
            lineHeight: 1.30,
            color: "rgba(255, 255, 255, 0.60)",
            maxWidth: "570px",
            margin: "0 auto",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          {description}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-slide-in flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            className="group transition-all duration-[250ms] ease-out hover:scale-[1.02] w-full sm:w-auto sm:min-w-[320px]"
            style={{
              borderRadius: 9999,
              padding: 6,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              display: "flex",
              alignItems: "center",
              gap: 0,
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="transition-shadow duration-[250ms] ease-out group-hover:!shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_60px_rgba(255,92,0,0.5)]"
              style={{
                borderRadius: 9999,
                padding: "16px 40px",
                background: "linear-gradient(135deg, #FF5C00 0%, #FF8C42 40%, #cc3300 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 0 40px rgba(255,92,0,0.35)",
                flex: 1,
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {primaryCtaText}
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 9999,
                background: "rgba(0, 0, 0, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ArrowRight color="#FFFFFF" size={18} />
            </div>
          </button>

          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-text-100 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 sm:w-auto"
            style={{ fontWeight: 500, padding: "10px 26px", fontSize: "14px" }}
          >
            {secondaryCtaText}
          </button>
        </div>

        {/* Partners */}
        <div
          className="animate-fade-slide-in"
          style={{ width: "100%", marginTop: "80px", animationDelay: "0.35s" }}
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
            Apoiado por grandes nomes
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
      </div>
    </section>

    <section className="relative w-full bg-bg-0 py-20">
      <div
        className="animate-fade-slide-in mx-auto w-full max-w-3xl px-6 sm:px-8"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-white/15" />
          <span className="text-xs uppercase text-text-400" style={{ fontWeight: 500, letterSpacing: "0.2em" }}>
            Resultados reais
          </span>
          <span className="h-px w-8 bg-white/15" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          {stats.map((item, i) => (
            <div key={item.label} className="flex items-center gap-6 sm:gap-10">
              <div className="text-center">
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
              {i < stats.length - 1 && (
                <span className="hidden text-text-400 sm:inline">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
