// Short overview + steps for each trick page, keyed by slug.
// Only filled in where the steps have been written; other tricks show "steps coming soon".
// To add a trick: copy a block, change the slug, write an intro (1–2 sentences) and 3–5 short steps.

export interface TrickContent {
  intro: string;
  /** optional short tip shown next to the photo */
  tip?: string;
  steps: { title: string; text: string }[];
}

export const content: Record<string, TrickContent> = {
  ayesha: {
    intro: "Tête en bas, seules tes mains tiennent la barre et ton corps s'éloigne en V. Une figure de force et d'équilibre.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes croisées autour de la barre." },
      { title: "Place tes mains", text: "Main du haut en twisted grip, main du bas en cup grip, bras tendu." },
      { title: "Pousse et tire", text: "Le bras du bas pousse, celui du haut tire. Épaules basses." },
      { title: "Ouvre en V", text: "Décroise les jambes et ouvre-les en V, hanches loin de la barre." },
    ],
  },
  "fireman-spin": {
    intro: "La première rotation qu'on apprend : un tour fluide autour de la barre, genoux serrés, comme une glissade de pompier.",
    tip: "Garde les bras tendus : c'est l'élan qui te fait tourner, pas la force.",
    steps: [
      { title: "Place tes mains", text: "Main intérieure haute, main extérieure à hauteur de hanche, bras tendus." },
      { title: "Prends de l'élan", text: "Fais un pas autour de la barre avec le pied extérieur." },
      { title: "Lance les jambes", text: "Balance la jambe extérieure puis la jambe intérieure, genoux serrés." },
      { title: "Tourne et pose-toi", text: "Laisse-toi tourner en descendant doucement, puis pose les pieds." },
    ],
  },
};
