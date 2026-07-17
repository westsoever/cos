import { useRef } from 'react';

interface CameraCaptureProps {
  photoDataUrl?: string;
  onCapture: (dataUrl: string | undefined) => void;
}

export function CameraCapture({ photoDataUrl, onCapture }: CameraCaptureProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => onCapture(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-3">
      {photoDataUrl ? (
        <div className="relative overflow-hidden rounded-xl border border-[#e8dfd6]">
          <img src={photoDataUrl} alt="Label capture" className="h-40 w-full object-cover" />
          <button
            type="button"
            onClick={() => onCapture(undefined)}
            className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white"
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#c4956a] bg-[#f5efe8] py-8 text-[#6b3a2a] transition-colors hover:bg-[#ede5dc]"
        >
          <span className="text-2xl">📷</span>
          <span className="font-medium">Snap label photo</span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
