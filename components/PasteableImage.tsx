
import { useState, useCallback } from 'react';
import { ImagePlus } from 'lucide-react';

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const jsxDEV: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface PasteableImageProps {
  className?: string;
  placeholderText?: string;
  aspectRatio?: 'square' | 'video' | 'portrait';
  rounded?: 'full' | 'lg' | 'none';
  defaultImage?: string | null;
}

export const PasteableImage = ({
  className = "",
  placeholderText = "Click & Ctrl+V to Paste Image",
  aspectRatio = "square",
  rounded = "lg",
  defaultImage = null
}: PasteableImageProps) => {
  const [image, setImage] = useState<string | null>(defaultImage);
  const [isFocused, setIsFocused] = useState(false);

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setImage(event.target?.result as string);
          };
          reader.readAsDataURL(blob);
        }
      }
    }
  }, []);

  const ratioClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]'
  }[aspectRatio];

  const roundedClass = {
    full: 'rounded-full',
    lg: 'rounded-xl',
    none: 'rounded-none'
  }[rounded];

  return (
    <div
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onPaste={handlePaste}
      className={`relative group cursor-pointer overflow-hidden border-2 transition-all duration-300 flex items-center justify-center 
        ${ratioClass} ${roundedClass} ${className}
        ${isFocused ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-dashed border-slate-300 dark:border-slate-700'}
        ${!image ? 'bg-slate-100 dark:bg-slate-800/50' : 'bg-transparent'}
      `}
    >
      {image ? (
        <>
          <img src={image} alt="Pasted content" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-xs font-medium">Ctrl+V to Replace</span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <ImagePlus className={`w-8 h-8 ${isFocused ? 'text-blue-500' : 'text-slate-400'}`} />
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {isFocused ? 'Paste now!' : placeholderText}
          </p>
        </div>
      )}
    </div>
  );
};
                    