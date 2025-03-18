<template>
  <div class="min-h-screen">
    <!-- Componentes de la página -->
    <Navbar @login="openLoginModal" />
    <HeroCarousel />

    <!-- Eliminamos la sección About y agregamos la sección Bento -->
    <BentoSection />
    <ServicesSection />
    <ProductsSection />
    <AboutUsSection />

    <FaqSection />
    <ContactSection />
    <FooterSection />

    <!-- Modal de inicio de sesión -->
    <LoginModal :isOpen="showLoginModal" @close="closeLoginModal" @login="handleLogin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/NavbarSection.vue'
import HeroCarousel from '../components/HeroCarousel.vue'
import BentoSection from '../components/BentoSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import AboutUsSection from '../components/AboutUsSection.vue'
import FaqSection from '../components/FaqSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
import LoginModal from '../components/LoginModal.vue'
import ServicesSection from '../components/ServicesSection.vue'

// Estado para el modal de inicio de sesión
const showLoginModal = ref(false)

const openLoginModal = () => {
  showLoginModal.value = true
}

const closeLoginModal = () => {
  showLoginModal.value = false
}

const handleLogin = (userData) => {
  console.log('Usuario autenticado:', userData)
  closeLoginModal()
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
html::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

html::-webkit-scrollbar-thumb {
  background: oklch(0.6 0.118 184.704);
  border-radius: 4px;
}
html::-webkit-scrollbar-thumb:hover {
  background: oklch(0.511 0.096 186.391);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
html::-webkit-scrollbar-thumb:active {
  background-color: oklch(0.511 0.096 186.391);
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
}

.animate-shake {
  animation: shake 0.2s;
}
</style>
