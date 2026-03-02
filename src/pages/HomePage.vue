<template>
  <div>
    <section class="relative bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformez votre vision en
              <span class="text-[#5FA8FF]"> réalité digitale</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              ALTERIX conçoit et déploie des solutions technologiques innovantes qui propulsent
              votre entreprise vers l'excellence numérique.
            </p>
            <div class="flex flex-wrap gap-4">
              <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style="background-color: #1F5EFF;">
                Demander une démo
                <ArrowRight class="ml-2 w-5 h-5" />
              </RouterLink>
              <RouterLink to="/solutions" class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all">
                Découvrir nos solutions
              </RouterLink>
            </div>
          </div>
          <div class="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NzIwNTY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Innovation technologique"
              class-name="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Nos 4 Activités Clés</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Une expertise complète pour accompagner chaque étape de votre transformation digitale</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="activity in activities" :key="activity.title" class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-4" :style="{ backgroundColor: `${activity.color}15`, color: activity.color }">
              <component :is="activity.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ activity.title }}</h3>
            <p class="text-gray-600">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjB0ZWFtfGVufDF8fHx8MTc3MjAxNDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Équipe Conseil"
              class-name="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6" style="color: #0E1B2E;">Pourquoi choisir ALTERIX ?</h2>
            <div class="space-y-6">
              <div v-for="item in reasons" :key="item.title" class="flex gap-4">
                <div class="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center" :style="{ backgroundColor: item.color }">
                  <span class="text-white font-bold">{{ item.id }}</span>
                </div>
                <div>
                  <h4 class="font-bold mb-2" style="color: #0E1B2E;">{{ item.title }}</h4>
                  <p class="text-gray-600">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #1F5EFF;">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Prêt à transformer votre entreprise ?</h2>
        <p class="text-xl text-white/90 mb-8">Discutons de vos projets et découvrez comment ALTERIX peut vous accompagner</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105">
          Contactez-nous
          <ArrowRight class="ml-2 w-5 h-5" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowRight, Lightbulb, Users, Rocket, Target } from 'lucide-vue-next';
import ImageWithFallback from '@/components/ImageWithFallback.vue';

const activities = [
  {
    icon: Rocket,
    title: 'SaaS',
    description: 'Solutions cloud innovantes et évolutives pour digitaliser vos processus métier',
    color: '#1F5EFF',
  },
  {
    icon: Users,
    title: 'Conseil',
    description: 'Accompagnement stratégique pour accélérer votre transformation digitale',
    color: '#5FA8FF',
  },
  {
    icon: Lightbulb,
    title: 'Développement Custom',
    description: 'Applications sur mesure parfaitement adaptées à vos besoins spécifiques',
    color: '#1F5EFF',
  },
  {
    icon: Target,
    title: 'Innovation & R&D',
    description: 'Recherche et développement de solutions technologiques de pointe',
    color: '#5FA8FF',
  },
];

const reasons = [
  {
    id: '01',
    title: 'Excellence Technique',
    description: 'Une équipe d\'experts maîtrisant les technologies les plus avancées',
    color: '#1F5EFF',
  },
  {
    id: '02',
    title: 'Approche Personnalisée',
    description: 'Des solutions sur mesure qui s\'adaptent à vos objectifs spécifiques',
    color: '#5FA8FF',
  },
  {
    id: '03',
    title: 'Résultats Mesurables',
    description: 'Un ROI tangible et des KPIs clairs pour chaque projet',
    color: '#1F5EFF',
  },
  {
    id: '04',
    title: 'Support Continu',
    description: 'Un accompagnement permanent pour garantir votre succès',
    color: '#5FA8FF',
  },
];
</script>
