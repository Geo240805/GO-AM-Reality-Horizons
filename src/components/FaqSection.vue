<template>
  <section class="max-w-3xl px-4 py-8 mx-auto sm:py-12">
    <h2 class="mb-6 text-lg font-bold text-center sm:text-xl md:text-2xl text-slate-700 sm:mb-8">
      Preguntas y Respuestas
    </h2>

    <div class="space-y-3 sm:space-y-4">
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        class="pb-3 overflow-hidden transition-all duration-300 border-b border-gray-300 rounded-lg group sm:pb-4 hover:bg-gray-50/50"
      >
        <summary
          class="flex items-center justify-between p-2 text-sm font-semibold list-none transition-colors duration-300 cursor-pointer sm:text-base hover:text-teal-700"
        >
          <span>{{ faq.question }}</span>
          <span class="transition-transform duration-300 group-open:rotate-180">
            <ChevronRight :size="18" class="sm:hidden" />
            <ChevronRight :size="20" class="hidden sm:block" />
          </span>
        </summary>
        <div class="p-2 mt-2 text-sm text-gray-600 sm:mt-3 sm:text-base" v-html="faq.answer"></div>
      </details>
    </div>
    <div id="Contacto"></div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

const faqs = [
  {
    question: '¿Qué es y para qué sirve la realidad virtual?',
    answer:
      'La realidad virtual es una tecnología que sumerge a los usuarios en un ambiente totalmente digital a través de dispositivos como gafas de RV. Permite simular espacios y experiencias sin las limitaciones físicas del mundo real.',
  },
  {
    question: '¿Qué es y para qué sirve la realidad aumentada?',
    answer:
      'La realidad aumentada combina el mundo físico con elementos virtuales, ofreciendo experiencias interactivas y prácticas.',
  },
  {
    question: '¿Qué es y para qué sirve la realidad mixta?',
    answer:
      'La realidad mixta combina la realidad virtual y la aumentada, permitiendo interactuar simultáneamente con el mundo físico y el digital.',
  },
  {
    question: '¿Cómo ayuda la realidad virtual a las empresas?',
    answer:
      'La realidad virtual mejora la eficiencia de las empresas al proporcionar herramientas para capacitación, simulaciones y experiencias de cliente inmersivas.',
  },
  {
    question: '¿Cuáles son los usos y aplicaciones de la realidad virtual?',
    answer: `<ul class="pl-5 space-y-1 list-disc">
      <li>Entretenimiento: videojuegos y experiencias interactivas.</li>
      <li>Educación: simulaciones para aprendizaje práctico.</li>
      <li>Salud: terapias y formación médica.</li>
      <li>Arquitectura: visualización de diseños.</li>
      <li>Turismo: exploración de destinos virtuales.</li>
    </ul>`,
  },
]
</script>
