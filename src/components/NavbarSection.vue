<template>
  <header>
    <!-- Skip link para accesibilidad -->
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

    <nav
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-2 bg-white/90 shadow-md' : 'py-4 bg-white/70',
      ]"
      aria-label="Navegación principal"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a
            href="/#inicio"
            class="relative z-10 flex items-center transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
            aria-label="Ir a inicio"
          >
            <img
              src="/LogoDerecha.png"
              width="60"
              height="60"
              alt="Logo"
              class="h-[45px] sm:h-[55px] w-auto transition-transform duration-300"
            />
          </a>

          <!-- Navegación Desktop -->
          <div class="hidden md:flex items-center space-x-1 lg:space-x-4">
            <ul class="flex items-center space-x-1 lg:space-x-2">
              <li v-for="(item, index) in navItems" :key="index">
                <a
                  :href="item.href"
                  :class="[
                    'relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300',
                    'hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2',
                    activeSection === item.id ? 'text-teal-600 nav-active' : 'text-gray-700',
                  ]"
                  @click="setActiveSection(item.id)"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>

            <!-- Botón de inicio de sesión o Avatar con Dropdown -->
            <div class="relative ml-4">
              <div v-if="!user">
                <button
                  class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  @click="$emit('login')"
                >
                  <UserCircle class="h-4 w-4" />
                  Iniciar Sesión
                </button>
              </div>
              <div v-else class="relative">
                <button
                  @click="toggleDropdown"
                  @keydown.escape="closeDropdown"
                  class="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-expanded="isDropdownOpen"
                  aria-haspopup="true"
                >
                  <img
                    :src="user.photoURL || '/person.png'"
                    alt="Foto de perfil"
                    class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </button>

                <!-- Dropdown Menu -->
                <transition name="dropdown">
                  <div
                    v-show="isDropdownOpen"
                    class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                    @keydown.escape="closeDropdown"
                  >
                    <div class="px-4 py-3 border-b border-gray-100">
                      <p class="text-sm font-medium text-gray-900">
                        {{ user.displayName || 'Usuario' }}
                      </p>
                      <p class="text-xs text-gray-500 truncate">{{ user.email }}</p>
                    </div>
                    <button
                      @click="logout"
                      class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-300 focus:outline-none focus:bg-red-50"
                    >
                      <span class="flex items-center">
                        <LogOut class="h-4 w-4 mr-2" />
                        Cerrar Sesión
                      </span>
                    </button>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <!-- Botón de menú móvil -->
          <div class="md:hidden flex items-center">
            <button
              @click="toggleMenu"
              aria-label="Abrir menú"
              aria-expanded="isMenuOpen"
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <Menu v-if="!isMenuOpen" class="text-gray-700 h-6 w-6" />
              <X v-else class="text-gray-700 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Menú móvil -->
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transform transition-all duration-300 ease-in-out"
      >
        <div class="container mx-auto px-4 py-3">
          <ul class="space-y-1">
            <li v-for="(item, index) in navItems" :key="index">
              <a
                :href="item.href"
                :class="[
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300',
                  activeSection === item.id
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:bg-gray-50',
                ]"
                @click="handleNavClick(item.id)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>

          <!-- Botón de inicio de sesión en móvil -->
          <div class="mt-4 pt-4 border-t border-gray-100">
            <div v-if="!user">
              <button
                class="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base font-medium"
                @click="$emit('login')"
              >
                <UserCircle class="h-5 w-5" />
                Iniciar Sesión
              </button>
            </div>
            <div v-else class="flex items-center justify-between px-4 py-3">
              <div class="flex items-center space-x-3">
                <img
                  :src="user.photoURL || '/default-avatar.png'"
                  alt="Foto de perfil"
                  class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p class="text-sm font-medium text-gray-900">
                    {{ user.displayName || 'Usuario' }}
                  </p>
                  <p class="text-xs text-gray-500 truncate">{{ user.email }}</p>
                </div>
              </div>
              <button
                @click="logout"
                class="text-red-600 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-300"
                aria-label="Cerrar sesión"
              >
                <LogOut class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Menu, X, UserCircle, LogOut } from 'lucide-vue-next'
import { auth } from '../config/firebaseConfig' // Ajusta la ruta según tu configuración
import { onAuthStateChanged, signOut } from 'firebase/auth'

// Estado
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const user = ref(null)
const scrolled = ref(false)
const activeSection = ref('inicio')

// Elementos de navegación - Asegurando que los IDs coincidan con los IDs reales en el HTML
const navItems = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio' },
  { id: 'soluciones', label: 'Soluciones', href: '/#soluciones' },
  { id: 'Servicios', label: 'Servicios', href: '/#Servicios' }, // Cambiado a 'Servicios' con S mayúscula
  { id: 'Nosotros', label: 'Nosotros', href: '/#Nosotros' }, // Cambiado a 'Nosotros' con N mayúscula
  { id: 'Contacto', label: 'Contacto', href: '/#Contacto' }, // Cambiado a 'Contacto' con C mayúscula
]

// Métodos
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    isDropdownOpen.value = false
  }
}

const toggleDropdown = (event) => {
  event.stopPropagation()
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

// Método para establecer manualmente la sección activa al hacer clic
const setActiveSection = (sectionId) => {
  activeSection.value = sectionId
}

// Método para manejar el clic en los enlaces de navegación en móvil
const handleNavClick = (sectionId) => {
  setActiveSection(sectionId)
  isMenuOpen.value = false
}

// Mejorado: Detección de secciones activas
const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  // Detectar sección activa con mejor precisión
  // Primero intentamos con los IDs exactos
  for (const item of navItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 0) {
        activeSection.value = item.id
        return
      }
    }
  }

  // Si no encontramos ninguna sección, intentamos con IDs en minúsculas
  // (por si hay inconsistencia en mayúsculas/minúsculas)
  for (const item of navItems) {
    const lowercaseId = item.id.toLowerCase()
    const element = document.getElementById(lowercaseId)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 0) {
        activeSection.value = item.id
        return
      }
    }
  }

  // Si estamos al inicio de la página, activamos "inicio"
  if (window.scrollY < 100) {
    activeSection.value = 'inicio'
  }
}

// Cerrar dropdown al hacer clic fuera
const setupClickOutside = () => {
  const handleClickOutside = (event) => {
    const avatarButton = document.querySelector('[aria-haspopup="true"]')

    if (
      isDropdownOpen.value &&
      avatarButton &&
      !event.composedPath().includes(avatarButton) &&
      !event
        .composedPath()
        .some((el) => el.classList && el.classList.contains('dropdown-enter-active'))
    ) {
      closeDropdown()
    }
  }

  document.addEventListener('click', handleClickOutside)

  // Limpiar el event listener cuando el componente se desmonte
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
}

// Monitorear el estado de autenticación
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser
})

const logout = async () => {
  try {
    await signOut(auth)
    isDropdownOpen.value = false
    isMenuOpen.value = false
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Inicializar estado
  setupClickOutside() // Configurar detección de clics fuera del dropdown

  // Inicializar la sección activa basada en la URL actual
  const hash = window.location.hash
  if (hash) {
    const sectionId = hash.substring(1) // Quitar el # del inicio
    // Buscar coincidencia exacta primero
    const matchingItem = navItems.find((item) => item.id === sectionId)
    if (matchingItem) {
      activeSection.value = matchingItem.id
    } else {
      // Si no hay coincidencia exacta, intentar con case-insensitive
      const caseInsensitiveMatch = navItems.find(
        (item) => item.id.toLowerCase() === sectionId.toLowerCase(),
      )
      if (caseInsensitiveMatch) {
        activeSection.value = caseInsensitiveMatch.id
      }
    }
  }

  // Agregar event listeners para los enlaces de navegación
  navItems.forEach((item) => {
    const linkId = item.id.replace('#', '')
    const links = document.querySelectorAll(`a[href*="${linkId}"]`)
    links.forEach((link) => {
      link.addEventListener('click', () => {
        activeSection.value = item.id
      })
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

defineEmits(['login'])
</script>

<style scoped>
/* Skip link para accesibilidad */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #fff;
  color: #000;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}

/* Animación para el menú móvil */
.md\:hidden.absolute {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Indicador de sección activa */
.nav-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #14b8a6; /* Color teal-500 */
  border-radius: 2px;
}

/* Animaciones para el dropdown */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
