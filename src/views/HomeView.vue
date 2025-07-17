<script setup lang="ts">
import BentoSection from '@/components/BentoSection.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import HeaderNavigation from '@/components/shared/HeaderNav.vue'
</script>

<template>
  <div class="min-h-screen">
    <HeaderNavigation />
    <HeroCarousel />
    <BentoSection />
    <ServicesSection />
    <ProductsSection />
  </div>
</template>
