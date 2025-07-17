<template>
  <header
    id="inicio"
    class="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Imágenes de fondo con transición mejorada -->
    <div
      v-for="(_, index) in texts"
      :key="`bg-${index + 1}`"
      class="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
      :style="{
        backgroundImage: `url('/prueba${index + 1}.${index + 1 === 1 ? 'jpg' : 'png'}')`,
        opacity: currentImage === index + 1 ? 1 : 0,
        transform: `scale(${currentImage === index + 1 ? 1 : 1.1})`,
      }"
    ></div>

    <!-- Overlay con gradiente para mejorar legibilidad -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
      <!-- Textos con animación mejorada -->
      <div v-for="text in texts" :key="`text-${text.id}`" class="relative">
        <div
          v-if="currentImage === text.id"
          class="flex flex-col items-center space-y-6 animate-fadeIn"
        >
          <h2
            class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-wider"
          >
            {{ text.content }}
          </h2>

          <!-- Subtítulo -->
          <p class="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {{ text.subtitle }}
          </p>

          <!-- Botón CTA -->
          <a
            :href="text.ctaLink"
            class="mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2 font-medium"
          >
            {{ text.ctaText }}
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

    <!-- Controles de navegación -->
    <div class="absolute inset-x-0 flex justify-between items-center px-4 sm:px-8 z-10">
      <button
        @click="prevSlide"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        class="bg-black/30 hover:bg-teal-600/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft :size="20" class="sm:hidden" />
        <ChevronLeft :size="24" class="hidden sm:block" />
      </button>
      <button
        @click="nextSlide"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        class="bg-black/30 hover:bg-teal-600/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight :size="20" class="sm:hidden" />
        <ChevronRight :size="24" class="hidden sm:block" />
      </button>
    </div>

    <!-- Indicadores de diapositivas -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
      <button
        v-for="n in texts.length"
        :key="`dot-${n}`"
        @click="goToSlide(n)"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        :class="`w-3 h-3 rounded-full transition-all duration-300 ${
          currentImage === n ? 'bg-teal-500 w-8' : 'bg-white/50 hover:bg-white/80'
        }`"
        :aria-label="`Go to slide ${n}`"
      ></button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-vue-next'

const currentImage = ref<number>(1)
const isPaused = ref<boolean>(false)

interface TextItem {
  id: number
  content: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

const texts: TextItem[] = [
  {
    id: 1,
    content: 'Experiencias inmersivas para tu negocio',
    subtitle:
      'Transformamos espacios físicos en experiencias digitales interactivas que cautivan a tus clientes',
    ctaText: 'Descubre cómo',
    ctaLink: '#Servicios',
  },
  {
    id: 2,
    content: 'Realidad virtual y aumentada a tu alcance',
    subtitle: 'Tecnología de vanguardia adaptada a las necesidades específicas de tu empresa',
    ctaText: 'Ver soluciones',
    ctaLink: '#Servicios',
  },
  {
    id: 3,
    content: 'Transforma tu visión en realidad',
    subtitle: 'Diseñamos y desarrollamos experiencias digitales que superan las expectativas',
    ctaText: 'Contáctanos',
    ctaLink: '#Contacto',
  },
]

const nextSlide = (): void => {
  currentImage.value = currentImage.value === texts.length ? 1 : currentImage.value + 1
}

const prevSlide = (): void => {
  currentImage.value = currentImage.value === 1 ? texts.length : currentImage.value - 1
}

const goToSlide = (slideNumber: number): void => {
  currentImage.value = slideNumber
}

const pauseSlideshow = (): void => {
  isPaused.value = true
}

const resumeSlideshow = (): void => {
  isPaused.value = false
}

let interval: ReturnType<typeof setInterval> | undefined

const startInterval = (): void => {
  interval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 6000)
}

onMounted(() => {
  startInterval()
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
