import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ResumeView from '../views/ResumeView.vue';
import SkillsView from '../views/SkillsView.vue';
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import FooterComp from '../components/FooterComp.vue';

const routes = [
  {
    path: '/',
    components: {
      default: HomeView,
      about: AboutView,
      resume: ResumeView,
      skills: SkillsView,
      projects: ProjectsView,
      contact: ContactView,
      FooterComp: FooterComp
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
