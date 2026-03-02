import { createRouter, createWebHistory } from 'vue-router';
import RootLayout from '@/layouts/RootLayout.vue';
import HomePage from '@/pages/HomePage.vue';
import SolutionsPage from '@/pages/SolutionsPage.vue';
import SecteursPage from '@/pages/SecteursPage.vue';
import CasClientsPage from '@/pages/CasClientsPage.vue';
import InnovationPage from '@/pages/InnovationPage.vue';
import RessourcesPage from '@/pages/RessourcesPage.vue';
import AProposPage from '@/pages/AProposPage.vue';
import ContactPage from '@/pages/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RootLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'solutions', name: 'solutions', component: SolutionsPage },
        { path: 'secteurs', name: 'secteurs', component: SecteursPage },
        { path: 'cas-clients', name: 'cas-clients', component: CasClientsPage },
        { path: 'innovation', name: 'innovation', component: InnovationPage },
        { path: 'ressources', name: 'ressources', component: RessourcesPage },
        { path: 'a-propos', name: 'a-propos', component: AProposPage },
        { path: 'contact', name: 'contact', component: ContactPage },
      ],
    },
  ],
});

export default router;
