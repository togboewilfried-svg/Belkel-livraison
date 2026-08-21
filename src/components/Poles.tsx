import { waLink } from '../lib/constants';

const POLES = [
  {
    photo: '/images/pole-ecommerce.jpg',
    alt: 'Livraison pour e-commerçants Belkel Livraison',
    title: 'E-commerçants',
    text: "Collecte de vos articles à Cotonou et Calavi, stockage court terme si besoin, livraison chez le client avec encaissement suivi et reversé.",
    cta: 'Planifier une tournée',
  },
  {
    photo: '/images/service-repas.jpg',
    alt: 'Livraison pour restaurants Belkel Livraison',
    title: 'Restaurants',
    text: "Nos coursiers récupèrent la commande dès la sortie des cuisines. Trajet direct, pas de tournée groupée, pour que le plat arrive comme il est parti.",
    cta: 'Livrer mes plats',
  },
  {
    photo: '/images/pole-particuliers.jpg',
    alt: 'Livraison pour particuliers Belkel Livraison',
    title: 'Particuliers',
    text: "Un dossier à déposer, des clés oubliées, un achat en supermarché : on s'en charge dans la journée sur toute la zone desservie.",
    cta: 'Demander une course',
  },
];

export default function Poles() {
  return (
    <section id="poles" className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-12">
          <span className="inline-block text-[.72rem] font-bold tracking-[.1em] uppercase text-violet-700">Nos pôles</span>
          <h2 className="mt-3">Trois façons de travailler avec nous</h2>
          <p className="mt-3.5 text-[.98rem] text-ink-700">
            Un e-commerçant, un restaurant et un particulier n'ont pas la même urgence. On a séparé nos pôles pour
            que chacun ait le bon traitement, pas le même traitement.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[820px]:grid-cols-3 gap-7 max-[560px]:max-w-[340px] max-[560px]:mx-auto">
          {POLES.map((p) => (
            <article key={p.title} className="group">
              <div className="rounded-[18px] overflow-hidden aspect-[4/5] mb-4.5">
                <img
                  src={p.photo}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                />
              </div>
              <h3 className="text-[1.02rem]">{p.title}</h3>
              <p className="mt-2.5 text-[.9rem] text-ink-700">{p.text}</p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 mt-4 font-bold text-[.85rem] text-violet-700"
              >
                {p.cta}{' '}
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
