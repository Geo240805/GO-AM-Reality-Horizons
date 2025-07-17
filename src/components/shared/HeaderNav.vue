<template>
  <header class="fixed top-0 left-0 z-50 w-full transition-all duration-300">
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
              <a
                :href="item.href"
                class="relative px-3 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
          <div class="relative ml-2">
            <div>
              <Button
                class="flex items-center gap-2 text-sm font-medium transition-all duration-300 bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 hover:bg-teal-700"
              >
                <UserCircle class="w-4 h-4" />
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { UserCircle } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'

const navItems = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio' },
  { id: 'soluciones', label: 'Soluciones', href: '/#soluciones' },
  { id: 'servicios', label: 'Servicios', href: '/#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '/#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '/#contacto' },
]
</script>
