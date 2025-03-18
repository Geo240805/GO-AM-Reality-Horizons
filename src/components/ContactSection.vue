<template>
  <section
    class="py-8 sm:py-12 px-4 bg-black/50 bg-opacity-80 bg-[url('/bg.jpg')] bg-cover bg-center bg-blend-overlay rounded-none"
  >
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div class="text-white flex flex-col gap-6 sm:gap-12">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-left">
          CONTÁCTATE CON NOSOTROS
        </h2>

        <div class="space-y-4 sm:space-y-6 text-left">
          <p
            class="flex items-center gap-3 text-sm sm:text-base transition-transform duration-300 hover:translate-x-1"
          >
            <Phone class="text-teal-500 flex-shrink-0" :size="20" />
            +52 9841640454
          </p>
          <p
            class="flex items-center gap-3 text-sm sm:text-base transition-transform duration-300 hover:translate-x-1"
          >
            <Mail class="text-teal-500 flex-shrink-0" :size="20" />
            go.am.contacto@gmail.com
          </p>
          <p
            class="flex items-center gap-3 text-sm sm:text-base transition-transform duration-300 hover:translate-x-1"
          >
            <MapPin class="text-teal-500 flex-shrink-0" :size="20" />
            Av Universidades
          </p>
        </div>

        <div class="flex gap-3 sm:gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61568564205069"
            class="bg-teal-700 hover:bg-teal-600 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110"
          >
            <Facebook :size="20" />
          </a>
          <a
            href="https://www.instagram.com/goam.realityhorizons/"
            class="bg-teal-700 hover:bg-teal-600 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110"
          >
            <Instagram :size="20" />
          </a>
          <a
            href="https://x.com/go_am_rh"
            class="bg-teal-700 hover:bg-teal-600 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110"
          >
            <Twitter :size="20" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCP2TsOikbvTEOKi0sHDF2DQ"
            class="bg-teal-700 hover:bg-teal-600 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110"
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
          class="w-full h-9 sm:h-10 px-3 bg-white/10 border-b-3 border-transparent focus:border-b-teal-700 outline-none text-white transition-all duration-300 text-sm sm:text-base rounded-t-lg"
        />
        <input
          v-model="correo"
          type="email"
          placeholder="Correo electrónico"
          required
          class="w-full h-9 sm:h-10 px-3 bg-white/10 border-b-3 border-transparent focus:border-b-teal-700 outline-none text-white transition-all duration-300 text-sm sm:text-base rounded-t-lg"
        />
        <input
          v-model="asunto"
          type="text"
          placeholder="Asunto"
          class="w-full h-9 sm:h-10 px-3 bg-white/10 border-b-3 border-transparent focus:border-b-teal-700 outline-none text-white transition-all duration-300 text-sm sm:text-base rounded-t-lg"
        />
        <textarea
          v-model="mensaje"
          placeholder="Escribe tu mensaje..."
          class="w-full h-24 sm:h-32 p-3 bg-white/10 border-b-3 border-transparent focus:border-b-teal-700 outline-none text-white transition-all duration-300 resize-none text-sm sm:text-base rounded-lg"
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

<script setup>
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'
import axios from 'axios'
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

    console.log('Formulario enviado:', response.data)
    toast.success('Mensaje enviado correctamente')

    // Limpiar campos
    nombre.value = ''
    correo.value = ''
    asunto.value = ''
    mensaje.value = ''
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un error al enviar el formulario')
  }
}
</script>
