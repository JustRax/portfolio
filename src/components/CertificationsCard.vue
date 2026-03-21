<template>
  <div class="bento-card flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <p class="section-label">Certifications</p>
      <RouterLink to="/certifications" class="text-xs font-mono text-dim hover:text-ink transition-colors">View all →</RouterLink>
    </div>
    <ul class="grid grid-cols-2 gap-2">
      <li v-for="cert in certifications" :key="cert.name">

        <!-- URL or badge cert: opens external link -->
        <a
          v-if="cert.url || cert.badgeUrl"
          :href="cert.url"
          target="_blank"
          class="group flex flex-col gap-1 p-2.5 rounded-xl border border-muted hover:border-ink/20 hover:bg-muted/50 transition-all"
        >
          <span class="text-xs font-mono text-dim">{{ cert.issuer }}</span>
          <span class="text-xs font-display font-semibold leading-tight line-clamp-2">{{ cert.name }}</span>
          <svg class="w-3 h-3 text-dim group-hover:text-ink transition-colors mt-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>

        <!-- Image cert: opens lightbox -->
        <button
          v-else-if="cert.image"
          @click="openModal(cert)"
          class="group w-full text-left flex flex-col gap-1 p-2.5 rounded-xl border border-muted hover:border-ink/20 hover:bg-muted/50 transition-all"
        >
          <span class="text-xs font-mono text-dim">{{ cert.issuer }}</span>
          <span class="text-xs font-display font-semibold leading-tight line-clamp-2">{{ cert.name }}</span>
          <svg class="w-3 h-3 text-dim group-hover:text-ink transition-colors mt-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>

      </li>
    </ul>

    <!-- Lightbox -->
    <Transition name="modal">
      <div
        v-if="selectedCert"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="bg-paper dark:bg-[#1c1c1a] rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col gap-4 p-5">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-xs font-mono text-dim">{{ selectedCert.issuer }}</p>
              <h3 class="font-display font-bold text-lg mt-0.5">{{ selectedCert.name }}</h3>
            </div>
            <button
              @click="closeModal"
              class="w-8 h-8 rounded-lg bg-muted hover:bg-ink hover:text-paper flex items-center justify-center transition-colors shrink-0"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <img
            :src="selectedCert.image"
            :alt="selectedCert.name"
            class="w-full rounded-xl border border-muted object-contain"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { certifications } from '../data/portfolio.js'

const selectedCert = ref(null)

function openModal(cert) {
  selectedCert.value = cert
}

function closeModal() {
  selectedCert.value = null
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>