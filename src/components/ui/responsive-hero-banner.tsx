import { ArrowRight } from "lucide-react";

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
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-0 text-text-100">
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:px-8">
        {/* Unified badge */}
        {badgeText && (
          <div className="animate-fade-slide-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-200/60 px-4 py-1.5 text-xs font-medium text-text-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {badgeText}
          </div>
        )}

        {/* Headline */}
        <h1
          className="animate-fade-slide-in font-display font-bold leading-tight text-text-100 text-4xl md:text-5xl lg:text-[60px]"
          style={{
            letterSpacing: "-0.02em",
            animationDelay: "0.1s",
          }}
        >
          {title}
          <br />
          {titleLine2}{" "}
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

        {/* Description */}
        <p
          className="animate-fade-slide-in mt-6 max-w-2xl text-base leading-relaxed text-text-300 sm:text-lg"
          style={{ animationDelay: "0.2s", fontWeight: 300, letterSpacing: "0.01em" }}
        >
          {description}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-slide-in mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            className="relative overflow-hidden flex items-center justify-between rounded-full p-2 transition-all duration-[250ms] ease-out hover:scale-[1.02] hover:brightness-110 w-full sm:w-auto sm:min-w-[320px]"
            style={{
              background: "linear-gradient(135deg, #FF5C00 0%, #cc3300 40%, #1a0800 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.25), 0 4px 24px rgba(255,92,0,0.3)",
              backdropFilter: "blur(4px)",
              fontWeight: 500,
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
            <span className="relative flex-1 text-center pl-4 pr-2 text-white text-[16px]" style={{ fontWeight: 500 }}>
              {primaryCtaText}
            </span>
            <span
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-text-100 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 sm:w-auto"
            style={{ fontWeight: 500 }}
          >
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
            <span className="text-xs uppercase text-text-400" style={{ fontWeight: 500, letterSpacing: "0.2em" }}>
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
    </section>
  );
}
