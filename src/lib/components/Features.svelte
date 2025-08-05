<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Paintbrush,
    MessageCircle,
    TabletSmartphone,
    BadgeCheck,
    Goal,
    PictureInPicture,
    MousePointerClick,
    Newspaper,
  } from "lucide-svelte";

  interface FeaturesProps {
    icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
          'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
    title: string;
    description: string;
  }

  const featureList: FeaturesProps[] = [
    {
      icon: "tabletSmartphone",
      title: "Reservá en un Clic",
      description:
        "Nuestro sistema online te permite agendar tu limpieza cuando y desde donde quieras, sin trámites ni demoras.",
    },
    {
      icon: "badgeCheck",
      title: "Calidad Certificada",
      description:
        "Contamos con sellos y protocolos de higiene avalados para garantizarte un servicio profesional y estandarizado.",
    },
    {
      icon: "goal",
      title: "Planes Personalizados",
      description:
        "Adaptamos cada servicio a tus necesidades: frecuencia, tipo de espacio y nivel de limpieza deseado.",
    },
    {
      icon: "pictureInPicture",
      title: "Inspección Digital",
      description:
        "Recibí reportes con fotos antes y después de cada trabajo para que veas los resultados en tiempo real.",
    },
    {
      icon: "mousePointerClick",
      title: "Atención 24/7",
      description:
        "Nuestro equipo de soporte y coordinación está disponible todo el día para resolver dudas o cambios de turno.",
    },
    {
      icon: "newspaper",
      title: "Compromiso Verde",
      description:
        "Usamos productos biodegradables y prácticas sostenibles que cuidan tu salud y el medio ambiente.",
    },
  ];

  const iconMap = {
    tabletSmartphone: TabletSmartphone,
    badgeCheck: BadgeCheck,
    goal: Goal,
    pictureInPicture: PictureInPicture,
    paintbrush: Paintbrush,
    mousePointerClick: MousePointerClick,
    messageCircle: MessageCircle,
    newspaper: Newspaper,
  };
</script>

<section id="features" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Características
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    ¿Qué nos hace únicos?
  </h2>

  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    En QLT Servicios de Limpieza combinamos tecnología, profesionales certificados y productos ecológicos para ofrecer una experiencia de limpieza total y sin complicaciones.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each featureList as { icon, title, description }}
      <Card class="h-full bg-background border-0 shadow-none">
        <CardHeader class="flex justify-center items-center">
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
            <svelte:component 
              this={iconMap[icon]} 
              class="size-6 text-primary"
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-center">
          {description}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>
