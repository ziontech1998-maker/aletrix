<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
    <nav class="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
      <div class="flex justify-between items-center h-24 sm:h-28 md:h-32 lg:h-36 2xl:h-40">
        <RouterLink to="/" class="flex items-center gap-2 sm:gap-3">
          <img src="../assets/images/LOGO ALTERIX.png" alt="ALTERIX icon" class="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 w-auto" />
        </RouterLink>

        <div class="hidden lg:flex items-center space-x-1">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="px-4 py-2 rounded-md text-sm lg:text-base xl:text-lg transition-colors"
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
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

const isActive = (href: string) => route.path === href;
</script>