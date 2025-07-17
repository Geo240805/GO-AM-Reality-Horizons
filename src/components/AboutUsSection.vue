<template>
  <section id="nosotros" class="relative py-16 overflow-hidden sm:py-24">
    <!-- Fondo con patrón sutil -->
    <div class="absolute inset-0 bg-gray-800 opacity-95">
      <div
        class="absolute inset-0 opacity-10"
        :style="{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
        }"
      ></div>
    </div>

    <div class="relative z-10 px-4 md:px-8 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <!-- Encabezado con diseño mejorado -->
        <div class="mb-12 text-center">
          <span
            class="inline-block px-4 py-1 mb-3 text-sm font-medium text-teal-300 rounded-full bg-teal-900/50"
          >
            Nuestra Empresa
          </span>
          <h2 class="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            ¿Quiénes Somos?
          </h2>
          <div class="w-24 h-1 mx-auto mb-6 bg-teal-500 rounded-full"></div>
        </div>

        <div class="grid items-center grid-cols-1 gap-12 md:grid-cols-12">
          <!-- Contenido principal -->
          <div class="md:col-span-7 lg:col-span-8">
            <div
              class="p-6 border shadow-xl bg-gray-700/50 backdrop-blur-sm sm:p-8 rounded-2xl border-gray-600/30"
            >
              <h3 class="flex items-center mb-6 text-xl font-bold text-teal-400 sm:text-2xl">
                <Users class="mr-3 text-teal-500" />
                Nuestra Identidad
              </h3>

              <p class="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
                En <span class="font-medium text-teal-300">GO-AM Reality Horizons</span>, somos una
                empresa especializada en el diseño y desarrollo de entornos de realidad virtual y
                realidad aumentada. Nos enfocamos en transformar espacios físicos y digitales en
                experiencias inmersivas únicas, adaptadas a las necesidades de nuestros clientes.
              </p>

              <div class="p-4 mb-6 border-l-4 border-teal-500 bg-teal-900/30 rounded-xl">
                <h4 class="flex items-center mb-2 font-bold text-teal-300">
                  <Target class="w-5 h-5 mr-2" />
                  Nuestra Misión
                </h4>
                <p class="text-sm text-gray-200 sm:text-base">
                  Combinar innovación tecnológica con creatividad, permitiendo a empresas,
                  instituciones y organizaciones de diversos sectores visualizar, interactuar y
                  optimizar sus entornos de manera revolucionaria.
                </p>
              </div>

              <p class="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
                Desde simulaciones empresariales hasta entornos virtuales educativos o
                promocionales, llevamos las ideas al siguiente nivel con soluciones que combinan lo
                tangible y lo digital.
              </p>

              <div class="flex flex-wrap gap-3 mb-6">
                <span class="px-3 py-1 text-xs text-gray-200 rounded-full bg-gray-600/50"
                  >Innovación</span
                >
                <span class="px-3 py-1 text-xs text-gray-200 rounded-full bg-gray-600/50"
                  >Creatividad</span
                >
                <span class="px-3 py-1 text-xs text-gray-200 rounded-full bg-gray-600/50"
                  >Tecnología</span
                >
                <span class="px-3 py-1 text-xs text-gray-200 rounded-full bg-gray-600/50"
                  >Experiencia</span
                >
                <span class="px-3 py-1 text-xs text-gray-200 rounded-full bg-gray-600/50"
                  >Personalización</span
                >
              </div>

              <p class="text-lg italic font-medium text-center text-teal-300">
                "En GO-AM Reality Horizons, la realidad no tiene límites, solo posibilidades."
              </p>
            </div>
          </div>

          <!-- Imagen y elementos visuales -->
          <div class="md:col-span-5 lg:col-span-4">
            <div class="relative">
              <!-- Imagen principal con efectos mejorados -->
              <div
                class="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-500/50 transform hover:scale-[1.02] transition-all duration-500"
              >
                <img
                  src="/src/assets/images/about/team.jpg"
                  alt="Equipo GO-AM Reality Horizons"
                  class="object-cover w-full h-auto"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"
                ></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h3 class="text-lg font-bold text-white">Nuestro Equipo</h3>
                  <p class="text-sm text-gray-200">Profesionales apasionados por la tecnología</p>
                </div>
              </div>

              <!-- Elementos decorativos -->
              <div
                class="absolute w-24 h-24 border-t-4 border-l-4 -top-4 -left-4 border-teal-400/30 rounded-tl-3xl"
              ></div>
              <div
                class="absolute w-24 h-24 border-b-4 border-r-4 -bottom-4 -right-4 border-teal-400/30 rounded-br-3xl"
              ></div>

              <!-- Tarjeta de valores -->
              <div
                class="absolute -bottom-8 -left-8 bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-700 w-48 transform rotate-[-5deg] z-20 hidden md:block"
              >
                <h4 class="mb-2 text-sm font-bold text-teal-400">Nuestros Valores</h4>
                <ul class="space-y-1 text-xs text-gray-300">
                  <li class="flex items-center">
                    <Check class="w-3 h-3 mr-1 text-teal-500" /> Excelencia
                  </li>
                  <li class="flex items-center">
                    <Check class="w-3 h-3 mr-1 text-teal-500" /> Innovación
                  </li>
                  <li class="flex items-center">
                    <Check class="w-3 h-3 mr-1 text-teal-500" /> Compromiso
                  </li>
                  <li class="flex items-center">
                    <Check class="w-3 h-3 mr-1 text-teal-500" /> Colaboración
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-16 text-center">
              <a
                href="#Contacto"
                class="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 transform bg-teal-600 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:scale-105"
              >
                Conoce más sobre nosotros
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Check, Target, Users } from 'lucide-vue-next'
</script>

<style scoped>
/* Animación sutil para los elementos estadísticos */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-gray-700\/50 {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}
</style>
