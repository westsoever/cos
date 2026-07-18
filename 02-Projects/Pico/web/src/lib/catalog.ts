import seedCoffees from '../data/seed-coffees.json';
import type { Coffee, ManualCoffeeInput } from '../types/coffee';

const CUSTOM_COFFEES_KEY = 'pico-custom-coffees';

const seedCatalog: Coffee[] = seedCoffees as Coffee[];

function loadCustomCoffees(): Coffee[] {
  try {
    const raw = localStorage.getItem(CUSTOM_COFFEES_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Coffee[];
  } catch {
    return [];
  }
}

function saveCustomCoffees(coffees: Coffee[]): void {
  localStorage.setItem(CUSTOM_COFFEES_KEY, JSON.stringify(coffees));
}

export function getAllCoffees(): Coffee[] {
  return [...seedCatalog, ...loadCustomCoffees()];
}

export function getCoffeeById(id: string): Coffee | undefined {
  return getAllCoffees().find((c) => c.id === id);
}

export function getCoffeeByBarcode(barcode: string): Coffee | undefined {
  return getAllCoffees().find((c) => c.barcode === barcode);
}

export function searchCoffees(query: string, limit = 8): Coffee[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return getAllCoffees()
    .filter((coffee) => {
      const haystack = [
        coffee.name,
        coffee.roaster,
        coffee.origin,
        coffee.process,
        coffee.variety,
        coffee.description,
        coffee.scaScore?.toString(),
        ...coffee.flavorTags,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, limit);
}

export function getCatalogCoffees(excludeIds: string[] = []): Coffee[] {
  const excluded = new Set(excludeIds);
  return getAllCoffees().filter((c) => !excluded.has(c.id));
}

export function addCustomCoffee(input: ManualCoffeeInput): Coffee {
  const coffee: Coffee = {
    id: `custom-${Date.now()}`,
    name: input.name.trim(),
    roaster: input.roaster.trim(),
    origin: input.origin?.trim() || 'Unknown',
    process: input.process.trim(),
    roastLevel: input.roastLevel,
    variety: input.variety?.trim() || undefined,
    scaScore: input.scaScore,
    flavorTags: [],
    description: 'Added to your Pico journal.',
    isCustom: true,
  };

  const customCoffees = loadCustomCoffees();
  customCoffees.push(coffee);
  saveCustomCoffees(customCoffees);

  return coffee;
}
