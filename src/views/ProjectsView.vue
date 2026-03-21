<template>
  <main class="max-w-5xl mx-auto px-4 py-8">
    <div class="mb-8">
      <RouterLink to="/" class="inline-flex items-center gap-1.5 text-xs font-mono text-dim hover:text-ink transition-colors mb-4">
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back
      </RouterLink>
      <h1 class="font-display font-bold text-3xl">Projects</h1>
      <p class="text-sm text-dim mt-1 font-body">Things I've built and shipped.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a
        v-for="project in projects"
        :key="project.name"
        :href="project.url"
        target="_blank"
        class="bento-card group flex flex-col gap-4 min-h-[160px]"
      >
        <!-- Domain favicon placeholder -->
        <div class="w-10 h-10 rounded-xl bg-ink flex items-center justify-center shrink-0">
          <span class="font-display font-bold text-paper text-sm">{{ project.name[0] }}</span>
        </div>

        <div class="flex-1">
          <h2 class="font-display font-bold text-lg leading-tight">{{ project.name }}</h2>
          <p class="text-xs text-dim mt-1">{{ project.description }}</p>
        </div>

        <div class="flex items-center justify-between mt-auto pt-3 border-t border-muted">
          <span class="font-mono text-xs text-dim">{{ project.domain }}</span>
          <svg class="w-4 h-4 text-dim group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </div>
      </a>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/portfolio.js'
</script>
