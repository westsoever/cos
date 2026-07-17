import { useState } from 'react';
import { searchCoffees } from '../lib/catalog';
import { CameraCapture } from './CameraCapture';
import { CoffeeCard } from './SimilarList';

interface ScanViewProps {
  onSelectCoffee: (coffeeId: string, photoDataUrl?: string) => void;
}

export function ScanView({ onSelectCoffee }: ScanViewProps) {
  const [query, setQuery] = useState('');
  const [photoDataUrl, setPhotoDataUrl] = useState<string | undefined>();
  const results = searchCoffees(query);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <section>
        <h2 className="mb-1 text-lg font-semibold text-[#1c1410]">Find your coffee</h2>
        <p className="mb-4 text-sm text-[#8a7568]">
          Search by name or roaster, or snap a label photo to help identify it.
        </p>

        <CameraCapture photoDataUrl={photoDataUrl} onCapture={setPhotoDataUrl} />
      </section>

      <section>
        <label htmlFor="coffee-search" className="mb-2 block text-sm font-medium text-[#6b3a2a]">
          Search catalog
        </label>
        <input
          id="coffee-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Yirgacheffe, Onyx, Ethiopia…"
          className="w-full rounded-xl border border-[#e8dfd6] bg-white px-4 py-3 text-[#1c1410] placeholder:text-[#b5a394] focus:border-[#6b3a2a] focus:outline-none focus:ring-2 focus:ring-[#6b3a2a]/20"
          autoComplete="off"
        />
      </section>

      {query.trim() && (
        <section>
          <h3 className="mb-3 text-sm font-medium text-[#8a7568]">
            {results.length > 0 ? `${results.length} result${results.length > 1 ? 's' : ''}` : 'No matches'}
          </h3>
          <ul className="space-y-2">
            {results.map((coffee) => (
              <li key={coffee.id}>
                <CoffeeCard
                  name={coffee.name}
                  roaster={coffee.roaster}
                  origin={coffee.origin}
                  onClick={() => onSelectCoffee(coffee.id, photoDataUrl)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {!query.trim() && (
        <section className="rounded-xl bg-[#f5efe8] p-4 text-sm text-[#8a7568]">
          <p className="font-medium text-[#6b3a2a]">Tip</p>
          <p className="mt-1">
            Start typing a coffee name, roaster, or origin. After you pick one, rate it to build your taste profile.
          </p>
        </section>
      )}
    </div>
  );
}
