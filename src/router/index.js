import { createRouter, createWebHistory } from 'vue-router';
import IntroductionPage from '@/views/introduction_page.vue';
import Committee_history_page from '@/views/committee_history_page.vue';
import Character_page from '@/views/characters_page.vue';
import Resources_page from '@/views/resources_page.vue';
import herobrine_page from '@/views/herobrine_page.vue'
import Background_page from '@/views/background_page.vue';
import Specific_character_page from '@/views/specific_character_page.vue';
import Gameplay_page from '@/views/gameplay_page.vue';

const routes = [
  {
    path: '/',
    component: IntroductionPage,
    name: 'IntroductionPage', 
  },
  {
    path: '/background',
    component: Background_page,
    name: 'BackgroundPage', 
  },
  {
    path: '/history',
    component: Committee_history_page,
    name: 'CommitteeHistoryPage', 
  },
  {
    path: '/characters',
    component: Character_page,
    name: 'Characters_Page',
  },
  {
    path: '/resources',
    component: Resources_page,
    name: 'ResoucesPage',   },
  {
      path: '/herobrine',
      component: herobrine_page,
      name: 'herobrine',   },
  {
    path: '/gameplay',
    component: Gameplay_page,
    name: 'MechanicsPage',   },
  {
    path: '/character/:name', 
    name: 'CharacterPage',
    component: Specific_character_page,
    props: true, 
  },  
];

const router = createRouter({
  history: createWebHistory(), // This replaces `mode: 'history'` in Vue 3
  routes,
});

export default router;
