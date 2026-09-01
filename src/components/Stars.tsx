/* Five-star rating row. Decorative by default — the accessible label is set
   once per testimonial so a screen reader hears "5 out of 5" rather than
   five separate star glyphs. */
export default function Stars({
  className = "",
  label = "Rated 5 out of 5",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={label}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.28 5.83.85-4.22 4.11.996 5.81L10 14.82l-5.21 2.74.996-5.81L1.56 7.63l5.83-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
