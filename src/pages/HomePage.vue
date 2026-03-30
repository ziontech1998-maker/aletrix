<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white overflow-hidden bg-[#0E1B2E]">
      <!-- Fond animé technologique -->
      <TechBackground />
      
      <!-- Overlay sombre pour lisibilité -->
      <div class="absolute inset-0 bg-[#0E1B2E]/70 backdrop-blur-[2px]"></div>

      <div class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Texte gauche -->
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformez votre vision en
              <span class="text-[#5FA8FF]"> réalité digitale</span>
            </h1>
            <p class="text-xl lg:text-2xl text-gray-300 mb-8">
              ALTERIX conçoit, développe et déploie des solutions technologiques
              innovantes pour accompagner les entreprises, institutions et porteurs
              de projets dans leur transformation digitale.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <RouterLink
                to="/contact"
                class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                style="background-color: #1F5EFF;"
              >
                Parler à un expert
                <ArrowRight class="ml-2 w-5 h-5" />
              </RouterLink>
              <RouterLink
                to="/solutions"
                class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Découvrir nos solutions
              </RouterLink>
            </div>
          </div>

          <!-- Image équipe côté droit — masqué sur mobile -->
          <div class="hidden lg:block relative" style="width: 50%; max-width: 100%; height: auto; margin: 0 auto; min-height: 400px;">
            <ImageWithFallback
              :src="teamImage"
              alt="Équipe collaborant sur un projet"
              class-name="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Solutions -->
    <section class="py-20 bg-white">
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Nos Solutions pour votre Transformation Digitale</h2>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">4 domaines d'intervention pour transformer votre vision en réalité</p>
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

    <!-- Pourquoi choisir ALTERIX -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Équipe développeurs technologie"
              class-name="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6" style="color: #0E1B2E;">Pourquoi choisir ALTERIX</h2>
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
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowRight, Cloud, Users, Code, Sparkles } from 'lucide-vue-next';
import ImageWithFallback from '@/components/ImageWithFallback.vue';
import TechBackground from '@/components/TechBackground.vue';
import teamImage from '@/assets/images/img_acc.png';

const activities = [
  {
    icon: Cloud,
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
    icon: Code,
    title: 'Développement sur mesure',
    description: 'Applications sur mesure parfaitement adaptées à vos besoins spécifiques',
    color: '#1F5EFF',
  },
  {
    icon: Sparkles,
    title: 'R&D',
    description: 'Recherche et développement de solutions technologiques de pointe',
    color: '#5FA8FF',
  },
];

const reasons = [
  {
    id: '01',
    title: 'Excellence Technique',
    description: "Une équipe d'experts maîtrisant les technologies les plus avancées",
    color: '#1F5EFF',
  },
  {
    id: '02',
    title: 'Approche Personnalisée',
    description: "Des solutions sur mesure qui s'adaptent à vos objectifs spécifiques",
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

<style scoped>
/* Les animations sont maintenant gérées par le composant TechBackground */
</style>