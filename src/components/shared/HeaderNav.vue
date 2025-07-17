<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="/"
          class="relative z-10 flex items-center transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
          aria-label="Ir a inicio"
        >
          <img
            src="@/assets/logo.png"
            alt="Logo"
            class="size-10 w-auto transition-transform duration-300"
          />
        </a>

        <!-- Navegación Desktop -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-4">
          <ul class="flex items-center space-x-1 lg:space-x-2">
            <li v-for="(item, index) in navItems" :key="index">
              <a
                :href="item.href"
                class="'relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300', 'hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2', text-gray-700"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>

          <!-- Botón de inicio de sesión o Avatar con Dropdown -->
          <div class="relative ml-4"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio' },
  { id: 'soluciones', label: 'Soluciones', href: '/#soluciones' },
  { id: 'servicios', label: 'Servicios', href: '/#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '/#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '/#contacto' },
]
</script>
