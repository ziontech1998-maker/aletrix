<template>
  <footer class="bg-[#0E1B2E] text-white">
    <div class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">ALTERIX</h3>
          <p class="text-gray-300 mb-4">Solutions digitales innovantes pour transformer votre entreprise</p>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/company/alterix-tech/" target="_blank" rel="noopener noreferrer" class="hover:text-[#5FA8FF] transition-colors" aria-label="LinkedIn">
              <Linkedin :size="20" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Liens Rapides</h4>
          <ul class="space-y-2 text-gray-300">
            <li><RouterLink to="/solutions" class="hover:text-[#5FA8FF] transition-colors">Nos Solutions</RouterLink></li>
            <li><RouterLink to="/a-propos" class="hover:text-[#5FA8FF] transition-colors">À Propos</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#5FA8FF] transition-colors">Contact</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Suivez-nous</h4>
          <ul class="space-y-2 text-gray-300">
            <li><a href="https://www.linkedin.com/company/alterix-tech/" target="_blank" rel="noopener noreferrer" class="hover:text-[#5FA8FF] transition-colors">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <Mail :size="16" class="mr-2 flex-shrink-0" />
              <a href="mailto:contact@alterix-tech.com" class="hover:text-[#5FA8FF] transition-colors">contact@alterix-tech.com</a>
            </li>
            <li class="flex items-center">
              <Phone :size="16" class="mr-2 flex-shrink-0" />
              <a href="tel:+2250789800820" class="hover:text-[#5FA8FF] transition-colors">+225 07 89 80 08 20</a>
            </li>
            <li class="flex items-start">
              <MapPin :size="16" class="mr-2 flex-shrink-0 mt-1" />
              <span>Abidjan, Côte d'Ivoire</span>
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
import { Mail, Phone, MapPin, Linkedin } from 'lucide-vue-next';
</script>