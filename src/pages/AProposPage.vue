<template>
  <div>
    <section
      class="relative text-white py-20 overflow-hidden"
      style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'); background-size: cover; background-position: center;"
    >
      <!-- Overlay sombre pour lisibilité -->
      <div class="absolute inset-0 bg-[#0E1B2E]/80 backdrop-blur-[1px]"></div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="lg:pr-8">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">À Propos d'ALTERIX</h1>
            <p class="text-xl lg:text-2xl text-gray-300 mb-4">ALTERIX est une entreprise technologique spécialisée dans la conception et le développement de solutions digitales innovantes.</p>
            <p class="text-xl lg:text-2xl text-gray-300 mb-8">Notre mission est d'accompagner les organisations dans leur transformation digitale.</p>
            <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style="background-color: #1F5EFF;">
              Rejoindre l'aventure
              <ArrowRight class="ml-2 w-5 h-5" />
            </RouterLink>
          </div>
          <div class="w-full mt-8 lg:mt-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Développeurs collaboration technologie"
              class-name="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Notre Histoire</h2>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">Un parcours guidé par l'innovation et la passion de la technologie</p>
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
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4" style="color: #0E1B2E;">Nos Valeurs</h2>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">Les principes qui guident chacune de nos actions</p>
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
      <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <Users class="w-16 h-16 text-white mx-auto mb-6" />
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Envie de rejoindre l'aventure ?</h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-8">Nous recherchons constamment des talents passionnés pour renforcer notre équipe</p>
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
  { icon: Target, title: 'Excellence', description: "Nous visons l'excellence dans chaque projet et chaque interaction avec nos partenaires." },
  { icon: Heart, title: 'Passion', description: "La technologie est notre passion et l'innovation notre moteur." },
  { icon: Rocket, title: 'Innovation', description: 'Nous explorons en permanence de nouvelles technologies pour créer des solutions performantes.' },
  { icon: Globe, title: 'Impact', description: 'Nous développons des solutions qui apportent une réelle valeur aux organisations et à la société.' },
];

const timeline = [
  { year: '2025', title: "Création d'ALTERIX", description: "Lancement du projet avec la volonté de concevoir des solutions technologiques innovantes." },
  { year: "Aujourd'hui", title: "Aujourd'hui", description: 'Développement de solutions digitales et accompagnement des organisations dans leur transformation numérique.' },
];
</script>