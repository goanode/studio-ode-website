// The pole tricks catalogue. One entry per trick; the catalogue page (and later each trick page) is generated from this list.
// Each figure has its own studio photo (named by the studio).

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
  /** photo size (px) and widths of the -p-500 / -p-800 copies, for srcset */
  w: number;
  h: number;
  w500: number;
  w800: number;
}

import dims from "./figureDims.json";

const RAW: [string, Level, Category, string?][] = [
  ["Air walk", "Débutante", "Rotation", "Fairy walk"],
  ["Apprentice", "Débutante", "Figure tenue", "Jamilla"],
  ["Baby angel", "Débutante", "Rotation", "Angel spin"],
  ["Back support tuck", "Débutante", "Assise", "Teddy tuck"],
  ["Boomerang", "Débutante", "Rotation", "Straddle spin"],
  ["Chair spin", "Débutante", "Rotation", "Tour chaise"],
  ["Cross knee release", "Débutante", "Assise", "Figure 4 layback"],
  ["Figurehead", "Débutante", "Figure tenue", "Anjo"],
  ["Hood ornament", "Débutante", "Figure tenue", "Figure skater"],
  ["Martini sit", "Débutante", "Assise", "Tea party"],
  ["Remi sit", "Débutante", "Assise", "Lotus, Buddha"],
  ["Stargazer", "Débutante", "Figure tenue"],
  ["Aerial invert", "Intermédiaire", "Inversion"],
  ["Anastasia", "Intermédiaire", "Figure tenue"],
  ["Baby jade", "Intermédiaire", "Inversion"],
  ["Ballerina", "Intermédiaire", "Figure tenue", "Twisted ballerina"],
  ["Bow and arrow", "Intermédiaire", "Figure tenue", "Arc et flèche, Archer"],
  ["Crescent moon", "Intermédiaire", "Assise", "Full moon, Layback bridge"],
  ["Cross ankle release", "Intermédiaire", "Assise", "Full layback"],
  ["Crucifix", "Intermédiaire", "Assise"],
  ["Cupid", "Intermédiaire", "Figure tenue"],
  ["Dragonfly", "Intermédiaire", "Figure tenue", "Dolphin, Thigh hold"],
  ["Flatline", "Intermédiaire", "Inversion"],
  ["Genie", "Intermédiaire", "Figure tenue", "Wombat"],
  ["Iguana", "Intermédiaire", "Inversion", "Inverted pencil"],
  ["Inverted crucifix", "Intermédiaire", "Inversion", "Crucifix inversé, Fallen angel"],
  ["Layback", "Intermédiaire", "Assise", "Leanback"],
  ["Meathook", "Intermédiaire", "Inversion"],
  ["Scorpio", "Intermédiaire", "Inversion", "Inside leg hang"],
  ["Superman", "Intermédiaire", "Figure tenue"],
  ["Aerial shoulder mount", "Avancée", "Montée"],
  ["Allegra", "Avancée", "Figure tenue", "Closed allegra"],
  ["Annabesque", "Avancée", "Figure tenue"],
  ["Ayesha", "Avancée", "Inversion", "Inverted V, Static V"],
  ["Batwing", "Avancée", "Inversion"],
  ["Dragontail drop", "Avancée", "Inversion"],
  ["Extended butterfly", "Avancée", "Figure tenue"],
  ["Flatline scorpio", "Avancée", "Inversion", "Gemini plank"],
  ["Inverted eagle", "Avancée", "Inversion", "Scorpio cocoon"],
  ["Iron X", "Avancée", "Figure tenue", "Flag"],
  ["Jade split", "Avancée", "Figure tenue", "Jade"],
  ["Jallegra", "Avancée", "Inversion", "Doris"],
  ["Janeiro", "Avancée", "Figure tenue"],
  ["Machine gun", "Avancée", "Figure tenue"],
  ["Pegasus", "Avancée", "Figure tenue"],
  ["Russian split", "Avancée", "Figure tenue"],
  ["Spatchy", "Avancée", "Figure tenue"],
  ["Yogini", "Avancée", "Figure tenue"],
];

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// one photo per figure, in public/images/figures/<slug>(-p-500|-p-800).webp
export const tricks: Trick[] = RAW.map(([name, level, category, alias]) => {
  const slug = slugify(name);
  const d = (dims as Record<string, { w: number; h: number; w500: number; w800: number }>)[slug];
  return { slug, name, level, category, alias, image: `/images/figures/${slug}`, imagePosition: "50% 40%", mirrored: false, ...d };
});

export const LEVELS: Level[] = ["Débutante", "Intermédiaire", "Avancée"];
export const CATEGORIES: Category[] = (["Rotation", "Montée", "Assise", "Inversion", "Figure tenue", "Sol"] as Category[]).filter((c) => tricks.some((t) => t.category === c));

/** "À la une": hand-picked each month. */
export const FEATURED: { slug: string; tag: string }[] = [
  { slug: "ayesha", tag: "Figure du mois" },
  { slug: "superman", tag: "Populaire" },
  { slug: "chair-spin", tag: "Pour commencer" },
  { slug: "jade-split", tag: "Nouveau" },
];

/** srcset with the real widths (the small copies are scaled by the short side, so landscape photos stay sharp when cropped) */
export const figSrcset = (t: Trick) => `${t.image}-p-500.webp ${t.w500}w, ${t.image}-p-800.webp ${t.w800}w, ${t.image}.webp ${t.w}w`;
/** a photo cropped with object-fit: cover into a box of ratio boxW/boxH needs (photo ratio / box ratio) × the box width */
export const coverFactor = (t: Trick, boxRatio: number) => Math.max(1, t.w / t.h / boxRatio);
