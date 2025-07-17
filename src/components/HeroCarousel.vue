<template>
  <header
    id="inicio"
    class="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      v-for="(img, index) in images"
      :key="`bg-${index}`"
      class="absolute inset-0 transition-all duration-1000 ease-in-out bg-center bg-cover"
      :style="{
        backgroundImage: `url('/src/assets/images/carousel/${img}')`,
        opacity: currentImage === index ? 1 : 0,
        transform: `scale(${currentImage === index ? 1 : 1.1})`,
      }"
    ></div>

    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 w-full max-w-4xl px-4 mx-auto text-center">
      <!-- Textos con animación mejorada -->
      <div class="relative">
        <div class="flex flex-col items-center space-y-6 animate-fadeIn" v-if="texts[currentImage]">
          <h2
            class="text-xl font-medium tracking-wider text-white uppercase sm:text-2xl md:text-3xl lg:text-4xl"
          >
            {{ texts[currentImage].content }}
          </h2>

          <!-- Subtítulo -->
          <p class="max-w-2xl mx-auto text-sm text-gray-200 sm:text-base md:text-lg">
            {{ texts[currentImage].subtitle }}
          </p>

          <!-- Botón CTA -->
          <a
            :href="texts[currentImage].ctaLink"
            class="inline-flex items-center gap-2 px-6 py-3 mt-4 font-medium text-white transition-all duration-300 transform bg-teal-600 rounded-lg hover:bg-teal-700 hover:scale-105 hover:shadow-lg"
          >
            {{ texts[currentImage].ctaText }}
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <!-- Controles de navegación -->
    <div class="absolute inset-x-0 z-10 flex items-center justify-between px-4 sm:px-8">
      <button
        @click="prevSlide"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        class="p-2 text-white transition-all duration-300 rounded-full bg-black/30 hover:bg-teal-600/70 sm:p-3 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft :size="20" class="sm:hidden" />
        <ChevronLeft :size="24" class="hidden sm:block" />
      </button>
      <button
        @click="nextSlide"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        class="p-2 text-white transition-all duration-300 rounded-full bg-black/30 hover:bg-teal-600/70 sm:p-3 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight :size="20" class="sm:hidden" />
        <ChevronRight :size="24" class="hidden sm:block" />
      </button>
    </div>

    <!-- Indicadores de diapositivas -->
    <div class="absolute left-0 right-0 z-10 flex justify-center gap-2 bottom-6">
      <button
        v-for="(img, idx) in images"
        :key="`dot-${idx}`"
        @click="goToSlide(idx)"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        :class="`w-3 h-3 rounded-full transition-all duration-300 ${
          currentImage === idx ? 'bg-teal-500 w-8' : 'bg-white/50 hover:bg-white/80'
        }`"
        :aria-label="`Go to slide ${idx + 1}`"
      ></button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-vue-next'

const currentImage = ref<number>(0)
const isPaused = ref<boolean>(false)

interface TextItem {
  content: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

const texts: TextItem[] = [
  {
    content: 'Experiencias inmersivas para tu negocio',
    subtitle:
      'Transformamos espacios físicos en experiencias digitales interactivas que cautivan a tus clientes',
    ctaText: 'Descubre cómo',
    ctaLink: '#servicios',
  },
  {
    content: 'Realidad virtual y aumentada a tu alcance',
    subtitle: 'Tecnología de vanguardia adaptada a las necesidades específicas de tu empresa',
    ctaText: 'Ver soluciones',
    ctaLink: '#servicios',
  },
  {
    content: 'Transforma tu visión en realidad',
    subtitle: 'Diseñamos y desarrollamos experiencias digitales que superan las expectativas',
    ctaText: 'Contáctanos',
    ctaLink: '#contacto',
  },
]

const images = [
  'carousel-hombre-explorando-metaverso-01.webp',
  'carousel-mujer-visualizando-arquitectura-vr-02.webp',
  'carousel-diseno-planos-arquitectonicos-vr-03.webp',
]

const nextSlide = (): void => {
  currentImage.value = (currentImage.value + 1) % images.length
}

const prevSlide = (): void => {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length
}

const goToSlide = (slideNumber: number): void => {
  if (slideNumber >= 0 && slideNumber < images.length) {
    currentImage.value = slideNumber
  }
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
