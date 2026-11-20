// Short overview + steps for each trick page, keyed by slug.
// Every figure has an intro, a tip, 3–5 steps and the figures to master first (internal links, good for SEO).
// Written as a first draft: Justine should check the technique.
// To add a trick: copy a block, change the slug, write an intro (1–2 sentences) and 3–5 short steps.

export interface TrickContent {
  intro: string;
  /** optional short tip shown next to the photo */
  tip?: string;
  steps: { title: string; text: string }[];
  /** slugs of the figures to master first (shown as links) */
  pre?: string[];
}

export const content: Record<string, TrickContent> = {
  "chair-spin": {
    intro: "Une rotation assise dans le vide : genoux pliés et serrés, comme si tu t'asseyais sur une chaise invisible en tournant.",
    tip: "Pense « genoux vers la poitrine » : plus tu es compacte, plus tu tournes vite et longtemps.",
    steps: [
      { title: "Place tes mains", text: "Main intérieure haute, main extérieure en dessous, comme pour le fireman spin." },
      { title: "Prends de l'élan", text: "Un ou deux pas autour de la barre pour lancer la rotation." },
      { title: "Plie les genoux", text: "Monte les deux genoux ensemble, pieds joints, dos droit." },
      { title: "Descends en douceur", text: "Garde la position assise jusqu'au sol et pose les pieds." },
    ],
  },
  "martini-sit": {
    intro: "Une assise élégante, une jambe crochetée et l'autre croisée, qui ressemble à la silhouette d'un verre à martini.",
    tip: "Serre bien le pli du genou du dessus : c'est le point d'accroche de la figure.",
    steps: [
      { title: "Monte en pole sit", text: "Commence assise, cuisses serrées." },
      { title: "Crochète la jambe du dessus", text: "Plie le genou du dessus autour de la barre." },
      { title: "Croise l'autre", text: "La jambe du dessous vient croiser devant, pied pointé." },
      { title: "Ouvre le buste", text: "Lâche une main et allonge-toi doucement vers l'arrière." },
    ],
  },
  "crucifix": {
    intro: "Une assise sans les mains, buste droit et bras ouverts : la barre est tenue uniquement par les jambes.",
    tip: "Pense à serrer l'intérieur des genoux et des chevilles : plus il y a de peau sur la barre, plus tu es stable.",
    steps: [
      { title: "Monte en pole sit", text: "Cuisses serrées, chevilles croisées." },
      { title: "Serre les jambes", text: "Tiens la barre entre les cuisses, genoux et chevilles." },
      { title: "Lâche les mains", text: "Une main après l'autre, buste droit." },
      { title: "Ouvre les bras", text: "Bras en croix, regard devant, puis reprends la barre pour descendre." },
    ],
  },
  "superman": {
    intro: "Allongée à l'horizontale le long de la barre, la barre serrée entre les cuisses, comme une super-héroïne en plein vol.",
    tip: "Serre les cuisses et pousse avec le bras du bas : ton corps doit rester bien gainé.",
    steps: [
      { title: "Monte en pole sit", text: "Assise, cuisses serrées." },
      { title: "Tourne-toi", text: "Fais pivoter les hanches pour avoir la barre entre les cuisses, face au sol." },
      { title: "Allonge le buste", text: "Main du haut tient la barre, bras du bas poussé." },
      { title: "Tends les jambes", text: "Jambes serrées et tendues, corps à l'horizontale." },
    ],
    pre: ["crucifix"],
  },
  "scorpio": {
    intro: "La version inversée tenue par la jambe intérieure, buste ouvert, pied qui vient chercher l'arrière de la tête dans la version avancée.",
    tip: "Pointe et serre les orteils de la jambe crochetée : la cheville aide à garder la prise.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes ouvertes." },
      { title: "Crochète la jambe intérieure", text: "Genou plié autour de la barre." },
      { title: "Tends l'autre jambe", text: "Jambe extérieure tendue derrière." },
      { title: "Ouvre le buste", text: "Lâche les mains et laisse le buste s'ouvrir vers l'arrière." },
    ],
  },
  "layback": {
    intro: "Assise sur la barre, le buste qui s'allonge en arrière, tête vers le sol : une figure de confiance et de souplesse.",
    tip: "Serre les cuisses avant de partir en arrière, et descends lentement, une vertèbre après l'autre.",
    steps: [
      { title: "Monte en pole sit", text: "Cuisses et chevilles serrées." },
      { title: "Vérifie ta prise", text: "Lâche une main pour tester ta tenue." },
      { title: "Allonge-toi", text: "Descends le buste en arrière, mains qui glissent le long de la barre." },
      { title: "Ouvre les bras", text: "Lâche les mains, puis remonte en reprenant la barre." },
    ],
    pre: ["crucifix"],
  },
  "bow-and-arrow": {
    intro: "Une figure tenue tête en bas, la jambe crochetée et l'autre tirée vers la main comme la corde d'un arc.",
    tip: "Prends le temps d'étirer les hanches et l'arrière des cuisses avant : la souplesse fait la figure.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert." },
      { title: "Crochète la jambe extérieure", text: "Genou plié autour de la barre." },
      { title: "Attrape le pied", text: "La main libre vient chercher le pied de l'autre jambe." },
      { title: "Tire comme un arc", text: "Ouvre la jambe en arrière, buste ouvert." },
    ],
  },
  "inverted-crucifix": {
    intro: "Le crucifix tête en bas : tenue par les cuisses, les bras ouverts vers le sol.",
    tip: "Serre l'intérieur des cuisses et des genoux avant de lâcher : sans prise solide, ne lâche pas.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes ouvertes." },
      { title: "Referme les jambes", text: "Croise-les autour de la barre, cuisses serrées." },
      { title: "Teste la prise", text: "Lâche une main puis l'autre progressivement." },
      { title: "Ouvre les bras", text: "Bras en croix, puis reprends la barre pour sortir." },
    ],
    pre: ["crucifix"],
  },
  "jade-split": {
    intro: "Un grand écart tête en bas, une jambe crochetée à la barre : une figure de souplesse spectaculaire.",
    tip: "Prépare-la avec beaucoup de travail de grand écart au sol, des deux côtés.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert ou butterfly." },
      { title: "Crochète", text: "Le pied du haut ou l'arrière du genou tient la barre." },
      { title: "Ouvre en grand écart", text: "La jambe libre descend vers le sol." },
      { title: "Tiens", text: "Mains en split grip, hanches ouvertes." },
    ],
    pre: ["bow-and-arrow"],
  },
  "ayesha": {
    intro: "Tête en bas, seules tes mains tiennent la barre et ton corps s'éloigne en V. Une figure de force et d'équilibre.",
    tip: "Travaille-la avec une professeure et un tapis : la prise de mains doit être maîtrisée avant de lâcher les jambes.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes croisées autour de la barre." },
      { title: "Place tes mains", text: "Main du haut en twisted grip, main du bas en cup grip, bras tendu." },
      { title: "Pousse et tire", text: "Le bras du bas pousse, celui du haut tire. Épaules basses." },
      { title: "Ouvre en V", text: "Décroise les jambes et ouvre-les en V, hanches loin de la barre." },
    ],
  },
  "iron-x": {
    intro: "Le drapeau : le corps à l'horizontale, perpendiculaire à la barre, tenu uniquement par les bras.",
    tip: "Le bras du bas pousse, le bras du haut tire : l'opposition doit être maximale.",
    steps: [
      { title: "Prise en split grip", text: "Bras tendus, mains écartées." },
      { title: "Lance les jambes", text: "Un petit saut, jambes groupées." },
      { title: "Tends le corps", text: "Ouvre les jambes en V, corps à l'horizontale." },
      { title: "Tiens", text: "Quelques secondes, puis redescends contrôlé." },
    ],
    pre: ["ayesha"],
  },
  "allegra": {
    intro: "Une figure inversée en arabesque, la jambe arrière tenue à la main : elle demande force, souplesse du dos et des épaules.",
    tip: "Échauffe longuement le dos et les épaules avant de la travailler.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert." },
      { title: "Crochète la barre", text: "La jambe du haut tient la barre." },
      { title: "Attrape le pied arrière", text: "La main vient chercher le pied, coude vers le plafond." },
      { title: "Ouvre la poitrine", text: "Cambre doucement et tiens la pose." },
    ],
    pre: ["bow-and-arrow"],
  },
  "yogini": {
    intro: "Une figure tenue inspirée du yoga : jambes croisées, une main tient la barre et l'autre le pied, buste ouvert.",
    tip: "Respire dans la posture : elle se travaille dans la lenteur.",
    steps: [
      { title: "Monte en pole sit", text: "Cuisses serrées." },
      { title: "Crochète une jambe", text: "Genou du dessus plié autour de la barre." },
      { title: "Attrape le pied", text: "La main libre vient chercher le pied de l'autre jambe." },
      { title: "Ouvre la poitrine", text: "Allonge-toi doucement, regard vers le plafond." },
    ],
    pre: ["martini-sit"],
  },
  "janeiro": {
    intro: "Une figure renversée en grand écart, le corps à l'horizontale, tenue par une jambe et les mains.",
    tip: "La jambe crochetée travaille autant que les bras : serre fort.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, mains en split grip." },
      { title: "Crochète une jambe", text: "L'arrière du genou tient la barre." },
      { title: "Allonge le corps", text: "Buste vers l'horizontale." },
      { title: "Ouvre en grand écart", text: "Jambe libre tendue, puis reviens." },
    ],
    pre: ["jade-split"],
  },
  "flatline-scorpio": {
    intro: "Un scorpio à l'horizontale : le corps à plat, perpendiculaire à la barre, tenu par une jambe.",
    tip: "Garde le corps parfaitement gainé : la moindre cassure fait glisser la jambe.",
    steps: [
      { title: "Scorpio", text: "Commence dans la figure, jambe intérieure crochetée." },
      { title: "Allonge le buste", text: "Monte le buste vers l'horizontale." },
      { title: "Tends la jambe libre", text: "Dans le prolongement du corps." },
      { title: "Tiens", text: "Gainée, puis reviens au scorpio." },
    ],
    pre: ["scorpio"],
  },
  "extended-butterfly": {
    intro: "Le butterfly avec la jambe du haut décrochée et tendue : seules les mains et une jambe tiennent la figure.",
    tip: "La main du bas pousse fort et la jambe tendue reste active, pied pointé.",
    steps: [
      { title: "Butterfly", text: "Commence dans la figure." },
      { title: "Décroche le pied du haut", text: "Doucement, en gardant la poussée des bras." },
      { title: "Tends les deux jambes", text: "Jambes ouvertes, loin de la barre." },
      { title: "Tiens", text: "Puis reviens en butterfly." },
    ],
    pre: ["ayesha"],
  },
};
