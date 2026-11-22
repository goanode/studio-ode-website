// Short overview + steps for each trick page, keyed by slug.
// Every figure has an intro, a tip, 3–5 steps and the figures to master first (internal links, good for SEO).
// Written as a first draft: Justine should check the technique. Many figures follow the method of the Ode training book (photos from 2026-11-22).
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
    intro: "Une figure tenue sans les mains, debout le long de la barre : tout se tient avec les jambes.",
    tip: "Le point de contact principal est au niveau du pubis : serre là, en plus des genoux et des chevilles.",
    steps: [
      { title: "Monte en push up", text: "Fais une montée push up." },
      { title: "Grandis-toi", text: "Tracte-toi par le haut pour être le long de la barre." },
      { title: "Serre les jambes", text: "Garde le grip aux chevilles et aux genoux, contact au niveau du pubis." },
      { title: "Libère les bras", text: "Un bras peut rester devant, barre dans l'aisselle, le temps de bien serrer. Puis repasse-le derrière." },
    ],
    pre: ["chair-spin"],
  },
  "superman": {
    intro: "Une figure horizontale, tenue par les cuisses et une main, le corps allongé comme si tu volais.",
    tip: "Croise les chevilles pour verrouiller ta prise et serrer plus facilement les cuisses.",
    steps: [
      { title: "Pars du Viva", text: "Replace la main du haut le plus près possible du genou, bras plié." },
      { title: "Laisse partir le buste", text: "En tendant le bras, le buste part en arrière : tu as la place de passer la hanche." },
      { title: "Pivote", text: "Pousse la barre avec la jambe intérieure, tends la jambe du haut et pivote le buste de l'autre côté pour te retourner." },
      { title: "Allonge-toi", text: "Garde les jambes gainées et tends-les." },
    ],
    pre: ["cupid"],
  },
  "scorpio": {
    intro: "L'inside leg : inversée, la jambe intérieure accrochée à la barre et la jambe extérieure tendue en arrière.",
    tip: "Garde le buste haut en t'inversant pour que la barre reste sous les côtes.",
    steps: [
      { title: "Inverse-toi", text: "Passe en Open V en gardant le buste haut." },
      { title: "Accroche la jambe intérieure", text: "Plie-la et place le pli du genou au-dessus des mains, genou vers le haut, pied pointé vers le sol. Serre." },
      { title: "Décharge l'autre jambe", text: "Tends et gaine la jambe extérieure, puis laisse-la descendre en arrière." },
      { title: "Trouve le grip", text: "La prise se fait entre le mollet et la cuisse." },
    ],
    pre: ["aerial-invert"],
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
    intro: "Depuis le Pencil, un pied repasse derrière la barre et l'autre jambe part devant, bassin en avant, comme un arc tendu.",
    tip: "Avance vraiment le bassin avec la jambe : c'est ce qui crée la courbe de l'arc.",
    steps: [
      { title: "Pars du Pencil", text: "Inversée le long de la barre, jambes serrées." },
      { title: "Repasse un pied", text: "Fais repasser un pied derrière la barre." },
      { title: "Envoie l'autre jambe", text: "Envoie la seconde jambe devant, ainsi que le bassin." },
      { title: "Cambre", text: "Cambre et passe la tête pour la relever d'un côté." },
    ],
    pre: ["iguana"],
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
    intro: "Le grand écart inversé du Jade : la jambe arrière est tirée vers le sol pour ouvrir au maximum.",
    tip: "Continue de plaquer la jambe intérieure à l'opposé : c'est ce qui garde la prise en haut de la cuisse.",
    steps: [
      { title: "Pars du Jade", text: "Barre serrée au niveau de l'aisselle." },
      { title: "Tends le bras", text: "Tends le bras vers l'arrière pour venir tenir ta cheville." },
      { title: "Tire vers le sol", text: "Tire cette jambe vers le sol pour ouvrir l'écart." },
      { title: "Garde le grip", text: "Continue à plaquer la jambe intérieure à l'opposé." },
    ],
    pre: ["scorpio"],
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
    intro: "Une figure inversée depuis l'inside leg : la main tient la jambe, le bras extérieur passe derrière la barre pour attraper le pied.",
    tip: "Échauffe bien le dos et les épaules : la figure demande d'ouvrir la poitrine.",
    steps: [
      { title: "Pars de l'inside leg", text: "Place ta main intérieure en normal grip derrière le genou intérieur : la jambe est entre la barre et le bras." },
      { title: "Relâche le buste", text: "Laisse descendre le buste vers le bas." },
      { title: "Attrape le pied", text: "Passe le bras extérieur derrière la barre pour attraper le pied, la cheville ou le tibia de la jambe extérieure." },
      { title: "Tends la jambe intérieure", text: "Variation : main intérieure en cup ou normal grip, et main extérieure qui tient la cheville de la jambe opposée." },
    ],
    pre: ["scorpio"],
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
    intro: "Le Butterfly en version ouverte : la jambe du haut s'allonge, la jambe du bas part vers le sol.",
    tip: "Pour garder le talon en contact jambe tendue, ouvre la hanche vers l'extérieur.",
    steps: [
      { title: "Place le Butterfly", text: "Open V, puis Outside leg, bras intérieur tendu derrière la barre, buste pivoté face à la barre." },
      { title: "Trouve les contacts", text: "La jambe extérieure crochetée s'ouvre : contact genou, mollet, talon." },
      { title: "Tends la jambe du haut", text: "Garde le contact à l'arrière du talon." },
      { title: "Ouvre", text: "Envoie la jambe du bas vers le sol. Selon ta souplesse de hanche, le buste reste face à la barre ou s'ouvre." },
    ],
    pre: ["scorpio"],
  },
  "apprentice": {
    intro: "Une figure tenue qui part du Viva : la jambe du bas se plie et pousse vers la barre, la jambe du haut s'allonge.",
    tip: "Garde la pression du pied du bas contre la barre du début à la fin : c'est elle qui te tient.",
    steps: [
      { title: "Pars du Viva", text: "Installe-toi en Viva, jambe intérieure crochetée et mains à la barre." },
      { title: "Plie la jambe du bas", text: "Plie-la en poussant vers la barre pour verrouiller la prise." },
      { title: "Tends la jambe du haut", text: "Allonge-la, pied pointé, sans relâcher la jambe du bas." },
      { title: "Variation", text: "Place la voûte plantaire contre la barre et pousse : tu peux alors ouvrir le bras intérieur vers l'arrière." },
    ],
    pre: ["chair-spin"],
  },
  "boomerang": {
    intro: "Une rotation où les deux jambes montent tendues devant toi : la base des spins jambes allongées.",
    tip: "Verrouille bien le poignet du bas, index pointé vers le sol : c'est lui qui t'éloigne de la barre.",
    steps: [
      { title: "Place tes mains", text: "Main du haut en normal grip, main du bas à hauteur du bassin, index pointé vers le sol." },
      { title: "Tire et pousse", text: "Tire avec la main du haut et pousse avec celle du bas pour éloigner ton corps de la barre." },
      { title: "Monte les jambes", text: "Prends un petit élan et monte les deux jambes tendues devant toi." },
      { title: "Laisse tourner", text: "Garde la position gainée pendant la rotation, puis redescends en douceur." },
    ],
    pre: ["chair-spin"],
  },
  "cross-knee-release": {
    intro: "Une assise renversée en arrière, jambes croisées : le genou plié bloque la barre et libère tes mains.",
    tip: "Les premières fois, fais-toi parer : bascule petit à petit jusqu'à te sentir en confiance seule.",
    steps: [
      { title: "Assieds-toi", text: "Monte à la barre et installe-toi en Seat, jambes croisées." },
      { title: "Tiens la barre", text: "Mains à hauteur du visage." },
      { title: "Bloque la jambe pliée", text: "Garde la jambe du dessous gainée, tends-la et envoie-la vers le haut : elle bloque la jambe pliée contre la barre." },
      { title: "Bascule en arrière", text: "Descends le buste en arrière progressivement, puis lâche les mains quand la prise est sûre." },
    ],
    pre: ["crucifix"],
  },
  "cross-ankle-release": {
    intro: "Le full layback : assise, chevilles croisées, tu bascules complètement en arrière, tenue par les jambes.",
    tip: "Croise bien les chevilles et serre l'intérieur des cuisses avant de lâcher quoi que ce soit.",
    steps: [
      { title: "Assieds-toi", text: "Monte à la barre et installe-toi en Seat." },
      { title: "Tiens la barre", text: "Mains à hauteur du visage." },
      { title: "Croise les chevilles", text: "Tends les jambes, croise-les au niveau des chevilles et envoie-les vers le haut." },
      { title: "Bascule en arrière", text: "Descends le buste petit à petit, avec une pareuse au début, puis seule." },
    ],
    pre: ["cross-knee-release"],
  },
  "baby-angel": {
    intro: "L'angel spin : une rotation dos à la barre, le bassin passe derrière et une jambe s'enroule devant.",
    tip: "Pense à passer le bassin derrière la barre avant d'enrouler la jambe, sinon tu glisses.",
    steps: [
      { title: "Dos à la barre", text: "Une main tire en haut, l'autre pousse en bas à hauteur du bassin." },
      { title: "Prends ton élan", text: "Lance la rotation avec la jambe." },
      { title: "Passe le bassin", text: "Fais passer ton corps du côté du bras du haut, bassin derrière la barre." },
      { title: "Enroule la jambe", text: "Enroule une jambe devant la barre et laisse tourner." },
    ],
    pre: ["chair-spin"],
  },
  "hood-ornament": {
    intro: "Une figure tenue sous l'aisselle, jambes tendues, comme la statuette à l'avant d'une voiture.",
    tip: "Pousse fort avec le coup de pied contre la barre : c'est l'opposition qui te tient, pas les bras.",
    steps: [
      { title: "Monte en side climb", text: "Fais une montée de côté et grandis-toi le long de la barre." },
      { title: "Barre sous l'aisselle", text: "Place la barre au niveau de l'aisselle du bras intérieur." },
      { title: "Pousse avec le pied", text: "Le coup de pied de la jambe extérieure pousse contre la barre." },
      { title: "Tends l'autre jambe", text: "Allonge la jambe intérieure en appuyant vers l'arrière contre la barre." },
    ],
    pre: ["figurehead"],
  },
  "remi-sit": {
    intro: "Le Lotus : une assise jambes croisées et verrouillées autour de la barre, buste libre.",
    tip: "Ne bascule le buste que lorsque les deux jambes sont bien verrouillées.",
    steps: [
      { title: "Crochète une jambe", text: "Monte à la barre, jambe pliée derrière la barre, accrochée dans le pli du genou." },
      { title: "Croise la seconde", text: "La seconde jambe pliée vient par-dessus la première, au niveau de la cheville, pour la bloquer." },
      { title: "Verrouille", text: "Repasse le pied devant la barre pour verrouiller les deux jambes." },
      { title: "Ouvre le buste", text: "Amène le buste en arrière bras tendus, ou garde les mains à la barre." },
    ],
    pre: ["martini-sit"],
  },
  "cupid": {
    intro: "Une figure tenue par le genou intérieur et le pied extérieur, corps aligné et bras ouvert.",
    tip: "Apprends d'abord la position depuis le sol, puis essaie-la en sortant d'un Viva.",
    steps: [
      { title: "Crochète le genou", text: "Place ta jambe intérieure à la barre au niveau du genou et serre." },
      { title: "Pose le pied extérieur", text: "Mains hautes, tracte-toi pour poser la voûte plantaire du pied extérieur sur la barre." },
      { title: "Tends la jambe", text: "Pousse dans ce pied pour tendre la jambe et avance le bassin dans l'alignement de la cuisse." },
      { title: "Ouvre le bras", text: "Tends le bras extérieur et garde la main intérieure à la barre. Variation : tiens ta cheville au lieu de la barre." },
    ],
    pre: ["apprentice"],
  },
  "dragonfly": {
    intro: "Depuis le Viva, le buste descend et pivote face à la barre, les deux jambes restent serrées dessus.",
    tip: "Garde les jambes serrées pendant toute la descente : ce sont elles qui te tiennent.",
    steps: [
      { title: "Pars du Viva", text: "Jambe intérieure tendue et gainée, jambe extérieure pliée et serrée." },
      { title: "Laisse descendre", text: "Fais glisser la main du bas pour que le buste descende." },
      { title: "Pivote face à la barre", text: "Tourne le buste face à la barre, sans relâcher les jambes." },
      { title: "Place les mains", text: "Mains vers le bas bras tendus pour garder le buste haut, ou sans les mains en gainant le dos." },
    ],
    pre: ["cupid"],
  },
  "genie": {
    intro: "Une figure tenue jambe pliée devant la barre, accrochée dans le genou, qui libère les deux mains.",
    tip: "Serre vraiment les deux jambes avant d'enlever les mains, une main après l'autre.",
    steps: [
      { title: "Pars du Viva", text: "Place la main du bas au niveau de l'entrejambe." },
      { title: "Passe la jambe", text: "Repousse dans ce bras pour passer la jambe du bas devant la barre, pliée." },
      { title: "Accroche le genou", text: "L'accroche se fait dans le pli du genou, orienté vers le bas." },
      { title: "Lâche les mains", text: "Serre dans les deux jambes, puis enlève les mains." },
    ],
    pre: ["cupid"],
  },
  "iguana": {
    intro: "Une inversion cambrée : depuis le Pencil, les genoux s'ouvrent et les pieds se rejoignent.",
    tip: "Ouvre la tête vers l'arrière en même temps que tu cambres : le mouvement vient de tout le dos.",
    steps: [
      { title: "Pars du Pencil", text: "Inversée le long de la barre, jambes serrées." },
      { title: "Plie les jambes", text: "Plie-les vers l'arrière." },
      { title: "Ouvre les genoux", text: "Ouvre-les vers l'extérieur et fais se toucher tes pieds." },
      { title: "Cambre", text: "Ouvre la tête vers l'arrière et cambre." },
    ],
    pre: ["bow-and-arrow"],
  },
  "meathook": {
    intro: "Une inversion enroulée : même placement qu'un Open V, mais le corps s'enroule vers l'intérieur.",
    tip: "Monte le bassin bien plus haut qu'en Open V avant d'envoyer le buste vers le bas.",
    steps: [
      { title: "Place-toi comme pour un Open V", text: "Mains et corps en position d'inversion." },
      { title: "Enroule-toi", text: "Fais la montée en enroulant le corps vers l'intérieur." },
      { title: "Monte le bassin", text: "Monte le bassin plus haut que les mains." },
      { title: "Envoie le buste et les jambes", text: "Envoie le buste vers le bas, ainsi que les jambes, celle du bas tendue ou pliée." },
    ],
    pre: ["aerial-invert"],
  },
  "machine-gun": {
    intro: "Une figure tenue buste devant la barre, tenue par le bras, la cuisse et la cheville, la jambe libre envoyée en arrière.",
    tip: "Verrouille le contact buste, barre et cuisse avant de basculer vers l'avant.",
    steps: [
      { title: "Pars du sol ou du Seat", text: "Passe le buste devant la barre." },
      { title: "Place le bras intérieur", text: "Glisse-le sous la jambe intérieure." },
      { title: "Verrouille", text: "Bascule le bassin sur le côté pour verrouiller le contact buste/barre/cuisse, en tenant ta cheville avec la main opposée." },
      { title: "Envoie la jambe", text: "Le corps bascule en avant : tends la seconde jambe, gaine-la et envoie-la en arrière." },
    ],
    pre: ["superman"],
  },
};
