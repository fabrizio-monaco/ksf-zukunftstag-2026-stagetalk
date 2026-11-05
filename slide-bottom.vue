<script setup lang="ts">
import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

// Wird in jede Folie gerendert (auch im Export), daher pro Folie statt global.
const { $frontmatter, $page } = useSlideContext()
const { total } = useNav()

const quiet = ['cover', 'stage', 'end']
const showAsk = computed(() => !quiet.includes($frontmatter.layout) && $frontmatter.ask !== false)
const progress = computed(() => `${($page.value / total.value) * 100}%`)
</script>

<template>
  <div v-if="$frontmatter.layout !== 'cover'" class="progress" :style="{ width: progress }" />
  <div v-if="showAsk" class="ask">
    <QrCode :size="72" />
    <p>Frage?<br><span>Scannen, anonym fragen</span></p>
  </div>
</template>

<style scoped>
.progress {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  background: var(--uni);
}
.ask {
  position: absolute;
  right: 32px;
  bottom: 28px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-direction: row-reverse;
}
.ask :deep(.qr) {
  padding: 6px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--line);
}
.ask :deep(.qr-placeholder) {
  inset: 6px;
  font-size: 0;
}
.ask p {
  margin: 0;
  text-align: right;
  font: 700 18px/1.2 var(--font-body);
  color: var(--ink);
}
.ask span {
  font-weight: 400;
  color: var(--muted);
}
</style>
