import React from 'react';

// Thin full-height vertical rails framing a centered column. Purely decorative,
// sits behind all content and ignores pointer events. Line color is theme-aware
// (faint on light, faint-white on dark) via the `line` token.
export default function GuideRails() {
  return (
    <div className="fixed inset-y-0 left-0 w-full pointer-events-none z-0" aria-hidden="true">
      <div className="relative mx-auto h-full max-w-[53rem]">
        <div className="absolute left-0 top-0 h-full w-px bg-line" />
        <div className="absolute right-0 top-0 h-full w-px bg-line" />
      </div>
    </div>
  );
}
