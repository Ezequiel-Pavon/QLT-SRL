<script lang="ts">
  import { ChevronsDown } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator";
</script>

<footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
  <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div class="col-span-full xl:col-span-2">
        <a href="/" class="flex font-bold items-center">
          <ChevronsDown class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          <h3 class="text-2xl">NombreEmpresa</h3>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Contacto</h3>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Formulario</a></div>
        <div><a href="mailto:info@empresa.com" class="opacity-60 hover:opacity-100">info@empresa.com</a></div>
        <div><a href="tel:+541112345678" class="opacity-60 hover:opacity-100">+54 11 1234-5678</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Secciones</h3>
        <div><a href="#services" class="opacity-60 hover:opacity-100">Servicios</a></div>
        <div><a href="#how-it-works" class="opacity-60 hover:opacity-100">Cómo trabajamos</a></div>
        <div><a href="#benefits" class="opacity-60 hover:opacity-100">Beneficios</a></div>
        <div><a href="#features" class="opacity-60 hover:opacity-100">Caracteristicas</a></div>
        <div><a href="#faq" class="opacity-60 hover:opacity-100">Preguntas frecuentes</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Redes Sociales</h3>
        <div><a href="https://www.instagram.com/tuempresa" class="opacity-60 hover:opacity-100" target="_blank">Instagram</a></div>
        <div><a href="https://www.linkedin.com/company/tuempresa" class="opacity-60 hover:opacity-100" target="_blank">LinkedIn</a></div>
      </div>
    </div>

    <Separator class="my-6" />
    
    <section>
      <h3>
        &copy; 2025 Diseñado y desarrollado por
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eduardo-ezequiel-pavón"
          class="text-primary transition-all border-primary hover:border-b-2"
          rel="noreferrer"
        >
          Ezequiel Pavon
        </a>
        y
        <a
          target="_blank"
          href="https://www.linkedin.com/in/octavio-nicolas-pastorive-644796306"
          class="text-primary transition-all border-primary hover:border-b-2"
          rel="noreferrer"
        >
          Octavio Pastorive
        </a>
      </h3>
    </section>
  </div>
</footer>
