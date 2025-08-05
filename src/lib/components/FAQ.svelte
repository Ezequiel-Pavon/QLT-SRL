<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";

  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }

  const FAQList: FAQProps[] = [
    {
      question: "¿Qué tipo de servicios de limpieza ofrecen?",
      answer:
        "Ofrecemos limpieza para hogares, oficinas, consorcios, locales comerciales e industrias. También realizamos limpiezas profundas, post-obra y de mantenimiento regular.",
      value: "item-1",
    },
    {
      question: "¿Debo proporcionar los productos de limpieza?",
      answer:
        "No es necesario. Nuestro equipo lleva todos los productos y herramientas necesarias. Utilizamos insumos profesionales y certificados.",
      value: "item-2",
    },
    {
      question: "¿Cómo se realiza la cotización?",
      answer:
        "Podemos coordinar una visita sin cargo o solicitarte algunos datos e imágenes del lugar para enviar una cotización personalizada.",
      value: "item-3",
    },
    {
      question: "¿Puedo contratar un servicio único o tiene que ser mensual?",
      answer:
        "Podés contratar tanto limpiezas puntuales como servicios recurrentes según tus necesidades.",
      value: "item-4",
    },
    {
      question: "¿Qué pasa si no estoy conforme con el servicio?",
      answer:
        "Nos comprometemos con la satisfacción del cliente. Si algo no salió como esperabas, lo resolvemos rápidamente sin costo adicional.",
      value: "item-5",
    },
  ];
</script>

<section id="faq" class="container md:w-[700px] py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">PREGUNTAS FRECUENTES</h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Todo lo que necesitás saber
    </h2>
  </div>

  <Accordion type="single" class="w-full">
    {#each FAQList as { question, answer, value }}
      <AccordionItem {value}>
        <AccordionTrigger class="text-left">
          {question}
        </AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
    {/each}
  </Accordion>

  <h3 class="font-medium mt-4">
    Sigues teniendo dudas o querés más información?
    <a href="#contact" class="text-muted-foreground">
      <span class="underline">Contacta con nosotros</span>
    </a>
  </h3>
</section>
