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
        class="relative w-full max-w-md overflow-hidden transition-all transform bg-white shadow-2xl dark:bg-gray-800 rounded-2xl sm:max-w-lg"
        @click.stop
      >
        <!-- Elementos decorativos -->
        <div
          class="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-32 h-32 translate-x-1/2 translate-y-1/2 rounded-full bg-teal-500/10"
        ></div>

        <!-- Header -->
        <div
          class="relative flex items-center justify-between px-6 py-4 text-white bg-gradient-to-r from-teal-600 to-teal-500"
        >
          <h3 class="flex items-center text-xl font-bold">
            <UserCircle class="w-5 h-5 mr-2" />
            Iniciar Sesión
          </h3>
          <button
            @click="$emit('close')"
            class="p-1 text-white transition-colors rounded-full hover:text-teal-100 hover:bg-white/10"
            aria-label="Cerrar"
          >
            <X :size="20" />
          </button>
        </div>

        <!-- Body -->
        <div class="relative p-6 sm:p-8">
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
              <span class="px-2 text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400"
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
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail class="w-5 h-5 text-gray-400" />
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
                  class="text-xs font-medium text-teal-600 transition-colors hover:text-teal-800"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock class="w-5 h-5 text-gray-400" />
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
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors hover:text-gray-600"
                >
                  <Eye v-if="showPassword" class="w-5 h-5" />
                  <EyeOff v-else class="w-5 h-5" />
                </button>
              </div>
              <p v-if="passwordError" class="mt-1 text-sm text-red-500">{{ passwordError }}</p>
            </div>

            <div class="flex items-center">
              <input
                type="checkbox"
                id="remember"
                v-model="remember"
                class="w-4 h-4 text-teal-600 transition-colors border-gray-300 rounded focus:ring-teal-500"
              />
              <label for="remember" class="block ml-2 text-sm text-gray-700 dark:text-gray-300">
                Mantener sesión iniciada
              </label>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              :disabled="isLoading"
            >
              <Loader2 v-if="isLoading" class="w-5 h-5 mr-2 animate-spin" />
              <span>{{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}</span>
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              ¿No tienes una cuenta?
              <RouterLink
                to="/registro"
                @click.prevent="switchToRegister"
                class="font-medium text-teal-600 transition-colors hover:text-teal-800"
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

<script setup lang="ts">
import { auth, provider, signInWithCustomToken, signInWithPopup } from '@/config/firebase.config'
import axios from 'axios'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Eye, EyeOff, Loader2, Lock, Mail, UserCircle, X } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()

type LoginPayload = { email: string; name?: string; photo?: string }
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'login', payload: LoginPayload): void
  (e: 'register'): void
}>()

const email = ref<string>('')
const password = ref<string>('')
const remember = ref<boolean>(false)
const showPassword = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const emailError = ref<string>('')
const passwordError = ref<string>('')

const validateForm = (): boolean => {
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

const handleLogin = async (): Promise<void> => {
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
    toast.success(`¡Bienvenido ${user.displayName ?? user.email}! 🎉`)

    // Redirigir al usuario a la página principal o a la página deseada
    router.push('/')

    // Emitir el evento de inicio de sesión si es necesario
    emit('login', { email: email.value })
  } catch (error: unknown) {
    // error puede ser tipo unknown
    if (typeof error === 'object' && error !== null) {
      // Type guard para error de axios
      const err = error as { response?: { data?: { error?: string } }; message?: string }
      let errorMsg = err.message || 'Error al iniciar sesión'
      if (
        err.response &&
        err.response.data &&
        typeof err.response.data === 'object' &&
        'error' in err.response.data
      ) {
        errorMsg = (err.response.data as { error?: string }).error || errorMsg
      }
      console.error('Error al iniciar sesión:', err.response?.data || err.message || err)
      toast.error(errorMsg)
    } else {
      console.error('Error al iniciar sesión:', error)
      toast.error('Error al iniciar sesión')
    }
  } finally {
    isLoading.value = false
  }
}

// ** Inicio de sesión con Google **
const handleGoogleLogin = async (): Promise<void> => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    console.log('Usuario autenticado:', user)
    emit('login', {
      email: user.email ?? '',
      name: user.displayName ?? '',
      photo: user.photoURL ?? '',
    })

    toast.success(`Bienvenido, ${user.displayName ?? user.email}`)
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
    alert('No se pudo iniciar sesión con Google.')
  }
}

const switchToRegister = (): void => {
  emit('close')
  emit('register')
}

const handleBackdropClick = (event: MouseEvent): void => {
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
