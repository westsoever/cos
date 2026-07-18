import { useState } from 'react';
import { addCustomCoffee, searchCoffees } from '../lib/catalog';
import type { ManualCoffeeInput } from '../types/coffee';
import { CameraCapture } from './CameraCapture';
import { ManualCoffeeForm } from './ManualCoffeeForm';
import { CoffeeCard } from './SimilarList';

interface ScanViewProps {
  onSelectCoffee: (coffeeId: string, photoDataUrl?: string) => void;
}

export function ScanView({ onSelectCoffee }: ScanViewProps) {
  const [query, setQuery] = useState('');
  const [photoDataUrl, setPhotoDataUrl] = useState<string | undefined>();
  const [showManualForm, setShowManualForm] = useState(false);
  const results = searchCoffees(query);

  const handleManualSubmit = (input: ManualCoffeeInput) => {
    const coffee = addCustomCoffee(input);
    onSelectCoffee(coffee.id, photoDataUrl);
  };

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <section>
        <h2 className="mb-1 text-lg font-semibold text-[#1c1410]">Find your coffee</h2>
        <p className="mb-4 text-sm text-[#8a7568]">
          Snap a label photo and add it manually, or search the catalog.
        </p>

        <CameraCapture
          photoDataUrl={photoDataUrl}
          onCapture={(dataUrl) => {
            setPhotoDataUrl(dataUrl);
            if (dataUrl) {
              setShowManualForm(true);
            } else {
              setShowManualForm(false);
            }
          }}
        />
      </section>

      {(photoDataUrl || showManualForm) && (
        <section>
          {photoDataUrl && !showManualForm ? (
            <div className="rounded-xl bg-[#f5efe8] p-4">
              <p className="text-sm text-[#6b3a2a]">
                Photo captured. Add this coffee to your repertoire with the details from the label.
              </p>
              <button
                type="button"
                onClick={() => setShowManualForm(true)}
                className="mt-3 w-full rounded-xl bg-[#6b3a2a] py-3 font-medium text-white"
              >
                Add manually
              </button>
            </div>
          ) : (
            <ManualCoffeeForm
              onSubmit={handleManualSubmit}
              onCancel={
                photoDataUrl
                  ? () => setShowManualForm(false)
                  : undefined
              }
            />
          )}
        </section>
      )}

      {!photoDataUrl && !showManualForm && (
        <section className="rounded-xl border border-[#e8dfd6] bg-white p-4">
          <p className="text-sm text-[#8a7568]">
            No photo yet? You can still add a coffee manually.
          </p>
          <button
            type="button"
            onClick={() => setShowManualForm(true)}
            className="mt-3 w-full rounded-xl border border-[#e8dfd6] py-3 font-medium text-[#6b3a2a]"
          >
            Add manually without photo
          </button>
        </section>
      )}

      <section>
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <label htmlFor="coffee-search" className="block text-sm font-medium text-[#6b3a2a]">
              Or search catalog
            </label>
            <p className="mt-1 text-xs text-[#8a7568]">Pick a pre-loaded coffee instead.</p>
          </div>
        </div>
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
    </div>
  );
}
