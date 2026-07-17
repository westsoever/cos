import { getCoffeeById } from '../lib/catalog';
import { loadUserData } from '../lib/storage';
import { CoffeeCard } from './SimilarList';

interface RepertoireViewProps {
  onSelectCoffee: (coffeeId: string) => void;
  refreshKey: number;
}

export function RepertoireView({ onSelectCoffee, refreshKey }: RepertoireViewProps) {
  void refreshKey;
  const { ratings } = loadUserData();
  const sorted = [...ratings].sort(
    (a, b) => new Date(b.ratedAt).getTime() - new Date(a.ratedAt).getTime(),
  );

  if (sorted.length === 0) {
    return (
      <div className="mx-auto max-w-lg py-12 text-center">
        <p className="text-4xl">☕</p>
        <h2 className="mt-4 text-lg font-semibold text-[#1c1410]">No coffees yet</h2>
        <p className="mt-2 text-sm text-[#8a7568]">
          Scan and rate your first coffee to start building your repertoire.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-[#1c1410]">My repertoire</h2>
        <p className="text-sm text-[#8a7568]">{sorted.length} coffee{sorted.length !== 1 ? 's' : ''} rated</p>
      </div>

      <ul className="space-y-2">
        {sorted.map((rating) => {
          const coffee = getCoffeeById(rating.coffeeId);
          if (!coffee) return null;
          return (
            <li key={rating.coffeeId}>
              <CoffeeCard
                name={coffee.name}
                roaster={coffee.roaster}
                origin={coffee.origin}
                stars={rating.stars}
                onClick={() => onSelectCoffee(coffee.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
