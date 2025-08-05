<script lang="ts">
  import type { ServiceProps } from "$lib/types";
  import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { ChevronDown, ChevronUp } from "lucide-svelte";
  import { slide } from "svelte/transition";

  export let service: ServiceProps;

  // Estado interno de apertura
  let open = false;
  const toggle = () => (open = !open);

  let selectedImage: string | null = null;
  const openLightbox = (img: string) => selectedImage = img;
  const closeLightbox = () => selectedImage = null;
</script>

<Card class="relative flex flex-col">
  {#if service.pro}
    <Badge variant="secondary" class="absolute top-4 right-4">PRO</Badge>
  {/if}

  <img
    src={service.image}
    alt={service.title}
    class="w-full h-40 object-cover rounded-t-lg"
  />

  <CardHeader class="flex flex-col flex-1">
    <CardTitle class="text-2xl mt-4">{service.title}</CardTitle>
    <CardDescription class="mt-2">{service.description}</CardDescription>
  </CardHeader>

  <div class="px-6 pb-4">
    <button
      class="flex items-center text-primary font-medium hover:underline"
      on:click={toggle}
    >
      {#if open}
        Cerrar <ChevronUp class="ml-1 h-5 w-5" />
      {:else}
        Leer más <ChevronDown class="ml-1 h-5 w-5" />
      {/if}
    </button>

    {#if open}
        <div transition:slide class="overflow-hidden">
            <CardContent class="mt-4 text-muted-foreground space-y-4">
            <p>{service.details}</p>

            <div class="grid grid-cols-2 gap-2">
                {#each service.gallery as img}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                <img
                    src={img}
                    alt="Imagen del servicio"
                    class="w-full h-24 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-125 hover:z-10 cursor-pointer"
                    on:click={() => openLightbox(img)}
                />
                {/each}
            </div>
            </CardContent>
        </div>
    {/if}
  </div>
    {#if selectedImage}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div
            class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            on:click={closeLightbox}
        >
            <img
            src={selectedImage}
            alt="Imagen ampliada"
            class="max-w-full max-h-full rounded shadow-lg transition-transform duration-300 scale-100"
            />
        </div>
    {/if}
</Card>
