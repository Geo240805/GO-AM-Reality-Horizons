<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { RouterView, useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'
import 'vue-sonner/style.css'

const route = useRoute()

function scrollToHash(hash: string) {
  setTimeout(() => {
    const el = document.querySelector(hash)
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, 100)
}

onMounted(() => {
  if (route.hash) {
    scrollToHash(route.hash)
  }
})

watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      scrollToHash(newHash)
    }
  },
)
</script>

<template>
  <RouterView />
  <Toaster richColors />
</template>
