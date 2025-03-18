<template>
  <section id="dispositivos-compatibles" class="py-12 sm:py-16 px-4 bg-gray-50 relative">
    <!-- Botón para volver a la sección de soluciones -->
    <div class="max-w-6xl mx-auto mb-8">
      <a
        href="/#soluciones"
        class="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Volver a Soluciones
      </a>
    </div>

    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
        Dispositivos <span class="text-teal-600">Compatibles</span>
      </h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
        Nuestras soluciones están diseñadas para funcionar en una amplia gama de dispositivos, desde
        smartphones hasta los headsets VR más avanzados del mercado.
      </p>

      <!-- Categorías de dispositivos -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="(categoria, index) in categorias"
          :key="index"
          @click="categoriaActiva = categoria.id"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            categoriaActiva === categoria.id
              ? 'bg-teal-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200',
          ]"
        >
          {{ categoria.nombre }}
        </button>
      </div>

      <!-- Grid de dispositivos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(dispositivo, index) in dispositivosFiltrados"
          :key="index"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="dispositivo.imagen"
              :alt="dispositivo.nombre"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute top-3 right-3">
              <span class="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                {{ dispositivo.categoria }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-lg font-bold text-gray-800">{{ dispositivo.nombre }}</h3>
              <div class="flex items-center">
                <span
                  v-if="dispositivo.recomendado"
                  class="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full"
                  >Recomendado</span
                >
              </div>
            </div>

            <p class="text-gray-600 text-sm mb-4">{{ dispositivo.descripcion }}</p>

            <div class="space-y-2 mb-4">
              <div
                v-for="(caracteristica, i) in dispositivo.caracteristicas"
                :key="i"
                class="flex items-center text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-teal-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{ caracteristica }}</span>
              </div>
            </div>

            <div class="flex justify-between items-center pt-3 border-t border-gray-100">
              <div class="flex items-center">
                <div class="flex">
                  <span v-for="i in 5" :key="i" class="text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      :class="
                        i <= dispositivo.estrellas ? 'fill-current' : 'stroke-current fill-none'
                      "
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </span>
                </div>
                <span class="ml-1 text-xs text-gray-500">{{ dispositivo.estrellas }}/5</span>
              </div>
              <a
                :href="dispositivo.enlace"
                target="_blank"
                class="text-teal-600 font-medium text-sm flex items-center hover:text-teal-700 transition-colors duration-300"
              >
                <span>Más detalles</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de compatibilidad -->
      <div class="mt-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 text-white">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0 md:mr-8">
            <h3 class="text-xl font-bold mb-3">¿No encuentras tu dispositivo?</h3>
            <p class="text-teal-100 mb-4">
              Estamos constantemente ampliando nuestra compatibilidad. Contáctanos para verificar si
              tu dispositivo es compatible o para solicitar soporte específico.
            </p>
            <a href="/#Contacto">
              <button
                class="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-100 transition-colors duration-300 shadow-md"
              >
                Consultar compatibilidad
              </button>
            </a>
          </div>
          <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 class="font-medium mb-3 text-center">Compatibilidad por plataforma</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium">Windows</div>
                  <div class="text-xs text-teal-100">100% compatible</div>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium">iOS/Android</div>
                  <div class="text-xs text-teal-100">95% compatible</div>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium">macOS</div>
                  <div class="text-xs text-teal-100">90% compatible</div>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium">Web</div>
                  <div class="text-xs text-teal-100">85% compatible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Categorías de dispositivos
const categorias = [
  { id: 'todos', nombre: 'Todos los dispositivos' },
  { id: 'vr', nombre: 'Headsets VR' },
  { id: 'ar', nombre: 'Dispositivos AR' },
  { id: 'movil', nombre: 'Smartphones' },
  { id: 'pc', nombre: 'PC/Consolas' },
]

const categoriaActiva = ref('todos')

// Datos de dispositivos
const dispositivos = [
  {
    nombre: 'Meta Quest 3',
    categoria: 'vr',
    imagen: '/dispositivos/Meta-Quest-1.webp?height=300&width=400',
    descripcion: 'Headset VR autónomo con seguimiento de manos y controladores avanzados.',
    caracteristicas: [
      'Resolución 2064x2208 por ojo',
      'Procesador Snapdragon XR2 Gen 2',
      'Seguimiento de manos y controladores',
    ],
    recomendado: true,
    estrellas: 4.8,
    enlace: 'https://www.meta.com/mx/quest/quest-3/',
  },
  {
    nombre: 'HTC Vive Pro 2',
    categoria: 'vr',
    imagen: '/dispositivos/HTC-VIVE-PRO-2.webp?height=300&width=400',
    descripcion: 'Headset VR premium con resolución 5K y campo de visión de 120 grados.',
    caracteristicas: [
      'Resolución combinada 4896x2448',
      'Campo de visión de 120°',
      'Audio espacial 3D',
    ],
    recomendado: true,
    estrellas: 4.5,
    enlace: 'https://business.vive.com/mx/product/vive-pro2/',
  },
  {
    nombre: 'Apple Vision Pro',
    categoria: 'ar',
    imagen: '/dispositivos/Appe-Vision-Pro.webp?height=300&width=400',
    descripcion: 'Dispositivo de realidad mixta con seguimiento ocular y gestos de manos.',
    caracteristicas: [
      'Pantallas micro-OLED 4K',
      'Seguimiento ocular avanzado',
      'Control por gestos y voz',
    ],
    recomendado: true,
    estrellas: 4.7,
    enlace: 'https://www.apple.com/apple-vision-pro/',
  },
  {
    nombre: 'Microsoft HoloLens 2',
    categoria: 'ar',
    imagen: '/dispositivos/gldn-HoloLens2-B04.avif?height=300&width=400',
    descripcion: 'Gafas de realidad aumentada empresarial con mapeo espacial avanzado.',
    caracteristicas: [
      'Campo de visión de 52°',
      'Seguimiento de manos y ojos',
      'Mapeo espacial en tiempo real',
    ],
    recomendado: false,
    estrellas: 4.3,
    enlace: 'https://learn.microsoft.com/es-mx/hololens/',
  },
  {
    nombre: 'Samsung Galaxy S23 Ultra',
    categoria: 'movil',
    imagen: '/dispositivos/Samsung-Galaxy-S23-Ultra.webp?height=300&width=400',
    descripcion: 'Smartphone premium con capacidades AR avanzadas y alto rendimiento.',
    caracteristicas: [
      'Snapdragon 8 Gen 2',
      'Pantalla Dynamic AMOLED 2X',
      'Soporte ARCore optimizado',
    ],
    recomendado: true,
    estrellas: 4.6,
    enlace: 'https://www.samsung.com/mx/smartphones/galaxy-s25-ultra/',
  },
  {
    nombre: 'iPhone 15 Pro',
    categoria: 'movil',
    imagen: '/dispositivos/iPhone-15-Pro.webp?height=300&width=400',
    descripcion: 'Smartphone con chip A17 Pro y capacidades de AR/VR mejoradas.',
    caracteristicas: ['Chip A17 Pro', 'LiDAR Scanner', 'Soporte ARKit avanzado'],
    recomendado: true,
    estrellas: 4.7,
    enlace: 'https://www.ishopmixup.com/iphone-15-pro/p',
  },
  {
    nombre: 'NVIDIA RTX 4090',
    categoria: 'pc',
    imagen: '/dispositivos/rtx-4090.webp?height=300&width=400',
    descripcion: 'Tarjeta gráfica de alto rendimiento para experiencias VR sin compromisos.',
    caracteristicas: ['24GB GDDR6X', 'DLSS 3.0 para VR', 'Renderizado VR de alta fidelidad'],
    recomendado: true,
    estrellas: 4.9,
    enlace: 'https://www.nvidia.com/es-la/geforce/graphics-cards/40-series/',
  },
  {
    nombre: 'PlayStation VR2',
    categoria: 'pc',
    imagen: '/dispositivos/PlayStation-VR2.webp?height=300&width=400',
    descripcion: 'Headset VR para PlayStation 5 con feedback háptico y seguimiento ocular.',
    caracteristicas: [
      'Pantallas OLED 2000x2040 por ojo',
      'Seguimiento ocular',
      'Controladores con feedback háptico',
    ],
    recomendado: false,
    estrellas: 4.4,
    enlace: 'https://www.playstation.com/es-mx/ps-vr2/',
  },
  {
    nombre: 'Magic Leap 2',
    categoria: 'ar',
    imagen: '/dispositivos/Magic-Leap2.webp?height=300&width=400',
    descripcion: 'Gafas AR empresariales con campo de visión ampliado y diseño compacto.',
    caracteristicas: [
      'Campo de visión vertical de 45°',
      'Oscurecimiento dinámico',
      'Peso reducido de 260g',
    ],
    recomendado: false,
    estrellas: 4.2,
    enlace: 'https://www.magicleap.com/magic-leap-2',
  },
]

// Filtrar dispositivos según la categoría seleccionada
const dispositivosFiltrados = computed(() => {
  if (categoriaActiva.value === 'todos') {
    return dispositivos
  }
  return dispositivos.filter((d) => d.categoria === categoriaActiva.value)
})
</script>

<style scoped>
/* Animaciones adicionales */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Estilo para las estrellas */
.fill-current.text-yellow-400 {
  color: #facc15;
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.fixed.bottom-6.right-6 {
  animation: pulse 3s infinite;
}

.fixed.bottom-6.right-6:hover {
  animation: none;
}
</style>
