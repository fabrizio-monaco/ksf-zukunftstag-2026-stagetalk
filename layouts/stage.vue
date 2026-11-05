<!-- Mitmach-Folie: knallgelb = "Jetzt seid ihr dran" -->
<template>
  <div class="slidev-layout stage">
    <slot />
  </div>
</template>

<style scoped>
.stage {
  background: var(--marker);
  color: var(--ink);
}
.stage :deep(.qr) {
  background: #fff;
}
</style>
