// The pole tricks catalogue. One entry per trick; the catalogue page (and later each trick page) is generated from this list.
// Photos are placeholders for now: the two steel-background studio shots, with varied crops.

export type Level = "Débutante" | "Intermédiaire" | "Avancée";
export type Category = "Rotation" | "Montée" | "Assise" | "Inversion" | "Figure tenue" | "Sol";

export interface Trick {
  slug: string;
  name: string;
  level: Level;
  category: Category;
  alias?: string;
  image: string;
  imagePosition: string;
  mirrored: boolean;
}

const STEEL = [
  "/images/please-keep-the-background--the-233555-iP0",
  "/images/please-look-at-the-first-pose----820406-SN7",
];
const POS = ["50% 35%", "35% 45%", "65% 30%", "50% 60%"];

const RAW: [string, Level, Category, string?][] = [
  ["Fireman spin", "Débutante", "Rotation", "Tour pompier"],
  ["Chair spin", "Débutante", "Rotation", "Tour chaise"],
  ["Front hook spin", "Débutante", "Rotation"],
  ["Back hook spin", "Débutante", "Rotation"],
  ["Carousel spin", "Débutante", "Rotation", "Tour carrousel"],
  ["Step around", "Débutante", "Rotation", "Pas autour"],
  ["Attitude spin", "Débutante", "Rotation"],
  ["Pirouette", "Débutante", "Rotation"],
  ["Climb de base", "Débutante", "Montée", "Basic climb"],
  ["Pole sit", "Débutante", "Assise", "Assise de base"],
  ["Pole hug", "Débutante", "Figure tenue"],
  ["Body wave", "Débutante", "Sol", "Ondulation"],
  ["Knee slide", "Débutante", "Sol", "Glissé genou"],
  ["Hip roll", "Débutante", "Sol", "Roulé de hanches"],
  ["Floor sweep", "Débutante", "Sol"],
  ["Martini sit", "Débutante", "Assise"],
  ["Crucifix", "Intermédiaire", "Assise"],
  ["Basic invert", "Intermédiaire", "Inversion", "Inversion de base"],
  ["Outside leg hang", "Intermédiaire", "Inversion"],
  ["Inside leg hang", "Intermédiaire", "Inversion"],
  ["Butterfly", "Intermédiaire", "Figure tenue", "Papillon"],
  ["Superman", "Intermédiaire", "Figure tenue"],
  ["Brass monkey", "Intermédiaire", "Figure tenue"],
  ["Gemini", "Intermédiaire", "Inversion"],
  ["Scorpio", "Intermédiaire", "Inversion"],
  ["Cupid", "Intermédiaire", "Figure tenue"],
  ["Teddy", "Intermédiaire", "Figure tenue"],
  ["Cradle spin", "Intermédiaire", "Rotation"],
  ["Corkscrew", "Intermédiaire", "Rotation", "Tire-bouchon"],
  ["Reverse grab spin", "Intermédiaire", "Rotation"],
  ["Layback", "Intermédiaire", "Assise"],
  ["Russian layback", "Intermédiaire", "Assise"],
  ["Tabletop", "Intermédiaire", "Figure tenue"],
  ["Bow and arrow", "Intermédiaire", "Figure tenue", "Arc et flèche"],
  ["Back hook invert", "Intermédiaire", "Inversion"],
  ["Fan kick", "Intermédiaire", "Rotation"],
  ["Genie", "Intermédiaire", "Figure tenue"],
  ["Inverted crucifix", "Intermédiaire", "Inversion", "Crucifix inversé"],
  ["Hello boys", "Intermédiaire", "Inversion"],
  ["Jade split", "Avancée", "Figure tenue", "Jade"],
  ["Ayesha", "Avancée", "Inversion", "Inverted V"],
  ["Shoulder mount", "Avancée", "Montée"],
  ["Iron X", "Avancée", "Figure tenue", "Flag"],
  ["Handspring", "Avancée", "Inversion"],
  ["Allegra", "Avancée", "Figure tenue"],
  ["Phoenix spin", "Avancée", "Rotation"],
  ["Yogini", "Avancée", "Figure tenue"],
  ["Rainbow marchenko", "Avancée", "Figure tenue"],
  ["Janeiro", "Avancée", "Figure tenue"],
  ["Brass bridge", "Avancée", "Figure tenue"],
  ["Dragon tail", "Avancée", "Inversion"],
  ["Iguana mount", "Avancée", "Montée"],
  ["Deadlift", "Avancée", "Inversion"],
  ["Flatline scorpio", "Avancée", "Inversion"],
  ["Marley", "Avancée", "Figure tenue"],
  ["Superman split", "Avancée", "Figure tenue"],
  ["Extended butterfly", "Avancée", "Figure tenue"],
  ["Twisted grip handspring", "Avancée", "Inversion"],
  ["Chopsticks", "Avancée", "Figure tenue"],
  ["Pencil", "Avancée", "Figure tenue"],
];

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const tricks: Trick[] = RAW.map(([name, level, category, alias], i) => ({
  slug: slugify(name),
  name,
  level,
  category,
  alias,
  image: STEEL[i % 2],
  imagePosition: POS[Math.floor(i / 2) % 4],
  mirrored: i % 3 === 2,
}));

export const LEVELS: Level[] = ["Débutante", "Intermédiaire", "Avancée"];
export const CATEGORIES: Category[] = ["Rotation", "Montée", "Assise", "Inversion", "Figure tenue", "Sol"];

/** "À la une": hand-picked each month. */
export const FEATURED: { slug: string; tag: string }[] = [
  { slug: "ayesha", tag: "Figure du mois" },
  { slug: "butterfly", tag: "Populaire" },
  { slug: "fireman-spin", tag: "Pour commencer" },
  { slug: "jade-split", tag: "Nouveau" },
];
