<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">Cas Clients</h1>
          <p class="text-xl lg:text-2xl text-gray-300">Découvrez comment nous avons aidé nos clients à transformer leurs défis en succès mesurables.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-20">
          <div v-for="study in caseStudies" :key="study.client" class="bg-gray-50 rounded-2xl p-8 lg:p-12 hover:shadow-xl transition-all">
            <div class="grid lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2">
                <div class="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" :style="{ backgroundColor: `${study.color}15`, color: study.color }">{{ study.sector }}</div>
                <h3 class="text-3xl font-bold mb-4" style="color: #0E1B2E;">{{ study.client }}</h3>
                <div class="space-y-6">
                  <div>
                    <div class="flex items-center mb-2">
                      <TrendingUp class="w-5 h-5 mr-2" :style="{ color: study.color }" />
                      <h4 class="font-bold" style="color: #0E1B2E;">Défi</h4>
                    </div>
                    <p class="text-gray-600">{{ study.challenge }}</p>
                  </div>
                  <div>
                    <div class="flex items-center mb-2">
                      <Users class="w-5 h-5 mr-2" :style="{ color: study.color }" />
                      <h4 class="font-bold" style="color: #0E1B2E;">Solution</h4>
                    </div>
                    <p class="text-gray-600">{{ study.solution }}</p>
                  </div>
                </div>
              </div>

              <div>
                <div class="bg-white rounded-xl p-6 shadow-lg">
                  <div class="flex items-center mb-4">
                    <Clock class="w-5 h-5 mr-2" :style="{ color: study.color }" />
                    <h4 class="font-bold" style="color: #0E1B2E;">Résultats</h4>
                  </div>
                  <div class="space-y-4">
                    <div v-for="result in study.results" :key="result.label" class="border-l-4 pl-4" :style="{ borderColor: study.color }">
                      <div class="text-3xl font-bold" :style="{ color: study.color }">{{ result.metric }}</div>
                      <div class="text-sm text-gray-600">{{ result.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Témoignages Clients</h2>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">Ce que nos clients disent de notre collaboration</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <Quote class="w-10 h-10 text-[#5FA8FF] mb-4" />
            <p class="text-gray-700 text-lg mb-6 italic">"{{ testimonial.quote }}"</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-[#1F5EFF15] text-[#1F5EFF] flex items-center justify-center mr-4">
                <component :is="testimonial.avatarIcon" class="w-6 h-6" />
              </div>
              <div>
                <div class="font-bold" style="color: #0E1B2E;">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-600">{{ testimonial.role }}</div>
                <div class="text-sm text-[#5FA8FF]">{{ testimonial.company }}</div>
              </div>
            </div>
            <div class="flex mt-4">
              <span v-for="i in testimonial.rating" :key="i" class="text-yellow-400 text-xl">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-5xl font-bold mb-2" style="color: #1F5EFF;">{{ stat.number }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #1F5EFF;">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Prêt à rejoindre nos clients satisfaits ?</h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-8">Discutons de votre projet et créons ensemble votre success story</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all">
          Demander une étude de cas
          <ArrowRight class="ml-2 w-5 h-5" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowRight, Quote, TrendingUp, Clock, Users, UserRound } from 'lucide-vue-next';

const caseStudies = [
  {
    client: 'Université Paris Digital',
    sector: 'Éducation',
    challenge: "Moderniser la plateforme d'apprentissage pour 50 000 étudiants avec une expérience utilisateur optimale.",
    solution: "Développement d'un LMS moderne avec IA pour personnalisation des parcours, classes virtuelles et suivi en temps réel.",
    results: [
      { metric: '+85%', label: 'Engagement étudiant' },
      { metric: '-60%', label: 'Temps administratif' },
      { metric: '98%', label: 'Satisfaction' },
    ],
    color: '#1F5EFF',
  },
  {
    client: 'Clinique Saint-Michel',
    sector: 'Santé',
    challenge: 'Digitaliser le parcours patient et optimiser la gestion des dossiers médicaux tout en respectant les normes HDS.',
    solution: "Implémentation d'un DPI complet avec téléconsultation, prescription électronique et BI pour le pilotage.",
    results: [
      { metric: '+70%', label: 'Efficacité' },
      { metric: '100%', label: 'Conformité RGPD' },
      { metric: '-40%', label: 'Coûts opérationnels' },
    ],
    color: '#5FA8FF',
  },
  {
    client: 'TechCorp Industries',
    sector: 'Corporate',
    challenge: 'Intégrer tous les outils métiers dispersés dans un ERP unique pour 500 collaborateurs multi-sites.',
    solution: 'Solution ERP custom avec modules CRM, finance, RH et BI, intégrations API et formation des équipes.',
    results: [
      { metric: '+95%', label: 'Productivité' },
      { metric: '-50%', label: 'Erreurs de saisie' },
      { metric: '6 mois', label: 'ROI atteint' },
    ],
    color: '#1F5EFF',
  },
];

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'DSI, Université Paris Digital',
    company: 'Éducation',
    quote: 'ALTERIX a transformé notre vision en réalité. Leur expertise technique et leur compréhension des enjeux éducatifs ont fait toute la différence.',
    avatarIcon: UserRound,
    rating: 5,
  },
  {
    name: 'Dr. Thomas Laurent',
    role: 'Directeur Médical',
    company: 'Clinique Saint-Michel',
    quote: "La solution déployée a révolutionné notre façon de travailler. L'accompagnement et le support sont exceptionnels.",
    avatarIcon: UserRound,
    rating: 5,
  },
  {
    name: 'Sophie Martin',
    role: 'CEO, TechCorp Industries',
    company: 'Corporate',
    quote: "Un partenaire de confiance qui comprend nos besoins. Le ROI a dépassé nos attentes et l'équipe est ravie.",
    avatarIcon: UserRound,
    rating: 5,
  },
  {
    name: 'Pierre Lefevre',
    role: 'Directeur Innovation',
    company: 'Retail Connect',
    quote: 'ALTERIX ne se contente pas de développer, ils conseillent et innovent avec nous. Une collaboration vraiment stratégique.',
    avatarIcon: UserRound,
    rating: 5,
  },
];

const stats = [
  { number: '300+', label: 'Clients satisfaits' },
  { number: '500+', label: 'Projets livrés' },
  { number: '98%', label: 'Taux de satisfaction' },
  { number: '24/7', label: 'Support disponible' },
];
</script>
