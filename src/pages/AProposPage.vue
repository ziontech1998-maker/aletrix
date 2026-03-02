<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">À Propos d'ALTERIX</h1>
            <p class="text-xl text-gray-300 mb-8">Nous sommes une équipe passionnée qui transforme les défis digitaux en opportunités de croissance depuis 2018.</p>
            <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style="background-color: #1F5EFF;">
              Rejoindre l'aventure
              <ArrowRight class="ml-2 w-5 h-5" />
            </RouterLink>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjB0ZWFtfGVufDF8fHx8MTc3MjAxNDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Équipe ALTERIX"
              class-name="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl lg:text-5xl font-bold mb-2" style="color: #1F5EFF;">{{ stat.number }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Notre Histoire</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Un parcours guidé par l'innovation et la passion de la technologie</p>
        </div>

        <div class="relative">
          <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#5FA8FF]" />
          <div class="space-y-12">
            <div v-for="(item, index) in timeline" :key="item.year" class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div :class="index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'">
                <div class="inline-block px-4 py-2 rounded-full font-bold text-white mb-4" style="background-color: #1F5EFF;">{{ item.year }}</div>
                <h3 class="text-2xl font-bold mb-3" style="color: #0E1B2E;">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
              <div :class="index % 2 === 0 ? '' : 'lg:order-1'" />
              <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white" style="background-color: #1F5EFF;" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Nos Valeurs</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Les principes qui guident chacune de nos actions</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(value, index) in values" :key="value.title" class="text-center p-6 rounded-xl hover:bg-gray-50 transition-all">
            <div class="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" :style="{ backgroundColor: index % 2 === 0 ? '#1F5EFF15' : '#5FA8FF15', color: index % 2 === 0 ? '#1F5EFF' : '#5FA8FF' }">
              <component :is="value.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #1F5EFF;">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users class="w-16 h-16 text-white mx-auto mb-6" />
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Envie de rejoindre l'aventure ?</h2>
        <p class="text-xl text-white/90 mb-8">Nous recherchons constamment des talents passionnés pour renforcer notre équipe</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all">
          Voir nos offres d'emploi
          <ArrowRight class="ml-2 w-5 h-5" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Target, Users, Heart, Rocket, Globe, ArrowRight } from 'lucide-vue-next';
import ImageWithFallback from '@/components/ImageWithFallback.vue';

const values = [
  { icon: Target, title: 'Excellence', description: "Nous visons l'excellence dans chaque ligne de code et chaque interaction client" },
  { icon: Heart, title: 'Passion', description: 'La technologie est notre passion, votre succès notre motivation' },
  { icon: Rocket, title: 'Innovation', description: 'Nous explorons constamment de nouvelles solutions pour rester à la pointe' },
  { icon: Globe, title: 'Impact', description: 'Créer des solutions qui ont un impact positif sur la société' },
];

const timeline = [
  { year: '2018', title: 'Fondation', description: "Création d'ALTERIX avec la vision de démocratiser l'innovation technologique" },
  { year: '2020', title: 'Expansion', description: 'Ouverture de notre lab R&D et passage à 50 collaborateurs' },
  { year: '2023', title: 'Reconnaissance', description: 'Prix Innovation Digitale et 200+ clients satisfaits' },
  { year: '2026', title: "Aujourd'hui", description: 'Leader français avec 150 collaborateurs et présence européenne' },
];

const stats = [
  { number: '150+', label: 'Collaborateurs experts' },
  { number: '8', label: "Ans d'expérience" },
  { number: '300+', label: 'Clients accompagnés' },
  { number: '500+', label: 'Projets réalisés' },
];
</script>
