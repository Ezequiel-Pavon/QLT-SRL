<script lang="ts">
  import ServiceCard from "$lib/components/ui/ServiceCard.svelte";
  import type { ServiceProps} from "$lib/types";
  import { ProService } from "$lib/types";

  const serviceList: ServiceProps[] = [
    {
      title: "Limpieza Residencial",
      description: "Mantenimiento y limpieza integral de tu hogar, cuidando cada espacio.",
      details: "Incluye limpieza de pisos, muebles, cocina y baños...",
      image: "/images/residencial.jpg",
      gallery: [
        "/images/residencial_1.jpg",
        "/images/residencial_2.jpg",
        "/images/residencial_3.jpg"
      ],
      pro: ProService.NO,
    },
    {
      title: "Limpieza Comercial",
      description: "Espacios laborales impecables para mejorar la productividad.",
      details: "Servicio profesional para oficinas, locales y naves industriales...",
      image: "/images/comercial.jpg",
      gallery: [
        "/images/comercial_1.jpg",
        "/images/comercial_2.jpg"
      ],
      pro: ProService.NO,
    },
    {
      title: "Desinfección Profunda",
      description: "Tratamientos especializados para eliminar bacterias y virus.",
      details: "Aplicamos productos ecológicos de grado médico...",
      image: "/hero-image-dark.jpg",
      gallery: [
        "/hero-image-dark.jpg",
        "/hero-image-light.jpg",
        "/hero-image-dark.jpg",
      ],
      pro: ProService.YES,
    }
  ];
</script>

<section id="services" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary tracking-wider uppercase">Servicios</h2>
    <h2 class="text-3xl md:text-4xl font-bold mt-2">Lo que ofrecemos</h2>
    <p class="md:w-1/2 mx-auto text-xl text-muted-foreground mt-4">
      En QLT brindamos soluciones de limpieza profesional, adaptadas a hogares, comercios e industrias, siempre con productos eco-friendly y equipos certificados.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
    {#each serviceList as service (service.title)}
      <ServiceCard {service} />
    {/each}
  </div>
</section>
