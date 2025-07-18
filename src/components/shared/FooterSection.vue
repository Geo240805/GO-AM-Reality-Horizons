<template>
  <footer class="px-4 py-12 text-white bg-gradient-to-br from-teal-800 to-teal-900 sm:py-16">
    <div class="max-w-6xl mx-auto">
      <!-- Contenido principal del footer -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <!-- Sección de la empresa -->
        <div class="lg:col-span-2">
          <div class="flex flex-col items-center md:items-start">
            <img
              src="@/assets/logo-blanco.png"
              alt="GO-AM Reality Horizons Logo"
              class="h-auto w-[120px] sm:w-[150px] mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 class="text-xl font-bold mb-3 text-center md:text-left">GO-AM Reality Horizons</h3>
            <p
              class="text-teal-100 text-sm sm:text-base leading-relaxed text-center md:text-left max-w-md"
            >
              Creamos experiencias inmersivas de Realidad Aumentada y Tours Virtuales que
              transforman la manera de explorar y interactuar con el mundo digital.
            </p>
          </div>
        </div>

        <!-- Navegación -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold mb-4 text-white">Navegación</h4>
          <nav class="space-y-2">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="item.href"
              class="block text-teal-100 text-sm sm:text-base transition-colors duration-300 hover:text-white hover:translate-x-1 transform"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>

        <!-- Contacto -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold mb-4 text-white">Contacto</h4>
          <div class="space-y-3">
            <div class="flex items-center justify-center md:justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-teal-300 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:go.am.contacto@gmail.com"
                class="text-teal-100 text-sm sm:text-base transition-colors duration-300 hover:text-white hover:underline"
              >
                go.am.contacto@gmail.com
              </a>
            </div>

            <!-- Redes sociales -->
            <div class="pt-2">
              <p class="text-sm text-teal-200 mb-3">Síguenos en:</p>
              <div class="flex justify-center md:justify-start gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61568564205069"
                  class="p-2 bg-teal-700 rounded-full transition-all duration-300 hover:bg-teal-600 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook :size="18" />
                </a>
                <a
                  href="https://www.instagram.com/goam.realityhorizons/"
                  class="p-2 bg-teal-700 rounded-full transition-all duration-300 hover:bg-teal-600 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram :size="18" />
                </a>
                <a
                  href="https://x.com/go_am_rh"
                  class="p-2 bg-teal-700 rounded-full transition-all duration-300 hover:bg-teal-600 hover:scale-110 hover:shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter :size="18" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCP2TsOikbvTEOKi0sHDF2DQ"
                  class="p-2 bg-teal-700 rounded-full transition-all duration-300 hover:bg-teal-600 hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <Youtube :size="18" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador -->
      <div class="my-8 sm:my-12">
        <div
          class="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"
        ></div>
      </div>

      <!-- Footer inferior -->
      <div
        class="flex flex-col items-center justify-between gap-4 text-sm sm:text-base lg:flex-row"
      >
        <div class="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
          <p class="text-teal-100">
            © {{ new Date().getFullYear() }} GO-AM Reality Horizons. Todos los derechos reservados.
          </p>
        </div>

        <div class="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            class="text-teal-200 transition-colors duration-300 hover:text-white hover:underline"
          >
            Licencia
          </a>
          <span class="text-teal-400">•</span>
          <a
            href="#"
            class="text-teal-200 transition-colors duration-300 hover:text-white hover:underline"
          >
            Términos
          </a>
          <span class="text-teal-400">•</span>
          <a
            href="#"
            class="text-teal-200 transition-colors duration-300 hover:text-white hover:underline"
          >
            Privacidad
          </a>
        </div>
      </div>

      <!-- Elemento decorativo -->
      <div class="mt-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-700/50 rounded-full">
          <div class="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
          <span class="text-xs text-teal-200 font-medium">Innovando el futuro digital</span>
          <div class="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'

const navItems = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio' },
  { id: 'soluciones', label: 'Soluciones', href: '/#soluciones' },
  { id: 'servicios', label: 'Servicios', href: '/#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '/#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '/#contacto' },
]
</script>
