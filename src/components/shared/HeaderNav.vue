<template>
  <header
    :class="[
      'fixed top-0 left-0 z-50 w-full transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent',
    ]"
  >
    <div class="container px-4 py-3 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="/"
          class="relative z-10 flex items-center transition-all duration-300 rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Ir a inicio"
        >
          <img
            src="@/assets/logo.png"
            alt="GO-AM Reality Horizons Logo"
            class="w-auto h-10 sm:h-12 transition-transform duration-300 hover:scale-105"
          />
        </a>

        <!-- Navegación Desktop -->
        <nav class="items-center hidden md:flex lg:space-x-2">
          <ul class="flex items-center space-x-1 lg:space-x-2">
            <li v-for="(item, index) in navItems" :key="index">
              <a
                :href="item.href"
                class="relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                :class="[
                  activeSection === item.id
                    ? 'text-teal-600'
                    : isScrolled
                      ? 'text-gray-800 hover:text-teal-600'
                      : 'text-white hover:text-teal-300',
                  'hover:bg-white/10',
                ]"
                @click="closeMenu"
              >
                {{ item.label }}
                <!-- Indicador de hover -->
                <span
                  class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"
                ></span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Botón de menú móvil -->
        <button
          @click="toggleMenu"
          class="relative z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-300 md:hidden focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md"
          :class="[isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white']"
          aria-label="Abrir menú de navegación"
          :aria-expanded="isMenuOpen"
        >
          <!-- Líneas del hamburger -->
          <span
            :class="[
              'block w-6 h-0.5 transition-all duration-300 transform',
              isMenuOpen ? 'rotate-45 translate-y-1.5' : '',
              isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white',
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 transition-all duration-300',
              isMenuOpen ? 'opacity-0' : 'opacity-100',
              isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white',
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 transition-all duration-300 transform',
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : '',
              isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white',
            ]"
          ></span>
        </button>
      </div>
    </div>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 md:hidden z-40"
      >
        <nav class="container px-4 py-6 mx-auto sm:px-6">
          <ul class="space-y-1">
            <li v-for="(item, index) in navItems" :key="index">
              <a
                :href="item.href"
                @click="closeMenu"
                class="flex items-center px-4 py-3 text-base font-medium text-gray-800 transition-all duration-300 rounded-lg hover:bg-teal-50 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 group"
                :class="[item.id === 'inicio' ? 'text-teal-600 bg-teal-50' : '']"
              >
                <!-- Icono decorativo -->
                <span
                  class="w-2 h-2 mr-3 bg-teal-500 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                ></span>
                {{ item.label }}
              </a>
            </li>
          </ul>

          <!-- Información adicional en móvil -->
          <div class="pt-4 mt-4 border-t border-gray-200">
            <a
              href="mailto:go.am.contacto@gmail.com"
              class="flex items-center justify-center px-4 py-3 text-sm text-gray-600 transition-colors duration-300 rounded-lg hover:text-teal-600 hover:bg-teal-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 mr-2"
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
              Contacto
            </a>
          </div>
        </nav>
      </div>
    </Transition>

    <!-- Overlay para cerrar menú -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        @click="closeMenu"
        class="fixed inset-0 bg-black/30 md:hidden z-30"
      ></div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const navItems = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio' },
  { id: 'soluciones', label: 'Soluciones', href: '/#soluciones' },
  { id: 'servicios', label: 'Servicios', href: '/#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '/#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '/#contacto' },
]

const activeSection = ref('inicio')
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevenir scroll del body cuando el menú está abierto
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'unset'
}

// Cerrar menú al redimensionar ventana
const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu()
  }
}

// Cerrar menú con tecla Escape
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)

  // Intersection logic para detectar la sección activa
  const sectionIds = navItems.map((item) => item.id)
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[]

  let ticking = false
  const updateActiveSection = () => {
    let found = false
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      const rect = section.getBoundingClientRect()
      if (rect.top <= 120 && rect.bottom > 120) {
        activeSection.value = section.id
        found = true
        break
      }
    }
    if (!found) {
      activeSection.value = 'inicio'
    }
  }
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
      ticking = true
    }
  }
  window.addEventListener('scroll', onScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
  // Limpiar overflow del body
  document.body.style.overflow = 'unset'
})
</script>
