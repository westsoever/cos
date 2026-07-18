import { useRef, useState } from 'react';

interface CameraCaptureProps {
  photoDataUrl?: string;
  onCapture: (dataUrl: string | undefined) => void;
}

export function CameraCapture({ photoDataUrl, onCapture }: CameraCaptureProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const statusId = 'label-photo-status';

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const reader = new FileReader();
    reader.onload = () => {
      onCapture(reader.result as string);
      setStatus('idle');
    };
    reader.onerror = () => setStatus('error');
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-3">
      {photoDataUrl ? (
        <figure className="relative overflow-hidden rounded-2xl border border-[#dfd2c7] bg-white">
          <img src={photoDataUrl} alt="Selected coffee bag label" className="h-44 w-full object-cover" />
          <figcaption className="px-3 py-2 text-xs text-[#78675d]">Photo ready to save with your rating</figcaption>
          <button
            type="button"
            onClick={() => {
              onCapture(undefined);
              setStatus('idle');
            }}
            className="absolute right-2 top-2 rounded-full bg-[#1c1410]/80 px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            Remove photo
          </button>
        </figure>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={status === 'loading'}
          aria-describedby={statusId}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-[#bd9d87] bg-white px-4 py-6 text-[#6b3a2a] transition hover:border-[#6b3a2a] hover:bg-[#fffaf5] focus:outline-none focus:ring-2 focus:ring-[#6b3a2a]/30 disabled:opacity-60"
        >
          <span aria-hidden="true" className="text-xl">▣</span>
          <span className="text-left">
            <span className="block font-semibold">{status === 'loading' ? 'Preparing photo…' : 'Add label photo'}</span>
            <span className="block text-xs font-normal text-[#8a7568]">Take a photo or choose one</span>
          </span>
        </button>
      )}

      <p
        id={statusId}
        role={status === 'error' ? 'alert' : 'status'}
        className={`text-xs ${status === 'error' ? 'text-[#9b2c2c]' : 'sr-only'}`}
      >
        {status === 'error' ? 'That photo could not be opened. Please choose another image.' : status === 'loading' ? 'Preparing photo.' : ''}
      </p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        aria-label="Choose a coffee label photo"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
