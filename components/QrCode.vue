<script setup lang="ts">
import QRCode from 'qrcode'
import { computed } from 'vue'
import { isPlaceholder, talk } from '../config'

const props = withDefaults(defineProps<{
  // slido = Fragen/Umfrage, slides = Link zu den Folien
  target?: 'slido' | 'slides'
  size?: number
  dark?: string
  light?: string
}>(), {
  target: 'slido',
  size: 240,
  dark: '#121833',
  light: '#ffffff',
})

// Synchron als SVG erzeugt, damit der Code auch im PDF-Export scharf bleibt.
const url = computed(() => props.target === 'slides' ? talk.slidesUrl : talk.slidoUrl)

const svg = computed(() => {
  let out = ''
  QRCode.toString(url.value, {
    type: 'svg',
    margin: 0,
    errorCorrectionLevel: 'M',
    color: { dark: props.dark, light: props.light },
  }, (_err: unknown, s: string) => { out = s })
  return out
})
</script>

<template>
  <div class="qr" :style="{ width: `${size}px`, height: `${size}px`, background: light }">
    <div class="qr-code" v-html="svg" />
    <div v-if="isPlaceholder(url)" class="qr-placeholder">
      Platzhalter: Slido-Link in config.ts eintragen
    </div>
  </div>
</template>

<style scoped>
.qr {
  position: relative;
  box-sizing: content-box;
  padding: 12px;
  border-radius: 12px;
}
.qr-code,
.qr-code :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
.qr-placeholder {
  position: absolute;
  inset: 12px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 8px;
  font: 700 14px/1.2 var(--font-body);
  color: #fff;
  background: rgba(200, 30, 30, 0.85);
}
</style>
