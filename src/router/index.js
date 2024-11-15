import { createRouter, createWebHistory } from 'vue-router';
import IntroductionPage from '@/views/introduction_page.vue';
import General_page from '@/views/general_page.vue';
import Committee_history_page from '@/views/committee_history_page.vue';
import Character_page from '@/views/characters_page.vue';
import Resources_page from '@/views/resources_page.vue';

const routes = [
  {
    path: '/',
    component: IntroductionPage,
    name: 'IntroductionPage', 
  },
  {
    path: '/general',
    component: General_page,
    name: 'GeneralPage', 
  },
  {
    path: '/history',
    component: Committee_history_page,
    name: 'CommitteeHistoryPage', 
  },
  {
    path: '/characters',
    component: Character_page,
    name: 'CharacterPage',
  },
  {
    path: '/resources',
    component: Resources_page,
    name: 'ResoucesPage',   },
];

const router = createRouter({
  history: createWebHistory(), // This replaces `mode: 'history'` in Vue 3
  routes,
});

export default router;
