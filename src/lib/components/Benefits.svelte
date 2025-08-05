<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Sparkle,
    Tag,
    Paintbrush,
    Blocks,
    LineChart,
    Wallet,
  } from "lucide-svelte";

  interface BenefitsProps {
    icon: 'sparkle' | 'tag' | 'paintbrush' | 'blocks' | 'lineChart' | 'wallet';
    title: string;
    description: string;
  }

  const benefitList: BenefitsProps[] = [
    {
      icon: "blocks",
      title: "Equipo Profesional",
      description:
        "Personal entrenado y certificado que utiliza técnicas avanzadas para garantizar una limpieza profunda y segura en cada espacio.",
    },
    {
      icon: "lineChart",
      title: "Resultados Medibles",
      description:
        "Aplicamos protocolos estandarizados y recopilamos tu feedback para asegurar un servicio de alta calidad y total satisfacción.",
    },
    {
      icon: "wallet",
      title: "Precios Transparentes",
      description:
        "Presupuestos claros y sin cargos ocultos, adaptados a tus necesidades y frecuencia de limpieza, con excelente relación costo-beneficio.",
    },
    {
      icon: "sparkle",
      title: "Compromiso Ecológico",
      description:
        "Utilizamos productos biodegradables y prácticas amigables con el medio ambiente, cuidando tu salud y el entorno.",
    },
  ];

  const iconMap = {
    sparkle: Sparkle,
    tag: Tag,
    paintbrush: Paintbrush,
    blocks: Blocks,
    lineChart: LineChart,
    wallet: Wallet,
  };
</script>

<section id="benefits" class="container py-24 sm:py-32">
  <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
    <div>
      <h2 class="text-lg text-primary mb-2 tracking-wider">Beneficios de QLT</h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Espacios Impecables, Clientes Felices
      </h2>
      <p class="text-xl text-muted-foreground mb-8">
        En QLT Servicios de Limpieza nos comprometemos a cuidar cada rincón de tu hogar u oficina con profesionales certificados, productos ecológicos y procesos garantizados. Tu satisfacción es nuestra prioridad.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-4 w-full">
      {#each benefitList as { icon, title, description }, index}
        <Card class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
          <CardHeader>
            <div class="flex justify-between">
              <svelte:component 
                this={iconMap[icon]} 
                class="size-8 mb-6 text-primary"
              />
              <span class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                0{index + 1}
              </span>
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {description}
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
