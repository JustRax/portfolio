<template>
  <main class="max-w-5xl mx-auto px-4 py-8">
    <div class="mb-8">
      <RouterLink to="/" class="inline-flex items-center gap-1.5 text-xs font-mono text-dim hover:text-ink transition-colors mb-4">
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back
      </RouterLink>
      <h1 class="font-display font-bold text-3xl">Tech Stack</h1>
      <p class="text-sm text-dim mt-1 font-body">Tools and technologies I work with.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="(skills, category) in techStack"
        :key="category"
        class="bento-card flex flex-col gap-4"
      >
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <span class="font-mono text-xs font-bold text-ink/50">{{ category[0] }}</span>
          </div>
          <h2 class="font-display font-bold text-base">{{ category }}</h2>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="tag hover:bg-ink hover:text-paper transition-colors cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { techStack } from '../data/portfolio.js'
</script>
