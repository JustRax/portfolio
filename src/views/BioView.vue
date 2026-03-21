<template>
    <main class="max-w-5xl mx-auto px-4 py-8">
        <div class="mb-8">
            <RouterLink to="/"
                class="inline-flex items-center gap-1.5 text-xs font-mono text-dim hover:text-ink transition-colors mb-4">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </RouterLink>
            <h1 class="font-display font-bold text-3xl">About</h1>
            <p class="text-sm text-dim mt-1 font-body">A bit more about me.</p>
        </div>

        <div class="bento-card max-w-5xl">
            <div class="space-y-4">
                <p v-for="(para, i) in bioParagraphs" :key="i" class="text-sm leading-relaxed text-ink/70">
                    {{ para }}
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { profile } from '../data/portfolio.js'

const bioParagraphs = computed(() => profile.bio.split('\n\n').filter(Boolean))
</script>