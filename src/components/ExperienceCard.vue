<template>
  <div class="bento-card flex flex-col gap-4">
    <p class="section-label">Experience</p>
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-[5px] top-2 bottom-2 w-px bg-muted"></div>
      <ul class="space-y-4 pl-5">
        <li v-for="item in experience" :key="item.role + item.year" class="relative">
          <!-- Dot -->
          <span
            class="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-paper"
            :class="item.type === 'milestone' ? 'bg-accent' : item.type === 'edu' ? 'bg-ink/30' : 'bg-ink'"
          ></span>
          <div class="flex items-start justify-between gap-2">
            <div>
              <p class="text-sm font-display font-semibold leading-tight">{{ item.role }}</p>
              <p class="text-xs text-dim mt-0.5">{{ item.company }}</p>
            </div>
            <span class="font-mono text-xs text-dim shrink-0">{{ item.year }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { experience } from '../data/portfolio.js'
</script>
