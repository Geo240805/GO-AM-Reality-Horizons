<template>
  <section id="soluciones" class="px-4 py-12 sm:py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
        Nuestras <span class="text-teal-600">Soluciones</span> Tecnológicas
      </h2>
      <p class="max-w-3xl mx-auto mb-10 text-sm text-center text-gray-600 sm:text-base">
        Exploramos las fronteras de la realidad virtual y aumentada para crear experiencias
        inmersivas que transforman la manera en que interactuamos con el mundo digital.
      </p>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 sm:gap-6">
        <!-- Item 1: Grande -->
        <div
          class="relative flex flex-col justify-between p-6 overflow-hidden text-white transition-all duration-300 md:col-span-2 md:row-span-2 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl sm:p-8 group hover:shadow-xl"
        >
          <div
            class="absolute inset-0 transition-opacity duration-300 bg-center bg-cover opacity-20 group-hover:opacity-30"
            style="background-image: url('/src/assets/images/vr-experience.webp')"
          ></div>
          <div class="relative z-10">
            <h3 class="mb-2 text-xl font-bold sm:text-2xl">Experiencias VR Inmersivas</h3>
            <p class="mb-4 text-sm text-teal-100 sm:text-base">
              Creamos entornos virtuales completamente interactivos que transportan a los usuarios a
              nuevas realidades, perfectos para entrenamiento, educación o entretenimiento.
            </p>
          </div>
          <div class="relative z-10 flex items-end justify-between">
            <span class="px-3 py-1 text-xs rounded-full sm:text-sm bg-white/20"
              >Tecnología Avanzada</span
            >
          </div>
        </div>

        <!-- Item 2 -->
        <div
          class="flex flex-col justify-between p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-lg group"
        >
          <div>
            <div
              class="flex items-center justify-center w-12 h-12 mb-4 text-teal-600 transition-colors duration-300 bg-teal-100 rounded-xl group-hover:bg-teal-600 group-hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg font-bold text-gray-800">Desarrollo Multiplataforma</h3>
            <p class="text-sm text-gray-600">
              Nuestras soluciones funcionan en múltiples dispositivos, desde smartphones hasta
              headsets VR avanzados.
            </p>
          </div>
          <div class="flex items-center mt-4 text-sm font-medium text-teal-600">
            <a href="/dispositivos">
              <span>Ver dispositivos compatibles</span>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- Item 3 -->
        <div
          class="flex flex-col justify-between p-6 text-white transition-all duration-300 bg-gray-900 rounded-2xl group hover:shadow-xl"
        >
          <div>
            <div
              class="flex items-center justify-center w-12 h-12 mb-4 text-teal-400 bg-teal-600/30 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg font-bold">Personalización Total</h3>
            <p class="text-sm text-gray-400">
              Adaptamos cada proyecto a las necesidades específicas de tu empresa o institución.
            </p>
          </div>
          <div class="flex items-center mt-4 text-sm font-medium text-teal-400">
            <a href="/#Contacto">
              <span>Solicitar demo</span>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- Item 4 -->
        <div
          class="flex flex-col justify-between p-6 transition-all duration-300 border border-gray-200 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl group hover:shadow-lg"
        >
          <div>
            <div
              class="flex items-center justify-center w-12 h-12 mb-4 text-teal-600 bg-white shadow-sm rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg font-bold text-gray-800">Seguridad Garantizada</h3>
            <p class="text-sm text-gray-600">
              Todos nuestros desarrollos cumplen con los más altos estándares de seguridad y
              privacidad.
            </p>
          </div>
        </div>

        <!-- Item 5 -->
        <div
          class="flex flex-col justify-between p-6 transition-all duration-300 border border-teal-100 bg-teal-50 rounded-2xl group hover:shadow-lg"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-gray-800">Estadísticas</h3>
            <span class="px-2 py-1 text-xs text-teal-700 bg-teal-100 rounded-full">
              {{ new Date().getFullYear() }}
            </span>
          </div>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1 text-sm">
                <span class="text-gray-600">Satisfacción del cliente</span>
                <span class="font-medium text-teal-700">98%</span>
              </div>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="h-2 bg-teal-500 rounded-full" style="width: 98%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1 text-sm">
                <span class="text-gray-600">Proyectos completados</span>
                <span class="font-medium text-teal-700">45+</span>
              </div>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="h-2 bg-teal-500 rounded-full" style="width: 85%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1 text-sm">
                <span class="text-gray-600">Tiempo de desarrollo</span>
                <span class="font-medium text-teal-700">-20%</span>
              </div>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="h-2 bg-teal-500 rounded-full" style="width: 70%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
