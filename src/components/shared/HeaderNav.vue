<template>
  <header
    :class="[
      'fixed top-0 left-0 z-50 w-full transition-all duration-300',
      isScrolled ? 'bg-white/60 backdrop-blur-md' : 'bg-transparent',
    ]"
  >
    <div class="container px-4 py-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <a
          href="/"
          class="relative z-10 flex items-center transition-all duration-300 rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Ir a inicio"
        >
          <img
            src="@/assets/logo.png"
            alt="Logo"
            class="w-auto transition-transform duration-300 size-10"
          />
        </a>

        <div class="items-center hidden space-x-1 md:flex lg:space-x-4">
          <ul class="flex items-center space-x-1 lg:space-x-2">
            <li v-for="(item, index) in navItems" :key="index">
              <router-link
                :to="item.href"
                class="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                :class="[
                  isScrolled
                    ? item.id === 'inicio'
                      ? 'text-teal-600'
                      : 'text-gray-800'
                    : 'text-white',
                  'hover:text-teal-600',
                ]"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
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

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
