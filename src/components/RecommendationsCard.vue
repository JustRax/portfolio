<template>
  <div class="bento-card col-span-2 md:col-span-3 flex flex-col gap-4">
    <p class="section-label">Recommendations</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="rec in recommendations"
        :key="rec.name"
        class="bg-muted/50 rounded-xl p-4 flex flex-col gap-3"
      >
        <!-- Quote mark -->
        <svg class="w-6 h-6 text-ink/20 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p class="text-xs leading-relaxed text-ink/70 line-clamp-4 flex-1">{{ rec.quote }}</p>
        <div>
          <p class="text-xs font-display font-semibold">{{ rec.name }}</p>
          <p class="text-xs text-dim">{{ rec.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { recommendations } from '../data/portfolio.js'
</script>
