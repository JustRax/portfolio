<template>
  <div class="bento-card flex flex-col gap-3">
    <p class="section-label">Member of</p>
    <ul class="space-y-2">
      <li v-for="org in memberships" :key="org.short">
        <a
          :href="org.url"
          target="_blank"
          class="group flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
        >
          <div class="w-8 h-8 rounded-lg bg-ink flex items-center justify-center shrink-0">
            <span class="font-mono text-paper text-[9px] font-bold">{{ org.short }}</span>
          </div>
          <p class="text-xs font-body leading-tight text-ink/80 group-hover:text-ink transition-colors">{{ org.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
const memberships = profile.memberships
</script>
