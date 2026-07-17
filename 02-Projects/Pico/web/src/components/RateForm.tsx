import { useState } from 'react';
import type { Coffee, FlavorTag, Rating } from '../types/coffee';
import { StarRating } from './StarRating';
import { FlavorTagPicker } from './FlavorTagPicker';

interface RateFormProps {
  coffee: Coffee;
  existingRating?: Rating;
  photoDataUrl?: string;
  onSave: (rating: Omit<Rating, 'ratedAt'>) => void;
  onCancel: () => void;
}

export function RateForm({ coffee, existingRating, photoDataUrl, onSave, onCancel }: RateFormProps) {
  const [stars, setStars] = useState(existingRating?.stars ?? 0);
  const [flavorTags, setFlavorTags] = useState<FlavorTag[]>(
    existingRating?.flavorTags ?? coffee.flavorTags.slice(0, 3),
  );
  const [note, setNote] = useState(existingRating?.note ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stars === 0) return;
    onSave({
      coffeeId: coffee.id,
      stars,
      flavorTags,
      note: note.trim(),
      photoDataUrl: photoDataUrl ?? existingRating?.photoDataUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-[#6b3a2a]">Your rating</label>
        <StarRating value={stars} onChange={setStars} />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#6b3a2a]">Flavor tags</label>
        <FlavorTagPicker selected={flavorTags} onChange={setFlavorTags} />
      </div>

      <div>
        <label htmlFor="note" className="mb-2 block text-sm font-medium text-[#6b3a2a]">
          Note (optional)
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="How did it taste? Best brew method?"
          className="w-full rounded-xl border border-[#e8dfd6] bg-white px-4 py-3 text-[#1c1410] placeholder:text-[#b5a394] focus:border-[#6b3a2a] focus:outline-none focus:ring-2 focus:ring-[#6b3a2a]/20"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-xl border border-[#e8dfd6] bg-white py-3 font-medium text-[#6b3a2a]"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={stars === 0}
          className="flex-1 rounded-xl bg-[#6b3a2a] py-3 font-medium text-white disabled:opacity-40"
        >
          {existingRating ? 'Update rating' : 'Save to repertoire'}
        </button>
      </div>
    </form>
  );
}
