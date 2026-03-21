// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TechStackView from '../views/TechStackView.vue'
import CertificationsView from '../views/CertificationsView.vue'
import BioView from '../views/BioView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/bio', name: 'bio', component: BioView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/tech-stack', name: 'tech-stack', component: TechStackView },
  { path: '/certifications', name: 'certifications', component: CertificationsView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
