<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">Nos Secteurs d'Expertise</h1>
          <p class="text-xl lg:text-2xl text-gray-300">Une connaissance approfondie des enjeux métiers pour des solutions parfaitement adaptées à votre industrie.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div v-for="(sector, index) in sectors" :key="sector.title" class="grid lg:grid-cols-2 gap-12 items-center">
          <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <div class="w-20 h-20 rounded-xl flex items-center justify-center mb-6" :style="{ backgroundColor: `${sector.color}15`, color: sector.color }">
              <component :is="sector.icon" class="w-12 h-12" />
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="color: #0E1B2E;">{{ sector.title }}</h2>
            <p class="text-xl lg:text-2xl text-gray-600 mb-6">{{ sector.description }}</p>

            <div class="grid grid-cols-3 gap-4 mb-8">
              <div v-for="stat in sector.stats" :key="stat" class="text-center">
                <div class="text-2xl font-bold mb-1" :style="{ color: sector.color }">{{ stat.split(' ')[0] }}</div>
                <div class="text-sm text-gray-600">{{ stat.split(' ').slice(1).join(' ') }}</div>
              </div>
            </div>

            <div class="space-y-3 mb-8">
              <h4 class="font-bold" style="color: #0E1B2E;">Solutions clés :</h4>
              <ul class="grid grid-cols-2 gap-2">
                <li v-for="solution in sector.solutions" :key="solution" class="flex items-center text-gray-700">
                  <span class="w-1.5 h-1.5 rounded-full mr-2" :style="{ backgroundColor: sector.color }" />
                  {{ solution }}
                </li>
              </ul>
            </div>

            <RouterLink to="/contact" class="inline-flex items-center font-semibold transition-all hover:gap-3 gap-2" :style="{ color: sector.color }">
              Découvrir nos références
              <ArrowRight class="w-5 h-5" />
            </RouterLink>
          </div>

          <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
            <ImageWithFallback :src="sector.image" :alt="sector.title" class-name="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Notre Valeur Ajoutée</h2>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">Ce qui fait la différence ALTERIX dans chaque secteur</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="item in advantages" :key="item.title" class="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all">
            <div class="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style="background-color: #1F5EFF15; color: #1F5EFF;">
              <component :is="item.icon" class="w-8 h-8" />
            </div>
            <h4 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ item.title }}</h4>
            <p class="text-gray-600">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #1F5EFF;">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Votre secteur n'est pas listé ?</h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-8">Nous adaptons nos solutions à tous les secteurs d'activité</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all">
          Parlons-en ensemble
          <ArrowRight class="ml-2 w-5 h-5" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { GraduationCap, Heart, Building2, ArrowRight, Briefcase, ShieldCheck, Zap } from 'lucide-vue-next';
import ImageWithFallback from '@/components/ImageWithFallback.vue';

const sectors = [
  {
    icon: GraduationCap,
    title: 'Éducation',
    description: "Plateformes d'apprentissage innovantes, gestion administrative digitale et outils pédagogiques interactifs.",
    image: 'https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIwNTgzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: ['500K+ élèves', '200+ établissements', '95% satisfaction'],
    solutions: ['LMS (Learning Management System)', 'Gestion des inscriptions', 'Suivi pédagogique', 'Classes virtuelles'],
    color: '#1F5EFF',
  },
  {
    icon: Heart,
    title: 'Santé',
    description: 'Solutions de télémédecine, dossiers patients numériques et outils de gestion hospitalière conformes aux normes.',
    image: 'https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxOTM5NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: ['50+ hôpitaux', 'RGPD & HDS', '2M+ dossiers'],
    solutions: ['Dossier Patient Informatisé', 'Téléconsultation', 'Planification RDV', 'Prescription électronique'],
    color: '#5FA8FF',
  },
  {
    icon: Building2,
    title: 'Corporate',
    description: 'Transformation digitale des entreprises avec ERP, CRM, outils collaboratifs et business intelligence.',
    image: 'https://images.unsplash.com/photo-1426523038054-a260f3ef5bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzIwNTgzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: ['300+ entreprises', 'Fortune 500', '40% ROI moyen'],
    solutions: ['ERP sur mesure', 'CRM & Sales', 'Business Intelligence', 'Automatisation processus'],
    color: '#1F5EFF',
  },
];

const advantages = [
  { title: 'Expertise Métier', desc: 'Consultants spécialisés par industrie', icon: Briefcase },
  { title: 'Conformité Garantie', desc: 'Respect des réglementations sectorielles', icon: ShieldCheck },
  { title: 'Innovation Continue', desc: 'Veille technologique permanente', icon: Zap },
];
</script>
