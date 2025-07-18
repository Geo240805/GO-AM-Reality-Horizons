<template>
  <section id="servicios" class="px-4 py-16 bg-gray-50">
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

  <!-- Productos / Soluciones -->
  <section id="soluciones" class="relative px-4 py-16 overflow-hidden sm:py-24">
    <!-- Fondo con efecto parallax -->
    <div
      class="absolute inset-0 z-0 transform scale-110 bg-center bg-cover opacity-15"
      style="background-image: url('/images/services/realidadAR.jpg')"
    ></div>
    <!-- Overlay con gradiente -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>
    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="mb-12 text-center sm:mb-16">
        <h2 class="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-800">
          Soluciones de Realidad Virtual y Aumentada
        </h2>
        <div class="w-24 h-1 mx-auto mb-6 bg-teal-500 rounded-full"></div>
        <p class="max-w-3xl mx-auto text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
          Transformamos espacios y conceptos en experiencias inmersivas interactivas, permitiéndote
          navegar e interactuar con ambientes virtuales desde cualquier lugar.
        </p>
      </div>
      <div class="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-2">
        <!-- Tarjeta 1: Tour Virtual -->
        <RouterLink
          to="/tours-virtuales"
          class="flex flex-col h-full overflow-hidden transition-all duration-500 transform bg-white shadow-md group rounded-2xl hover:shadow-xl hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <div
              class="absolute inset-0 transition-transform duration-700 bg-center bg-cover group-hover:scale-110"
              style="
                background-image:
                  url('/tour-virtual-bg.jpg'), url('/images/services/realidadAR.jpg');
              "
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Tour Virtual</h3>
              <p class="mt-1 text-sm text-gray-200">Experiencias inmersivas 360°</p>
            </div>
          </div>
          <div class="flex flex-col flex-grow p-5">
            <div class="flex items-center mb-4">
              <div class="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-full">
                <img
                  alt="Icono de tecnología avanzada"
                  src="/images/services/tour-virtual.png"
                  class="w-6 h-6"
                />
              </div>
              <span class="text-sm font-medium text-teal-700">Tecnología Avanzada</span>
            </div>
            <p class="mb-4 text-sm text-gray-600">
              Explora espacios virtuales interactivos con total libertad de movimiento. Ideal para
              presentaciones, educación y experiencias comerciales.
            </p>
            <div class="flex items-center mt-auto font-medium text-teal-600">
              <span>Explorar servicio</span>
              <ArrowRight
                class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </RouterLink>
        <!-- Tarjeta 2: Realidad Aumentada -->
        <RouterLink
          to="/realidad-aumentada"
          class="flex flex-col h-full overflow-hidden transition-all duration-500 transform bg-white shadow-md group rounded-2xl hover:shadow-xl hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <div
              class="absolute inset-0 transition-transform duration-700 bg-center bg-cover group-hover:scale-110"
              style="
                background-image:
                  url('/realidad-aumentada-bg.jpg'), url('/images/services/realidadAR.jpg');
              "
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Realidad Aumentada</h3>
              <p class="mt-1 text-sm text-gray-200">Fusión del mundo real y virtual</p>
            </div>
          </div>
          <div class="flex flex-col flex-grow p-5">
            <div class="flex items-center mb-4">
              <div class="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-full">
                <img alt="" src="/images/services/augmented-reality.png" class="w-6 h-6" />
              </div>
              <span class="text-sm font-medium text-teal-700">Interacción Avanzada</span>
            </div>
            <p class="mb-4 text-sm text-gray-600">
              Superpón elementos virtuales en el mundo real a través de dispositivos móviles.
              Perfecto para marketing, educación y visualización de productos.
            </p>
            <div class="flex items-center mt-auto font-medium text-teal-600">
              <span>Explorar servicio</span>
              <ArrowRight
                class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </RouterLink>
      </div>
      <!-- Sección de características -->
      <div class="grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-16 md:grid-cols-3">
        <div
          class="p-6 transition-all duration-300 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-md"
        >
          <div class="flex items-center justify-center w-12 h-12 mb-4 bg-teal-100 rounded-full">
            <Smartphone class="w-6 h-6 text-teal-600" />
          </div>
          <h3 class="mb-2 text-lg font-bold text-slate-800">Multiplataforma</h3>
          <p class="text-sm text-gray-600">
            Nuestras soluciones funcionan en múltiples dispositivos, desde smartphones hasta
            headsets VR avanzados.
          </p>
        </div>
        <div
          class="p-6 transition-all duration-300 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-md"
        >
          <div class="flex items-center justify-center w-12 h-12 mb-4 bg-teal-100 rounded-full">
            <Zap class="w-6 h-6 text-teal-600" />
          </div>
          <h3 class="mb-2 text-lg font-bold text-slate-800">Alto Rendimiento</h3>
          <p class="text-sm text-gray-600">
            Optimizamos cada desarrollo para ofrecer la mejor experiencia con un rendimiento
            excepcional.
          </p>
        </div>
        <div
          class="p-6 transition-all duration-300 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-md"
        >
          <div class="flex items-center justify-center w-12 h-12 mb-4 bg-teal-100 rounded-full">
            <Users class="w-6 h-6 text-teal-600" />
          </div>
          <h3 class="mb-2 text-lg font-bold text-slate-800">Soporte Continuo</h3>
          <p class="text-sm text-gray-600">
            Ofrecemos soporte técnico y actualizaciones para mantener tus soluciones siempre al día.
          </p>
        </div>
      </div>
      <!-- CTA -->
      <div class="mt-16 text-center">
        <a
          href="#Contacto"
          class="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 transform bg-teal-600 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:scale-105"
        >
          Solicita una demostración
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
    <div id="nosotros" class="pt-1"></div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, CheckCircle, Smartphone, Users, Zap } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const services = [
  {
    title: 'Desarrollo VR',
    description: 'Creamos experiencias de realidad virtual inmersivas y personalizadas.',
    features: [
      'Entornos 3D interactivos',
      'Compatibilidad multiplataforma',
      'Experiencias personalizadas',
    ],
    image: '/images/services/vr-development.webp',
  },
  {
    title: 'Soluciones AR',
    description: 'Desarrollamos aplicaciones de realidad aumentada que enriquecen el mundo real.',
    features: [
      'Reconocimiento de objetos',
      'Integración con dispositivos móviles',
      'Experiencias interactivas',
    ],
    image: '/images/services/ar-solutions.webp',
  },
  {
    title: 'Tours Virtuales',
    description: 'Creamos recorridos virtuales inmersivos para diversas aplicaciones.',
    features: ['Navegación 360°', 'Puntos de interés interactivos', 'Integración con sitios web'],
    image: '/images/services/virtual-tours.webp',
  },
]
</script>
