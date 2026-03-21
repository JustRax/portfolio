<template>
  <div class="bento-card flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <p class="section-label">Recent Projects</p>
      <RouterLink to="/projects" class="text-xs font-mono text-dim hover:text-ink transition-colors">View all →</RouterLink>
    </div>
    <ul class="space-y-2">
      <li v-for="project in projects" :key="project.name">
        <a
          :href="project.url"
          target="_blank"
          class="group flex items-start justify-between gap-3 p-2.5 rounded-xl hover:bg-muted transition-colors"
        >
          <div class="min-w-0">
            <p class="text-sm font-display font-semibold truncate">{{ project.name }}</p>
            <p class="text-xs text-dim truncate">{{ project.description }}</p>
          </div>
          <span class="font-mono text-xs text-dim/60 shrink-0 group-hover:text-dim transition-colors">{{ project.domain }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/portfolio.js'
</script>
