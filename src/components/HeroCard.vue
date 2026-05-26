<template>
  <div
    class="bento-card col-span-2 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between min-h-[300px] bg-ink text-paper border-ink">
    <!-- Top -->
    <div class="flex items-start justify-between">
      <div>
        <p class="font-mono text-xs tracking-widest text-paper/40 uppercase mb-2">Based in {{ profile.location }}</p>
        <h1 class="font-display font-bold text-4xl md:text-5xl leading-none tracking-tight">
          {{ profile.name }}
        </h1>
      </div>
      <!-- Avatar -->
      <img :src="profile.avatar" :alt="profile.name"
        class="w-20 h-20 rounded-2xl object-cover border-2 border-paper/10 shrink-0" />
    </div>

    <!-- Tagline -->
    <div class="mt-4">
      <div class="flex flex-wrap gap-2 mb-5">
        <span v-for="tag in titleTags" :key="tag"
          class="text-xs font-mono bg-paper/10 text-paper/70 px-2.5 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
      <!-- Achievement badge -->

      <a v-for="ach in profile.achievements"
      :key="ach.label"
      :href="ach.url"
      :download="ach.download ?? false"
      target="_blank"
      class="inline-flex items-center gap-2 bg-accent text-ink text-xs font-body font-semibold px-3 py-2 rounded-xl
      hover:bg-accent/80 transition-colors mb-2 mr-2"
      >
      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v10m0 0l-4-4m4 4l4-4M5 17.25A2.25 2.25 0 017.25 15h9.5A2.25 2.25 0 0119 17.25v.5A2.25 2.25 0 0116.75 20h-9.5A2.25 2.25 0 015 17.75v-.5z" />
      </svg>
      {{ ach.label }}
      </a>
    </div>

    <!-- Action buttons -->
    <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-paper/10">
      <a :href="`mailto:${profile.email}`"
        class="inline-flex items-center gap-1.5 bg-paper/10 hover:bg-paper/20 text-paper text-xs px-3 py-2 rounded-lg transition-colors">
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Email
      </a>
      <!-- Socials -->
      <a :href="profile.social.facebook" target="_blank"
        class="inline-flex items-center gap-1.5 bg-paper/10 hover:bg-paper/20 text-paper text-xs px-3 py-2 rounded-lg transition-colors">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.389H7.078v-3.464h3.047V9.356c0-3.037 1.792-4.669 4.533-4.669 1.388 0 2.786 .246 4 .709v3.98h-2c-.795 0-1 .258-1 .79V12h3l-.504 3H17v8.389C17.612 22.954 24 18.667 24 12z" />
        </svg>
        Facebook
      </a>
      <a :href="profile.social.instagram" target="_blank"
        class="inline-flex items-center gap-1.5 bg-paper/10 hover:bg-paper/20 text-paper text-xs px-3 py-2 rounded-lg transition-colors">

        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>

        Instagram
      </a>
      <a :href="profile.social.github" target="_blank"
        class="inline-flex items-center gap-1.5 bg-paper/10 hover:bg-paper/20 text-paper text-xs px-3 py-2 rounded-lg transition-colors">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>
      <a :href="profile.social.linkedin" target="_blank"
        class="inline-flex items-center gap-1.5 bg-paper/10 hover:bg-paper/20 text-paper text-xs px-3 py-2 rounded-lg transition-colors">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { profile } from '../data/portfolio.js'

const titleTags = computed(() => profile.title.split(' · '))
</script>
