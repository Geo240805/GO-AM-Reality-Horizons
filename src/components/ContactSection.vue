<template>
  <section
    class="py-8 sm:py-12 px-4 bg-black/50 bg-opacity-80 bg-[url('src/assets/images/bg.jpg')] bg-cover bg-center bg-blend-overlay rounded-none"
  >
    <div class="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
      <div class="flex flex-col gap-6 text-white sm:gap-12">
        <h2 class="text-lg font-bold tracking-wider text-left sm:text-xl md:text-2xl">
          CONTÁCTATE CON NOSOTROS
        </h2>

        <div class="space-y-4 text-left sm:space-y-6">
          <p
            class="flex items-center gap-3 text-sm transition-transform duration-300 sm:text-base hover:translate-x-1"
          >
            <Phone class="flex-shrink-0 text-teal-500" :size="20" />
            +52 9841640454
          </p>
          <p
            class="flex items-center gap-3 text-sm transition-transform duration-300 sm:text-base hover:translate-x-1"
          >
            <Mail class="flex-shrink-0 text-teal-500" :size="20" />
            go.am.contacto@gmail.com
          </p>
          <p
            class="flex items-center gap-3 text-sm transition-transform duration-300 sm:text-base hover:translate-x-1"
          >
            <MapPin class="flex-shrink-0 text-teal-500" :size="20" />
            Av Universidades
          </p>
        </div>

        <div class="flex gap-3 sm:gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61568564205069"
            class="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-teal-700 rounded-lg hover:bg-teal-600 sm:w-10 sm:h-10 hover:scale-110"
          >
            <Facebook :size="20" />
          </a>
          <a
            href="https://www.instagram.com/goam.realityhorizons/"
            class="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-teal-700 rounded-lg hover:bg-teal-600 sm:w-10 sm:h-10 hover:scale-110"
          >
            <Instagram :size="20" />
          </a>
          <a
            href="https://x.com/go_am_rh"
            class="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-teal-700 rounded-lg hover:bg-teal-600 sm:w-10 sm:h-10 hover:scale-110"
          >
            <Twitter :size="20" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCP2TsOikbvTEOKi0sHDF2DQ"
            class="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-teal-700 rounded-lg hover:bg-teal-600 sm:w-10 sm:h-10 hover:scale-110"
          >
            <Youtube :size="20" />
          </a>
        </div>
      </div>

      <form @submit.prevent="enviarFormulario" class="flex flex-col gap-4">
        <input
          v-model="nombre"
          type="text"
          placeholder="Nombre y apellido"
          required
          class="w-full px-3 text-sm text-white transition-all duration-300 border-transparent rounded-t-lg outline-none h-9 sm:h-10 bg-white/10 border-b-3 focus:border-b-teal-700 sm:text-base"
        />
        <input
          v-model="correo"
          type="email"
          placeholder="Correo electrónico"
          required
          class="w-full px-3 text-sm text-white transition-all duration-300 border-transparent rounded-t-lg outline-none h-9 sm:h-10 bg-white/10 border-b-3 focus:border-b-teal-700 sm:text-base"
        />
        <input
          v-model="asunto"
          type="text"
          placeholder="Asunto"
          class="w-full px-3 text-sm text-white transition-all duration-300 border-transparent rounded-t-lg outline-none h-9 sm:h-10 bg-white/10 border-b-3 focus:border-b-teal-700 sm:text-base"
        />
        <textarea
          v-model="mensaje"
          placeholder="Escribe tu mensaje..."
          class="w-full h-24 p-3 text-sm text-white transition-all duration-300 border-transparent rounded-lg outline-none resize-none sm:h-32 bg-white/10 border-b-3 focus:border-b-teal-700 sm:text-base"
        ></textarea>

        <button
          type="submit"
          class="w-full py-2 sm:py-3 bg-teal-700 hover:bg-teal-600 text-white font-medium transition-all duration-300 text-sm sm:text-base rounded-lg hover:shadow-lg hover:scale-[1.01]"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-vue-next'
import { ref } from 'vue'

import { toast } from 'vue-sonner'

const nombre = ref('')
const correo = ref('')
const asunto = ref('')
const mensaje = ref('')

const enviarFormulario = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, {
      nombre: nombre.value,
      correo: correo.value,
      asunto: asunto.value,
      mensaje: mensaje.value,
    })
    if (response.status === 200) {
      // Mostrar mensaje de éxito
      toast.success('Mensaje enviado correctamente')
    } else {
      // Mostrar mensaje de error
      toast.error('Hubo un error al enviar el formulario')
    }

    // Limpiar campos
    nombre.value = ''
    correo.value = ''
    asunto.value = ''
    mensaje.value = ''
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    toast.error('Hubo un error al enviar el formulario')
  }
}
</script>
