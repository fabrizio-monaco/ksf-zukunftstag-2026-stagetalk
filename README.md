# Studieren mit Monatsgehalt

**Wie funktioniert das duale Studium?** Stage Talk von Fabrizio Monaco am Zukunftstag 2026 an der KSF.
Nachfolger von [ksf-zukunftstag-2025-stagetalk](https://github.com/fabrizio-monaco/ksf-zukunftstag-2025-stagetalk).

## Loslegen

```bash
pnpm install
pnpm dev        # Folien unter http://localhost:3030, Presenter-Modus unter /presenter
pnpm export     # PDF-Backup nach dist-pdf/
pnpm shots      # PNG pro Folie nach shots/ (zum Prüfen des Layouts)
pnpm build      # statische Seite nach dist/ (GitHub Pages baut das automatisch)
```

Steuerung im Vortrag: `→`/`Leertaste` weiter, `←` zurück, `o` Übersicht, `d` Zeichnen auf der Folie.
### Aufbau mit einem Beamer

Bildschirm **erweitern**, nicht spiegeln (Windows: `Win+P` → „Erweitern“).

| Wo | Was läuft |
| --- | --- |
| Beamer | Nur die Folien im Vollbild: `localhost:3030`, `F11`. Bleibt die ganze Zeit dort. |
| Laptop | Ansicht für dich als Vortragenden: `localhost:3030/presenter` (Notizen, Timer, nächste Folie), daneben Slido im Admin-Modus |

Geblättert wird auf dem Laptop, der Beamer folgt automatisch. Slido kommt **nie** auf den Beamer: Fragen liest du vor, Umfrage-Ergebnisse sagst du an. So musst du nie umschalten und kannst unpassende Fragen überspringen.
Nur Spiegeln möglich (fremder PC)? Slido-Admin auf dem Handy, Folien am PC.

## Vor dem Vortrag: Checkliste

**Eine Woche vorher**

- [ ] Slido-Event anlegen (slido.com, kostenloser Plan reicht: Q&A unbegrenzt, bis 100 Teilnehmende, 3 Umfragen)
  - Q&A: anonyme Fragen erlauben, Upvotes an
  - Umfrage 1 anlegen: „Was verdient man im dualen Studium?“, Optionen A–D wie auf Folie 2
  - Link und Code in `config.ts` eintragen. Solange dort `DEIN-CODE` steht, sind alle QR-Codes rot markiert.
- [ ] Foto (Hochformat) nach `public/img/` legen und in `config.ts` eintragen
- [ ] Platzhalter auf Folie 4 ersetzen: Rolle, Firma (rot gestrichelt markiert)
- [ ] Alle `TODO`s in den Sprechernotizen durchgehen (`grep -n TODO slides.md`)
- [ ] Repo pushen, GitHub Pages aktivieren (Settings → Pages → Source: GitHub Actions), Folien-Link in `config.ts` prüfen
- [ ] Einmal komplett laut durchsprechen und Zeit stoppen (Ziel: 13:30 bis zur Fragerunde, Maximum 15:00)

**Am Tag selbst**

- [ ] PDF-Backup auf einem USB-Stick (`pnpm export`), falls Laptop oder WLAN ausfallen
- [ ] Bildschirm erweitern, Folien auf dem Beamer, Ansicht für dich und Slido-Admin auf dem Laptop (siehe oben)
- [ ] Mit dem eigenen Handy einen QR-Code vom Beamer aus der letzten Reihe scannen


## Ablauf (Slot: 15 Minuten Vortrag + 15 Minuten Fragen)

| Zeit | Folie | Was passiert |
| --- | --- | --- |
| 0:00 | Titel | Läuft schon beim Reinkommen, QR-Code führt zu Slido |
| 0:20 | Schätzt mal | Live-Umfrage 1, ansagen: „Slido offen lassen, Fragen jederzeit rein“ |
| 1:30 | 1.350 € | Auflösung, Gehalt nach Studienjahr |
| 2:30 | Kurz zu mir | Max. 45 Sekunden: studiert, heute Vollzeit |
| 3:15 | In einem Satz | Hochschule + Firma, Bewerbung läuft über die Firma |
| 4:30 | Ablauf | 7 Semester, Praxisphasen, Bachelorarbeit im 7. |
| 6:00 | Wahr oder falsch? | 4 Aussagen, Daumen hoch/runter, dann auflösen |
| 8:15 | Lohnt sich das? | Ehrlich: Dafür und dagegen |
| 9:45 | Passt das zu mir? | Selbsttest im Kopf |
| 10:30 | So kommst du rein | 5 Schritte, etwa ein Jahr vorher bewerben |
| 12:00 | Drei Tipps | Aus dem eigenen Alltag |
| 13:30 | Eure Fragen | Bleibt stehen, Fragen vom Laptop vorlesen |
| Ende | Danke | Links, QR zu den Folien |

### Fragerunde

Fragen sammeln sich während des Vortrags in Slido. Am Ende vorlesen und beantworten. Kommt nichts, ist Schluss.

## Good Practices für dieses Publikum

Was letztes Jahr nicht funktioniert hat: Am Ende kamen kaum Fragen. Darauf ist das Konzept ausgerichtet.

**Aufmerksamkeit in den ersten 60 Sekunden**
- Nicht mit „Ich bin … und erzähle heute über …“ anfangen, sondern direkt mit einer Frage, die jeden betrifft: Geld.
- Vorstellen erst danach und kurz. Schüler interessiert, ob das was für *sie* ist, nicht dein Lebenslauf.

**Alle 3–4 Minuten etwas zum Mitmachen**
- Umfrage (Folie 2), Daumen hoch/runter (Folie 7), Selbsttest (Folie 9), dann die halbe Slot-Zeit nur Fragen.
- Gelbe Folien heißen immer: „Jetzt seid ihr dran.“ So lernt das Publikum das Muster.

**Fragen**
- Anonym über Slido: Niemand muss sich vor den anderen melden.
- Der QR-Code steht auf jeder Folie, wer bei der Umfrage gescannt hat, ist schon drin.
- Bei der Umfrage einmal ansagen, dass Fragen jederzeit in Slido gehen.

**Folien**
- Eine Aussage pro Folie, mindestens 22px Schrift auf 1280 × 720, kein Fließtext.
- Gleiche Farben für gleiche Dinge: Blau = Hochschule, Orange = Firma, Gelb = Mitmachen und Zahlen zum Merken.
- Persönliche Geschichten schlagen Statistiken. Die TODOs in den Notizen sind die Stellen für deine Beispiele.

**Technik**
- Fonts und Icons sind lokal eingebunden, die Folien laufen auch offline. Nur Slido braucht Internet.
- PDF-Backup immer dabei.

## Aufbau

```
slides.md            Folien + Sprechernotizen (Kommentare am Ende jeder Folie)
config.ts            Slido-Link, Code, Foto, Folien-URL
slide-bottom.vue     Fortschrittsbalken + Fragen-QR auf jeder Folie
components/          QrCode, SemesterTrack, Payslip, MePhoto, SlidoCode
layouts/             cover, default, stage (gelb, Mitmachen), end
styles/theme.css     Farben, Typografie
```

Stack: [Slidev](https://sli.dev) 53 (Vue + Vite + UnoCSS), Fonts Bricolage Grotesque und Lexend (über Fontsource), Icons Phosphor (Iconify), QR-Codes mit `qrcode`.
`markdown-it` ist per Override auf 14.x gepinnt, weil Slidev 53.0.0 sonst mit markdown-it 15 nicht startet.

## Quellen

- Studienaufbau KoSI: [Hochschule Darmstadt, Fachbereich Informatik](https://www.fbi.h-da.de/en/study/course-outline/specific/dual-computer-science)
- Gehälter Informatik dual: [aubi-plus.de](https://www.aubi-plus.de/duale-studiengaenge/informatik-291/gehalt/), Spanne 800–1.500 €: [Profiling-Institut](https://www.profiling-institut.de/duales-studium/)
- Slido-Limits im kostenlosen Plan: [Slido Community](https://community.slido.com/community-q-a-7/is-there-a-limit-to-how-many-q-a-questions-can-be-asked-in-slido-4441)
- Anonyme Fragen senken die Hürde: [APSA Educate](https://educate.apsanet.org/?p=4910)
