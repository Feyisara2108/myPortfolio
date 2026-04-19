import React from 'react';

export default function Marquee({ items, renderItem, reverse = false, className = '' }) {
  // Duplicate items twice to ensure smooth infinite scrolling for our -50% translation logic
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className={`flex overflow-hidden whitespace-nowrap bg-card/40 border-y border-white/5 py-4 ${className}`}>
      <div className={`flex w-max ${reverse ? 'animate-[marquee_reverse_25s_linear_infinite]' : 'animate-[marquee_25s_linear_infinite]'}`}>
        {content.map((item, index) => (
          <div key={index} className="mx-6 md:mx-10 shrink-0 flex items-center">
            {renderItem ? (
              renderItem(item)
            ) : (
              <span className="text-lg md:text-xl font-display text-textMuted font-medium uppercase">
                {item}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

