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
  // ——— Débutante ———
  "fireman-spin": {
    intro: "La première rotation qu'on apprend : un tour fluide autour de la barre, genoux serrés, comme une glissade de pompier.",
    tip: "Garde les bras tendus : c'est l'élan qui te fait tourner, pas la force.",
    steps: [
      { title: "Place tes mains", text: "Main intérieure haute, main extérieure à hauteur de hanche, bras tendus." },
      { title: "Prends de l'élan", text: "Fais un pas autour de la barre avec le pied extérieur." },
      { title: "Lance les jambes", text: "Balance la jambe extérieure puis la jambe intérieure, genoux serrés." },
      { title: "Tourne et pose-toi", text: "Laisse-toi tourner en descendant doucement, puis pose les pieds." },
    ],
    pre: ["step-around"],
  },
  "chair-spin": {
    intro: "Une rotation assise dans le vide : genoux pliés et serrés, comme si tu t'asseyais sur une chaise invisible en tournant.",
    tip: "Pense « genoux vers la poitrine » : plus tu es compacte, plus tu tournes vite et longtemps.",
    steps: [
      { title: "Place tes mains", text: "Main intérieure haute, main extérieure en dessous, comme pour le fireman spin." },
      { title: "Prends de l'élan", text: "Un ou deux pas autour de la barre pour lancer la rotation." },
      { title: "Plie les genoux", text: "Monte les deux genoux ensemble, pieds joints, dos droit." },
      { title: "Descends en douceur", text: "Garde la position assise jusqu'au sol et pose les pieds." },
    ],
    pre: ["fireman-spin"],
  },
  "front-hook-spin": {
    intro: "Une rotation où la jambe extérieure vient crocheter la barre par l'avant, l'autre jambe libre et tendue derrière.",
    tip: "Crochète avec le creux du genou, pas avec le tibia : c'est plus stable et plus doux.",
    steps: [
      { title: "Prépare tes mains", text: "Main intérieure haute, main extérieure à hauteur de taille." },
      { title: "Lance la jambe", text: "Balance la jambe extérieure vers l'avant et crochète la barre avec le genou." },
      { title: "Ouvre l'autre jambe", text: "La jambe intérieure suit, pointe de pied tendue derrière toi." },
      { title: "Tourne et finis", text: "Laisse la rotation te descendre, puis pose les pieds un à un." },
    ],
    pre: ["fireman-spin"],
  },
  "back-hook-spin": {
    intro: "Le miroir du front hook : la jambe intérieure crochète la barre par l'arrière et le buste s'ouvre, pour une rotation très élégante.",
    tip: "Ouvre la poitrine et regarde loin devant toi : la figure gagne tout de suite en allure.",
    steps: [
      { title: "Place-toi dos à la barre", text: "Main intérieure haute, épaule proche de la barre." },
      { title: "Crochète par l'arrière", text: "Monte la jambe intérieure derrière la barre et plie le genou autour." },
      { title: "Libère l'autre jambe", text: "Jambe extérieure tendue ou pliée en attitude." },
      { title: "Ouvre le buste", text: "Tourne en gardant la poitrine ouverte, puis redescends doucement." },
    ],
    pre: ["front-hook-spin"],
  },
  "carousel-spin": {
    intro: "Une grande rotation en arc de cercle, jambes groupées : on tourne loin de la barre comme sur un manège.",
    tip: "Éloigne tes hanches de la barre : le cercle plus grand donne une rotation plus ample et plus lente.",
    steps: [
      { title: "Mains en split grip", text: "Main du haut tire, main du bas pousse, bras tendus." },
      { title: "Prends de l'élan", text: "Un grand pas autour de la barre, hanches loin." },
      { title: "Groupe les jambes", text: "Genoux pliés ensemble, pieds sous les fesses." },
      { title: "Tourne en arc", text: "Garde le corps à distance et redescends sur les pieds." },
    ],
    pre: ["chair-spin"],
  },
  "step-around": {
    intro: "Le tout premier mouvement autour de la barre : une marche fluide qui t'apprend la prise de main et le transfert de poids.",
    tip: "Marche sur la pointe des pieds, épaules basses : c'est la base de la grâce à la barre.",
    steps: [
      { title: "Main sur la barre", text: "Main intérieure à hauteur des yeux, bras presque tendu." },
      { title: "Premier pas", text: "Pied extérieur qui croise devant, sur la pointe." },
      { title: "Penche-toi légèrement", text: "Laisse ton poids s'éloigner de la barre, bras tendu." },
      { title: "Fais le tour", text: "Enchaîne trois ou quatre pas autour, en gardant le rythme." },
    ],
  },
  "attitude-spin": {
    intro: "Une rotation inspirée de la danse classique : une jambe crochetée à la barre, l'autre pliée derrière en attitude.",
    tip: "Le genou de la jambe en attitude reste plus haut que le pied : c'est ce qui dessine la ligne.",
    steps: [
      { title: "Prépare tes mains", text: "Main intérieure haute, main extérieure à hauteur de taille." },
      { title: "Crochète la barre", text: "Jambe intérieure pliée autour de la barre." },
      { title: "Monte l'attitude", text: "Jambe extérieure pliée derrière, genou ouvert sur le côté." },
      { title: "Tourne", text: "Garde la pose sur toute la rotation, puis redescends." },
    ],
    pre: ["back-hook-spin"],
  },
  "pirouette": {
    intro: "Un tour sur la pointe du pied autour de la barre : un mouvement de transition léger, parfait pour lier les figures.",
    tip: "Repère un point fixe avec le regard pour ne pas avoir le tournis.",
    steps: [
      { title: "Main sur la barre", text: "Main intérieure à hauteur d'épaule, l'autre en couronne ou libre." },
      { title: "Monte sur demi-pointe", text: "Pied intérieur proche de la barre, talon levé." },
      { title: "Lance le tour", text: "Pousse avec le pied extérieur et ramène-le contre la cheville." },
      { title: "Termine en douceur", text: "Repose le talon et enchaîne avec le mouvement suivant." },
    ],
    pre: ["step-around"],
  },
  "climb-de-base": {
    intro: "La première montée : tu grimpes en serrant la barre entre tes pieds et tes cuisses, comme une échelle.",
    tip: "Serre le dessus du pied d'un côté et le dessous de l'autre : c'est cette « pince » qui te tient, pas tes bras.",
    steps: [
      { title: "Mains hautes", text: "Les deux mains au-dessus de la tête, bras tendus." },
      { title: "Monte les genoux", text: "Saute ou monte les deux genoux et pince la barre avec les pieds." },
      { title: "Redresse-toi", text: "Pousse sur les jambes pour te mettre debout, puis remonte les mains." },
      { title: "Répète", text: "Recommence pour gagner de la hauteur, puis descends doucement." },
    ],
  },
  "pole-sit": {
    intro: "L'assise de base : la barre coincée entre les cuisses, tu peux lâcher les mains en toute sécurité.",
    tip: "Croise les chevilles et serre l'intérieur des cuisses : la peau doit toucher la barre.",
    steps: [
      { title: "Monte en climb", text: "Fais un climb de base pour te retrouver en hauteur." },
      { title: "Croise les jambes", text: "Jambe du dessus devant la barre, chevilles croisées." },
      { title: "Serre les cuisses", text: "Penche légèrement le buste en arrière, cuisses serrées." },
      { title: "Lâche une main", text: "Puis l'autre, quand tu te sens stable." },
    ],
    pre: ["climb-de-base"],
  },
  "pole-hug": {
    intro: "Une figure tenue toute simple : tu enlaces la barre avec bras et jambes, pour apprendre à trouver tes points d'appui.",
    tip: "Respire et relâche les épaules : la tenue vient des jambes, pas d'une crispation des bras.",
    steps: [
      { title: "Face à la barre", text: "Bras autour de la barre, joue proche." },
      { title: "Monte une jambe", text: "Crochète la barre avec le genou intérieur." },
      { title: "Ajoute l'autre", text: "Croise la deuxième jambe et serre les chevilles." },
      { title: "Tiens la pose", text: "Quelques secondes, puis redescends un pied après l'autre." },
    ],
  },
  "body-wave": {
    intro: "Une ondulation du corps de la tête aux hanches, le mouvement signature du pole dance au sol et debout.",
    tip: "Commence lentement devant un miroir : la vague doit passer par chaque partie du corps, une à une.",
    steps: [
      { title: "Face à la barre", text: "Une main sur la barre, pieds écartés à largeur de hanches." },
      { title: "Avance la poitrine", text: "La poitrine part vers l'avant en premier." },
      { title: "Fais passer la vague", text: "Le ventre, puis les hanches suivent, genoux souples." },
      { title: "Recommence", text: "Ramène la tête en dernier et enchaîne les vagues." },
    ],
  },
  "knee-slide": {
    intro: "Une glissade sur les genoux pour descendre au sol avec fluidité, à la fin d'une rotation ou d'une chorégraphie.",
    tip: "Porte des genouillères au début : la glissade reste douce pour les genoux.",
    steps: [
      { title: "Prépare la descente", text: "Debout, une main sur la barre, genoux souples." },
      { title: "Pose un genou", text: "Descends en contrôlant avec les cuisses, sans tomber." },
      { title: "Glisse", text: "Laisse le genou glisser vers l'avant, buste droit." },
      { title: "Finis au sol", text: "Termine assise sur les talons ou en body wave." },
    ],
  },
  "hip-roll": {
    intro: "Un cercle des hanches debout ou à genoux : un mouvement de floorwork simple qui travaille la fluidité.",
    tip: "Seules les hanches bougent : garde les épaules au-dessus des pieds.",
    steps: [
      { title: "Pose-toi", text: "Pieds écartés, genoux légèrement pliés." },
      { title: "Hanche vers le côté", text: "Pousse la hanche droite vers l'extérieur." },
      { title: "Dessine le cercle", text: "Passe vers l'arrière, l'autre côté puis l'avant." },
      { title: "Enchaîne", text: "Fais plusieurs cercles, puis change de sens." },
    ],
  },
  "floor-sweep": {
    intro: "Un balayage de jambe au sol, ample et fluide, pour passer d'une position à l'autre avec style.",
    tip: "Pointe le pied tout au long du mouvement : la ligne fait toute la différence.",
    steps: [
      { title: "Assise au sol", text: "Assise sur une hanche, mains au sol derrière toi." },
      { title: "Tends la jambe", text: "Jambe du dessus tendue, pied pointé." },
      { title: "Balaie", text: "Dessine un grand arc au sol avec la jambe." },
      { title: "Change de côté", text: "Bascule le poids et enchaîne de l'autre côté." },
    ],
    pre: ["body-wave"],
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
    pre: ["pole-sit"],
  },
  // ——— Intermédiaire ———
  "crucifix": {
    intro: "Une assise sans les mains, buste droit et bras ouverts : la barre est tenue uniquement par les jambes.",
    tip: "Pense à serrer l'intérieur des genoux et des chevilles : plus il y a de peau sur la barre, plus tu es stable.",
    steps: [
      { title: "Monte en pole sit", text: "Cuisses serrées, chevilles croisées." },
      { title: "Serre les jambes", text: "Tiens la barre entre les cuisses, genoux et chevilles." },
      { title: "Lâche les mains", text: "Une main après l'autre, buste droit." },
      { title: "Ouvre les bras", text: "Bras en croix, regard devant, puis reprends la barre pour descendre." },
    ],
    pre: ["pole-sit"],
  },
  "basic-invert": {
    intro: "La première inversion : tu passes la tête en bas en montant les jambes de part et d'autre de la barre. Une étape clé de la progression.",
    tip: "Pousse avec le bras du bas et monte les hanches avant les jambes : c'est le bassin qui fait la figure.",
    steps: [
      { title: "Mains en split grip", text: "Main du haut au-dessus de la tête, main du bas à hauteur de poitrine." },
      { title: "Monte les genoux", text: "Ramène les genoux vers la poitrine, comme en boule." },
      { title: "Bascule les hanches", text: "Monte le bassin au-dessus de la tête, en gardant les bras forts." },
      { title: "Ouvre les jambes", text: "Une jambe de chaque côté de la barre, puis redescends dans l'ordre inverse." },
    ],
    pre: ["climb-de-base", "pole-sit"],
  },
  "outside-leg-hang": {
    intro: "Suspendue tête en bas par la jambe extérieure : une figure qui demande confiance et un bon crochet du genou.",
    tip: "Teste toujours ton crochet avant de lâcher les mains : le pli du genou doit être bien serré.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes de part et d'autre de la barre." },
      { title: "Crochète la jambe extérieure", text: "Plie le genou autour de la barre et serre." },
      { title: "Libère l'autre jambe", text: "Jambe intérieure tendue ou pliée, loin de la barre." },
      { title: "Lâche les mains", text: "Une à une, quand le crochet est sûr. Reprends-les pour sortir." },
    ],
    pre: ["basic-invert"],
  },
  "inside-leg-hang": {
    intro: "Le miroir de l'outside leg hang : suspendue par la jambe intérieure, buste ouvert vers la salle.",
    tip: "Garde l'autre jambe active, pied pointé : elle équilibre la figure.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes ouvertes." },
      { title: "Crochète la jambe intérieure", text: "Genou plié autour de la barre, bien serré." },
      { title: "Ouvre l'autre jambe", text: "Jambe extérieure tendue vers le sol ou en attitude." },
      { title: "Lâche les mains", text: "Doucement, puis reprends la barre pour sortir." },
    ],
    pre: ["outside-leg-hang"],
  },
  "butterfly": {
    intro: "Une figure tête en bas iconique : une jambe crochetée, l'autre tendue, les mains tiennent la barre en split grip. Elle ouvre la porte à de nombreuses variantes.",
    tip: "Le pied du haut tire la barre vers toi et la jambe du bas pousse : c'est cette opposition qui te tient.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes de part et d'autre de la barre." },
      { title: "Crochète le pied du haut", text: "Le dessus du pied extérieur vient crocheter la barre." },
      { title: "Tends l'autre jambe", text: "Jambe intérieure tendue, appuyée contre la barre." },
      { title: "Ouvre les hanches", text: "Mains en split grip, hanches loin de la barre." },
    ],
    pre: ["basic-invert"],
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
    pre: ["pole-sit", "crucifix"],
  },
  "brass-monkey": {
    intro: "Une figure tête en bas, de profil, tenue par une main et le pli du genou. Puissante et très graphique.",
    tip: "Le bras du bas reste tendu et la main pousse fort : c'est le « pilier » de la figure.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes ouvertes." },
      { title: "Crochète la jambe extérieure", text: "Pli du genou autour de la barre." },
      { title: "Change de prise", text: "Lâche la main du haut, la main du bas pousse, bras tendu." },
      { title: "Ouvre", text: "Jambe libre tendue, buste de profil vers la salle." },
    ],
    pre: ["outside-leg-hang"],
  },
  "gemini": {
    intro: "Une inversion tenue par la jambe extérieure, l'autre jambe tendue devant : le corps dessine une belle ligne ouverte.",
    tip: "Pousse le pied de la jambe libre contre la barre pour verrouiller la figure.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, jambes de part et d'autre." },
      { title: "Crochète la jambe extérieure", text: "Genou plié, le haut de la cuisse contre la barre." },
      { title: "Tends l'autre jambe", text: "Jambe intérieure tendue devant la barre, pied appuyé." },
      { title: "Lâche une ou deux mains", text: "Ouvre le buste vers l'arrière quand tu te sens stable." },
    ],
    pre: ["outside-leg-hang"],
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
    pre: ["gemini"],
  },
  "cupid": {
    intro: "Une figure tenue jambes tendues autour de la barre, tête en bas, qui dessine une silhouette en forme de flèche.",
    tip: "Les hanches restent proches de la barre : si tu t'éloignes, la prise glisse.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, mains en split grip." },
      { title: "Crochète par l'arrière des genoux", text: "La barre passe derrière les genoux, jambes croisées." },
      { title: "Tends les jambes", text: "Jambes serrées et tendues vers le plafond." },
      { title: "Lâche les mains", text: "Seulement si la prise est sûre, puis reprends-les pour sortir." },
    ],
    pre: ["basic-invert"],
  },
  "teddy": {
    intro: "Une figure tenue en équilibre sur l'épaule et le bras, les jambes enroulées autour de la barre comme un ours en peluche.",
    tip: "Le coude du bas s'appuie contre la barre : c'est lui qui porte le poids, pas le cou.",
    steps: [
      { title: "Mets-toi face à la barre", text: "Bras du bas plié, coude contre la barre." },
      { title: "Monte les genoux", text: "Groupe les jambes, genoux vers la poitrine." },
      { title: "Enroule les jambes", text: "Croise-les autour de la barre." },
      { title: "Tiens", text: "Garde le buste compact, puis redescends." },
    ],
    pre: ["basic-invert"],
  },
  "cradle-spin": {
    intro: "Une rotation tête en bas, bercée entre les bras et les jambes autour de la barre.",
    tip: "Garde le menton rentré et les bras forts : la rotation est lente et contrôlée.",
    steps: [
      { title: "Mains en split grip", text: "Bras du bas plié, coude contre la barre." },
      { title: "Prends de l'élan", text: "Un pas autour de la barre." },
      { title: "Bascule tête en bas", text: "Monte les genoux et passe les jambes de part et d'autre." },
      { title: "Tourne", text: "Laisse la rotation te bercer, puis repose les pieds." },
    ],
    pre: ["basic-invert", "chair-spin"],
  },
  "corkscrew": {
    intro: "Une rotation en spirale, jambes croisées, où le corps descend autour de la barre comme un tire-bouchon.",
    tip: "Garde les jambes croisées tout le long : c'est ce qui crée l'effet de spirale.",
    steps: [
      { title: "Prépare tes mains", text: "Main intérieure haute, main extérieure plus bas." },
      { title: "Lance la rotation", text: "Un pas autour de la barre." },
      { title: "Croise les jambes", text: "Monte les jambes en les croisant autour de la barre." },
      { title: "Spirale vers le bas", text: "Descends en tournant, puis pose les pieds." },
    ],
    pre: ["chair-spin"],
  },
  "reverse-grab-spin": {
    intro: "Une rotation où la main du haut tient la barre à l'envers : le tour est plus ample et plus spectaculaire.",
    tip: "Échauffe bien les poignets : la prise inversée les sollicite davantage.",
    steps: [
      { title: "Main inversée", text: "Main du haut tournée vers l'extérieur, pouce vers le bas." },
      { title: "Main du bas", text: "Elle pousse, bras tendu, à hauteur de hanche." },
      { title: "Lance les jambes", text: "Élan, puis jambes groupées ou en attitude." },
      { title: "Tourne", text: "Garde les bras forts, puis redescends." },
    ],
    pre: ["carousel-spin"],
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
    pre: ["pole-sit", "crucifix"],
  },
  "russian-layback": {
    intro: "Une variante du layback où la jambe du bas se tend en avant : la barre ne tient plus qu'avec une cuisse et un pied.",
    tip: "Le pied de la jambe tendue pousse contre la barre : sans lui, la figure glisse.",
    steps: [
      { title: "Commence en layback", text: "Assise, buste allongé en arrière." },
      { title: "Tends la jambe du bas", text: "Pied qui pousse contre la barre." },
      { title: "Plie la jambe du haut", text: "Elle crochète la barre." },
      { title: "Ouvre", text: "Bras libres, buste allongé." },
    ],
    pre: ["layback"],
  },
  "tabletop": {
    intro: "Une figure horizontale, assise sur la barre et le buste parallèle au sol, comme un plateau de table.",
    tip: "Gaine le ventre : c'est lui qui garde le dos bien plat.",
    steps: [
      { title: "Monte en pole sit", text: "Cuisses serrées." },
      { title: "Crochète une jambe", text: "Genou plié autour de la barre." },
      { title: "Penche le buste", text: "Descends le buste vers l'horizontale, une main tient la barre." },
      { title: "Tends la jambe libre", text: "Jambe à l'horizontale, dans le prolongement du corps." },
    ],
    pre: ["pole-sit"],
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
    pre: ["outside-leg-hang", "butterfly"],
  },
  "back-hook-invert": {
    intro: "Une inversion qui part d'un back hook : la jambe crochetée aide à basculer tête en bas.",
    tip: "Commence près du sol et monte petit à petit : la figure demande de bien sentir le crochet.",
    steps: [
      { title: "Back hook", text: "Jambe intérieure crochetée derrière la barre." },
      { title: "Mains en split grip", text: "Bras forts, coudes proches de la barre." },
      { title: "Bascule", text: "Monte les hanches et laisse la tête descendre." },
      { title: "Ouvre", text: "Jambe libre tendue, puis reviens en sens inverse." },
    ],
    pre: ["back-hook-spin", "basic-invert"],
  },
  "fan-kick": {
    intro: "Une rotation où les jambes tendues dessinent un grand éventail au-dessus de la barre.",
    tip: "Pense « jambes longues et pieds pointés » : l'amplitude de l'éventail fait l'effet.",
    steps: [
      { title: "Mains en split grip", text: "Main du haut tire, main du bas pousse." },
      { title: "Lance les jambes", text: "Jambes tendues et serrées, d'un côté de la barre." },
      { title: "Passe au-dessus", text: "Dessine un arc au-dessus de la barre, de l'autre côté." },
      { title: "Repose les pieds", text: "Atterris doucement, genoux souples." },
    ],
    pre: ["carousel-spin"],
  },
  "genie": {
    intro: "Une figure tenue jambes croisées en lotus autour de la barre, buste droit : une pose posée et élégante.",
    tip: "Travaille l'ouverture de hanches en dehors des cours : le lotus doit être confortable au sol d'abord.",
    steps: [
      { title: "Monte en pole sit", text: "Assise, cuisses serrées." },
      { title: "Plie les jambes", text: "Croise-les en lotus autour de la barre." },
      { title: "Redresse le buste", text: "Dos droit, épaules basses." },
      { title: "Lâche les mains", text: "Mains jointes devant toi, puis reprends la barre." },
    ],
    pre: ["crucifix"],
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
    pre: ["basic-invert", "crucifix"],
  },
  "hello-boys": {
    intro: "Une inversion jambes grandes ouvertes en straddle, tenue par les mains : une figure joueuse et pleine d'énergie.",
    tip: "Les jambes s'ouvrent loin de la barre, mais les hanches restent proches.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, mains en split grip." },
      { title: "Éloigne les jambes", text: "Jambes tendues, de chaque côté de la barre." },
      { title: "Ouvre en grand écart", text: "Straddle le plus large possible." },
      { title: "Referme", text: "Ramène les jambes et redescends." },
    ],
    pre: ["basic-invert"],
  },
  // ——— Avancée ———
  "jade-split": {
    intro: "Un grand écart tête en bas, une jambe crochetée à la barre : une figure de souplesse spectaculaire.",
    tip: "Prépare-la avec beaucoup de travail de grand écart au sol, des deux côtés.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert ou butterfly." },
      { title: "Crochète", text: "Le pied du haut ou l'arrière du genou tient la barre." },
      { title: "Ouvre en grand écart", text: "La jambe libre descend vers le sol." },
      { title: "Tiens", text: "Mains en split grip, hanches ouvertes." },
    ],
    pre: ["butterfly", "bow-and-arrow"],
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
    pre: ["butterfly", "brass-monkey"],
  },
  "shoulder-mount": {
    intro: "Une montée tête en bas où l'épaule se pose contre la barre et les jambes montent sans élan.",
    tip: "Commence avec les genoux pliés : jambes tendues, c'est la version la plus difficile.",
    steps: [
      { title: "Épaule contre la barre", text: "Main du haut au-dessus de l'épaule, main du bas plus bas." },
      { title: "Gaine-toi", text: "Ventre serré, épaules basses." },
      { title: "Monte les jambes", text: "Genoux pliés puis jambes tendues, au-dessus de la tête." },
      { title: "Ouvre ou enchaîne", text: "Termine en V ou enchaîne avec une autre figure." },
    ],
    pre: ["basic-invert", "ayesha"],
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
  "handspring": {
    intro: "Une inversion qui part du sol, tête en bas, tenue uniquement par les mains : la figure culte du pole avancé.",
    tip: "Travaille-la avec une professeure et un tapis : la prise de mains et l'engagement des épaules doivent être solides.",
    steps: [
      { title: "Prise de mains", text: "Main du haut en cup grip, main du bas qui pousse." },
      { title: "Lance les jambes", text: "Un petit saut et monte les jambes au-dessus de la tête." },
      { title: "Bascule", text: "Les hanches passent au-dessus des épaules." },
      { title: "Ouvre en V", text: "Jambes en V, puis redescends contrôlé." },
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
  "phoenix-spin": {
    intro: "Une rotation spectaculaire où les jambes tendues décrivent un grand cercle autour de la barre, comme des ailes.",
    tip: "Pense à l'élan : les jambes tendues tracent le cercle, le buste reste proche de la barre.",
    steps: [
      { title: "Mains en split grip", text: "Main du haut tire, main du bas pousse." },
      { title: "Prends de l'élan", text: "Un grand pas autour de la barre." },
      { title: "Lance les jambes", text: "Jambes tendues et ouvertes, en arc." },
      { title: "Tourne", text: "Laisse les jambes passer et repose les pieds." },
    ],
    pre: ["fan-kick"],
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
  "rainbow-marchenko": {
    intro: "Une figure de grande souplesse, le dos cambré en arc-en-ciel, le pied qui rejoint la main au-dessus de la tête.",
    tip: "Elle demande une souplesse du dos et des épaules importante : travaille-la progressivement avec ta professeure.",
    steps: [
      { title: "Prise de mains", text: "Main du haut tient la barre au-dessus de la tête." },
      { title: "Crochète", text: "La jambe intérieure crochète la barre." },
      { title: "Monte le pied arrière", text: "Plie la jambe libre et tends le pied vers la main." },
      { title: "Cambre", text: "Ouvre le dos en arc, puis redescends lentement." },
    ],
    pre: ["allegra"],
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
  "brass-bridge": {
    intro: "Le brass monkey prolongé en pont : le corps s'ouvre en arc, la main libre tendue vers le sol.",
    tip: "Commence par bien maîtriser le brass monkey à droite comme à gauche.",
    steps: [
      { title: "Brass monkey", text: "Commence dans la figure, bras du bas qui pousse." },
      { title: "Ouvre la poitrine", text: "Laisse le buste s'allonger en arrière." },
      { title: "Tends le bras", text: "La main libre descend vers le sol." },
      { title: "Reviens", text: "Remonte en contrôle avant de sortir." },
    ],
    pre: ["brass-monkey"],
  },
  "dragon-tail": {
    intro: "Une inversion tenue par l'épaule et les bras, les jambes qui s'étirent comme la queue d'un dragon.",
    tip: "L'épaule appuyée contre la barre est le pivot : garde-la active.",
    steps: [
      { title: "Épaule contre la barre", text: "Comme pour un shoulder mount." },
      { title: "Monte les jambes", text: "Jambes au-dessus de la tête." },
      { title: "Ouvre", text: "Une jambe vers l'avant, l'autre vers l'arrière." },
      { title: "Tiens", text: "Gainée, puis redescends contrôlé." },
    ],
    pre: ["shoulder-mount"],
  },
  "iguana-mount": {
    intro: "Une montée tête en bas où le bras s'enroule autour de la barre : une variante du shoulder mount.",
    tip: "Protège ton épaule : échauffement complet et progression pas à pas.",
    steps: [
      { title: "Enroule le bras", text: "Le bras du haut passe derrière la barre." },
      { title: "Place la main du bas", text: "Elle pousse, bras tendu." },
      { title: "Monte les jambes", text: "Pliées puis tendues, au-dessus de la tête." },
      { title: "Enchaîne", text: "Termine en V ou dans une autre figure." },
    ],
    pre: ["shoulder-mount"],
  },
  "deadlift": {
    intro: "Une inversion sans élan, jambes tendues : on monte depuis une position pendue jusqu'au V, à la force des bras et du ventre.",
    tip: "La force du centre fait tout : travaille le gainage en dehors de la barre.",
    steps: [
      { title: "Prise de mains", text: "Split grip ou cup grip, bras forts." },
      { title: "Suspends-toi", text: "Pieds décollés du sol, jambes tendues." },
      { title: "Monte lentement", text: "Jambes tendues jusqu'au-dessus de la tête, sans élan." },
      { title: "Ouvre en V", text: "Puis redescends avec contrôle." },
    ],
    pre: ["handspring"],
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
  "marley": {
    intro: "Une figure tenue en équilibre, la barre coincée sous un bras et le corps allongé à l'horizontale.",
    tip: "Serre le bras contre le corps : c'est le pli du bras qui porte la figure.",
    steps: [
      { title: "Coince la barre", text: "La barre passe sous l'aisselle, bras bien serré." },
      { title: "Place la main du bas", text: "Elle pousse." },
      { title: "Allonge le corps", text: "Jambes tendues, corps à l'horizontale." },
      { title: "Tiens", text: "Quelques secondes, puis redescends." },
    ],
    pre: ["superman"],
  },
  "superman-split": {
    intro: "Le superman ouvert en grand écart : une figure aérienne qui combine gainage et souplesse.",
    tip: "Commence par un superman solide et un grand écart confortable au sol.",
    steps: [
      { title: "Superman", text: "Corps à l'horizontale, cuisses serrées sur la barre." },
      { title: "Libère une jambe", text: "La jambe du dessus se décolle." },
      { title: "Ouvre en grand écart", text: "Jambes tendues, hanches carrées." },
      { title: "Reviens", text: "Referme et redescends en contrôle." },
    ],
    pre: ["superman", "jade-split"],
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
    pre: ["butterfly", "ayesha"],
  },
  "twisted-grip-handspring": {
    intro: "Le handspring en twisted grip : la main du haut tournée, pour une figure encore plus aérienne.",
    tip: "Travaille-la avec une professeure et un tapis, et échauffe bien les épaules et les poignets.",
    steps: [
      { title: "Twisted grip", text: "Main du haut tournée, coude vers l'avant." },
      { title: "Main du bas", text: "Elle pousse, bras tendu." },
      { title: "Lance les jambes", text: "Petit saut, jambes au-dessus de la tête." },
      { title: "Ouvre en V", text: "Puis redescends contrôlé." },
    ],
    pre: ["handspring"],
  },
  "chopsticks": {
    intro: "Une inversion où les jambes s'ouvrent et se ferment comme des baguettes, tenue par une jambe crochetée.",
    tip: "Les jambes restent tendues et pointées : la netteté du mouvement fait l'effet.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert." },
      { title: "Crochète une jambe", text: "Pli du genou autour de la barre." },
      { title: "Tends l'autre", text: "Jambe libre tendue, parallèle à la barre." },
      { title: "Ouvre et ferme", text: "Comme des baguettes, en contrôle." },
    ],
    pre: ["gemini", "scorpio"],
  },
  "pencil": {
    intro: "Une figure inversée toute droite, jambes serrées le long de la barre, corps aligné comme un crayon.",
    tip: "Pousse les hanches vers le plafond : le corps doit former une ligne droite.",
    steps: [
      { title: "Inverse-toi", text: "Basic invert, mains en split grip." },
      { title: "Serre les jambes", text: "Contre la barre, chevilles croisées." },
      { title: "Aligne-toi", text: "Hanches et jambes dans le prolongement du buste." },
      { title: "Tiens", text: "Puis redescends en contrôle." },
    ],
    pre: ["cupid"],
  },
};
