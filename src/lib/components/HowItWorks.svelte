<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  interface HowItWorksProps {
    badgeTitle: string;
    title: string;
    description: string;
    image: string;
  }

  const HowItWorksList: HowItWorksProps[] = [
    {
      badgeTitle: "Paso 1",
      title: "Contacto Inicial",
      description:
        "El cliente se comunica con nosotros a través del sitio web, teléfono o redes sociales para contarnos sus necesidades específicas de limpieza.",
      image: "contacto.png",
    },
    {
      badgeTitle: "Paso 2",
      title: "Evaluación y Cotización",
      description:
        "Coordinamos una visita o pedimos información clave para evaluar el tipo de limpieza requerida. Luego, enviamos una cotización personalizada sin compromiso.",
      image: "evaluacion.png",
    },
    {
      badgeTitle: "Paso 3",
      title: "Programación del Servicio",
      description:
        "Una vez aceptada la cotización, acordamos el día y horario más conveniente para realizar el servicio, con total flexibilidad.",
      image: "programacion.png",
    },
    {
      badgeTitle: "Paso 4",
      title: "Ejecución y Seguimiento",
      description:
        "Nuestro equipo profesional realiza la limpieza con productos certificados y tecnología especializada. Luego, confirmamos la satisfacción del cliente y brindamos seguimiento si es necesario.",
      image: "ejecucion.png",
    },
  ];
</script>

<section id="how-it-works" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Como trabajamos
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Paso a paso
    </h2>
  </div>

  <div class="lg:w-[80%] mx-auto relative">
    {#each HowItWorksList as { badgeTitle, title, description, image }, index}
      <div class="flex mb-8 items-center" class:flex-row-reverse={index % 2 !== 0}>
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{badgeTitle}</Badge>
            </div>

            <CardTitle>
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {description}
          </CardContent>
        </Card>

        <img
          src={image}
          alt="Image describing {title}"
          class="w-[150px] md:w-[250px] lg:w-[300px] mx-auto -scale-x-100"
        />
        
        <div
          class="-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl"
          class:left-0={index % 2 !== 0}
        ></div>
      </div>
    {/each}
  </div>
</section>
