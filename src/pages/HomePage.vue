<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative text-white overflow-hidden"
      style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'); background-size: cover; background-position: center;"
    >
      <!-- Overlay sombre pour lisibilité -->
      <div class="absolute inset-0 bg-[#0E1B2E]/80 backdrop-blur-[1px]"></div>

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

          <!-- Dashboard analytique côté droit — masqué sur mobile -->
          <div class="hidden lg:block relative">
            <div class="rounded-2xl shadow-2xl overflow-hidden bg-[#0a1628]/90 backdrop-blur-md border border-white/10 p-5">

              <!-- Header dashboard -->
              <div class="flex items-center justify-between mb-4">
                <div>
                  <div class="text-white font-bold text-sm">Tableau de bord analytique</div>
                  <div class="text-gray-400 text-xs">Vue en temps réel</div>
                </div>
                <div class="flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span class="text-green-400 text-xs font-medium">Live</span>
                </div>
              </div>

              <!-- KPI row horizontal -->
              <div class="flex items-center gap-2 mb-4 bg-[#0d1f3c] rounded-xl border border-white/5 divide-x divide-white/10">
                <div class="flex-1 flex items-center gap-2 px-3 py-2">
                  <div>
                    <div class="text-[#5FA8FF] text-[10px] uppercase tracking-wide">Revenus</div>
                    <div class="text-white font-bold text-sm">€2.4M</div>
                  </div>
                  <div class="text-green-400 text-[10px] ml-auto">▲ +12%</div>
                </div>
                <div class="flex-1 flex items-center gap-2 px-3 py-2">
                  <div>
                    <div class="text-[#5FA8FF] text-[10px] uppercase tracking-wide">Clients</div>
                    <div class="text-white font-bold text-sm">1 284</div>
                  </div>
                  <div class="text-green-400 text-[10px] ml-auto">▲ +8%</div>
                </div>
                <div class="flex-1 flex items-center gap-2 px-3 py-2">
                  <div>
                    <div class="text-[#5FA8FF] text-[10px] uppercase tracking-wide">Projets</div>
                    <div class="text-white font-bold text-sm">47</div>
                  </div>
                  <div class="text-green-400 text-[10px] ml-auto">▲ +5%</div>
                </div>
                <div class="flex-1 flex items-center gap-2 px-3 py-2">
                  <div>
                    <div class="text-[#5FA8FF] text-[10px] uppercase tracking-wide">ROI</div>
                    <div class="text-white font-bold text-sm">×3.2</div>
                  </div>
                  <div class="text-green-400 text-[10px] ml-auto">▲ +18%</div>
                </div>
              </div>

              <!-- Courbe principale -->
              <div class="bg-[#0d1f3c] rounded-xl p-3 border border-white/5 mb-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-gray-400 text-[10px] uppercase tracking-wide">Croissance mensuelle</span>
                  <div class="flex gap-3">
                    <span class="flex items-center gap-1 text-[10px] text-[#1F5EFF]"><span class="w-3 h-0.5 bg-[#1F5EFF] inline-block rounded"></span>Revenus</span>
                    <span class="flex items-center gap-1 text-[10px] text-[#5FA8FF]"><span class="w-3 h-0.5 bg-[#5FA8FF] inline-block rounded border-dashed border-t border-[#5FA8FF]"></span>Objectif</span>
                  </div>
                </div>
                <svg viewBox="0 0 340 90" class="w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#1F5EFF" stop-opacity="0.5"/>
                      <stop offset="100%" stop-color="#1F5EFF" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <!-- Grid lines -->
                  <line x1="0" y1="22" x2="340" y2="22" stroke="white" stroke-opacity="0.05" stroke-width="1"/>
                  <line x1="0" y1="44" x2="340" y2="44" stroke="white" stroke-opacity="0.05" stroke-width="1"/>
                  <line x1="0" y1="66" x2="340" y2="66" stroke="white" stroke-opacity="0.05" stroke-width="1"/>
                  <!-- Area -->
                  <polygon points="0,72 40,60 80,65 120,42 160,50 200,28 240,33 290,15 340,8 340,90 0,90" fill="url(#grad1)"/>
                  <!-- Main line -->
                  <polyline points="0,72 40,60 80,65 120,42 160,50 200,28 240,33 290,15 340,8" fill="none" stroke="#1F5EFF" stroke-width="2.5" stroke-linejoin="round"/>
                  <!-- Dots -->
                  <circle cx="120" cy="42" r="3" fill="#1F5EFF" stroke="white" stroke-width="1.5"/>
                  <circle cx="200" cy="28" r="3" fill="#1F5EFF" stroke="white" stroke-width="1.5"/>
                  <circle cx="340" cy="8" r="3" fill="#1F5EFF" stroke="white" stroke-width="1.5"/>
                  <!-- Target line -->
                  <polyline points="0,78 40,72 80,74 120,62 160,66 200,55 240,55 290,45 340,40" fill="none" stroke="#5FA8FF" stroke-width="1.5" stroke-dasharray="5,3"/>
                  <!-- Labels -->
                  <text x="0" y="88" fill="#6b7280" font-size="7">Jan</text>
                  <text x="38" y="88" fill="#6b7280" font-size="7">Fév</text>
                  <text x="78" y="88" fill="#6b7280" font-size="7">Mar</text>
                  <text x="118" y="88" fill="#6b7280" font-size="7">Avr</text>
                  <text x="158" y="88" fill="#6b7280" font-size="7">Mai</text>
                  <text x="198" y="88" fill="#6b7280" font-size="7">Juin</text>
                  <text x="238" y="88" fill="#6b7280" font-size="7">Juil</text>
                  <text x="285" y="88" fill="#6b7280" font-size="7">Août</text>
                  <text x="328" y="88" fill="#6b7280" font-size="7">Sep</text>
                </svg>
              </div>

              <!-- Bar chart (donut supprimé) -->
              <div class="bg-[#0d1f3c] rounded-xl p-3 border border-white/5">
                <div class="text-gray-400 text-[10px] uppercase tracking-wide mb-2">Par solution</div>
                <div class="flex items-end gap-1.5 h-14">
                  <div class="flex flex-col items-center flex-1 gap-1">
                    <div class="w-full bg-[#1F5EFF] rounded-t-sm" style="height:85%"></div>
                    <span class="text-[8px] text-gray-500">SaaS</span>
                  </div>
                  <div class="flex flex-col items-center flex-1 gap-1">
                    <div class="w-full bg-[#5FA8FF] rounded-t-sm" style="height:60%"></div>
                    <span class="text-[8px] text-gray-500">Conseil</span>
                  </div>
                  <div class="flex flex-col items-center flex-1 gap-1">
                    <div class="w-full bg-[#1F5EFF] rounded-t-sm" style="height:75%"></div>
                    <span class="text-[8px] text-gray-500">Dev</span>
                  </div>
                  <div class="flex flex-col items-center flex-1 gap-1">
                    <div class="w-full bg-[#5FA8FF] rounded-t-sm" style="height:45%"></div>
                    <span class="text-[8px] text-gray-500">R&D</span>
                  </div>
                  <div class="flex flex-col items-center flex-1 gap-1">
                    <div class="w-full bg-[#1F5EFF] rounded-t-sm" style="height:95%"></div>
                    <span class="text-[8px] text-gray-500">IA</span>
                  </div>
                </div>
              </div>

            </div>
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