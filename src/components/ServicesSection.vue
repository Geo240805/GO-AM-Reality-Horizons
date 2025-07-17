<template>
  <section id="Servicios" class="px-4 py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Nuestros Servicios</h2>
        <div class="w-20 h-1 mx-auto mb-6 bg-teal-500 rounded-full"></div>
        <p class="max-w-3xl mx-auto text-lg text-gray-600">
          Ofrecemos soluciones innovadoras de realidad virtual y aumentada para transformar la forma
          en que interactúas con el mundo digital.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="overflow-hidden transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl group"
        >
          <div class="relative h-48 overflow-hidden bg-teal-600">
            <img
              :src="service.image"
              alt="Service Image"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-xl font-bold text-white">{{ service.title }}</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="mb-4 text-gray-600">{{ service.description }}</p>
            <ul class="mb-6 space-y-2">
              <li
                v-for="(feature, fIndex) in service.features"
                :key="fIndex"
                class="flex items-center text-gray-700"
              >
                <CheckCircle class="w-5 h-5 mr-2 text-teal-500" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-600 transition-all duration-300 bg-white border border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white"
            >
              Más Información
              <ArrowRight class="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, CheckCircle } from 'lucide-vue-next'

const services = [
  {
    title: 'Desarrollo VR',
    description: 'Creamos experiencias de realidad virtual inmersivas y personalizadas.',
    features: [
      'Entornos 3D interactivos',
      'Compatibilidad multiplataforma',
      'Experiencias personalizadas',
    ],
    image: '/src/assets/images/services/vr-development.webp',
  },
  {
    title: 'Soluciones AR',
    description: 'Desarrollamos aplicaciones de realidad aumentada que enriquecen el mundo real.',
    features: [
      'Reconocimiento de objetos',
      'Integración con dispositivos móviles',
      'Experiencias interactivas',
    ],
    image: '/src/assets/images/services/ar-solutions.webp',
  },
  {
    title: 'Tours Virtuales',
    description: 'Creamos recorridos virtuales inmersivos para diversas aplicaciones.',
    features: ['Navegación 360°', 'Puntos de interés interactivos', 'Integración con sitios web'],
    image: '/src/assets/images/services/virtual-tours.webp',
  },
]
</script>
