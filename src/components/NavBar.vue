<template>
  <header class="sticky top-0 z-50 bg-paper/80 backdrop-blur-sm border-b border-muted">
    <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="font-display font-bold text-lg tracking-tight hover:text-accent transition-colors">
        MC<span class="text-accent">.</span>
      </RouterLink>

      <!-- Nav links -->
      <nav class="hidden sm:flex items-center gap-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-3 py-1.5 rounded-lg text-sm font-body text-dim hover:text-ink hover:bg-muted transition-all"
          active-class="!text-ink bg-muted font-medium"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const calendlyUrl = 'https://calendly.com/bryllim/consultation'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/tech-stack', label: 'Tech Stack' },
  { to: '/certifications', label: 'Certifications' },
]
</script>
