// Alles, was du vor dem Vortrag anpassen musst, steht hier.
export const talk = {
  // Slido-Event anlegen (slido.com, kostenlos), dann Link + Code hier eintragen.
  // Solange "DEIN-CODE" drinsteht, zeigen die Folien einen Platzhalter-Hinweis.
  slidoUrl: 'https://app.sli.do/event/4f5Avgem2EEF6RAMuavNVW',
  slidoCode: '#4557206',
  // Wo die Folien nach dem Vortrag online stehen (GitHub Pages).
  // Foto für "Kurz zu mir": Datei nach public/img/ legen und Pfad eintragen, z. B. '/img/fabrizio.jpg'.
  photo: './img/profile-alt.jpg',
  slidesUrl: 'https://fabrizio-monaco.github.io/ksf-zukunftstag-2026-stagetalk/',
}

export const isPlaceholder = (url: string) => url.includes('DEIN-CODE')
