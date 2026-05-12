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
        badgeText="Agência de IA para times de vendas B2B"
        title="Sua máquina de"
        titleLine2="geração de"
        titleAccent="lead."
        description="A Syntax cria agentes de IA que prospectam, qualificam e agendam reuniões com decisores — em escala, 24 horas por dia, sem turnover e sem desculpa."
        primaryCtaText="Quero meu agente"
        secondaryCtaText="Ver como funciona"
      />
    </main>
  );
}
