<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">Innovation & R&D</h1>
            <p class="text-xl text-gray-300 mb-8">Notre laboratoire d'innovation explore les technologies de demain pour créer les solutions d'aujourd'hui.</p>
            <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style="background-color: #1F5EFF;">
              Collaborer avec notre lab
              <ArrowRight class="ml-2 w-5 h-5" />
            </RouterLink>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NzIwNTY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Innovation Lab"
              class-name="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Notre Approche R&D</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Une méthodologie éprouvée pour transformer l'innovation en valeur</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(item, index) in approach" :key="item.title" class="text-center p-6 rounded-xl hover:bg-gray-50 transition-all">
            <div class="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" :style="{ backgroundColor: index % 2 === 0 ? '#1F5EFF15' : '#5FA8FF15', color: index % 2 === 0 ? '#1F5EFF' : '#5FA8FF' }">
              <component :is="item.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Technologies Explorées</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Notre stack technologique de pointe</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tech in technologies" :key="tech.category" class="bg-white rounded-xl p-6 hover:shadow-xl transition-all">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" :style="{ backgroundColor: `${tech.color}15`, color: tech.color }">
              <component :is="tech.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-4" style="color: #0E1B2E;">{{ tech.category }}</h3>
            <ul class="space-y-2">
              <li v-for="item in tech.items" :key="item" class="flex items-center text-gray-700">
                <span class="w-2 h-2 rounded-full mr-3" :style="{ backgroundColor: tech.color }" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Projets Innovants</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Quelques innovations récentes de notre lab</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-semibold" :style="{ backgroundColor: project.status === 'Production' ? '#10b98115' : '#5FA8FF15', color: project.status === 'Production' ? '#10b981' : '#5FA8FF' }">
                {{ project.status }}
              </span>
              <Cpu class="w-6 h-6 text-[#1F5EFF]" />
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="text-sm font-semibold" style="color: #1F5EFF;">Impact: {{ project.impact }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #1F5EFF;">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Un projet innovant en tête ?</h2>
        <p class="text-xl text-white/90 mb-8">Travaillons ensemble pour transformer votre idée en innovation concrète</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all">
          Proposer un projet R&D
          <ArrowRight class="ml-2 w-5 h-5" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Cpu, Zap, Layers, GitBranch, ArrowRight, Bot, Link, Cloud, Radio, BarChart3, Settings } from 'lucide-vue-next';
import ImageWithFallback from '@/components/ImageWithFallback.vue';

const approach = [
  { icon: Zap, title: 'Veille Technologique', description: 'Surveillance constante des innovations et tendances technologiques mondiales' },
  { icon: Layers, title: 'Prototypage Rapide', description: 'Validation rapide de concepts avec des POC et MVP en quelques semaines' },
  { icon: GitBranch, title: 'R&D Collaborative', description: 'Co-création avec nos clients et partenaires académiques' },
  { icon: Cpu, title: 'Industrialisation', description: 'Passage du prototype à la production avec excellence' },
];

const technologies = [
  { category: 'Intelligence Artificielle', items: ['Machine Learning', 'Computer Vision', 'NLP', 'Deep Learning'], icon: Bot, color: '#1F5EFF' },
  { category: 'Blockchain & Web3', items: ['Smart Contracts', 'DeFi', 'NFTs', 'DAOs'], icon: Link, color: '#5FA8FF' },
  { category: 'Cloud & Infrastructure', items: ['Kubernetes', 'Serverless', 'Edge Computing', 'Multi-cloud'], icon: Cloud, color: '#1F5EFF' },
  { category: 'IoT & Connected Devices', items: ['Sensors', 'MQTT', 'Edge AI', 'Industrial IoT'], icon: Radio, color: '#5FA8FF' },
  { category: 'Data & Analytics', items: ['Big Data', 'Real-time Analytics', 'Data Lake', 'Predictive Analytics'], icon: BarChart3, color: '#1F5EFF' },
  { category: 'DevOps & Automation', items: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Auto-scaling'], icon: Settings, color: '#5FA8FF' },
];

const projects = [
  { title: 'IA Prédictive pour la Santé', description: 'Algorithme de détection précoce de maladies avec 92% de précision', status: 'Production', impact: 'Sauve des vies' },
  { title: 'Blockchain Éducation', description: 'Certification des diplômes sur blockchain pour lutter contre la fraude', status: 'Pilote', impact: '10K+ certificats' },
  { title: 'IoT Industriel 4.0', description: 'Maintenance prédictive avec capteurs connectés et IA', status: 'Production', impact: '-40% downtime' },
];
</script>
