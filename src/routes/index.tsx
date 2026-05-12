import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ResponsiveHeroBanner } from "@/components/ui/responsive-hero-banner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Syntax — Agentes de IA para vendas B2B" },
      {
        name: "description",
        content:
          "A Syntax constrói agentes de IA que qualificam, agendam e fecham. Mais leads, menos custo, zero turnover.",
      },
      { property: "og:title", content: "Syntax — Agentes de IA para vendas B2B" },
      {
        property: "og:description",
        content:
          "Agentes de IA que trabalham 24/7 para o seu time comercial. Resultados em 15 dias.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-bg-0 text-text-100">
      <Navbar />
      <ResponsiveHeroBanner
        
        title="Seu próximo funcionário não dorme,"
        titleLine2="não falta e nunca perde um"
        titleAccent="lead."
        description="Construímos Agentes de IA sob medida que prospectam, qualificam e reativam leads sem aumentar sua equipe"
        primaryCtaText="Quero meu Agente de IA"
        secondaryCtaText="Ver resultados reais"
      />
    </main>
  );
}
