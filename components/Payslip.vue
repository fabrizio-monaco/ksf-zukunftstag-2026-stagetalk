<!-- Titelbild: eine "Gehaltsabrechnung", auf der Vorlesungen und Firmenprojekte stehen -->
<template>
  <div class="slip">
    <div class="slip-head">
      <span class="display">Abrechnung</span>
      <span>Oktober</span>
    </div>
    <div class="slip-row">
      <span><i class="dot bg-uni" />Vorlesung Mathe 1</span><span>Hochschule</span>
    </div>
    <div class="slip-row">
      <span><i class="dot bg-uni" />Programmieren 1</span><span>Hochschule</span>
    </div>
    <div class="slip-row">
      <span><i class="dot bg-firm" />Projekt im Team</span><span>Firma</span>
    </div>
    <div class="slip-total">
      <span>Gehalt</span>
      <span class="display"><span class="mark">1.350,00 €</span></span>
    </div>
  </div>
</template>

<style scoped>
.slip {
  width: 440px;
  padding: 28px 32px 32px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 0 var(--line), 0 24px 48px -24px rgba(18, 24, 51, 0.35);
  transform: rotate(2.5deg);
  font-size: 19px;
  /* gestanzter Rand oben wie bei einem Kassenzettel */
  mask: radial-gradient(circle 7px at 50% 0, transparent 98%, #000) 0 0 / 22px 100%;
}
.slip-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--ink);
  color: var(--muted);
}
.slip-head .display {
  font-size: 34px;
  font-weight: 800;
  color: var(--ink);
}
.slip-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed var(--line);
}
.slip-row span:last-child {
  color: var(--muted);
}
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: 1px;
}
.slip-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 18px;
  font-weight: 700;
}
.slip-total .display {
  font-size: 44px;
  font-weight: 800;
}
</style>
