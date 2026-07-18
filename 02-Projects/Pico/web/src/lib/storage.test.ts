import { describe, expect, it } from 'vitest';
import type { Rating, TasteProfile } from '../types/coffee';
import { loadUserData, saveUserData } from './storage';

const STORAGE_KEY = 'pico-user-data';

function rating(overrides: Partial<Rating> = {}): Rating {
  return {
    coffeeId: 'eth-yirg-001',
    stars: 4,
    flavorTags: ['floral'],
    note: 'Tea-like',
    ratedAt: '2026-07-18T12:00:00.000Z',
    ...overrides,
  };
}

describe('Pico user-data storage compatibility', () => {
  it('loads a legacy rating that predates optional brew details', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ratings: [rating()],
        tasteProfile: null,
      }),
    );

    const data = loadUserData();

    expect(data.ratings).toEqual([rating()]);
    expect(data.ratings[0]).not.toHaveProperty('brew');
  });

  it('returns empty user data when localStorage contains malformed JSON', () => {
    localStorage.setItem(STORAGE_KEY, '{"ratings":');

    expect(loadUserData()).toEqual({
      ratings: [],
      tasteProfile: null,
    });
  });

  it('sanitizes persisted ratings and brew fields', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ratings: [
          null,
          { stars: 5 },
          {
            coffeeId: 'coffee-with-bad-data',
            stars: 12,
            flavorTags: ['fruity', 'not-a-tag', 'fruity', 42],
            note: 123,
            ratedAt: 'not-a-date',
            brew: {
              method: 'chemex',
              grind: 'medium',
              doseGrams: 0,
              waterGrams: 300,
              yieldGrams: -1,
              temperatureCelsius: Number.POSITIVE_INFINITY,
              brewTimeSeconds: 180,
            },
          },
        ],
      }),
    );

    expect(loadUserData().ratings).toEqual([
      {
        coffeeId: 'coffee-with-bad-data',
        stars: 5,
        flavorTags: ['fruity'],
        note: '',
        ratedAt: '1970-01-01T00:00:00.000Z',
        brew: {
          grind: 'medium',
          waterGrams: 300,
          brewTimeSeconds: 180,
        },
      },
    ]);
  });

  it('round-trips ratings both with and without optional brew details', () => {
    const withBrew = rating({
      coffeeId: 'ken-aa-003',
      brew: {
        method: 'pour-over',
        doseGrams: 18,
        waterGrams: 300,
        yieldGrams: 250,
        temperatureCelsius: 94,
        grind: 'medium-fine',
        brewTimeSeconds: 195,
      },
    });
    const withoutBrew = rating({ coffeeId: 'col-huila-004', brew: undefined });

    saveUserData({ ratings: [withBrew, withoutBrew], tasteProfile: null });

    const loaded = loadUserData();
    expect(loaded.ratings).toEqual([withBrew, withoutBrew]);
    expect(loaded.ratings[1]).not.toHaveProperty('brew');
  });

  it('recomputes the taste profile instead of trusting persisted profile data', () => {
    const staleProfile: TasteProfile = {
      tagWeights: { chocolate: 1 },
      topOrigins: ['Brazil'],
      topProcesses: ['natural'],
      topRoastLevels: ['dark'],
      avgRating: 1,
      ratingCount: 99,
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ratings: [
          rating({
            stars: 4,
            flavorTags: ['floral', 'citrus'],
          }),
        ],
        tasteProfile: staleProfile,
      }),
    );

    expect(loadUserData().tasteProfile).toEqual({
      tagWeights: { floral: 0.8, citrus: 0.8 },
      topOrigins: ['Ethiopia'],
      topProcesses: ['washed'],
      topRoastLevels: ['light'],
      avgRating: 4,
      ratingCount: 1,
    });
  });
});
