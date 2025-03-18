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
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-[calc(100%-3rem)]'"
    >
      <!-- Botón para abrir/cerrar sidebar -->
      <button
        @click="toggleSidebar"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-r-lg shadow-lg transition-all duration-300"
        :class="sidebarOpen ? 'translate-x-0' : 'translate-x-0'"
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

      <!-- Contenido de la sidebar -->
      <div
        class="bg-gray-800/90 backdrop-blur-md w-64 h-full shadow-lg border-r border-teal-600/30 flex flex-col"
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
                class="w-full flex items-center p-2 rounded-lg text-gray-300 hover:bg-teal-600/20 hover:text-white transition-colors duration-200"
              >
                <span class="mr-3 text-lg">🏛️</span>
                <span>Entrada Principal</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="p-4 border-t border-gray-700">
          <div class="text-xs text-gray-400">
            <p>Usa el ratón para navegar</p>
            <p>Haz clic en los puntos para cambiar de ubicación</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Model Viewer -->
    <model-viewer
      id="visor"
      src="/tour/entradapincipal.glb"
      alt="Tour Virtual 360"
      camera-controls
      auto-rotate
      environment-image="neutral"
      shadow-intensity="1"
      exposure="1.2"
      class="w-full h-full"
      @load="onModelLoad"
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
            class="w-6 h-6 rounded-full bg-teal-500 group-hover:scale-125 transition-transform duration-300 pulse-animation"
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
      class="fixed top-4 right-0 w-80 max-w-[calc(100vw-4rem)] bg-gray-800/90 backdrop-blur-md text-white p-5 rounded-l-lg shadow-lg border-l-4 border-teal-500 transition-all duration-500 overflow-y-auto max-h-[calc(100vh-2rem)]"
      :class="showInfo ? 'translate-x-0' : 'translate-x-full'"
    >
      <button
        @click="toggleInfo"
        class="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
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
            <li>Arrastra para mirar alrededor</li>
            <li>Rueda del ratón para hacer zoom</li>
            <li>Haz clic en los puntos brillantes para cambiar de ubicación</li>
            <li>Usa la barra lateral para acceder rápidamente a diferentes áreas</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(true)
const showInfo = ref(false)
const sidebarOpen = ref(true)

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

    // En dispositivos móviles, cerrar la sidebar por defecto
    if (window.innerWidth < 768) {
      sidebarOpen.value = false
    }
  } catch (error) {
    console.error(error)
  }
})

// Usar Vue Router para la navegación
const router = useRouter()

const goToBiblioteca = () => {
  router.push('/biblioteca')
}

const goToHome = () => {
  router.push('/')
}

const toggleInfo = () => {
  showInfo.value = !showInfo.value
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
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
</style>
