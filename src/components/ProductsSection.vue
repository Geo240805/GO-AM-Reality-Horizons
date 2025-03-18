<template>
  <section id="Servicios" class="py-16 sm:py-24 px-4 overflow-hidden relative">
    <!-- Fondo con efecto parallax -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-15 z-0 transform scale-110"
      style="background-image: url('/realidadAR.jpg')"
    ></div>

    <!-- Overlay con gradiente -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Encabezado con diseño mejorado -->
      <div class="text-center mb-12 sm:mb-16">
        <span
          class="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-3"
        >
          Nuestros Servicios
        </span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Soluciones de Realidad Virtual y Aumentada
        </h2>
        <div class="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
        <p class="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Transformamos espacios y conceptos en experiencias inmersivas interactivas, permitiéndote
          navegar e interactuar con ambientes virtuales desde cualquier lugar.
        </p>
      </div>

      <!-- Tarjetas de productos con diseño mejorado -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Tarjeta 1: Tour Virtual -->
        <RouterLink
          to="/entrada"
          class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style="background-image: url('/tour-virtual-bg.jpg'), url('/realidadAR.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white text-xl font-bold">Tour Virtual</h3>
              <p class="text-gray-200 text-sm mt-1">Experiencias inmersivas 360°</p>
            </div>
          </div>

          <div class="p-5 flex-grow flex flex-col">
            <div class="mb-4 flex items-center">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <img src="/producto1.png" alt="" class="w-6 h-6" />
              </div>
              <span class="text-sm text-teal-700 font-medium">Tecnología Avanzada</span>
            </div>

            <p class="text-gray-600 text-sm mb-4">
              Explora espacios virtuales interactivos con total libertad de movimiento. Ideal para
              presentaciones, educación y experiencias comerciales.
            </p>

            <div class="mt-auto flex items-center text-teal-600 font-medium">
              <span>Explorar servicio</span>
              <ArrowRight
                class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </RouterLink>

        <!-- Tarjeta 2: Realidad Aumentada -->
        <RouterLink
          to="/realidad-aumentada"
          class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style="background-image: url('/realidad-aumentada-bg.jpg'), url('/realidadAR.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white text-xl font-bold">Realidad Aumentada</h3>
              <p class="text-gray-200 text-sm mt-1">Fusión del mundo real y virtual</p>
            </div>
          </div>

          <div class="p-5 flex-grow flex flex-col">
            <div class="mb-4 flex items-center">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <img src="/producto2.png" alt="" class="w-6 h-6" />
              </div>
              <span class="text-sm text-teal-700 font-medium">Interacción Avanzada</span>
            </div>

            <p class="text-gray-600 text-sm mb-4">
              Superpón elementos virtuales en el mundo real a través de dispositivos móviles.
              Perfecto para marketing, educación y visualización de productos.
            </p>

            <div class="mt-auto flex items-center text-teal-600 font-medium">
              <span>Explorar servicio</span>
              <ArrowRight
                class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </RouterLink>

        <!-- Tarjeta 3: Desarrollo Personalizado -->
      </div>

      <!-- Sección de características -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <Smartphone class="w-6 h-6 text-teal-600" />
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Multiplataforma</h3>
          <p class="text-gray-600 text-sm">
            Nuestras soluciones funcionan en múltiples dispositivos, desde smartphones hasta
            headsets VR avanzados.
          </p>
        </div>

        <div
          class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <Zap class="w-6 h-6 text-teal-600" />
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Alto Rendimiento</h3>
          <p class="text-gray-600 text-sm">
            Optimizamos cada desarrollo para ofrecer la mejor experiencia con un rendimiento
            excepcional.
          </p>
        </div>

        <div
          class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <Users class="w-6 h-6 text-teal-600" />
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Soporte Continuo</h3>
          <p class="text-gray-600 text-sm">
            Ofrecemos soporte técnico y actualizaciones para mantener tus soluciones siempre al día.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <a
          href="#Contacto"
          class="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
        >
          Solicita una demostración
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>

    <div id="Nosotros" class="pt-1"></div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Smartphone, Zap, Users } from 'lucide-vue-next'
</script>
