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
          to="/tours-virtuales"
          class="px-3 py-2 text-sm font-bold text-gray-600 uppercase transition-colors duration-300 rounded-lg sm:text-base hover:text-black hover:bg-gray-100/50"
        >
          ← Volver a Tours
        </RouterLink>
        <RouterLink
          to="/"
          class="px-3 py-2 text-sm font-bold text-gray-600 uppercase transition-colors duration-300 rounded-lg sm:text-base hover:text-black hover:bg-gray-100/50"
        >
          Inicio
        </RouterLink>
      </div>
    </nav>

    <!-- Encabezado del Tour -->
    <header
      class="px-4 pt-24 pb-8 text-center sm:pt-32 sm:pb-12 bg-gradient-to-b from-purple-100 to-white"
    >
      <div class="max-w-4xl mx-auto">
        <div
          class="inline-flex items-center justify-center w-16 h-16 mb-4 bg-purple-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 class="mb-2 text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl">
          Galería de <span class="text-purple-600">Arte</span>
        </h1>
        <div class="w-20 h-1 mx-auto mb-6 bg-purple-500 rounded-full"></div>
        <p class="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
          Sumérgete en el mundo del arte contemporáneo y explora obras de artistas locales e
          internacionales en un espacio moderno y elegante.
        </p>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="max-w-7xl px-4 py-8 mx-auto sm:py-12">
      <!-- Tour Virtual -->
      <section class="mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div
            class="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-b border-gray-200"
          >
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Tour Virtual 360°</h2>
                <p class="text-gray-600 text-sm sm:text-base">
                  Explora cada obra de arte con detalle. Haz clic en las obras para información
                  adicional.
                </p>
              </div>
              <div class="flex items-center gap-2 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
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
                <span class="text-sm font-medium">Experiencia Artística</span>
              </div>
            </div>
          </div>

          <!-- Sketchfab Embed -->
          <div class="relative w-full" style="padding-bottom: 56.25%; height: 0">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/10f77973b69744b197894b825c209afc/embed"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- Información del Tour -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Sobre esta Exposición</h3>
            <div class="prose prose-gray max-w-none">
              <p class="text-gray-600 mb-4">
                La Galería de Arte presenta una cuidada selección de obras contemporáneas que
                reflejan las tendencias artísticas actuales. Este espacio moderno alberga tanto
                artistas emergentes como consagrados.
              </p>
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Colecciones destacadas:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <svg
                    class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Pintura contemporánea latinoamericana
                </li>
                <li class="flex items-start gap-2">
                  <svg
                    class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Esculturas modernas y instalaciones
                </li>
                <li class="flex items-start gap-2">
                  <svg
                    class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Fotografía artística contemporánea
                </li>
                <li class="flex items-start gap-2">
                  <svg
                    class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Arte digital y nuevos medios
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Información lateral -->
        <div class="space-y-6">
          <div
            class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200"
          >
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Experiencia Artística</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Acércate a las obras para ver detalles</li>
              <li>• Lee las descripciones de cada pieza</li>
              <li>• Explora diferentes salas temáticas</li>
              <li>• Disfruta de la iluminación profesional</li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="px-4 py-8 text-white bg-teal-800 mt-12">
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
