<template>
  <footer class="bg-[#0E1B2E] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">ALTERIX</h3>
          <p class="text-gray-300 mb-4">Solutions digitales innovantes pour transformer votre entreprise</p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-[#5FA8FF] transition-colors" aria-label="LinkedIn">
              <Linkedin :size="20" />
            </a>
            <a href="#" class="hover:text-[#5FA8FF] transition-colors" aria-label="Twitter">
              <Twitter :size="20" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Liens Rapides</h4>
          <ul class="space-y-2 text-gray-300">
            <li><RouterLink to="/solutions" class="hover:text-[#5FA8FF] transition-colors">Nos Solutions</RouterLink></li>
            <li><RouterLink to="/secteurs" class="hover:text-[#5FA8FF] transition-colors">Secteurs</RouterLink></li>
            <li><RouterLink to="/cas-clients" class="hover:text-[#5FA8FF] transition-colors">Cas Clients</RouterLink></li>
            <li><RouterLink to="/innovation" class="hover:text-[#5FA8FF] transition-colors">Innovation</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Ressources</h4>
          <ul class="space-y-2 text-gray-300">
            <li><RouterLink to="/ressources" class="hover:text-[#5FA8FF] transition-colors">Blog</RouterLink></li>
            <li><RouterLink to="/ressources" class="hover:text-[#5FA8FF] transition-colors">Livres Blancs</RouterLink></li>
            <li><RouterLink to="/a-propos" class="hover:text-[#5FA8FF] transition-colors">À Propos</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#5FA8FF] transition-colors">Contact</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <Mail :size="16" class="mr-2 flex-shrink-0" />
              <span>contact@alterix.fr</span>
            </li>
            <li class="flex items-center">
              <Phone :size="16" class="mr-2 flex-shrink-0" />
              <span>+33 1 23 45 67 89</span>
            </li>
            <li class="flex items-start">
              <MapPin :size="16" class="mr-2 flex-shrink-0 mt-1" />
              <span>123 Avenue de l'Innovation<br />75001 Paris, France</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© 2026 ALTERIX. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-vue-next';
</script>
