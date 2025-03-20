<template>
  <div class="relative w-full h-screen overflow-hidden bg-gray-900">
    <!-- Pantalla de carga -->
    <div
      v-if="loading"
      class="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black/80"
    >
      <div
        class="w-12 h-12 border-4 border-gray-400 border-t-teal-500 rounded-full animate-spin"
      ></div>
      <p class="mt-4 text-white text-lg">Cargando tour virtual...</p>
    </div>

    <!-- Sidebar de navegación -->
    <div
      class="fixed top-0 left-0 h-full z-40 transition-all duration-300 flex"
      :class="[
        // En desktop: comportamiento normal
        !isMobile && (sidebarOpen ? 'translate-x-0' : '-translate-x-[calc(100%-3rem)]'),
        // En móvil: completamente visible o completamente oculto
        isMobile && (sidebarOpen ? 'translate-x-0' : '-translate-x-full'),
      ]"
    >
      <!-- Botón para abrir/cerrar sidebar (solo visible en desktop) -->
      <button
        v-if="!isMobile"
        @click="toggleSidebar"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-r-lg shadow-lg transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-transform duration-300"
          :class="sidebarOpen ? 'rotate-180' : ''"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Botón para cerrar sidebar (solo visible en móvil) -->
      <button
        v-if="isMobile"
        @click="toggleSidebar"
        class="absolute right-4 top-4 text-gray-400 hover:text-white p-2"
        aria-label="Cerrar menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Contenido de la sidebar -->
      <div
        class="bg-gray-800/90 backdrop-blur-md w-64 sm:w-72 md:w-80 h-full shadow-lg border-r border-teal-600/30 flex flex-col"
      >
        <div class="p-4 border-b border-gray-700">
          <h2 class="text-teal-500 text-xl font-bold">Tour Virtual</h2>
          <p class="text-gray-300 text-sm mt-1">Explora nuestras instalaciones</p>
        </div>

        <div class="p-4 flex-1 overflow-y-auto">
          <h3 class="text-white text-sm uppercase tracking-wider mb-3">Navegación</h3>

          <ul class="space-y-2">
            <li>
              <button
                @click="goToHome"
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">🏠</span>
                <span>Volver al inicio</span>
              </button>
            </li>
            <li>
              <button
                @click="toggleInfo"
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">ℹ️</span>
                <span>Información</span>
              </button>
            </li>
            <li>
              <button
                @click="resetView"
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">🔄</span>
                <span>Reiniciar vista</span>
              </button>
            </li>
          </ul>

          <h3 class="text-white text-sm uppercase tracking-wider mt-6 mb-3">Ubicaciones</h3>

          <ul class="space-y-2">
            <li>
              <button
                @click="goToBiblioteca"
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">📚</span>
                <span>Biblioteca</span>
              </button>
            </li>
            <li>
              <button
                @click="goToEntrada"
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">🏛️</span>
                <span>Entrada Principal</span>
              </button>
            </li>
            <li>
              <button
                @click="goToDentroBiblioteca"
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">🏛️</span>
                <span>Dentro de la biblioteca</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="p-4 border-t border-gray-700">
          <div class="text-xs text-gray-400">
            <p class="hidden sm:block">Usa el ratón para navegar</p>
            <p class="sm:hidden">Usa los dedos para navegar</p>
            <p>Haz clic en los puntos para cambiar de ubicación</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay para cerrar sidebar en móvil -->
    <div
      v-if="isMobile && sidebarOpen"
      class="fixed inset-0 bg-black/50 z-30"
      @click="toggleSidebar"
    ></div>

    <!-- Model Viewer -->
    <model-viewer
      id="visor"
      src="/tour/dentrobiblioteca.glb"
      alt="Tour Virtual 360"
      camera-controls
      auto-rotate
      environment-image="neutral"
      shadow-intensity="1"
      exposure="1.2"
      class="w-full h-full"
      @load="onModelLoad"
      touch-action="pan-y"
    >
      <!-- Hotspot anclado -->
      <template v-slot:hotspot-1>
        <button
          data-position="3.5 0.1 -2"
          data-normal="0 1 0"
          slot="hotspot-1"
          @click="goToBiblioteca"
          class="hotspot group"
        >
          <div
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-500 group-hover:scale-125 transition-transform duration-300 pulse-animation"
          ></div>
          <div
            class="absolute bottom-full mb-2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap"
          >
            Biblioteca
          </div>
        </button>
      </template>
    </model-viewer>

    <!-- Panel de información -->
    <div
      class="fixed top-4 right-0 w-[85vw] sm:w-80 max-w-[calc(100vw-4rem)] bg-gray-800/90 backdrop-blur-md text-white p-5 rounded-l-lg shadow-lg border-l-4 border-teal-500 transition-all duration-500 overflow-y-auto max-h-[calc(100vh-2rem)]"
      :class="showInfo ? 'translate-x-0' : 'translate-x-full'"
    >
      <button
        @click="toggleInfo"
        class="absolute top-2 right-2 text-gray-400 hover:text-white text-xl p-2 touch-manipulation"
      >
        ×
      </button>

      <h2 class="text-teal-400 text-xl font-bold mb-3">Información del Tour</h2>

      <div class="space-y-4">
        <p class="text-gray-300">
          Explora nuestras instalaciones en 3D. Navega libremente por el espacio y descubre todas
          las áreas disponibles.
        </p>

        <div class="bg-gray-700/50 p-3 rounded-lg">
          <h3 class="font-semibold text-teal-300 mb-2">Cómo navegar:</h3>
          <ul class="text-sm space-y-2 text-gray-300 list-disc pl-5">
            <li class="hidden sm:block">Arrastra para mirar alrededor</li>
            <li class="hidden sm:block">Rueda del ratón para hacer zoom</li>
            <li class="sm:hidden">Desliza para mirar alrededor</li>
            <li class="sm:hidden">Pellizca para hacer zoom</li>
            <li>Haz clic en los puntos brillantes para cambiar de ubicación</li>
            <li>Usa la barra lateral para acceder rápidamente a diferentes áreas</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Controles flotantes para móvil -->
    <div class="fixed bottom-4 right-4 flex flex-col gap-2 sm:hidden z-40">
      <!-- Botón para abrir sidebar (solo en móvil) -->
      <button
        @click="toggleSidebar"
        class="bg-teal-600 p-3 rounded-full shadow-lg text-white hover:bg-teal-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <button
        @click="resetView"
        class="bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-white hover:bg-teal-600/80 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
      <button
        @click="toggleInfo"
        class="bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-white hover:bg-teal-600/80 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(true)
const showInfo = ref(false)
const sidebarOpen = ref(true) // Por defecto abierto en desktop
const isMobile = ref(false)

// Verificar si es dispositivo móvil
const checkMobile = () => {
  const wasMobile = isMobile.value
  isMobile.value = window.innerWidth < 640

  // Si cambia de móvil a desktop
  if (wasMobile && !isMobile.value) {
    sidebarOpen.value = true // En desktop, sidebar abierto por defecto
  }
  // Si cambia de desktop a móvil
  else if (!wasMobile && isMobile.value) {
    sidebarOpen.value = false // En móvil, sidebar cerrado por defecto
  }
}

// Cargar el script externo de model-viewer
function loadModelViewerScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Error cargando model-viewer'))
    document.head.appendChild(script)
  })
}

// Inicializar el script cuando el componente se monta
onMounted(async () => {
  try {
    await loadModelViewerScript()
    console.log('Model Viewer cargado!')

    // Verificar tamaño de pantalla y ajustar sidebar
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Prevenir zoom en dispositivos táctiles
    document.addEventListener(
      'touchmove',
      function (event) {
        if (event.scale !== 1) {
          event.preventDefault()
        }
      },
      { passive: false },
    )

    // Mejorar experiencia táctil
    const modelViewer = document.querySelector('#visor')
    if (modelViewer) {
      modelViewer.addEventListener(
        'touchstart',
        function (e) {
          if (e.touches.length > 1) {
            e.preventDefault() // Permitir gestos nativos del model-viewer
          }
        },
        { passive: false },
      )
    }
  } catch (error) {
    console.error(error)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

// Usar Vue Router para la navegación
const router = useRouter()

const goToBiblioteca = () => {
  router.push('/biblioteca')
  if (isMobile.value) {
    sidebarOpen.value = false // Cerrar sidebar en móvil después de navegar
  }
}

const goToHome = () => {
  router.push('/')
  if (isMobile.value) {
    sidebarOpen.value = false // Cerrar sidebar en móvil después de navegar
  }
}

const goToEntrada = () => {
  router.push('/entrada')
  if (isMobile.value) {
    sidebarOpen.value = false // Cerrar sidebar en móvil después de navegar
  }
}

const goToDentroBiblioteca = () => {
  router.push('/dentroBiblioteca')
  if (isMobile.value) {
    sidebarOpen.value = false // Cerrar sidebar en móvil después de navegar
  }
}

const toggleInfo = () => {
  showInfo.value = !showInfo.value
  // En móvil, cerrar sidebar al abrir info
  if (isMobile.value && showInfo.value) {
    sidebarOpen.value = false
  }
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  // En móvil, cerrar info al abrir sidebar
  if (isMobile.value && sidebarOpen.value) {
    showInfo.value = false
  }
}

const resetView = () => {
  const viewer = document.querySelector('#visor')
  if (viewer) {
    viewer.resetTurntableRotation()
    viewer.cameraOrbit = '0deg 75deg 105%'
  }
}

const onModelLoad = () => {
  loading.value = false
}
</script>

<style>
/* Estilos que no se pueden lograr fácilmente con Tailwind */
.hotspot {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
}

.pulse-animation {
  box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(20, 184, 166, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
  }
}

/* Asegúrate de que model-viewer tenga el fondo correcto */
model-viewer {
  --poster-color: transparent;
  background-color: #111827;
}

/* Mejoras para dispositivos táctiles */
@media (max-width: 640px) {
  .hotspot .pulse-animation {
    /* Hotspots más grandes en móvil para facilitar la interacción táctil */
    transform: scale(1.5);
  }

  /* Prevenir comportamientos no deseados en táctil */
  model-viewer {
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  /* Mejorar área de toque para botones */
  button {
    min-height: 44px;
    min-width: 44px;
  }

  /* Asegurar que los elementos táctiles tengan suficiente espacio */
  .touch-manipulation {
    touch-action: manipulation;
  }
}

/* Prevenir scroll overscroll en iOS */
html,
body {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  overscroll-behavior: none;
}

/* Mejorar rendimiento de animaciones */
.transition-all,
.transition-transform,
.transition-colors {
  will-change: transform;
}
</style>
