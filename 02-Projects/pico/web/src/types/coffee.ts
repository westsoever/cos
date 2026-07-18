export type RoastLevel = 'light' | 'medium' | 'dark';

export type FlavorTag =
  | 'fruity'
  | 'chocolate'
  | 'floral'
  | 'nutty'
  | 'bright'
  | 'heavy-body'
  | 'caramel'
  | 'berry'
  | 'citrus'
  | 'spice';

export interface Coffee {
  id: string;
  name: string;
  roaster: string;
  origin: string;
  process: string;
  roastLevel: RoastLevel;
  variety?: string;
  scaScore?: number;
  flavorTags: FlavorTag[];
  description: string;
  barcode?: string;
  isCustom?: boolean;
}

export interface ManualCoffeeInput {
  name: string;
  roaster: string;
  origin?: string;
  process: string;
  roastLevel: RoastLevel;
  variety?: string;
  scaScore?: number;
}

export const ROAST_LEVEL_LABELS: Record<RoastLevel, string> = {
  light: 'Light',
  medium: 'Medium',
  dark: 'Dark',
};

export const COFFEE_PROCESSES = [
  'washed',
  'natural',
  'honey',
  'wet-hulled',
  'pulped natural',
  'anaerobic',
  'other',
] as const;

export interface Rating {
  coffeeId: string;
  stars: number;
  flavorTags: FlavorTag[];
  note: string;
  photoDataUrl?: string;
  ratedAt: string;
}

export interface TasteProfile {
  tagWeights: Partial<Record<FlavorTag, number>>;
  topOrigins: string[];
  topProcesses: string[];
  topRoastLevels: RoastLevel[];
  avgRating: number;
  ratingCount: number;
}

export interface UserData {
  ratings: Rating[];
  tasteProfile: TasteProfile | null;
}

export interface SimilarCoffee {
  coffee: Coffee;
  score: number;
}

export const FLAVOR_TAGS: FlavorTag[] = [
  'fruity',
  'chocolate',
  'floral',
  'nutty',
  'bright',
  'heavy-body',
  'caramel',
  'berry',
  'citrus',
  'spice',
];

export const FLAVOR_TAG_LABELS: Record<FlavorTag, string> = {
  fruity: 'Fruity',
  chocolate: 'Chocolate',
  floral: 'Floral',
  nutty: 'Nutty',
  bright: 'Bright',
  'heavy-body': 'Heavy body',
  caramel: 'Caramel',
  berry: 'Berry',
  citrus: 'Citrus',
  spice: 'Spice',
};
