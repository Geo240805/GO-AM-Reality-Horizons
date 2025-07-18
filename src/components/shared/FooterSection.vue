<template>
  <footer class="px-4 py-8 text-white bg-teal-700 rounded-none sm:py-12">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start sm:gap-12 md:gap-24"
      >
        <img
          src="@/assets/logo-blanco.png"
          alt="Logo"
          class="h-auto w-[100px] sm:w-[150px] transition-transform duration-300 hover:scale-105"
        />

        <div
          class="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-3 sm:gap-8 md:text-left"
        >
          <div class="sm:col-span-2 md:col-span-1">
            <h3 class="mb-2 text-base font-semibold sm:text-lg sm:mb-4">Contacto</h3>
            <p class="text-sm sm:text-base">
              Escríbenos a:
              <a
                href="mailto:go.am.contacto@gmail.com"
                class="ml-1 transition-colors duration-300 hover:underline hover:text-gray-200"
                >go.am.contacto@gmail.com</a
              >
            </p>
          </div>
        </div>
      </div>

      <hr class="my-6 sm:my-8 border-white/20" />

      <div
        class="flex flex-col items-center justify-between gap-4 text-sm md:flex-row sm:text-base"
      >
        <p>© {{ new Date().getFullYear() }} Todos los derechos reservados</p>

        <div class="flex gap-2 sm:gap-4">
          <a href="#" class="transition-colors duration-300 hover:underline hover:text-gray-200"
            >Licencia</a
          >
          <span>|</span>
          <a href="#" class="transition-colors duration-300 hover:underline hover:text-gray-200"
            >Términos</a
          >
          <span>|</span>
          <a href="#" class="transition-colors duration-300 hover:underline hover:text-gray-200"
            >Privacidad</a
          >
        </div>

        <div class="flex gap-3 mt-4 sm:gap-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61568564205069"
            class="transition-all duration-300 hover:text-gray-200 hover:scale-110"
          >
            <Facebook :size="16" class="sm:hidden" />
            <Facebook :size="20" class="hidden sm:block" />
          </a>
          <a
            href="https://www.instagram.com/goam.realityhorizons/"
            class="transition-all duration-300 hover:text-gray-200 hover:scale-110"
          >
            <Instagram :size="16" class="sm:hidden" />
            <Instagram :size="20" class="hidden sm:block" />
          </a>
          <a
            href="https://x.com/go_am_rh"
            class="transition-all duration-300 hover:text-gray-200 hover:scale-110"
          >
            <Twitter :size="16" class="sm:hidden" />
            <Twitter :size="20" class="hidden sm:block" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCP2TsOikbvTEOKi0sHDF2DQ"
            class="transition-all duration-300 hover:text-gray-200 hover:scale-110"
          >
            <Youtube :size="16" class="sm:hidden" />
            <Youtube :size="20" class="hidden sm:block" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'
</script>
