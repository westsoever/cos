import type { Rating, UserData } from '../types/coffee';
import { computeTasteProfile } from './taste-profile';

const STORAGE_KEY = 'pico-user-data';

const defaultUserData: UserData = {
  ratings: [],
  tasteProfile: null,
};

export function loadUserData(): UserData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultUserData };
    const parsed = JSON.parse(raw) as UserData;
    return {
      ratings: parsed.ratings ?? [],
      tasteProfile: parsed.tasteProfile ?? null,
    };
  } catch {
    return { ...defaultUserData };
  }
}

export function saveUserData(data: UserData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function saveRating(rating: Rating): UserData {
  const data = loadUserData();
  const existingIndex = data.ratings.findIndex((r) => r.coffeeId === rating.coffeeId);
  if (existingIndex >= 0) {
    data.ratings[existingIndex] = rating;
  } else {
    data.ratings.push(rating);
  }
  data.tasteProfile = computeTasteProfile(data.ratings);
  saveUserData(data);
  return data;
}

export function getRatingForCoffee(coffeeId: string): Rating | undefined {
  return loadUserData().ratings.find((r) => r.coffeeId === coffeeId);
}

export function getRatedCoffeeIds(): string[] {
  return loadUserData().ratings.map((r) => r.coffeeId);
}
