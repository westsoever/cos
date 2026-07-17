import seedCoffees from '../data/seed-coffees.json';
import type { Coffee } from '../types/coffee';

const catalog: Coffee[] = seedCoffees as Coffee[];

export function getAllCoffees(): Coffee[] {
  return catalog;
}

export function getCoffeeById(id: string): Coffee | undefined {
  return catalog.find((c) => c.id === id);
}

export function getCoffeeByBarcode(barcode: string): Coffee | undefined {
  return catalog.find((c) => c.barcode === barcode);
}

export function searchCoffees(query: string, limit = 8): Coffee[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return catalog
    .filter((coffee) => {
      const haystack = [
        coffee.name,
        coffee.roaster,
        coffee.origin,
        coffee.process,
        coffee.description,
        ...coffee.flavorTags,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, limit);
}

export function getCatalogCoffees(excludeIds: string[] = []): Coffee[] {
  const excluded = new Set(excludeIds);
  return catalog.filter((c) => !excluded.has(c.id));
}
