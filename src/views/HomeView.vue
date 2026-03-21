<template>
  <main class="max-w-5xl mx-auto px-4 py-8">

    <!-- Primary Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

      <!-- Hero — spans 2 cols -->
      <div class="md:col-span-2">
        <HeroCard />
      </div>

      <!-- About — 1 col -->
      <div>
        <AboutCard class="h-full" />
      </div>

      <!-- Tech Stack — 1 col -->
      <div>
        <TechStackCard class="h-full" />
      </div>

      <!-- Experience — 2 cols -->
      <div class="md:col-span-2">
        <ExperienceCard class="h-full" />
      </div>

      <!-- Projects — 2 cols -->
      <div class="md:col-span-2">
        <ProjectsCard class="h-full" />
      </div>

      <!-- Certs + Contact stacked in 1 col -->
      <div class="flex flex-col gap-4">
        <ContactCard />
        <CertificationsCard />
        <MembershipCard />
      </div>

    </div>

    <!-- Full-width Recommendations -->
    <div class="mt-4">
      <RecommendationsCard />
    </div>

  </main>
</template>

<script setup>
import { computed } from 'vue'
import HeroCard from '../components/HeroCard.vue'
import AboutCard from '../components/AboutCard.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import TechStackCard from '../components/TechStackCard.vue'
import ProjectsCard from '../components/ProjectsCard.vue'
import CertificationsCard from '../components/CertificationsCard.vue'
import ContactCard from '../components/ContactCard.vue'
// import MembershipCard from '../components/MembershipCard.vue'
// import RecommendationsCard from '../components/RecommendationsCard.vue'
import { profile } from '../data/portfolio.js'

const bioParagraphs = computed(() => profile.bio.split('\n\n').filter(Boolean))


</script>
