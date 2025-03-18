<template>
  <footer class="bg-teal-700 text-white py-8 sm:py-12 px-4 rounded-none">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 sm:gap-12 md:gap-24"
      >
        <img
          src="/logoblanco.png"
          alt="Logo"
          class="h-auto w-[100px] sm:w-[150px] transition-transform duration-300 hover:scale-105"
        />

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left"
        >
          <div>
            <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Plataforma</h3>
            <ul class="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Directus Core</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Plataforma de Datos Abiertos</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Lista de Funciones</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Mercado</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Nube</h3>
            <ul class="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="/registro"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Registro</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Precios</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Estado del Sistema</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline transition-colors duration-300 hover:text-gray-200"
                  >Programa de Socios</a
                >
              </li>
            </ul>
          </div>

          <div class="sm:col-span-2 md:col-span-1">
            <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Contacto</h3>
            <p class="text-sm sm:text-base">
              Escríbenos a:
              <a
                href="mailto:go.am.contacto@gmail.com"
                class="hover:underline ml-1 transition-colors duration-300 hover:text-gray-200"
                >go.am.contacto@gmail.com</a
              >
            </p>
          </div>
        </div>
      </div>

      <hr class="my-6 sm:my-8 border-white/20" />

      <div
        class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base"
      >
        <p>© 2023 Todos los derechos reservados</p>

        <div class="flex gap-2 sm:gap-4">
          <a href="#" class="hover:underline transition-colors duration-300 hover:text-gray-200"
            >Licencia</a
          >
          <span>|</span>
          <a href="#" class="hover:underline transition-colors duration-300 hover:text-gray-200"
            >Términos</a
          >
          <span>|</span>
          <a href="#" class="hover:underline transition-colors duration-300 hover:text-gray-200"
            >Privacidad</a
          >
        </div>

        <div class="flex gap-3 sm:gap-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61568564205069"
            class="hover:text-gray-200 transition-all duration-300 hover:scale-110"
          >
            <Facebook :size="16" class="sm:hidden" />
            <Facebook :size="20" class="hidden sm:block" />
          </a>
          <a
            href="https://www.instagram.com/goam.realityhorizons/"
            class="hover:text-gray-200 transition-all duration-300 hover:scale-110"
          >
            <Instagram :size="16" class="sm:hidden" />
            <Instagram :size="20" class="hidden sm:block" />
          </a>
          <a
            href="https://x.com/go_am_rh"
            class="hover:text-gray-200 transition-all duration-300 hover:scale-110"
          >
            <Twitter :size="16" class="sm:hidden" />
            <Twitter :size="20" class="hidden sm:block" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCP2TsOikbvTEOKi0sHDF2DQ"
            class="hover:text-gray-200 transition-all duration-300 hover:scale-110"
          >
            <Youtube :size="16" class="sm:hidden" />
            <Youtube :size="20" class="hidden sm:block" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'
</script>
