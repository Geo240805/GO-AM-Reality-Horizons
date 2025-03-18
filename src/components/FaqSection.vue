<template>
  <section class="py-8 sm:py-12 px-4 max-w-3xl mx-auto">
    <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-6 sm:mb-8 text-center">
      Preguntas y Respuestas
    </h2>

    <div class="space-y-3 sm:space-y-4">
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        class="group border-b border-gray-300 pb-3 sm:pb-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-50/50"
      >
        <summary
          class="flex justify-between items-center font-semibold cursor-pointer list-none text-sm sm:text-base p-2 transition-colors duration-300 hover:text-teal-700"
        >
          <span>{{ faq.question }}</span>
          <span class="transition-transform duration-300 group-open:rotate-180">
            <ChevronRight :size="18" class="sm:hidden" />
            <ChevronRight :size="20" class="hidden sm:block" />
          </span>
        </summary>
        <div class="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base p-2" v-html="faq.answer"></div>
      </details>
    </div>
    <div id="Contacto"></div>
  </section>
</template>

<script setup>
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
    answer: `<ul class="list-disc pl-5 space-y-1">
      <li>Entretenimiento: videojuegos y experiencias interactivas.</li>
      <li>Educación: simulaciones para aprendizaje práctico.</li>
      <li>Salud: terapias y formación médica.</li>
      <li>Arquitectura: visualización de diseños.</li>
      <li>Turismo: exploración de destinos virtuales.</li>
    </ul>`,
  },
]
</script>
