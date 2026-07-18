import { loadUserData } from '../lib/storage';
import { getSimilarCoffees } from '../lib/similarity';
import { FLAVOR_TAG_LABELS } from '../types/coffee';
import type { FlavorTag } from '../types/coffee';
import { SimilarList } from './SimilarList';

interface YouViewProps {
  onSelectCoffee: (coffeeId: string) => void;
  refreshKey: number;
}

export function YouView({ onSelectCoffee, refreshKey }: YouViewProps) {
  void refreshKey;
  const { tasteProfile, ratings } = loadUserData();

  if (!tasteProfile || ratings.length === 0) {
    return (
      <div className="mx-auto max-w-lg py-12 text-center">
        <p className="text-4xl">✨</p>
        <h2 className="mt-4 text-lg font-semibold text-[#1c1410]">Your taste profile</h2>
        <p className="mt-2 text-sm text-[#8a7568]">
          Rate a few coffees to unlock personalized recommendations.
        </p>
      </div>
    );
  }

  const topTags = (Object.entries(tasteProfile.tagWeights) as [FlavorTag, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const ratedIds = ratings.map((r) => r.coffeeId);
  const recommendations = getSimilarCoffees(tasteProfile, ratedIds, 8);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <section>
        <h2 className="text-lg font-semibold text-[#1c1410]">Your taste profile</h2>
        <p className="text-sm text-[#8a7568]">
          Based on {tasteProfile.ratingCount} rating{tasteProfile.ratingCount !== 1 ? 's' : ''} · avg{' '}
          {tasteProfile.avgRating.toFixed(1)}★
        </p>
      </section>

      <section className="rounded-xl border border-[#e8dfd6] bg-white p-4 space-y-4">
        <div>
          <h3 className="text-sm font-medium text-[#6b3a2a]">Favorite flavors</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {topTags.map(([tag, weight]) => (
              <span
                key={tag}
                className="rounded-full bg-[#6b3a2a] px-3 py-1 text-sm text-white"
                style={{ opacity: 0.5 + weight * 0.5 }}
              >
                {FLAVOR_TAG_LABELS[tag]}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="rounded-lg bg-[#f5efe8] p-3">
            <p className="text-xs text-[#8a7568]">Origins</p>
            <p className="mt-1 font-medium text-[#6b3a2a]">
              {tasteProfile.topOrigins.slice(0, 2).join(', ') || '—'}
            </p>
          </div>
          <div className="rounded-lg bg-[#f5efe8] p-3">
            <p className="text-xs text-[#8a7568]">Process</p>
            <p className="mt-1 font-medium text-[#6b3a2a]">
              {tasteProfile.topProcesses[0] ?? '—'}
            </p>
          </div>
          <div className="rounded-lg bg-[#f5efe8] p-3">
            <p className="text-xs text-[#8a7568]">Roast</p>
            <p className="mt-1 font-medium text-[#6b3a2a]">
              {tasteProfile.topRoastLevels[0] ?? '—'}
            </p>
          </div>
        </div>
      </section>

      <SimilarList
        items={recommendations}
        onSelect={onSelectCoffee}
        title="Recommended for you"
      />
    </div>
  );
}
