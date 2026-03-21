<template>
  <main class="max-w-5xl mx-auto px-4 py-8">
    <div class="mb-8">
      <RouterLink to="/" class="inline-flex items-center gap-1.5 text-xs font-mono text-dim hover:text-ink transition-colors mb-4">
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back
      </RouterLink>
      <h1 class="font-display font-bold text-3xl">Certifications</h1>
      <p class="text-sm text-dim mt-1 font-body">Credentials and professional certificates.</p>
    </div>

    <!-- BADGES SECTION — any platform, just needs a badgeUrl -->
    <div v-if="badges.length" class="mb-10">
      <p class="section-label mb-4">Badges</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <a
          v-for="cert in badges"
          :key="cert.name"
          :href="cert.url"
          target="_blank"
          class="bento-card group flex flex-col items-center gap-3 text-center hover:border-ink/20 transition-all"
        >
          <img
            :src="cert.badgeUrl"
            :alt="cert.name"
            class="w-24 h-24 object-contain"
          />
          <div>
            <p class="text-xs font-mono text-dim">{{ cert.issuer }}</p>
            <h2 class="font-display font-bold text-sm leading-snug mt-0.5">{{ cert.name }}</h2>
          </div>
          <span class="inline-flex items-center gap-1 text-xs font-mono text-dim group-hover:text-ink transition-colors mt-auto">
            View badge
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </span>
        </a>
      </div>
    </div>

    <!-- CERTIFICATES SECTION — local images -->
    <div v-if="imageCerts.length">
      <p class="section-label mb-4">Certificates</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="cert in imageCerts"
          :key="cert.name"
          class="bento-card flex flex-col gap-3"
        >
          <img
            :src="cert.image"
            :alt="cert.name"
            class="w-full rounded-xl object-cover border border-muted cursor-pointer hover:opacity-90 transition-opacity"
            @click="openModal(cert)"
          />
          <div class="flex-1">
            <p class="text-xs font-mono text-dim">{{ cert.issuer }}</p>
            <h2 class="font-display font-bold text-sm leading-snug mt-0.5">{{ cert.name }}</h2>
          </div>
          <button
            @click="openModal(cert)"
            class="inline-flex items-center gap-1 text-xs font-mono text-dim hover:text-ink transition-colors mt-auto"
          >
            View credential
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="modal">
      <div
        v-if="selectedCert"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="bg-paper rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col gap-4 p-5">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-xs font-mono text-dim">{{ selectedCert.issuer }}</p>
              <h3 class="font-display font-bold text-lg mt-0.5">{{ selectedCert.name }}</h3>
            </div>
            <button
              @click="closeModal"
              class="w-8 h-8 rounded-lg bg-muted hover:bg-ink hover:text-paper flex items-center justify-center transition-colors shrink-0"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
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
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { certifications } from '../data/portfolio.js'

// badgeUrl = any online badge (Credly, Badgr, etc.)
// image    = local certificate image file
const badges     = computed(() => certifications.filter(c => c.badgeUrl))
const imageCerts = computed(() => certifications.filter(c => c.image))

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