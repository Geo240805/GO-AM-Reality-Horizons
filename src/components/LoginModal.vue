<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
      @click="handleBackdropClick"
    >
      <!-- Backdrop con blur -->
      <div class="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>

      <!-- Modal container con animación -->
      <div
        class="relative bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all sm:max-w-lg"
        @click.stop
      >
        <!-- Elementos decorativos -->
        <div
          class="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full translate-x-1/2 translate-y-1/2"
        ></div>

        <!-- Header -->
        <div
          class="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-4 flex justify-between items-center"
        >
          <h3 class="text-xl font-bold flex items-center">
            <UserCircle class="mr-2 h-5 w-5" />
            Iniciar Sesión
          </h3>
          <button
            @click="$emit('close')"
            class="text-white hover:text-teal-100 transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Cerrar"
          >
            <X :size="20" />
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 sm:p-8 relative">
          <!-- Opciones de inicio de sesión social -->
          <div class="mb-6">
            <button
              @click="handleGoogleLogin"
              class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                class="w-5 h-5"
              />
              Continuar con Google
            </button>
          </div>

          <!-- Separador -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                >O continúa con</span
              >
            </div>
          </div>

          <!-- Formulario de inicio de sesión -->
          <form @submit.prevent="handleLogin" class="space-y-5">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Correo electrónico
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail class="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                  required
                  :class="{ 'border-red-500 focus:ring-red-500': emailError }"
                />
              </div>
              <p v-if="emailError" class="mt-1 text-sm text-red-500">{{ emailError }}</p>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Contraseña
                </label>
                <a
                  href="#"
                  class="text-xs text-teal-600 hover:text-teal-800 transition-colors font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock class="h-5 w-5 text-gray-400" />
                </div>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  class="w-full pl-10 pr-10 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                  :class="{ 'border-red-500 focus:ring-red-500': passwordError }"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Eye v-if="showPassword" class="h-5 w-5" />
                  <EyeOff v-else class="h-5 w-5" />
                </button>
              </div>
              <p v-if="passwordError" class="mt-1 text-sm text-red-500">{{ passwordError }}</p>
            </div>

            <div class="flex items-center">
              <input
                type="checkbox"
                id="remember"
                v-model="remember"
                class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded transition-colors"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Mantener sesión iniciada
              </label>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              :disabled="isLoading"
            >
              <Loader2 v-if="isLoading" class="animate-spin mr-2 h-5 w-5" />
              <span>{{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}</span>
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              ¿No tienes una cuenta?
              <RouterLink
                to="/registro"
                @click.prevent="switchToRegister"
                class="text-teal-600 hover:text-teal-800 font-medium transition-colors"
              >
                Regístrate
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { X, UserCircle, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-vue-next'
import { RouterLink, useRouter } from 'vue-router'
import { auth, provider, signInWithCustomToken, signInWithPopup } from '../config/firebaseConfig.js'
import { toast } from 'vue-sonner'
import axios from 'axios'
import { signInWithEmailAndPassword } from 'firebase/auth'
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()

const emit = defineEmits(['close', 'login', 'register'])

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)
const isLoading = ref(false)
const emailError = ref('')
const passwordError = ref('')

const validateForm = () => {
  let isValid = true
  emailError.value = ''
  passwordError.value = ''

  if (!email.value.includes('@')) {
    emailError.value = 'Por favor, introduce un correo electrónico válido'
    isValid = false
  }

  if (password.value.length < 6) {
    passwordError.value = 'La contraseña debe tener al menos 6 caracteres'
    isValid = false
  }

  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    // Autenticación con Firebase en el frontend
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    // Obtener el ID Token para enviar al backend
    const token = await user.getIdToken()

    // Enviar el token al backend para validación
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
      email: email.value,
      password: password.value,
      token, // Enviar el ID Token al backend
    })

    const { token: customToken, name, email: userEmail, uid } = response.data

    // Guardar el token y los datos del usuario en localStorage
    localStorage.setItem('token', customToken)
    localStorage.setItem('user', JSON.stringify({ name, email: userEmail, uid }))

    // Autenticar al usuario con Firebase usando el Custom Token
    await signInWithCustomToken(auth, customToken)

    // Mostrar mensaje de éxito
    toast.success(`¡Bienvenido ${user.displayName}! 🎉`)

    // Redirigir al usuario a la página principal o a la página deseada
    router.push('/')

    // Emitir el evento de inicio de sesión si es necesario
    emit('login', { email: email.value })
  } catch (error) {
    console.error('Error al iniciar sesión:', error.response?.data || error.message)
    toast.error(error.response?.data?.error || 'Error al iniciar sesión')
  } finally {
    isLoading.value = false
  }
}

// ** Inicio de sesión con Google **
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    console.log('Usuario autenticado:', user)
    emit('login', { email: user.email, name: user.displayName, photo: user.photoURL })

    toast.success(`Bienvenido, ${user.displayName}`)
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
    alert('No se pudo iniciar sesión con Google.')
  }
}

const switchToRegister = () => {
  emit('close')
  emit('register')
}

const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}
</script>

<style scoped>
/* Animaciones para el modal */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
