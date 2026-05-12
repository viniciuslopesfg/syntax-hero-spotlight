import { ArrowRight } from "lucide-react";

interface ResponsiveHeroBannerProps {
  badgeText: string;
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
  const tickerItems = [
    { value: "<30s", label: "tempo de resposta" },
    { value: "24/7", label: "sem folga, sem turnover" },
    { value: "10×", label: "a capacidade de 1 SDR humano" },
    { value: "+60%", label: "de tempo livre para vendas" },
    { value: "42k+", label: "leads qualificados" },
    { value: "15 dias", label: "do zero ao agente no ar" },
  ];

  const stats = [
    { value: "+20", label: "Empresas atendidas" },
    { value: "42.567", label: "Leads qualificados entregues" },
    { value: "24/7", label: "Sem folga" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-0 text-text-100">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(255,107,43,0.18) 0%, rgba(255,107,43,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-32 text-center sm:px-8 lg:pb-28">
        {/* Unified badge */}
        <div className="animate-fade-slide-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-200/60 px-4 py-1.5 text-xs font-medium text-text-200 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
          {badgeText}
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-slide-in font-display font-bold tracking-tight text-text-100"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            animationDelay: "0.1s",
          }}
        >
          {title}
          <br />
          {titleLine2}{" "}
          {titleAccent && (
            <span className="italic text-accent">{titleAccent}</span>
          )}
        </h1>

        {/* Description */}
        <p
          className="animate-fade-slide-in mt-6 max-w-2xl text-base leading-relaxed text-text-300 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {description}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-slide-in mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold transition-all duration-200 hover:scale-[1.02] sm:w-auto"
            style={{ background: "#FF6B2B", color: "#000000" }}
          >
            {primaryCtaText}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-sans text-sm font-semibold text-text-100 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 sm:w-auto">
            {secondaryCtaText}
          </button>
        </div>

        {/* Social proof */}
        <div
          className="animate-fade-slide-in mt-20 w-full max-w-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/15" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-400">
              Resultados reais
            </span>
            <span className="h-px w-8 bg-white/15" />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            {stats.map((item, i) => (
              <div key={item.label} className="flex items-center gap-6 sm:gap-10">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-text-100 sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-text-400">
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
      </div>

      {/* Metrics ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/10 bg-bg-100/80 py-4 backdrop-blur-md">
        <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-sm font-bold text-accent">
                  {item.value}
                </span>
                <span className="text-sm text-text-300">{item.label}</span>
              </div>
              <span className="text-text-400">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
