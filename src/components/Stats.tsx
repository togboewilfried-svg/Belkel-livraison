import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 1200, suffix: '+', label: 'Colis livrés' },
  { target: 5, suffix: '', label: 'Villes desservies' },
  { target: 45, suffix: ' min', label: 'Délai moyen de collecte' },
  { target: 98, suffix: '%', label: 'Clients satisfaits' },
];

function StatNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(el);

          if (reduceMotion) {
            setValue(target);
            return;
          }

          const duration = 1200;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="block font-serif font-bold text-[clamp(1.7rem,3vw,2.4rem)] text-violet-700">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="chiffres" className="bg-violet-50 py-[clamp(48px,6vw,72px)] border-t border-line">
      <div className="wrap grid grid-cols-2 min-[641px]:grid-cols-4 gap-8 max-[640px]:gap-x-5 gap-y-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <StatNumber target={s.target} suffix={s.suffix} />
            <span className="block mt-1.5 text-[.82rem] text-ink-700">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
