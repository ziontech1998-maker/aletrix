<template>
  <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1F5EFF;stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:#5FA8FF;stop-opacity:0.1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Grille animée -->
    <g class="grid-lines" opacity="0.15">
      <line x1="0" y1="0" x2="0" y2="100%" stroke="#5FA8FF" stroke-width="1" />
      <line x1="50" y1="0" x2="50" y2="100%" stroke="#5FA8FF" stroke-width="0.5" />
      <line x1="100" y1="0" x2="100" y2="100%" stroke="#5FA8FF" stroke-width="1" />
      <line x1="150" y1="0" x2="150" y2="100%" stroke="#5FA8FF" stroke-width="0.5" />
      <line x1="200" y1="0" x2="200" y2="100%" stroke="#5FA8FF" stroke-width="1" />
      <line x1="250" y1="0" x2="250" y2="100%" stroke="#5FA8FF" stroke-width="0.5" />
      <line x1="300" y1="0" x2="300" y2="100%" stroke="#5FA8FF" stroke-width="1" />
      <line x1="350" y1="0" x2="350" y2="100%" stroke="#5FA8FF" stroke-width="0.5" />
      <line x1="0" y1="50" x2="100%" y2="50" stroke="#5FA8FF" stroke-width="1" />
      <line x1="0" y1="100" x2="100%" y2="100" stroke="#5FA8FF" stroke-width="0.5" />
      <line x1="0" y1="150" x2="100%" y2="150" stroke="#5FA8FF" stroke-width="1" />
      <line x1="0" y1="200" x2="100%" y2="200" stroke="#5FA8FF" stroke-width="0.5" />
    </g>

    <!-- Circuits animés avec effet professionnel -->
    <g class="circuits" opacity="0.5" filter="url(#glow)">
      <!-- Réseau 1 -->
      <circle cx="20%" cy="30%" r="3" fill="#1F5EFF" class="pulse-dot-1" />
      <line x1="20%" y1="30%" x2="40%" y2="40%" stroke="#1F5EFF" stroke-width="1.5" class="pulse-line-1" />
      <circle cx="40%" cy="40%" r="2" fill="#5FA8FF" class="pulse-dot-2" />
      <line x1="40%" y1="40%" x2="60%" y2="35%" stroke="#5FA8FF" stroke-width="1" class="pulse-line-2" />
      <circle cx="60%" cy="35%" r="3" fill="#1F5EFF" class="pulse-dot-3" />
      
      <!-- Réseau 2 -->
      <circle cx="70%" cy="60%" r="2" fill="#5FA8FF" class="pulse-dot-4" />
      <line x1="70%" y1="60%" x2="50%" y2="70%" stroke="#1F5EFF" stroke-width="1.5" class="pulse-line-3" />
      <circle cx="50%" cy="70%" r="3" fill="#1F5EFF" class="pulse-dot-5" />
      <line x1="50%" y1="70%" x2="30%" y2="60%" stroke="#5FA8FF" stroke-width="1" class="pulse-line-4" />
      <circle cx="30%" cy="60%" r="2" fill="#5FA8FF" class="pulse-dot-6" />
      
      <!-- Réseau 3 -->
      <circle cx="80%" cy="20%" r="2.5" fill="#1F5EFF" class="pulse-dot-7" />
      <line x1="80%" y1="20%" x2="75%" y2="50%" stroke="#5FA8FF" stroke-width="1.5" class="pulse-line-5" />
      <circle cx="75%" cy="50%" r="2" fill="#5FA8FF" class="pulse-dot-8" />
      
      <!-- Nodes supplémentaires pour plus d'effet -->
      <circle cx="15%" cy="70%" r="2" fill="#5FA8FF" class="pulse-dot-9" />
      <line x1="15%" y1="70%" x2="35%" y2="80%" stroke="#1F5EFF" stroke-width="1" class="pulse-line-6" />
      <circle cx="35%" cy="80%" r="2.5" fill="#1F5EFF" class="pulse-dot-10" />
    </g>
  </svg>
</template>

<script setup lang="ts">
// Composant technologique réutilisable
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    r: 2.5px;
    opacity: 1;
  }
  50% {
    r: 4.5px;
    opacity: 0.7;
  }
}

@keyframes flowLine {
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

@keyframes gridFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.15;
  }
  25% {
    transform: translateY(-8px) translateX(4px);
    opacity: 0.18;
  }
  50% {
    transform: translateY(-10px) translateX(0px);
    opacity: 0.2;
  }
  75% {
    transform: translateY(-8px) translateX(-4px);
    opacity: 0.18;
  }
}

:deep(.pulse-dot-1),
:deep(.pulse-dot-2),
:deep(.pulse-dot-3),
:deep(.pulse-dot-4),
:deep(.pulse-dot-5),
:deep(.pulse-dot-6),
:deep(.pulse-dot-7),
:deep(.pulse-dot-8),
:deep(.pulse-dot-9),
:deep(.pulse-dot-10) {
  animation: pulse 3.5s ease-in-out infinite;
}

:deep(.pulse-dot-2),
:deep(.pulse-dot-4),
:deep(.pulse-dot-6),
:deep(.pulse-dot-8),
:deep(.pulse-dot-10) {
  animation-delay: 0.8s;
}

:deep(.pulse-dot-3),
:deep(.pulse-dot-5),
:deep(.pulse-dot-7),
:deep(.pulse-dot-9) {
  animation-delay: 1.6s;
}

:deep(.pulse-line-1),
:deep(.pulse-line-3),
:deep(.pulse-line-5) {
  stroke-dasharray: 100;
  animation: flowLine 5s ease-in-out infinite;
}

:deep(.pulse-line-2),
:deep(.pulse-line-4),
:deep(.pulse-line-6) {
  stroke-dasharray: 100;
  animation: flowLine 5s ease-in-out infinite 1.5s;
}

:deep(.grid-lines) {
  animation: gridFloat 8s ease-in-out infinite;
}
</style>
