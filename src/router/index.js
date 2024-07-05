import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ResumeView from '../views/ResumeView.vue';
import SkillsView from '../views/SkillsView.vue';
import TestimonialsView from '../views/TestimonialsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import FooterComp from '../components/FooterComp.vue';
// import NavbarComp from '../components/NavbarComp.vue';

const routes = [
  {
    // path: '/',
    // component: Layout,
    // children: [
    //   {
    //     path: '',
    //     name: 'home',
    //     component: HomeView,
    //   },
    //   {
    //     path: 'about',
    //     name: 'about',
    //     component: AboutView,
    //   },
    //   {
    //     path: 'resume',
    //     name: 'resume',
    //     component: ResumeView,
    //   },
    //   {
    //     path: 'skills',
    //     name: 'skills',
    //     component: SkillsView,
    //   },
    // ],
    path: '/',
    components: {
      default: HomeView,
      about: AboutView,
      resume: ResumeView,
      skills: SkillsView,
      testimonials:TestimonialsView,
      projects:ProjectsView,
      contact:ContactView,
      FooterComp:FooterComp
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
