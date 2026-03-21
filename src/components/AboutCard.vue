<template>
  <div class="bento-card flex flex-col gap-3">
    <p class="section-label">About</p>
    <p class="text-sm leading-relaxed text-ink/70 line-clamp-6">{{ shortBio }}</p>
    <RouterLink to="/bio" class="mt-auto text-xs font-mono text-dim hover:text-ink transition-colors inline-flex items-center gap-1">
      Read more
      <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { profile } from '../data/portfolio.js'

const shortBio = computed(() => profile.bio.split('\n\n')[0])
</script>
