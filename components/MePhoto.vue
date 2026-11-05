<script setup lang="ts">
import { talk } from '../config'
</script>

<template>
  <div class="me-photo">
    <img v-if="talk.photo" :src="talk.photo" alt="Fabrizio Monaco">
    <span v-else>Dein Foto<br>(config.ts)</span>
  </div>
</template>

<style scoped>
.me-photo {
  width: 280px;
  height: 340px;
  border-radius: 16px;
  background: var(--uni-soft);
  display: grid;
  place-items: center;
  overflow: hidden;
  text-align: center;
  color: var(--uni);
  font-weight: 700;
  font-size: var(--fs-small);
}
.me-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
