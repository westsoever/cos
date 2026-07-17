import type { SimilarCoffee } from '../types/coffee';
import { formatMatchPercent } from '../lib/similarity';
import { FlavorTagList } from './FlavorTagPicker';
import { StarDisplay } from './StarRating';

interface SimilarListProps {
  items: SimilarCoffee[];
  onSelect: (coffeeId: string) => void;
  title?: string;
}

export function SimilarList({ items, onSelect, title = 'Similar coffees' }: SimilarListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-[#8a7568]">No similar coffees found yet.</p>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-[#6b3a2a]">{title}</h3>
      <ul className="space-y-2">
        {items.map(({ coffee, score }) => (
          <li key={coffee.id}>
            <button
              type="button"
              onClick={() => onSelect(coffee.id)}
              className="flex w-full items-start gap-3 rounded-xl border border-[#e8dfd6] bg-white p-3 text-left transition-colors hover:border-[#c4956a]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6b3a2a] text-lg text-white">
                ☕
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-[#1c1410]">{coffee.name}</p>
                    <p className="text-sm text-[#8a7568]">{coffee.roaster}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#ede5dc] px-2 py-0.5 text-xs font-semibold text-[#6b3a2a]">
                    {formatMatchPercent(score)}% match
                  </span>
                </div>
                <div className="mt-1.5">
                  <FlavorTagList tags={coffee.flavorTags.slice(0, 3)} />
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CoffeeCard({
  name,
  roaster,
  origin,
  stars,
  onClick,
}: {
  name: string;
  roaster: string;
  origin: string;
  stars?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl border border-[#e8dfd6] bg-white p-3 text-left transition-colors hover:border-[#c4956a]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#6b3a2a] text-xl text-white">
        ☕
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-[#1c1410]">{name}</p>
        <p className="text-sm text-[#8a7568]">
          {roaster} · {origin}
        </p>
        {stars !== undefined && (
          <div className="mt-1">
            <StarDisplay value={stars} />
          </div>
        )}
      </div>
    </button>
  );
}
