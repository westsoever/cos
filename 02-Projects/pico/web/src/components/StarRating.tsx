interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  size?: 'sm' | 'lg';
}

export function StarRating({ value, onChange, size = 'lg' }: StarRatingProps) {
  const starSize = size === 'lg' ? 'text-3xl' : 'text-lg';

  return (
    <div className="flex gap-1" role="group" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className={`${starSize} transition-transform active:scale-95`}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
        >
          {star <= value ? '★' : '☆'}
        </button>
      ))}
    </div>
  );
}

export function StarDisplay({ value, size = 'sm' }: { value: number; size?: 'sm' | 'lg' }) {
  const starSize = size === 'lg' ? 'text-2xl' : 'text-sm';
  return (
    <span className={`${starSize} text-[#c4956a]`} aria-label={`${value} out of 5 stars`}>
      {'★'.repeat(value)}{'☆'.repeat(5 - value)}
    </span>
  );
}
