import { getCoffeeById } from '../lib/catalog';
import { getRatingForCoffee, getRatedCoffeeIds } from '../lib/storage';
import { getSimilarToCoffee } from '../lib/similarity';
import type { Rating } from '../types/coffee';
import { FlavorTagList } from './FlavorTagPicker';
import { RateForm } from './RateForm';
import { SimilarList } from './SimilarList';
import { StarDisplay } from './StarRating';

interface CoffeeDetailProps {
  coffeeId: string;
  pendingPhoto?: string;
  onSave: (rating: Omit<Rating, 'ratedAt'>) => void;
  onBack: () => void;
  onSelectCoffee: (coffeeId: string) => void;
}

export function CoffeeDetail({
  coffeeId,
  pendingPhoto,
  onSave,
  onBack,
  onSelectCoffee,
}: CoffeeDetailProps) {
  const coffee = getCoffeeById(coffeeId);
  const existingRating = getRatingForCoffee(coffeeId);
  const ratedIds = getRatedCoffeeIds();

  if (!coffee) {
    return (
      <div className="text-center">
        <p className="text-[#8a7568]">Coffee not found.</p>
        <button type="button" onClick={onBack} className="mt-4 text-[#6b3a2a] underline">
          Go back
        </button>
      </div>
    );
  }

  const similar = getSimilarToCoffee(coffee, ratedIds, 5);
  const photo = pendingPhoto ?? existingRating?.photoDataUrl;

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <button type="button" onClick={onBack} className="text-sm text-[#6b3a2a]">
        ← Back
      </button>

      {photo && (
        <img
          src={photo}
          alt="Label"
          className="h-48 w-full rounded-xl object-cover"
        />
      )}

      <div>
        <h2 className="text-2xl font-bold text-[#1c1410]">{coffee.name}</h2>
        <p className="text-[#8a7568]">{coffee.roaster}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-[#8a7568]">
          <span className="rounded-full bg-[#ede5dc] px-2.5 py-0.5">{coffee.origin}</span>
          <span className="rounded-full bg-[#ede5dc] px-2.5 py-0.5">{coffee.process}</span>
          <span className="rounded-full bg-[#ede5dc] px-2.5 py-0.5">{coffee.roastLevel} roast</span>
          {coffee.variety && (
            <span className="rounded-full bg-[#ede5dc] px-2.5 py-0.5">{coffee.variety}</span>
          )}
          {coffee.scaScore !== undefined && (
            <span className="rounded-full bg-[#ede5dc] px-2.5 py-0.5">SCA {coffee.scaScore}</span>
          )}
        </div>
        <p className="mt-3 text-sm text-[#6b3a2a]">{coffee.description}</p>
        <div className="mt-3">
          <FlavorTagList tags={coffee.flavorTags} />
        </div>
      </div>

      {existingRating && (
        <div className="rounded-xl bg-[#f5efe8] p-4">
          <p className="text-sm font-medium text-[#6b3a2a]">Your rating</p>
          <div className="mt-1">
            <StarDisplay value={existingRating.stars} size="lg" />
          </div>
          {existingRating.note && (
            <p className="mt-2 text-sm text-[#8a7568]">{existingRating.note}</p>
          )}
        </div>
      )}

      <section className="rounded-xl border border-[#e8dfd6] bg-white p-4">
        <h3 className="mb-4 font-semibold text-[#6b3a2a]">
          {existingRating ? 'Update your rating' : 'Rate this coffee'}
        </h3>
        <RateForm
          coffee={coffee}
          existingRating={existingRating}
          photoDataUrl={pendingPhoto}
          onSave={onSave}
          onCancel={onBack}
        />
      </section>

      <SimilarList
        items={similar}
        onSelect={onSelectCoffee}
        title="Similar coffees"
      />
    </div>
  );
}
