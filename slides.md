---
theme: default
title: Studieren mit Monatsgehalt
info: Wie funktioniert das duale Studium? Stage Talk am Zukunftstag 2026, KSF.
author: Fabrizio Monaco
colorSchema: light
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  provider: none
transition: fade
drawings:
  persist: false
exportFilename: studieren-mit-monatsgehalt
layout: cover
---

<div class="cover-grid">
  <div class="cover-text">
    <h1 class="cover-title">Studieren mit<br>Monatsgehalt</h1>
    <p class="lead">Wie funktioniert das duale Studium?</p>
    <div class="cover-meta">
      <p><strong>Fabrizio Monaco</strong></p>
      <p class="muted">Informatik dual studiert an der Hochschule Darmstadt</p>
      <p class="muted">Zukunftstag 2026 an der KSF</p>
    </div>
  </div>
  <div class="cover-side">
    <Payslip />
    <div class="cover-ask">
      <QrCode :size="104" />
      <p><strong>Schon jetzt scannen:</strong><br>Hier stellt ihr gleich eure Fragen, anonym.</p>
    </div>
  </div>
</div>

<style>
.cover-grid {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 40px;
  height: 100%;
  padding: 80px 72px 64px 88px;
  box-sizing: border-box;
}
.cover-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cover-title {
  font-size: 96px !important;
  line-height: 0.92 !important;
  font-stretch: 78% !important;
  max-width: none !important;
  margin-bottom: 28px !important;
}
.cover-meta {
  margin-top: 56px;
  font-size: var(--fs-small);
  line-height: 1.45;
}
.cover-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 40px;
}
.cover-ask {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 410px;
  font-size: 19px;
  line-height: 1.35;
}
.cover-ask .qr {
  box-shadow: 0 0 0 1px var(--line);
  flex: none;
}
</style>

<!--
[0:00–0:20] Begrüßung. Nicht mit "Ich bin Fabrizio und rede heute über …" anfangen.
Direkt die Frage auf der nächsten Folie stellen: Aufmerksamkeit holen, dann erst vorstellen.

Während die Leute reinkommen, steht diese Folie: der QR-Code führt schon zu Slido.

Zeitrahmen: Vortrag max. 15 Minuten (Ziel 13:30), danach 15 Minuten Fragen.
-->

---
layout: stage
---

<div class="poll">
  <div>
    <h1>Schätzt mal:<br>Was verdient man im dualen Studium?</h1>
    <p class="muted-ink">Pro Monat, brutto, im ersten Jahr</p>
    <ol class="options">
      <li><b>A</b>0 €, man studiert ja</li>
      <li><b>B</b>ungefähr 500 €</li>
      <li><b>C</b>ungefähr 1.300 €</li>
      <li><b>D</b>mehr als 2.500 €</li>
    </ol>
  </div>
  <div class="poll-qr">
    <QrCode :size="260" />
    <p><strong>Abstimmen:</strong> scannen<br>oder slido.com, Code <SlidoCode /></p>
    <p class="poll-hint">Danach bleibt der Link offen: Schreibt eure Fragen rein, wann immer sie euch einfallen.</p>
  </div>
</div>

<style>
.poll {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 64px;
  align-items: center;
  height: 100%;
}
.poll h1 {
  max-width: 16ch !important;
  margin-bottom: 16px !important;
}
.muted-ink {
  opacity: 0.7;
  font-size: var(--fs-small);
}
.options {
  list-style: none;
  padding: 0;
  margin: 36px 0 0;
  display: grid;
  gap: 14px;
  font-size: var(--fs-body);
}
.options li {
  display: flex;
  align-items: center;
  gap: 18px;
}
.options b {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid var(--ink);
  font: 800 22px/1 var(--font-display);
}
.poll-hint {
  font-weight: 700;
}
.poll-qr p {
  margin-top: 18px;
  font-size: 19px;
  line-height: 1.35;
}
</style>

<!--
[0:20–1:30] Umfrage in Slido starten (Umfrage 1 "Gehalt schätzen", Optionen A–D).
"Holt mal eure Handys raus." 30–45 Sekunden warten.
Ergebnis auf dem Laptop ablesen und ansagen, NICHT auf den Beamer holen: "Die meisten tippen B, 500 Euro. Mal sehen …"
Fallback ohne WLAN: Hände hoch pro Option.

WICHTIG, laut sagen: "Lasst Slido offen. Die zweite Hälfte gehört euch, 15 Minuten nur Fragen.
Schreibt alles rein, was euch während des Vortrags einfällt, ich gehe das danach durch."
Wer hier einmal gescannt hat, ist schon drin und stellt später viel eher eine Frage.
-->

---

<div class="answer">
  <div>
    <p class="small muted">Die Antwort: C</p>
    <p class="display answer-num"><span class="mark">1.350 €</span></p>
    <p class="lead">im Monat, im Schnitt im ersten Jahr Informatik dual.</p>
  </div>
  <div class="steps">
    <div class="step"><span class="muted">1. Jahr</span><span class="display">1.350 €</span></div>
    <div class="step"><span class="muted">2. Jahr</span><span class="display">1.446 €</span></div>
    <div class="step"><span class="muted">3. Jahr</span><span class="display">1.546 €</span></div>
    <div class="step after"><span>Nach dem Abschluss</span><span class="display">~4.200 €</span></div>
  </div>
</div>

<p class="source">Durchschnittswerte Informatik, brutto. Quelle: aubi-plus.de, Stand 2026. Je nach Branche und Firma auch 800 bis 1.500 € im ersten Jahr.</p>

<style>
.answer {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 72px;
  align-items: center;
  height: 100%;
}
.answer-num {
  font-size: 168px;
  font-weight: 800;
  font-stretch: 80%;
  letter-spacing: -0.01em;
  line-height: 1;
  margin: 8px 0 20px;
}
.answer-num .mark {
  display: inline-block;
  line-height: 0.78;
  background: linear-gradient(var(--marker), var(--marker)) left 100% / 100% 30% no-repeat;
}
.steps {
  display: grid;
  gap: 4px;
}
.step {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
  font-size: var(--fs-small);
}
.step .display {
  font-size: var(--fs-h2);
  font-weight: 700;
}
.step.after {
  border-bottom: 0;
  color: var(--firm);
  font-weight: 700;
}
</style>

<!--
[1:30–2:30] Auflösen. Kurz kommentieren, was am Ergebnis überrascht.
"Das ist kein Taschengeld, das ist ein Arbeitsvertrag. Und keine Studienschulden."
Die orange Zeile ist dein Teaser: "Wie es nach dem Abschluss aussieht, erzähle ich euch in der Fragerunde." 
-->

---

# Kurz zu mir

<div class="me">
  <MePhoto />
  <ul class="me-list">
    <li><div class="i-ph-graduation-cap-bold c-uni" /><span>Ich habe Informatik dual an der Hochschule Darmstadt studiert.</span></li>
    <li><div class="i-ph-buildings-bold c-firm" /><span>Heute arbeite ich Vollzeit als <span class="todo">[Rolle]</span> bei <span class="todo">[Firma]</span>.</span></li>
    <li><div class="i-ph-armchair-bold" /><span>Vor ein paar Jahren saß ich da, wo ihr jetzt sitzt, und wusste auch nicht, was ich machen will.</span></li>
  </ul>
</div>

<style>
.me {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 64px;
  align-items: center;
}
.me-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 32px;
  max-width: 30ch;
}
.me-list li {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 20px;
  align-items: start;
}
.me-list li > div {
  font-size: 40px;
}
.todo {
  outline: 2px dashed #d22;
  outline-offset: 2px;
  color: #d22;
}
</style>

<!--
[2:30–3:15] Maximal 45 Sekunden. Persönlich bleiben: Warum hast du dich damals dafür entschieden?
Botschaft: "Ich habe das komplett durchgezogen, ihr könnt mich nachher alles fragen." 
TODO: Foto nach public/img/ legen und in config.ts eintragen (Hochformat), Firma und Rolle eintragen.
-->

---

# Duales Studium in einem Satz

<div class="equation">
  <div class="eq-part bg-uni"><div class="i-ph-chalkboard-teacher-bold" /><span class="display">Hochschule</span><span class="eq-sub">lehrt dich die Theorie</span></div>
  <span class="eq-op display">+</span>
  <div class="eq-part bg-firm"><div class="i-ph-buildings-bold" /><span class="display">Firma</span><span class="eq-sub">stellt dich ein und bezahlt dich</span></div>
  <span class="eq-op display">=</span>
  <ul class="eq-result">
    <li>Bachelor-Abschluss</li>
    <li>3 Jahre Berufserfahrung</li>
    <li>Gehalt, jeden Monat</li>
  </ul>
</div>

<p v-click class="lead eq-note">Du bewirbst dich bei der <span class="c-firm">Firma</span>, nicht bei der Hochschule.</p>

<style>
.equation {
  display: grid;
  grid-template-columns: 270px auto 270px auto 1fr;
  gap: 24px;
  align-items: center;
}
.eq-part {
  height: 240px;
  box-sizing: border-box;
  padding: 28px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}
.eq-part > div {
  font-size: 44px;
  margin-bottom: auto;
}
.eq-part .display {
  font-size: var(--fs-h2);
  font-weight: 800;
}
.eq-sub {
  font-size: var(--fs-small);
  line-height: 1.25;
}
.eq-op {
  font-size: 64px;
  font-weight: 800;
}
.eq-result {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
  font-weight: 700;
  font-size: var(--fs-body);
  line-height: 1.15;
  white-space: nowrap;
}
.eq-note {
  margin-top: 56px;
  max-width: none;
}
</style>

<!--
[3:15–4:30] Kernbotschaft: Es gibt immer zwei Partner.
Klick: Bewerbung läuft über die Firma. Das wissen die meisten nicht.
Optional erwähnen: Es gibt ausbildungsintegrierte Modelle (mit IHK-Abschluss) und praxisintegrierte (wie KoSI).
-->

---

# So lief mein Studium ab

<SemesterTrack />

<div class="track-facts">
  <p><span class="display">7 Semester</span><span class="muted">dann ist der Bachelor fertig</span></p>
  <p><span class="display">ca. 50 %</span><span class="muted">der Zeit verbringst du in der Firma</span></p>
  <p><span class="display">0 NC</span><span class="muted">an der Hochschule, die Firma wählt aus</span></p>
</div>

<style>
.track-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  max-width: 940px;
}
.track-facts p {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: var(--fs-small);
  line-height: 1.25;
}
.track-facts .display {
  font-size: var(--fs-h2);
  font-weight: 800;
}
</style>

<!--
[4:30–6:00] Grafik von links nach rechts erklären.
Blau = Hörsaal, Orange = Büro. In den Semesterferien bist du in der Firma, nicht am Strand.
In den Praxisphasen (3., 5., 7.) arbeitest du an echten Projekten, betreut von Hochschule und Firma.
Im 7. Semester (letzte Praxisphase) schreibst du die Bachelorarbeit, meist zu einem Thema aus der Firma.
TODO: Ein konkretes Beispiel aus deiner Praxisphase: Woran hast du gearbeitet?
-->

---
layout: stage
---

# Wahr oder falsch?

<div class="myths">
  <div class="myth">
    <p class="claim">Für ein duales Studium brauchst du ein Einser-Abi.</p>
    <div v-click class="verdict"><b class="chip no">Falsch</b><span>Die Firma wählt aus. Motivation zählt dort oft mehr als die Note.</span></div>
  </div>
  <div class="myth">
    <p class="claim">Semesterferien gibt es nicht.</p>
    <div v-click class="verdict"><b class="chip yes">Wahr</b><span>Du hast Urlaub wie im Job, meist 25 bis 30 Tage im Jahr.</span></div>
  </div>
  <div class="myth">
    <p class="claim">Nach dem Studium musst du in der Firma bleiben.</p>
    <div v-click class="verdict"><b class="chip maybe">Kommt drauf an</b><span>Manche Verträge binden dich für ein paar Jahre. Genau lesen!</span></div>
  </div>
  <div class="myth">
    <p class="claim">Dual studieren kann man nur BWL.</p>
    <div v-click class="verdict"><b class="chip no">Falsch</b><span>Auch Informatik, Technik, Soziales, Gesundheit und vieles mehr.</span></div>
  </div>
</div>

<style>
.myths {
  display: grid;
  gap: 0;
  margin-top: -8px;
}
.myth {
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: 40px;
  align-items: center;
  padding: 18px 0;
  border-top: 2px solid rgba(18, 24, 51, 0.15);
}
.claim {
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
}
.verdict {
  display: grid;
  grid-template-columns: 196px 1fr;
  align-items: center;
  gap: 20px;
  font-size: 21px;
  line-height: 1.25;
}
.chip {
  justify-self: start;
  text-align: center;
  padding: 8px 14px;
  border-radius: 999px;
  font: 800 19px/1 var(--font-display);
  color: #fff;
}
.chip.yes { background: var(--ink); }
.chip.no { background: var(--ink); text-decoration: none; }
.chip.maybe { background: #fff; color: var(--ink); box-shadow: inset 0 0 0 3px var(--ink); }
</style>

<!--
[6:00–8:15] Mitmach-Runde ohne Handy. Pro Aussage ca. 30 Sekunden:
1. Aussage vorlesen.
2. "Daumen hoch für wahr, Daumen runter für falsch. Drei, zwei, eins, jetzt!"
   (Daumen statt Hand heben: alle machen gleichzeitig und im Sitzen mit, niemand steht allein da.)
3. Kommentieren, was du siehst: "Fast alle Daumen runter …"
4. Klicken, Lösung erscheint, ein Satz Erklärung, nächste Aussage.
Tempo halten, nicht jede Antwort ausdiskutieren.
-->

---

# Lohnt sich das?

<div class="proscons">
  <div>
    <h2><div class="i-ph-thumbs-up-bold" />Dafür</h2>
    <ul>
      <li>Eigenes Geld ab dem ersten Monat, keine Studienschulden</li>
      <li>Mit dem Abschluss hast du schon Berufserfahrung</li>
      <li>Du weißt, wofür du lernst</li>
      <li>Gute Chancen, übernommen zu werden</li>
    </ul>
  </div>
  <div>
    <h2><div class="i-ph-thumbs-down-bold" />Dagegen</h2>
    <ul>
      <li>Weniger Freizeit als im normalen Studium</li>
      <li>Du legst dich früh auf eine Firma fest</li>
      <li>Hörsaal und Büro gleichzeitig: Du musst dich gut organisieren</li>
    </ul>
  </div>
</div>

<style>
.proscons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
}
.proscons h2 {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  margin-bottom: 8px !important;
  border-bottom: 3px solid var(--ink);
}
.proscons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.proscons li {
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
  line-height: 1.25;
}
</style>

<!--
[8:15–9:45] Ehrlich sein, das macht dich glaubwürdig.
TODO: Eine echte Situation erzählen, in der es stressig war (Klausurphase + Projekt-Deadline?), und wie du es gelöst hast.
-->

---

# Passt das zu mir?

<ul class="check">
  <li><span class="box" />Ich will eigenes Geld verdienen, nicht erst in fünf Jahren.</li>
  <li><span class="box" />Ich weiß ungefähr, in welche Richtung es gehen soll.</li>
  <li><span class="box" />Ich will wissen, wofür ich etwas lerne.</li>
  <li><span class="box" />Ich kann mich gut selbst organisieren (oder will es lernen).</li>
</ul>

<p v-click class="lead check-note">Drei Häkchen? Dann schau dir das duale Studium genauer an.</p>

<style>
.check {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 22px;
}
.check li {
  display: flex;
  align-items: center;
  gap: 24px;
}
.box {
  flex: none;
  width: 36px;
  height: 36px;
  border: 3px solid var(--ink);
  border-radius: 6px;
}
.check-note {
  margin-top: 48px;
  max-width: none;
}
</style>

<!--
[9:45–10:30] "Macht im Kopf mal Häkchen." 10 Sekunden Pause aushalten.
-->

---

# So kommst du rein

<ol class="steps-in">
  <li><span class="n display">1</span><b>Firma finden</b><span>Partnerfirmen der Hochschule, Firmen-Websites, Messen</span></li>
  <li><span class="n display">2</span><b>Bei der Firma bewerben</b><span>Anschreiben, Lebenslauf, Zeugnisse</span></li>
  <li><span class="n display">3</span><b>Auswahl&shy;verfahren</b><span>Online-Test, Gespräch, manchmal ein Probetag</span></li>
  <li><span class="n display">4</span><b>Vertrag unter&shy;schreiben</b><span>mit der Firma</span></li>
  <li><span class="n display">5</span><b>Einschreiben</b><span>an der Hochschule, dann geht es los</span></li>
</ol>

<p class="lead when"><span class="mark">Etwa ein Jahr vor Studienstart</span> solltest du dich bewerben. Gute Plätze sind schnell weg.</p>

<style>
.steps-in {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.steps-in li {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 18px;
  border-top: 4px solid var(--firm);
  font-size: 19px;
  line-height: 1.3;
}
.steps-in li:last-child {
  border-top-color: var(--uni);
}
.steps-in b {
  font-size: 23px;
  line-height: 1.15;
}
.steps-in .n {
  font-size: 44px;
  font-weight: 800;
  line-height: 1;
}
.steps-in li span:last-child {
  color: var(--muted);
}
.when {
  margin-top: 64px;
  max-width: 40ch;
}
</style>

<!--
[10:30–12:00] Die Reihenfolge ist der Aha-Moment: erst Firma, dann Hochschule.
Orange Schritte = Firma, blauer Schritt = Hochschule (gleiche Farben wie vorher).
Konkret machen: "Wer im Oktober 2028 starten will, bewirbt sich ab Herbst 2027."
Links auf der letzten Folie.
-->

---

# Drei Tipps, die mir geholfen haben

<div class="tips">
  <div class="tip">
    <div class="i-ph-calendar-check-bold c-uni" />
    <h3>Plan deine Woche</h3>
    <p>Feste Zeiten zum Lernen, fürs Büro und für Freizeit in den Kalender. Sonst frisst dich alles auf.</p>
  </div>
  <div class="tip">
    <div class="i-ph-users-three-bold c-uni" />
    <h3>Lern nicht allein</h3>
    <p>Such dir früh eine Lerngruppe. Zusammen ist es leichter, und die Noten werden besser.</p>
  </div>
  <div class="tip">
    <div class="i-ph-compass-bold c-firm" />
    <h3>Sei dir sicher</h3>
    <p>Das ist kein Studium nebenbei. Mach es, wenn dich das Fach wirklich interessiert.</p>
  </div>
</div>

<style>
.tips {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 56px;
}
.tip > div {
  font-size: 52px;
  margin-bottom: 24px;
}
.tip h3 {
  margin-bottom: 14px !important;
}
.tip p {
  font-size: 25px;
  line-height: 1.35;
  color: var(--muted);
}
</style>

<!--
[12:00–13:30] Zu jedem Tipp einen Satz aus deinem Alltag.
Danach direkt zur Fragen-Folie.
Puffer bis 15:00 ist eingeplant. Wenn du früher fertig bist: umso mehr Zeit für Fragen.
-->

---
layout: stage
---

<div class="qa">
  <div>
    <h1 class="qa-title">Eure Fragen</h1>
    <ul class="qa-list">
      <li>Ich habe das Studium hinter mir und arbeite heute Vollzeit. Fragt, was ihr wirklich wissen wollt.</li>
      <li>Anonym, ohne Anmeldung</li>
      <li>Gebt guten Fragen ein Like, die mit den meisten beantworte ich zuerst</li>
    </ul>
  </div>
  <div class="qa-qr">
    <QrCode :size="340" />
    <p>slido.com, Code <strong><SlidoCode /></strong></p>
  </div>
</div>

<style>
.qa {
  display: grid;
  grid-template-columns: 1fr 364px;
  gap: 64px;
  align-items: center;
  height: 100%;
}
.qa-title {
  font-size: var(--fs-hero) !important;
  font-stretch: 80% !important;
}
.qa-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 18px;
  max-width: 30ch;
}
.qa-list li {
  padding-left: 28px;
  position: relative;
}
.qa-list li:first-child {
  font-weight: 700;
}
.qa-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 12px;
  height: 12px;
  background: var(--ink);
  border-radius: 50%;
}
.qa-qr p {
  margin-top: 16px;
  font-size: 22px;
  text-align: center;
}
</style>

<!--
[13:30] Fragerunde. Diese Folie bleibt stehen, Slido liest du nur auf dem Laptop.
Mit den Fragen anfangen, die schon reingekommen sind, vorlesen und antworten.
Kommt nichts mehr: Danke sagen, fertig.
-->

---
layout: end
---

<div class="end-grid">
  <div>
    <h1 class="end-title">Danke!</h1>
    <p class="lead">Fragen fallen euch später ein? Slido bleibt bis Ende der Woche offen.</p>
    <div class="links">
      <p><span>Partnerfirmen der h_da</span><b>partner.infdl.de</b></p>
      <p><span>Infos zum dualen Studium</span><b>h-da.de/dual</b></p>
    </div>
  </div>
  <div class="end-qr">
    <QrCode target="slides" :size="220" />
    <p>Die Folien zum Nachlesen</p>
  </div>
</div>

<style>
.end-grid {
  display: grid;
  grid-template-columns: 1fr 244px;
  gap: 64px;
  align-items: center;
  height: 100%;
}
.end-title {
  font-size: var(--fs-hero) !important;
  font-stretch: 80% !important;
  margin-bottom: 24px !important;
}
.links {
  margin-top: 48px;
  display: grid;
  gap: 18px;
}
.links p {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: var(--fs-small);
}
.links span {
  opacity: 0.7;
}
.links b {
  font-size: var(--fs-body);
  color: var(--marker);
}
.end-qr p {
  margin-top: 16px;
  font-size: 20px;
  text-align: center;
}
</style>

<!--
[29:00] Danke sagen, auf den Folien-QR hinweisen.
Slido nach dem Vortrag tatsächlich noch durchgehen und offene Fragen beantworten.
-->
