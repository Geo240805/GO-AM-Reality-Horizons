<template>
  <section id="Servicios" class="py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
        <p class="text-gray-600 max-w-3xl mx-auto text-lg">
          Ofrecemos soluciones innovadoras de realidad virtual y aumentada para transformar la forma
          en que interactúas con el mundo digital.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Servicio 1 -->
        <div
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div class="h-48 bg-teal-600 relative overflow-hidden">
            <img
              src="/vr-development.jpg"
              alt="Desarrollo VR"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-white text-xl font-bold">Desarrollo VR</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              Creamos experiencias de realidad virtual inmersivas y personalizadas para diversos
              sectores, desde educación hasta entretenimiento.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Entornos 3D interactivos</span>
              </li>
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Compatibilidad multiplataforma</span>
              </li>
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Experiencias personalizadas</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Servicio 2 -->
        <div
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div class="h-48 bg-teal-600 relative overflow-hidden">
            <img
              src="/ar-solutions.jpg"
              alt="Soluciones AR"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-white text-xl font-bold">Soluciones AR</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              Desarrollamos aplicaciones de realidad aumentada que enriquecen el mundo real con
              elementos digitales interactivos.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Reconocimiento de objetos</span>
              </li>
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Integración con dispositivos móviles</span>
              </li>
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Experiencias interactivas</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Servicio 3 -->
        <div
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div class="h-48 bg-teal-600 relative overflow-hidden">
            <img
              src="/virtual-tours.jpg"
              alt="Tours Virtuales"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-white text-xl font-bold">Tours Virtuales</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              Creamos recorridos virtuales inmersivos para propiedades, museos, campus
              universitarios y más.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Navegación 360°</span>
              </li>
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Puntos de interés interactivos</span>
              </li>
              <li class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-teal-500 mr-2" />
                <span>Integración con sitios web</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'
</script>
