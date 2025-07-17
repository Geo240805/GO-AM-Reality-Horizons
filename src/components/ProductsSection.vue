<template>
  <section id="servicios" class="relative px-4 py-16 overflow-hidden sm:py-24">
    <!-- Fondo con efecto parallax -->
    <div
      class="absolute inset-0 z-0 transform scale-110 bg-center bg-cover opacity-15"
      style="background-image: url('/realidadAR.jpg')"
    ></div>

    <!-- Overlay con gradiente -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Encabezado con diseño mejorado -->
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

      <!-- Tarjetas de productos con diseño mejorado -->
      <div class="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-2">
        <!-- Tarjeta 1: Tour Virtual -->
        <RouterLink
          to="/entrada"
          class="flex flex-col h-full overflow-hidden transition-all duration-500 transform bg-white shadow-md group rounded-2xl hover:shadow-xl hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <div
              class="absolute inset-0 transition-transform duration-700 bg-center bg-cover group-hover:scale-110"
              style="background-image: url('/tour-virtual-bg.jpg'), url('/realidadAR.jpg')"
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
                <img alt="" class="w-6 h-6" />
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
              style="background-image: url('/realidad-aumentada-bg.jpg'), url('/realidadAR.jpg')"
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
                <img alt="" class="w-6 h-6" />
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

        <!-- Tarjeta 3: Desarrollo Personalizado -->
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

    <div id="Nosotros" class="pt-1"></div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight, Smartphone, Zap, Users } from 'lucide-vue-next'
</script>
