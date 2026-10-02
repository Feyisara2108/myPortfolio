// Shared wrapper for home-page sections: consistent width, spacing, and heading.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 md:mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          {intro && <p className="mt-3 text-textMuted leading-relaxed">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
