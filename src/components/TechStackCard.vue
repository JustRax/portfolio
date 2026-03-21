<template>
  <div class="bento-card flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <p class="section-label">Tech Stack</p>
      <RouterLink to="/tech-stack" class="text-xs font-mono text-dim hover:text-ink transition-colors">View all →</RouterLink>
    </div>
    <div class="space-y-3">
      <div v-for="(skills, category) in techStack" :key="category">
        <p class="text-xs font-mono text-dim mb-1.5">{{ category }}</p>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { techStack } from '../data/portfolio.js'
</script>
