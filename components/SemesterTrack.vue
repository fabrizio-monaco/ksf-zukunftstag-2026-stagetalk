<script setup lang="ts">
// KoSI an der h_da: 7 Semester, Praxisphasen im 3., 5. und 7. Semester,
// in den vorlesungsfreien Zeiten arbeitet man ebenfalls im Unternehmen.
const semesters = [
  { no: 1, type: 'uni' },
  { no: 2, type: 'uni' },
  { no: 3, type: 'firm', label: 'Praxisphase' },
  { no: 4, type: 'uni' },
  { no: 5, type: 'firm', label: 'Praxisphase' },
  { no: 6, type: 'uni' },
  { no: 7, type: 'firm', label: 'Praxis + Bachelor\u00adarbeit' },
] as const
</script>

<template>
  <div class="track">
    <div />
    <div v-for="s in semesters" :key="`h${s.no}`" class="head">
      {{ s.no }}.
    </div>

    <div class="lane-label c-uni">
      <div class="i-ph-chalkboard-teacher-bold" />Hochschule
    </div>
    <div v-for="s in semesters" :key="`u${s.no}`" class="cell">
      <div v-if="s.type === 'uni'" class="block bg-uni">
        Vorlesungen
      </div>
    </div>

    <div class="lane-label c-firm">
      <div class="i-ph-buildings-bold" />Firma
    </div>
    <div v-for="s in semesters" :key="`f${s.no}`" class="cell">
      <div v-if="s.type === 'firm'" class="block bg-firm">
        {{ s.label }}
      </div>
      <div v-else class="block holiday">
        Arbeiten
      </div>
    </div>
  </div>
</template>

<style scoped>
.track {
  display: grid;
  grid-template-columns: 170px repeat(7, minmax(0, 1fr));
  grid-template-rows: auto 108px 108px;
  column-gap: 10px;
  row-gap: 14px;
  align-items: stretch;
}
.head {
  font: 700 var(--fs-small) / 1 var(--font-display);
  color: var(--muted);
  padding-left: 4px;
}
.lane-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font: 700 var(--fs-small) / 1 var(--font-body);
}
.lane-label > div {
  font-size: 28px;
}
.cell {
  display: flex;
  align-items: stretch;
}
.block {
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  border-radius: 10px;
  font: 700 16px/1.15 var(--font-body);
  min-width: 0;
}
.holiday {
  flex: 0 0 auto;
  width: 100%;
  margin-top: 56px;
  background: var(--firm-soft);
  color: var(--firm);
  font-weight: 700;
  font-size: 15px;
  padding: 8px 10px;
}
</style>
