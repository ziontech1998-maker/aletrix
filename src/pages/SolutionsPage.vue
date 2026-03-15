<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="max-w-3xl">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">Nos Solutions pour votre Transformation Digitale</h1>
          <p class="text-xl lg:text-2xl text-gray-300">
            4 domaines d'intervention pour transformer votre vision en réalité.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="grid lg:grid-cols-2 gap-8">
          <div
            v-for="solution in solutions"
            :key="solution.title"
            class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <div class="w-20 h-20 rounded-xl flex items-center justify-center mb-6" :style="{ backgroundColor: `${solution.color}15`, color: solution.color }">
              <component :is="solution.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold mb-2" style="color: #0E1B2E;">{{ solution.title }}</h3>
            <p class="text-lg mb-4" :style="{ color: solution.color }">{{ solution.tagline }}</p>
            <p class="text-gray-600 mb-6">{{ solution.description }}</p>
            <ul class="space-y-3 mb-6">
              <li v-for="feature in solution.features" :key="feature" class="flex items-center">
                <Check class="w-5 h-5 mr-3 flex-shrink-0" :style="{ color: solution.color }" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            <RouterLink to="/contact" class="inline-flex items-center font-semibold transition-all hover:gap-3 gap-2" :style="{ color: solution.color }">
              En savoir plus
              <ArrowRight class="w-5 h-5" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Notre Méthodologie</h2>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">Un processus structuré pour garantir le succès de vos projets</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(item, index) in process" :key="item.step" class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white" :style="{ backgroundColor: index % 2 === 0 ? '#1F5EFF' : '#5FA8FF' }">
              {{ item.step }}
            </div>
            <h4 class="text-xl font-bold mb-2" style="color: #0E1B2E;">{{ item.title }}</h4>
            <p class="text-gray-600">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Cloud, Users, Code, Sparkles, ArrowRight, Check } from 'lucide-vue-next';

const solutions = [
  {
    icon: Cloud,
    title: 'SaaS',
    tagline: 'Solutions cloud évolutives',
    description: 'Nos plateformes SaaS offrent flexibilité, scalabilité et performance pour transformer vos opérations.',
    features: ['Architecture cloud-native', 'Mises à jour automatiques', 'Disponibilité élevée (99,9 %)', 'Sécurité renforcée'],
    color: '#1F5EFF',
  },
  {
    icon: Users,
    title: 'Conseil',
    tagline: 'Expertise stratégique',
    description: 'Accompagnement stratégique de bout en bout pour accélérer votre transformation digitale.',
    features: ['Audit digital complet', 'Stratégie sur mesure', 'Change management', 'Formation des équipes'],
    color: '#5FA8FF',
  },
  {
    icon: Code,
    title: 'Développement sur mesure',
    tagline: 'Solutions sur mesure',
    description: "Développement d'applications métier adaptées aux besoins spécifiques de votre organisation.",
    features: ['Architecture moderne', 'Code maintenable', 'Intégrations API', 'Support technique dédié'],
    color: '#1F5EFF',
  },
  {
    icon: Sparkles,
    title: 'R&D',
    tagline: 'Technologies émergentes',
    description: 'Exploration et mise en œuvre de technologies innovantes pour concevoir les solutions de demain.',
    features: ['IA et machine learning', 'Blockchain & Web3', 'IoT et edge computing', 'Prototypage rapide'],
    color: '#5FA8FF',
  },
];

const process = [
  { step: '01', title: 'Analyse', desc: 'Comprendre vos besoins et vos objectifs' },
  { step: '02', title: 'Conception', desc: 'Concevoir la solution la plus adaptée' },
  { step: '03', title: 'Développement', desc: 'Développer avec agilité et qualité' },
  { step: '04', title: 'Déploiement', desc: 'Mettre en production et accompagner la montée en charge' },
];
</script>