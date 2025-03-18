<template>
  <section id="Nosotros" class="py-16 sm:py-24 relative overflow-hidden">
    <!-- Fondo con patrón sutil -->
    <div class="absolute inset-0 bg-gray-800 opacity-95">
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);
        "
      ></div>
    </div>

    <div class="relative z-10 px-4 md:px-8 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <!-- Encabezado con diseño mejorado -->
        <div class="text-center mb-12">
          <span
            class="inline-block px-4 py-1 bg-teal-900/50 text-teal-300 rounded-full text-sm font-medium mb-3"
          >
            Nuestra Empresa
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Quiénes Somos?
          </h2>
          <div class="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <!-- Contenido principal -->
          <div class="md:col-span-7 lg:col-span-8">
            <div
              class="bg-gray-700/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-600/30"
            >
              <h3 class="text-xl sm:text-2xl font-bold text-teal-400 mb-6 flex items-center">
                <Users class="mr-3 text-teal-500" />
                Nuestra Identidad
              </h3>

              <p class="text-gray-200 mb-6 leading-relaxed text-sm sm:text-base">
                En <span class="text-teal-300 font-medium">GO-AM Reality Horizons</span>, somos una
                empresa especializada en el diseño y desarrollo de entornos de realidad virtual y
                realidad aumentada. Nos enfocamos en transformar espacios físicos y digitales en
                experiencias inmersivas únicas, adaptadas a las necesidades de nuestros clientes.
              </p>

              <div class="p-4 bg-teal-900/30 rounded-xl mb-6 border-l-4 border-teal-500">
                <h4 class="text-teal-300 font-bold mb-2 flex items-center">
                  <Target class="mr-2 h-5 w-5" />
                  Nuestra Misión
                </h4>
                <p class="text-gray-200 text-sm sm:text-base">
                  Combinar innovación tecnológica con creatividad, permitiendo a empresas,
                  instituciones y organizaciones de diversos sectores visualizar, interactuar y
                  optimizar sus entornos de manera revolucionaria.
                </p>
              </div>

              <p class="text-gray-200 mb-6 leading-relaxed text-sm sm:text-base">
                Desde simulaciones empresariales hasta entornos virtuales educativos o
                promocionales, llevamos las ideas al siguiente nivel con soluciones que combinan lo
                tangible y lo digital.
              </p>

              <div class="flex flex-wrap gap-3 mb-6">
                <span class="bg-gray-600/50 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >Innovación</span
                >
                <span class="bg-gray-600/50 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >Creatividad</span
                >
                <span class="bg-gray-600/50 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >Tecnología</span
                >
                <span class="bg-gray-600/50 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >Experiencia</span
                >
                <span class="bg-gray-600/50 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >Personalización</span
                >
              </div>

              <p class="text-teal-300 font-medium text-lg italic text-center">
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
                  src="/titixd.jpg"
                  alt="Equipo GO-AM Reality Horizons"
                  class="w-full h-auto object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"
                ></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h3 class="text-white text-lg font-bold">Nuestro Equipo</h3>
                  <p class="text-gray-200 text-sm">Profesionales apasionados por la tecnología</p>
                </div>
              </div>

              <!-- Elementos decorativos -->
              <div
                class="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-teal-400/30 rounded-tl-3xl"
              ></div>
              <div
                class="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teal-400/30 rounded-br-3xl"
              ></div>

              <!-- Tarjeta de valores -->
              <div
                class="absolute -bottom-8 -left-8 bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-700 w-48 transform rotate-[-5deg] z-20 hidden md:block"
              >
                <h4 class="text-teal-400 font-bold text-sm mb-2">Nuestros Valores</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li class="flex items-center">
                    <Check class="h-3 w-3 mr-1 text-teal-500" /> Excelencia
                  </li>
                  <li class="flex items-center">
                    <Check class="h-3 w-3 mr-1 text-teal-500" /> Innovación
                  </li>
                  <li class="flex items-center">
                    <Check class="h-3 w-3 mr-1 text-teal-500" /> Compromiso
                  </li>
                  <li class="flex items-center">
                    <Check class="h-3 w-3 mr-1 text-teal-500" /> Colaboración
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-16 text-center">
              <a
                href="#Contacto"
                class="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
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

<script setup>
import { Users, Target, Check, ArrowRight } from 'lucide-vue-next'
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
