import { useEffect, useRef, useState } from 'react';

const FAQS = [
  {
    q: 'Comment passer une commande ?',
    a: "Écrivez-nous sur WhatsApp avec l'adresse de collecte, l'adresse de livraison et une description de ce que vous envoyez. On confirme le prix et l'heure de passage du coursier directement dans la conversation.",
  },
  {
    q: 'Quels sont vos délais de livraison ?',
    a: "La plupart des courses sont traitées le jour même, souvent en moins d'une heure en intra-ville. Le délai exact dépend de la zone et de la charge du moment.",
  },
  {
    q: 'Dans quelles villes livrez-vous ?',
    a: 'Cotonou, Abomey-Calavi, Ouidah, Allada et Porto-Novo. Cotonou est notre hub principal.',
  },
  {
    q: 'Comment fonctionne le paiement à la livraison ?',
    a: 'Le coursier encaisse auprès du destinataire, et le montant vous est reversé le jour même, sans allers-retours comptables de votre côté.',
  },
  {
    q: 'Puis-je envoyer un colis fragile ou volumineux ?',
    a: "Oui, précisez-le simplement au moment de la commande sur WhatsApp pour que l'on adapte le transport.",
  },
  {
    q: 'Faut-il une application pour suivre ma livraison ?',
    a: 'Non. Tout se passe par message WhatsApp — vous êtes informé à la collecte et à la livraison, dans la même conversation.',
  },
];

const AUTOPLAY_MS = 4500;

export default function Faq() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const visibleRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    const wrap = cardsRef.current;
    if (!card || !wrap) return;
    wrap.scrollTo({ left: card.offsetLeft - wrap.offsetLeft, behavior: 'smooth' });
  };

  const activate = (index: number) => {
    setActive(index);
    scrollToCard(index);
  };

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startAutoplay = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    stopAutoplay();
    if (reduceMotion || !visibleRef.current) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % FAQS.length;
        scrollToCard(next);
        return next;
      });
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRef.current = entry.isIntersecting;
          if (visibleRef.current) startAutoplay();
          else stopAutoplay();
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      stopAutoplay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () => {
    const next = (active - 1 + FAQS.length) % FAQS.length;
    activate(next);
    startAutoplay();
  };
  const goNext = () => {
    const next = (active + 1) % FAQS.length;
    activate(next);
    startAutoplay();
  };

  return (
    <section id="faq" ref={sectionRef} className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap">
        <div className="flex flex-wrap items-end max-[640px]:items-start justify-between gap-7 mb-10">
          <h2 className="max-w-[10ch]">
            Questions <span className="text-violet-700">fréquentes</span>
          </h2>
          <div className="flex items-end gap-6 max-w-[420px]">
            <p className="text-[.9rem] text-ink-700">
              Retrouvez les réponses aux questions les plus posées sur nos livraisons, nos délais et notre
              fonctionnement.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                aria-label="Question précédente"
                onClick={goPrev}
                className="flex items-center justify-center w-[38px] h-[38px] leading-none p-0 rounded-full border border-line text-ink-900 text-[.95rem] hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Question suivante"
                onClick={goNext}
                className="flex items-center justify-center w-[38px] h-[38px] leading-none p-0 rounded-full border border-line text-ink-900 text-[.95rem] hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          className="no-scrollbar flex gap-4 overflow-x-auto"
          style={{ scrollSnapType: 'x proximity' }}
        >
          {FAQS.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.q}
                type="button"
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                onClick={() => {
                  activate(i);
                  startAutoplay();
                }}
                style={{ scrollSnapAlign: 'start' }}
                className={`shrink-0 basis-[220px] max-[640px]:basis-[190px] h-[380px] max-[640px]:h-[340px] overflow-hidden text-left rounded-[18px] px-6 py-7 transition-colors ${
                  isActive ? 'bg-near-black' : 'bg-violet-50'
                }`}
              >
                <span
                  className={`block font-serif font-bold text-[.96rem] leading-[1.35] transition-colors ${
                    isActive ? 'text-white' : 'text-ink-500'
                  }`}
                >
                  {item.q}
                </span>
                {isActive && (
                  <span className="block mt-3.5 text-[.84rem] leading-[1.55] text-white/68">{item.a}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
