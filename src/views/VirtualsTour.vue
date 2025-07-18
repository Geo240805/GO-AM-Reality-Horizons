<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navegación -->
    <nav
      class="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-2 transition-all duration-300 shadow-md sm:px-6 backdrop-blur-lg bg-white/70"
    >
      <RouterLink
        to="/"
        class="flex items-center transition-transform duration-300 hover:scale-105"
      >
        <img
          src="@/assets/logo.png"
          width="60"
          height="60"
          alt="Logo"
          class="h-[50px] sm:h-[60px] w-auto"
        />
      </RouterLink>
      <div class="flex items-center gap-4 md:gap-8">
        <RouterLink
          to="/"
          class="px-3 py-2 text-sm font-bold text-gray-600 uppercase transition-colors duration-300 rounded-lg sm:text-base hover:text-black hover:bg-gray-100/50"
        >
          Inicio
        </RouterLink>
        <a
          href="#"
          class="px-3 py-2 text-sm font-bold text-teal-600 uppercase transition-colors duration-300 rounded-lg sm:text-base hover:text-teal-800 hover:bg-teal-100/50"
        >
          Tours Virtuales
        </a>
      </div>
    </nav>

    <!-- Encabezado -->
    <header
      class="px-4 pt-24 pb-8 text-center sm:pt-32 sm:pb-12 bg-gradient-to-b from-gray-100 to-white"
    >
      <h1 class="mb-2 text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl">
        Tours <span class="text-teal-600">Virtuales</span>
      </h1>
      <div class="w-20 h-1 mx-auto mb-6 bg-teal-500 rounded-full"></div>
      <p class="max-w-3xl px-4 mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
        Explora lugares increíbles desde la comodidad de tu hogar. Nuestros tours virtuales te
        permiten recorrer espacios únicos con una experiencia inmersiva de 360 grados. Descubre,
        aprende y viaja sin límites.
      </p>
    </header>

    <!-- Contenido principal -->
    <main class="max-w-6xl px-4 py-8 mx-auto sm:py-12">
      <!-- Sección de introducción -->
      <section class="mb-12 text-center">
        <h2 class="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          Descubre Nuestros Tours Disponibles
        </h2>
        <p class="max-w-2xl mx-auto mb-8 text-gray-600">
          Cada tour ha sido cuidadosamente diseñado para ofrecerte una experiencia única e
          inmersiva. Haz clic en cualquier tour para comenzar tu aventura virtual.
        </p>
      </section>

      <!-- Contenedor de tours virtuales - Tres tarjetas -->
      <div class="flex justify-center items-center w-full mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl items-stretch">
          <!-- Tour 1 - Museo Histórico -->
          <div class="w-64 mx-auto">
            <RouterLink to="/tours-virtuales/museo-historico" class="block">
              <div
                class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-gray-100 h-full"
              >
                <div
                  class="flex flex-col items-center p-4 m-2 border-2 border-gray-200 border-dashed rounded-xl justify-between h-full"
                >
                  <div
                    class="relative w-full mb-3 flex items-center justify-center h-32 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg"
                  >
                    <div class="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12 text-teal-600 mx-auto mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span class="text-xs text-teal-600 font-medium">360°</span>
                    </div>
                    <div
                      class="absolute inset-0 transition-colors duration-300 rounded-lg bg-teal-500/0 group-hover:bg-teal-500/10"
                    ></div>
                  </div>
                  <h3 class="mb-1 text-base font-bold text-gray-800">Museo Histórico</h3>
                  <span class="text-xs text-gray-500 mb-2">Centro Cultural</span>
                  <p class="mb-3 text-xs text-gray-600 text-center leading-relaxed">
                    Recorre las salas principales y descubre la historia local a través de
                    exposiciones interactivas.
                  </p>
                  <div class="flex items-center justify-center gap-2 text-teal-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="text-xs">Iniciar Tour</span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>

          <!-- Tour 3 - Ciudad -->
          <div class="w-64 mx-auto">
            <RouterLink to="/tours-virtuales/ciudad" class="block">
              <div
                class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-gray-100 h-full"
              >
                <div
                  class="flex flex-col items-center p-4 m-2 border-2 border-gray-200 border-dashed rounded-xl justify-between h-full"
                >
                  <div
                    class="relative w-full mb-3 flex items-center justify-center h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
                  >
                    <div class="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12 text-blue-600 mx-auto mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span class="text-xs text-blue-600 font-medium">360°</span>
                    </div>
                    <div
                      class="absolute inset-0 transition-colors duration-300 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/10"
                    ></div>
                  </div>
                  <h3 class="mb-1 text-base font-bold text-gray-800">Ciudad</h3>
                  <span class="text-xs text-gray-500 mb-2">Una hermosa ciudad moderna</span>
                  <p class="mb-3 text-xs text-gray-600 text-center leading-relaxed">
                    Recorre las calles principales y descubre la arquitectura y los espacios
                    públicos vibrantes.
                  </p>
                  <div class="flex items-center justify-center gap-2 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="text-xs">Iniciar Tour</span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Sección de información adicional -->
      <section class="p-6 mt-16 bg-gray-100 shadow-inner rounded-xl sm:p-8">
        <div class="flex flex-col items-center gap-8 md:flex-row">
          <div class="md:w-1/2">
            <h2 class="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">¿Cómo funciona?</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white bg-teal-500 rounded-full"
                >
                  1
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Selecciona un tour</h3>
                  <p class="text-gray-600">
                    Elige el tour virtual que más te interese de nuestra colección disponible.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white bg-teal-500 rounded-full"
                >
                  2
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Navega libremente</h3>
                  <p class="text-gray-600">
                    Usa tu mouse o dedos para moverte en 360° y explorar cada rincón del espacio.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white bg-teal-500 rounded-full"
                >
                  3
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Descubre información</h3>
                  <p class="text-gray-600">
                    Haz clic en los puntos de interés para obtener información detallada sobre cada
                    elemento.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center md:w-1/2">
            <img
              alt="Tours Virtuales"
              src="/images/tours-virtuales.png"
              class="w-full h-auto max-w-md shadow-md rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>

    <!-- Sección CTA -->
    <section class="px-4 py-12 text-white bg-teal-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas un tour personalizado?</h2>
        <p class="mb-8 text-teal-100">
          Creamos tours virtuales personalizados para tu negocio, museo, galería o cualquier
          espacio. Contáctanos para discutir tu proyecto y llevarlo al siguiente nivel.
        </p>
        <a
          href="/#contacto"
          class="inline-block px-6 py-3 font-bold text-teal-700 transition-colors duration-300 bg-white rounded-lg hover:bg-teal-100"
        >
          Contáctanos
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-4 py-8 text-white bg-teal-800">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div class="flex items-center gap-3">
            <img src="@/assets/logo.png" alt="Logo" class="w-auto h-12" />
            <span class="text-lg font-semibold">GO-AM Reality Horizons</span>
          </div>
          <div class="text-sm text-teal-100">© 2023 Todos los derechos reservados</div>
          <div class="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61568564205069"
              class="text-white transition-colors hover:text-teal-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/goam.realityhorizons/"
              class="text-white transition-colors hover:text-teal-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="https://x.com/go_am_rh"
              class="text-white transition-colors hover:text-teal-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
