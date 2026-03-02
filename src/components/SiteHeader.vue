<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <RouterLink to="/" class="flex items-center">
          <span class="text-2xl font-bold" style="color: #0E1B2E">ALTERIX</span>
        </RouterLink>

        <div class="hidden lg:flex items-center space-x-1">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="px-3 py-2 rounded-md text-sm transition-colors"
            :class="isActive(item.href) ? 'text-white' : 'hover:bg-muted'"
            :style="isActive(item.href) ? { backgroundColor: '#1F5EFF', color: 'white' } : { color: '#0E1B2E' }"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <button class="lg:hidden p-2" style="color: #0E1B2E" @click="mobileMenuOpen = !mobileMenuOpen">
          <X v-if="mobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="lg:hidden py-4 border-t border-border">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 rounded-md text-base mb-1"
          :class="isActive(item.href) ? 'text-white' : 'hover:bg-muted'"
          :style="isActive(item.href) ? { backgroundColor: '#1F5EFF', color: 'white' } : { color: '#0E1B2E' }"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const route = useRoute();

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Secteurs', href: '/secteurs' },
  { name: 'Cas Clients', href: '/cas-clients' },
  { name: 'Innovation', href: '/innovation' },
  { name: 'Ressources', href: '/ressources' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

const isActive = (href: string) => route.path === href;
</script>
