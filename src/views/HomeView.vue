<script setup lang="ts">
import AboutUsSection from '@/components/AboutUsSection.vue'
import BentoSection from '@/components/BentoSection.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import HeaderNavigation from '@/components/shared/HeaderNav.vue'
import SolutionsSections from '@/components/SolutionsSections.vue'
</script>

<template>
  <div class="min-h-screen">
    <HeaderNavigation />
    <HeroCarousel />
    <BentoSection />
    <SolutionsSections />
    <AboutUsSection />
  </div>
</template>
