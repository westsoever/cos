import type { FlavorTag } from '../types/coffee';
import { FLAVOR_TAGS, FLAVOR_TAG_LABELS } from '../types/coffee';

interface FlavorTagPickerProps {
  selected: FlavorTag[];
  onChange: (tags: FlavorTag[]) => void;
}

export function FlavorTagPicker({ selected, onChange }: FlavorTagPickerProps) {
  const toggle = (tag: FlavorTag) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {FLAVOR_TAGS.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => toggle(tag)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              isSelected
                ? 'bg-[#6b3a2a] text-white'
                : 'bg-[#ede5dc] text-[#6b3a2a] hover:bg-[#e0d4c8]'
            }`}
          >
            {FLAVOR_TAG_LABELS[tag]}
          </button>
        );
      })}
    </div>
  );
}

export function FlavorTagList({ tags }: { tags: FlavorTag[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-[#ede5dc] px-2.5 py-0.5 text-xs font-medium text-[#6b3a2a]"
        >
          {FLAVOR_TAG_LABELS[tag]}
        </span>
      ))}
    </div>
  );
}
