<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">Centre de Ressources</h1>
          <p class="text-xl lg:text-2xl text-gray-300">Insights, guides et documentation pour vous accompagner dans votre transformation digitale.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="color: #0E1B2E;">Blog</h2>
            <p class="text-xl lg:text-2xl text-gray-600">Articles d'experts sur les tendances tech et les bonnes pratiques</p>
          </div>
          <BookOpen class="w-12 h-12 text-[#1F5EFF] hidden lg:block" />
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <article v-for="post in blogPosts" :key="post.title" class="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-semibold" :style="{ backgroundColor: `${post.color}15`, color: post.color }">
                <Tag class="inline w-3 h-3 mr-1" />
                {{ post.category }}
              </span>
              <span class="text-sm text-gray-500 flex items-center">
                <Calendar class="w-4 h-4 mr-1" />
                {{ post.date }}
              </span>
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ post.readTime }} de lecture</span>
              <button class="inline-flex items-center font-semibold transition-all hover:gap-2 gap-1" :style="{ color: post.color }">
                Lire plus
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="color: #0E1B2E;">Livres Blancs</h2>
            <p class="text-xl lg:text-2xl text-gray-600">Guides approfondis pour maîtriser votre transformation digitale</p>
          </div>
          <FileText class="w-12 h-12 text-[#5FA8FF] hidden lg:block" />
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="paper in whitepapers" :key="paper.title" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1F5EFF] to-[#5FA8FF] flex items-center justify-center mb-4">
              <FileText class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #0E1B2E;">{{ paper.title }}</h3>
            <p class="text-gray-600 mb-4">{{ paper.description }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{{ paper.pages }}</span>
              <span>{{ paper.format }}</span>
              <span class="px-2 py-1 rounded text-xs" style="background-color: #1F5EFF15; color: #1F5EFF;">{{ paper.category }}</span>
            </div>
            <button class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg" style="background-color: #1F5EFF;">
              <Download class="w-5 h-5" />
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="color: #0E1B2E;">Documentation Technique</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Toutes les ressources pour développeurs et équipes techniques</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a v-for="doc in documentation" :key="doc.title" :href="doc.link" class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-[#1F5EFF] hover:to-[#5FA8FF] hover:text-white transition-all group">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#1F5EFF15] text-[#1F5EFF] group-hover:bg-white/20 group-hover:text-white transition-all">
              <component :is="doc.icon" class="w-7 h-7" />
            </div>
            <h3 class="font-bold text-[#0E1B2E] group-hover:text-white">{{ doc.title }}</h3>
          </a>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #1F5EFF;">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Restez informé de nos dernières publications</h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-8">Recevez nos articles, livres blancs et actualités tech directement dans votre boîte mail</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input type="email" placeholder="Votre email professionnel" class="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500" />
          <button class="px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all whitespace-nowrap">S'abonner</button>
        </div>
        <p class="text-sm text-white/70 mt-4">Pas de spam, désinscription en un clic</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, FileText, Download, Calendar, Tag, ArrowRight, BookMarked, Settings, Sparkles, Video } from 'lucide-vue-next';

const blogPosts = [
  {
    title: "L'IA dans l'éducation : Révolution ou évolution ?",
    excerpt: "Découvrez comment l'intelligence artificielle transforme les méthodes d'apprentissage et le suivi pédagogique.",
    category: 'Intelligence Artificielle',
    date: '15 Février 2026',
    readTime: '8 min',
    color: '#1F5EFF',
  },
  {
    title: 'RGPD et données de santé : Le guide complet 2026',
    excerpt: 'Tout ce que vous devez savoir sur la conformité RGPD dans le secteur de la santé numérique.',
    category: 'Conformité',
    date: '10 Février 2026',
    readTime: '12 min',
    color: '#5FA8FF',
  },
  {
    title: "Architecture microservices : Retour d'expérience",
    excerpt: "Les leçons apprises lors de la migration d'un monolithe vers une architecture distribuée.",
    category: 'Architecture',
    date: '5 Février 2026',
    readTime: '10 min',
    color: '#1F5EFF',
  },
  {
    title: 'Blockchain et certifications : Use cases concrets',
    excerpt: 'Comment la blockchain révolutionne la certification et la traçabilité des documents.',
    category: 'Blockchain',
    date: '28 Janvier 2026',
    readTime: '6 min',
    color: '#5FA8FF',
  },
];

const whitepapers = [
  {
    title: "Transformation Digitale dans l'Éducation",
    description: 'Guide complet pour digitaliser votre établissement : stratégie, technologies, ROI.',
    pages: '45 pages',
    format: 'PDF',
    category: 'Éducation',
  },
  {
    title: 'Télémédecine : Implémentation et Conformité',
    description: 'Les étapes clés pour déployer une solution de télémédecine conforme HDS et RGPD.',
    pages: '38 pages',
    format: 'PDF',
    category: 'Santé',
  },
  {
    title: 'ERP Moderne : Critères de Sélection 2026',
    description: 'Choisir le bon ERP pour votre entreprise : fonctionnalités, intégrations, coûts.',
    pages: '52 pages',
    format: 'PDF',
    category: 'Corporate',
  },
];

const documentation = [
  { title: 'API Documentation', icon: BookMarked, link: '#' },
  { title: 'Guides Techniques', icon: Settings, link: '#' },
  { title: 'Best Practices', icon: Sparkles, link: '#' },
  { title: 'Tutoriels Vidéo', icon: Video, link: '#' },
];
</script>
