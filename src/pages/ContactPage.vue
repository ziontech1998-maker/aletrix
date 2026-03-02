<template>
  <div>
    <section class="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">Contactez-nous</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Nous sommes là pour répondre à vos questions et transformer vos idées en réalité</p>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <a v-for="info in contactInfo" :key="info.title" :href="info.link" class="flex items-start p-6 rounded-xl hover:bg-gray-50 transition-all group">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" style="background-color: #1F5EFF15; color: #1F5EFF;">
              <component :is="info.icon" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-bold mb-1" style="color: #0E1B2E;">{{ info.title }}</h3>
              <p class="text-gray-600 whitespace-pre-line">{{ info.content }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="bg-white rounded-2xl p-8 shadow-xl">
            <h2 class="text-3xl font-bold mb-6" style="color: #0E1B2E;">Envoyez-nous un message</h2>
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm mb-2" style="color: #0E1B2E;">Prénom *</label>
                  <input v-model="formData.firstName" type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all" placeholder="Jean" />
                </div>
                <div>
                  <label class="block text-sm mb-2" style="color: #0E1B2E;">Nom *</label>
                  <input v-model="formData.lastName" type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all" placeholder="Dupont" />
                </div>
              </div>

              <div>
                <label class="block text-sm mb-2" style="color: #0E1B2E;">Email professionnel *</label>
                <input v-model="formData.email" type="email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all" placeholder="jean.dupont@entreprise.fr" />
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm mb-2" style="color: #0E1B2E;">Téléphone</label>
                  <input v-model="formData.phone" type="tel" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all" placeholder="+33 6 12 34 56 78" />
                </div>
                <div>
                  <label class="block text-sm mb-2" style="color: #0E1B2E;">Entreprise</label>
                  <input v-model="formData.company" type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all" placeholder="Nom de l'entreprise" />
                </div>
              </div>

              <div>
                <label class="block text-sm mb-2" style="color: #0E1B2E;">Objet de votre demande *</label>
                <select v-model="formData.subject" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all">
                  <option value="demo">Demander une démo</option>
                  <option value="devis">Demander un devis</option>
                  <option value="recrutement">Candidature spontanée</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label class="block text-sm mb-2" style="color: #0E1B2E;">Message *</label>
                <textarea v-model="formData.message" required rows="5" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all resize-none" placeholder="Décrivez votre projet ou votre besoin..." />
              </div>

              <button type="submit" class="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold text-white transition-all hover:shadow-lg" style="background-color: #1F5EFF;">
                <Send class="w-5 h-5" />
                Envoyer le message
              </button>

              <p class="text-sm text-gray-500 text-center">Nous vous répondrons sous 24h ouvrées</p>
            </form>
          </div>

          <div class="space-y-8">
            <div class="bg-gradient-to-br from-[#1F5EFF] to-[#5FA8FF] rounded-2xl p-8 text-white">
              <h3 class="text-2xl font-bold mb-6">Actions Rapides</h3>
              <div class="space-y-4">
                <div v-for="action in quickActions" :key="action.title" class="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <div class="flex items-center mb-2">
                    <component :is="action.icon" class="w-5 h-5 mr-3" />
                    <span class="font-semibold">{{ action.title }}</span>
                  </div>
                  <p class="text-sm text-white/80">{{ action.description }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold mb-6" style="color: #0E1B2E;">Nos Bureaux</h3>
              <div class="space-y-6">
                <div v-for="office in offices" :key="office.city" class="border-l-4 pl-4" style="border-color: #1F5EFF;">
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="font-bold" style="color: #0E1B2E;">{{ office.city }}</h4>
                    <span class="text-xs px-2 py-1 rounded-full" style="background-color: #5FA8FF15; color: #5FA8FF;">{{ office.type }}</span>
                  </div>
                  <p class="text-sm text-gray-600">{{ office.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-96 bg-gray-300 relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <MapPin class="w-16 h-16 mx-auto mb-4" style="color: #1F5EFF;" />
          <p class="text-xl font-semibold" style="color: #0E1B2E;">123 Avenue de l'Innovation, 75001 Paris</p>
          <p class="text-gray-600 mt-2">Carte interactive disponible</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Mail, Phone, MapPin, Send, Briefcase, Calendar } from 'lucide-vue-next';

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: 'demo',
  message: '',
});

const contactInfo = [
  { icon: Mail, title: 'Email', content: 'contact@alterix.fr', link: 'mailto:contact@alterix.fr' },
  { icon: Phone, title: 'Téléphone', content: '+33 1 23 45 67 89', link: 'tel:+33123456789' },
  { icon: MapPin, title: 'Adresse', content: "123 Avenue de l'Innovation\n75001 Paris, France", link: '#' },
];

const quickActions = [
  { icon: Calendar, title: 'Planifier une démo', description: "Découvrez nos solutions en action lors d'une démo personnalisée" },
  { icon: Briefcase, title: 'Demander un devis', description: 'Obtenez une estimation gratuite pour votre projet' },
  { icon: Mail, title: 'Candidature', description: 'Rejoignez notre équipe de talents passionnés' },
];

const offices = [
  { city: 'Paris', address: "123 Avenue de l'Innovation, 75001", type: 'Siège Social' },
  { city: 'Lyon', address: '45 Rue de la Tech, 69002', type: 'Bureau Régional' },
  { city: 'Bruxelles', address: '78 Boulevard Européen, 1000', type: 'Bureau International' },
];

const handleSubmit = () => {
  alert('Merci pour votre message ! Notre équipe vous contactera sous 24h.');
  formData.firstName = '';
  formData.lastName = '';
  formData.email = '';
  formData.phone = '';
  formData.company = '';
  formData.subject = 'demo';
  formData.message = '';
};
</script>
