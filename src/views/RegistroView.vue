<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
    <!-- Botón para regresar al inicio -->
    <RouterLink
      to="/"
      class="absolute top-4 left-4 flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-300 font-medium"
    >
      <ArrowLeft class="mr-1 h-5 w-5" />
      Regresar al inicio
    </RouterLink>

    <div class="w-full max-w-lg">
      <!-- Encabezado -->
      <div class="text-center mb-8">
        <img src="/LogoDerecha.png" alt="Logo" class="h-16 mx-auto mb-4" />
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Crea tu cuenta</h1>
        <p class="text-gray-600 text-sm">
          Únete a GO-AM Reality Horizons y accede a contenido exclusivo
        </p>
      </div>

      <!-- Contenedor del formulario -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <!-- Barra decorativa superior -->
        <div class="h-2 bg-gradient-to-r from-teal-600 to-teal-500"></div>

        <div class="p-6">
          <!-- Opciones de registro social -->
          <button
            @click="handleGoogleRegister"
            class="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow text-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              class="w-5 h-5"
            />
            Registrarse con Google
          </button>

          <!-- Separador -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-2 bg-white text-gray-500">O regístrate con tu email</span>
            </div>
          </div>

          <!-- Formulario de registro -->
          <form @submit.prevent="handleRegister" class="space-y-4">
            <!-- Información personal -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User class="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    v-model="firstName"
                    class="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Juan"
                    required
                    :class="{ 'border-red-500 focus:ring-red-500': firstNameError }"
                  />
                </div>
                <p v-if="firstNameError" class="mt-1 text-xs text-red-500">{{ firstNameError }}</p>
              </div>

              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                  Apellido
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User class="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    v-model="lastName"
                    class="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Pérez"
                    required
                    :class="{ 'border-red-500 focus:ring-red-500': lastNameError }"
                  />
                </div>
                <p v-if="lastNameError" class="mt-1 text-xs text-red-500">{{ lastNameError }}</p>
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail class="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                  required
                  :class="{ 'border-red-500 focus:ring-red-500': emailError }"
                />
              </div>
              <p v-if="emailError" class="mt-1 text-xs text-red-500">{{ emailError }}</p>
            </div>

            <!-- Contraseña -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock class="h-4 w-4 text-gray-400" />
                </div>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  class="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                  :class="{ 'border-red-500 focus:ring-red-500': passwordError }"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Eye v-if="showPassword" class="h-4 w-4" />
                  <EyeOff v-else class="h-4 w-4" />
                </button>
              </div>
              <p v-if="passwordError" class="mt-1 text-xs text-red-500">{{ passwordError }}</p>
              <div v-if="password" class="mt-1.5">
                <div class="text-xs text-gray-500 mb-1">Fortaleza de la contraseña:</div>
                <div class="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full transition-all duration-300"
                    :class="passwordStrengthClass"
                    :style="{ width: `${passwordStrength}%` }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Confirmar contraseña -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock class="h-4 w-4 text-gray-400" />
                </div>
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  class="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                  :class="{ 'border-red-500 focus:ring-red-500': confirmPasswordError }"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Eye v-if="showConfirmPassword" class="h-4 w-4" />
                  <EyeOff v-else class="h-4 w-4" />
                </button>
              </div>
              <p v-if="confirmPasswordError" class="mt-1 text-xs text-red-500">
                {{ confirmPasswordError }}
              </p>
            </div>

            <!-- Términos y condiciones -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  v-model="acceptTerms"
                  class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded transition-colors"
                  required
                />
              </div>
              <div class="ml-2 text-xs">
                <label for="terms" class="text-gray-700">
                  Acepto los
                  <a href="#" class="text-teal-600 hover:text-teal-800 font-medium"
                    >Términos de servicio</a
                  >
                  y la
                  <a href="#" class="text-teal-600 hover:text-teal-800 font-medium"
                    >Política de privacidad</a
                  >
                </label>
                <p v-if="termsError" class="mt-1 text-xs text-red-500">{{ termsError }}</p>
              </div>
            </div>

            <!-- Botón de registro -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center mt-6 text-sm"
              :disabled="isLoading"
            >
              <Loader2 v-if="isLoading" class="animate-spin mr-2 h-4 w-4" />
              <span>{{ isLoading ? 'Creando cuenta...' : 'Crear cuenta' }}</span>
            </button>
          </form>

          <!-- Enlace para iniciar sesión -->
          <div class="mt-6 text-center">
            <p class="text-gray-600 text-sm">
              ¿Ya tienes una cuenta?
              <RouterLink
                to="/login"
                class="text-teal-600 hover:text-teal-800 font-medium transition-colors"
              >
                Inicia sesión
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { User, Mail, Lock, Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-vue-next'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { auth, provider, signInWithCustomToken, signInWithPopup } from '../config/firebaseConfig.js'

const emit = defineEmits(['close', 'login', 'register'])

// Estado del formulario
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)

// Estado de errores
const firstNameError = ref('')
const lastNameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const termsError = ref('')

// Router para redirigir
const router = useRouter()

// Cálculo de la fortaleza de la contraseña
const passwordStrength = computed(() => {
  if (!password.value) return 0

  let strength = 0

  // Longitud
  if (password.value.length >= 8) strength += 25

  // Caracteres especiales
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) strength += 25

  // Números
  if (/\d/.test(password.value)) strength += 25

  // Mayúsculas y minúsculas
  if (/[a-z]/.test(password.value) && /[A-Z]/.test(password.value)) strength += 25

  return strength
})

// Clase CSS para la barra de fortaleza
const passwordStrengthClass = computed(() => {
  if (passwordStrength.value < 50) return 'bg-red-500'
  if (passwordStrength.value < 75) return 'bg-yellow-500'
  return 'bg-green-500'
})

// Validar el formulario
const validateForm = () => {
  let isValid = true

  // Resetear errores
  firstNameError.value = ''
  lastNameError.value = ''
  emailError.value = ''
  passwordError.value = ''
  confirmPasswordError.value = ''
  termsError.value = ''

  // Validar nombre
  if (firstName.value.trim().length < 2) {
    firstNameError.value = 'El nombre debe tener al menos 2 caracteres'
    isValid = false
  }

  // Validar apellido
  if (lastName.value.trim().length < 2) {
    lastNameError.value = 'El apellido debe tener al menos 2 caracteres'
    isValid = false
  }

  // Validar email
  if (!email.value.includes('@') || !email.value.includes('.')) {
    emailError.value = 'Por favor, introduce un correo electrónico válido'
    isValid = false
  }

  // Validar contraseña
  if (password.value.length < 8) {
    passwordError.value = 'La contraseña debe tener al menos 8 caracteres'
    isValid = false
  } else if (passwordStrength.value < 50) {
    passwordError.value = 'La contraseña es demasiado débil'
    isValid = false
  }

  // Validar confirmación de contraseña
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Las contraseñas no coinciden'
    isValid = false
  }

  // Validar términos
  if (!acceptTerms.value) {
    termsError.value = 'Debes aceptar los términos y condiciones'
    isValid = false
  }

  return isValid
}

// Manejar el registro
const handleRegister = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    })

    const { token, firstName: fName, lastName: lName, email: userEmail } = response.data

    // Guardar el token y los datos del usuario
    localStorage.setItem('token', token)
    localStorage.setItem(
      'user',
      JSON.stringify({ firstName: fName, lastName: lName, email: userEmail }),
    )

    // Usar el token para autenticar al usuario en Firebase
    await signInWithCustomToken(auth, token)

    toast.success(`¡Bienvenido ${fName}! 🎉`)
    // Redirigir a la ruta raíz
    router.push('/')
  } catch (error) {
    console.error('Error al registrar:', error.response?.data || error.message)
    emailError.value = error.response?.data?.message || 'Error al registrar usuario'
  } finally {
    isLoading.value = false
  }
}

// Manejar registro con Google
const handleGoogleRegister = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    console.log('Usuario autenticado:', user)
    emit('login', { email: user.email, name: user.displayName, photo: user.photoURL })

    toast.success(`Bienvenido, ${user.displayName}`)
    router.push('/')
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
    alert('No se pudo iniciar sesión con Google.')
  }
}
// Limpiar errores al cambiar los valores
watch(firstName, () => {
  firstNameError.value = ''
})
watch(lastName, () => {
  lastNameError.value = ''
})
watch(email, () => {
  emailError.value = ''
})
watch(password, () => {
  passwordError.value = ''
})
watch(confirmPassword, () => {
  confirmPasswordError.value = ''
})
watch(acceptTerms, () => {
  termsError.value = ''
})
</script>
