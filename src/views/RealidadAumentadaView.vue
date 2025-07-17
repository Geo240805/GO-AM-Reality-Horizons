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
          Realidad Aumentada
        </a>
      </div>
    </nav>

    <!-- Encabezado -->
    <header
      class="px-4 pt-24 pb-8 text-center sm:pt-32 sm:pb-12 bg-gradient-to-b from-gray-100 to-white"
    >
      <h1 class="mb-2 text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl">
        Realidad <span class="text-teal-600">Aumentada</span>
      </h1>
      <div class="w-20 h-1 mx-auto mb-6 bg-teal-500 rounded-full"></div>
      <p class="max-w-3xl px-4 mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
        Creamos experiencias de Realidad Aumentada (AR) personalizadas para cualquier objeto,
        permitiendo una interacción única e innovadora. Escanea el código y descubre cómo
        transformar lo cotidiano en algo extraordinario.
      </p>
    </header>

    <!-- Contenido principal -->
    <main class="max-w-6xl px-4 py-8 mx-auto sm:py-12">
      <!-- Sección de introducción -->
      <section class="mb-12 text-center">
        <h2 class="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          Explora Nuestras Experiencias AR
        </h2>
        <p class="max-w-2xl mx-auto mb-8 text-gray-600">
          Simplemente escanea cualquiera de estos códigos QR con tu dispositivo móvil para
          sumergirte en una experiencia de Realidad Aumentada única. No se requiere ninguna
          aplicación especial, solo la cámara de tu teléfono.
        </p>
      </section>

      <!-- Contenedor de códigos QR -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
        <!-- QR 1 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <div
            class="flex flex-col items-center p-4 m-2 border-2 border-gray-200 border-dashed rounded-xl"
          >
            <div class="relative w-full mb-4">
              <img
                src="/realidadA/QR1.jpg"
                alt="QR 1"
                class="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                class="absolute inset-0 transition-colors duration-300 rounded-lg bg-teal-500/0 group-hover:bg-teal-500/10"
              ></div>
            </div>
            <h3 class="mb-1 text-lg font-bold text-gray-800">Experiencia AR #1</h3>
            <p class="mb-3 text-sm text-gray-600">Escanea para descubrir</p>
            <div class="flex items-center justify-center gap-2 text-teal-600">
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">Escanea con tu cámara</span>
            </div>
          </div>
        </div>

        <!-- QR 2 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <div
            class="flex flex-col items-center p-4 m-2 border-2 border-gray-200 border-dashed rounded-xl"
          >
            <div class="relative w-full mb-4">
              <img
                src="/realidadA/QR2.jpg"
                alt="QR 2"
                class="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                class="absolute inset-0 transition-colors duration-300 rounded-lg bg-teal-500/0 group-hover:bg-teal-500/10"
              ></div>
            </div>
            <h3 class="mb-1 text-lg font-bold text-gray-800">Experiencia AR #2</h3>
            <p class="mb-3 text-sm text-gray-600">Escanea para descubrir</p>
            <div class="flex items-center justify-center gap-2 text-teal-600">
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">Escanea con tu cámara</span>
            </div>
          </div>
        </div>

        <!-- QR 3 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <div
            class="flex flex-col items-center p-4 m-2 border-2 border-gray-200 border-dashed rounded-xl"
          >
            <div class="relative w-full mb-4">
              <img
                src="/realidadA/QR3.jpg"
                alt="QR 3"
                class="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                class="absolute inset-0 transition-colors duration-300 rounded-lg bg-teal-500/0 group-hover:bg-teal-500/10"
              ></div>
            </div>
            <h3 class="mb-1 text-lg font-bold text-gray-800">Experiencia AR #3</h3>
            <p class="mb-3 text-sm text-gray-600">Escanea para descubrir</p>
            <div class="flex items-center justify-center gap-2 text-teal-600">
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">Escanea con tu cámara</span>
            </div>
          </div>
        </div>

        <!-- QR 4 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <div
            class="flex flex-col items-center p-4 m-2 border-2 border-gray-200 border-dashed rounded-xl"
          >
            <div class="relative w-full mb-4">
              <img
                src="/realidadA/QR4.jpg"
                alt="QR 4"
                class="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                class="absolute inset-0 transition-colors duration-300 rounded-lg bg-teal-500/0 group-hover:bg-teal-500/10"
              ></div>
            </div>
            <h3 class="mb-1 text-lg font-bold text-gray-800">Experiencia AR #4</h3>
            <p class="mb-3 text-sm text-gray-600">Escanea para descubrir</p>
            <div class="flex items-center justify-center gap-2 text-teal-600">
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">Escanea con tu cámara</span>
            </div>
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
                  <h3 class="font-semibold text-gray-800">Escanea el código QR</h3>
                  <p class="text-gray-600">
                    Utiliza la cámara de tu dispositivo móvil para escanear cualquiera de los
                    códigos QR mostrados arriba.
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
                  <h3 class="font-semibold text-gray-800">Apunta tu cámara</h3>
                  <p class="text-gray-600">
                    Sigue las instrucciones en pantalla y apunta tu cámara hacia una superficie
                    plana.
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
                  <h3 class="font-semibold text-gray-800">¡Disfruta la experiencia!</h3>
                  <p class="text-gray-600">
                    Interactúa con los elementos 3D que aparecerán en tu pantalla a través de la
                    realidad aumentada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center md:w-1/2">
            <img
              src="@/assets/images/services/realidadAR.jpg"
              alt="Realidad Aumentada"
              class="w-full h-auto max-w-md shadow-md rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>

    <!-- Sección CTA -->
    <section class="px-4 py-12 text-white bg-teal-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="mb-4 text-2xl font-bold sm:text-3xl">¿Quieres tu propia experiencia AR?</h2>
        <p class="mb-8 text-teal-100">
          Podemos crear experiencias de Realidad Aumentada personalizadas para tu negocio o
          proyecto. Contáctanos hoy mismo para discutir tus ideas.
        </p>
        <a
          href="/#Contacto"
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
